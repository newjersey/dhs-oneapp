const { gql } = require('apollo-server-express');

const typeDef = gql`
  extend type Query {
    "Safety net benefits application for SNAP, TANF, GA"
    application: Application
  }

  type Application {
    "The id of the application. This will be the same as the user id."
    APPLICATION_NUMBER: ID
  }
`;

const resolvers = {
  Query: {
    application: () => ({}),
  },
};

const permissions = {

};

module.exports = { typeDef, resolvers, permissions };
