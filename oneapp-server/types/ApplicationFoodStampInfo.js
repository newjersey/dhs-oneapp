const { gql } = require('apollo-server-express');

const typeDef = gql`
  extend type Application {
    foodStampInfo: ApplicationFoodStampInfo
  }

  type ApplicationFoodStampInfo {
    IS_GROSS_INCOME_LT_150: Boolean
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
