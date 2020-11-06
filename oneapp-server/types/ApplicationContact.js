const { gql } = require('apollo-server-express');

const typeDef = gql`
  extend type Application {
    "The individual applying for benefits"
    contact: ApplicationContact
  }

  type ApplicationContact {
    APPLICATION_FIRST_NAME: String
  }
`;

const resolvers = {
  Application: {
    contact: () => ({}),
  },
};

const permissions = {

};

module.exports = { typeDef, resolvers, permissions };
