const { gql } = require('apollo-server-express');
const { isNil } = require('lodash');
const logger = require('../logger.config');

const typeDef = gql`
  extend type Query {
    "Safety net benefits application for SNAP, TANF, GA"
    application: Application
  }

  extend type Mutation {
    applicationUpdate(input: ApplicationInput!): Boolean
    applicationSend(DISCLAIMER_UNDERSTOOD: ApplicationDisclaimerUnderstood!): ApplicationSendResult
  }

  type Application {
    "The id of the application. This will be the same as the user id."
    APPLICATION_NUMBER: ID
  }

  type ApplicationSendResult {
    "The id of the submitted application. This will be different after submission and no longer match the user id."
    APPLICATION_NUMBER: ID
  }

  input ApplicationInput {
    contact: ApplicationContactInput
    foodStampInfo: ApplicationFoodStampInfoInput
    programInfo: ApplicationProgramInfoInput
  }

  enum ApplicationDisclaimerUnderstood {
    "I Read, Understood and Accept the above text."
    Y,
    "County workers only: I Read, Understood and Accept the above text, printed for me by the county representative."
    W,
    "I Read but don't Understand the above text."
    D,
    "I Read and don't Accept the above text."
    N
  }
`;

const resolvers = {
  Query: {
    application: (_parent, _args, { auth }) => ({
      APPLICATION_NUMBER: auth.user.USER_ID,
    }),
  },
  Mutation: {
    applicationUpdate: async (_parent, { input }, { dataSources, auth }) => {
      const APPLICATION_NUMBER = auth.user.USER_ID;
      logger.info('Performing upsert on application (%s)', APPLICATION_NUMBER);

      // Gather all update calls
      const updateCalls = [];
      if (!isNil(input.contact)) {
        logger.debug('Application (%s) update contains contact information', APPLICATION_NUMBER);
      }

      if (!isNil(input.foodStampInfo)) {
        logger.debug('Application (%s) update contains foodStampInfo', APPLICATION_NUMBER);
        updateCalls.push(dataSources.ApplicationFoodStampInfoDao.updateFoodStampInfo(input.foodStampInfo));
      }

      if (!isNil(input.programInfo)) {
        logger.debug('Application (%s) update contains programInfo', APPLICATION_NUMBER);
        updateCalls.push(dataSources.ApplicationProgramInfoDao.updateProgramInfo(input.programInfo));
      }

      // Run all update calls in parallel
      await Promise.all(updateCalls);

      return true;
    },
    applicationSend: async (_parent, { DISCLAIMER_UNDERSTOOD }, { dataSources, auth }) => {
      const APPLICATION_NUMBER = auth.user.USER_ID;
      return dataSources.ApplicationDao.sendApplication(APPLICATION_NUMBER, DISCLAIMER_UNDERSTOOD);
    },
  },
};

const permissions = {

};

module.exports = { typeDef, resolvers, permissions };
