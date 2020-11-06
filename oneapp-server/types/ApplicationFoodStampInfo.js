const { gql } = require('apollo-server-express');

const typeDef = gql`
  extend type Application {
    foodStampInfo: ApplicationFoodStampInfo
  }

  type ApplicationFoodStampInfo {
    IS_GROSS_INCOME_LT_150: Boolean
    IS_RENT_GT_GROSS_INCOME: Boolean
    HAS_MIGRANT_FARM_WORKER: Boolean
    HAS_RECEIVED_EMERGENCY_FS: Boolean
    EMERGENCY_FS_DATE: Date
    EMERGENCY_FS_LOCATION: String
    EMERGENCY_FS_STATE: String
  }
`;

const resolvers = {
  Application: {
    foodStampInfo: () => ({}),
  },
};

const permissions = {

};

module.exports = { typeDef, resolvers, permissions };
