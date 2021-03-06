const { gql } = require('apollo-server-express');
const { isNil } = require('lodash');
const logger = require('../logger.config');

const typeDef = gql`
  extend type Query {
    "Safety net benefits application for SNAP, TANF, GA"
    application: Application
    "Confirmation details after submitting an application"
    applicationConfirmation(APPLICATION_NUMBER: ID!): ApplicationConfirmation
  }

  extend type Mutation {
    "Update an in-progress application"
    applicationUpdate(input: ApplicationInput!): Boolean
    "Send / submit an in-progess application"
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

  type ApplicationConfirmation {
    "Submitted application id"
    APPLICATION_NUMBER: ID
    "Email address of the applicant"
    EMAIL_ADDRESS: String
    "SNAP application"
    IS_FS_SELECTED: Boolean
    "TANF application"
    IS_TF_SELECTED: Boolean
    "General Assistance"
    IS_GA_SELECTED: Boolean
    "When the application was sent"
    SENT_DATE: DateTime
    "When the application is effective"
    EFFECTIVE_DATE: DateTime
    "County the application has been submitted to"
    COUNTY_NAME: String
    "County main office address 1"
    MOFF_ADDRESS1: String
    "County main office address 2"
    MOFF_ADDRESS2: String
    "County main office city"
    MOFF_CITY: String
    "County main office zip"
    MOFF_ZIP: String
    "County main office phone number"
    MOFF_PHONE_NUMBER: String
  }

  input ApplicationInput {
    contact: ApplicationContactInput
    foodStampInfo: ApplicationFoodStampInfoInput
    programInfo: ApplicationProgramInfoInput
    tanfGaHeader: TanfGaHeaderInput
    items: ApplicationItemsInput
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
    applicationConfirmation: (_parent, { APPLICATION_NUMBER }, { dataSources, auth }) => dataSources.ApplicationDao.fetchConfirmationDetails(APPLICATION_NUMBER, auth.user.USER_ID),
  },
  Mutation: {
    applicationUpdate: async (_parent, { input }, { dataSources, auth }) => {
      const APPLICATION_NUMBER = auth.user.USER_ID;
      logger.info('Performing upsert on application (%s)', APPLICATION_NUMBER);

      // Gather all update calls
      const updateCalls = [];
      if (!isNil(input.contact)) {
        logger.debug('Application (%s) update contains contact information', APPLICATION_NUMBER);
        updateCalls.push(dataSources.ApplicationContactDao.updateContact(APPLICATION_NUMBER, input.contact));
      }

      if (!isNil(input.foodStampInfo)) {
        logger.debug('Application (%s) update contains foodStampInfo', APPLICATION_NUMBER);
        updateCalls.push(dataSources.ApplicationFoodStampInfoDao.updateFoodStampInfo(APPLICATION_NUMBER, input.foodStampInfo));
      }

      if (!isNil(input.programInfo)) {
        logger.debug('Application (%s) update contains programInfo', APPLICATION_NUMBER);
        updateCalls.push(dataSources.ApplicationProgramInfoDao.updateProgramInfo(APPLICATION_NUMBER, input.programInfo));
      }

      if (!isNil(input.tanfGaHeader)) {
        logger.debug('Application (%s) update contains TANF/GA header', APPLICATION_NUMBER);
        updateCalls.push(dataSources.TanfGaHeaderDao.updateTanfGaHeader(APPLICATION_NUMBER, input.tanfGaHeader));
      }

      if (!isNil(input.items)) {
        logger.debug('Application (%s) update contains application items', APPLICATION_NUMBER);
        updateCalls.push(dataSources.ApplicationItemsDao.updateItems(APPLICATION_NUMBER, input.items));
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
