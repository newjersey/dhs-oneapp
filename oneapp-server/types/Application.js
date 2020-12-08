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
  }

  type Application {
    "The id of the application. This will be the same as the user id."
    APPLICATION_NUMBER: ID
  }

  input ApplicationInput {
    contact: ApplicationContactInput
    foodStampInfo: ApplicationFoodStampInfoInput
    programInfo: ApplicationProgramInfoInput
    tanfGaHeader: TanfGaHeaderInput
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
        updateCalls.push(dataSources.ApplicationContactDao.updateContact(input.contact));
      }

      if (!isNil(input.foodStampInfo)) {
        logger.debug('Application (%s) update contains foodStampInfo', APPLICATION_NUMBER);
        updateCalls.push(dataSources.ApplicationFoodStampInfoDao.updateFoodStampInfo(input.foodStampInfo));
      }

      if (!isNil(input.programInfo)) {
        logger.debug('Application (%s) update contains programInfo', APPLICATION_NUMBER);
        updateCalls.push(dataSources.ApplicationProgramInfoDao.updateProgramInfo(input.programInfo));
      }

      if (!isNil(input.tanfGaHeader)) {
        logger.debug('Application (%s) update contains TANF/GA header', APPLICATION_NUMBER);
        updateCalls.push(dataSources.TanfGaHeaderDao.updateTanfGaHeader(input.tanfGaHeader));
      }

      // Run all update calls in parallel
      await Promise.all(updateCalls);

      return true;
    },
  },
};

const permissions = {

};

module.exports = { typeDef, resolvers, permissions };
