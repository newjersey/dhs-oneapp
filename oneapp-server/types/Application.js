const { gql } = require('apollo-server-express');
const { isNil } = require('lodash');
const logger = require('../logger.config');

const typeDef = gql`
  extend type Query {
    "Safety net benefits application for SNAP, TANF, GA"
    application: Application
  }

  extend type Mutation {
    applicationUpdate(input: ApplicationInput!): Application
  }

  type Application {
    "The id of the application. This will be the same as the user id."
    APPLICATION_NUMBER: ID
  }

  input ApplicationInput {
    contact: ApplicationContactInput
    foodStampInfo: ApplicationFoodStampInfoInput
    programInfo: ApplicationProgramInfoInput
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

      const application = {
        APPLICATION_NUMBER,
      };

      if (!isNil(input.contact)) {
        logger.debug('Application (%s) update contains contact information', APPLICATION_NUMBER);
      }

      if (!isNil(input.foodStampInfo)) {
        logger.debug('Application (%s) update contains foodStampInfo', APPLICATION_NUMBER);
        await dataSources.FoodStampInfoDao.updateFoodStampInfo(input.foodStampInfo);
      }

      if (!isNil(input.programInfo)) {
        logger.debug('Application (%s) update contains programInfo', APPLICATION_NUMBER);
      }

      return application;
    },
  },
};

const permissions = {

};

module.exports = { typeDef, resolvers, permissions };
