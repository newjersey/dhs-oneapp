const { gql } = require('apollo-server-express');

const typeDef = gql`
  extend type Application {
    items: ApplicationItems
  }

  type ApplicationItems {
    "Type of code for the given application component"
    CODE_TYPE: String!
    "Code for the given applicaation"
    CODE: String!
    "If this item exists in the application"
    HAVE_THIS: Boolean
  }

  input ApplicationItemsInput {
    "If this item exists in the application"
    HAVE_THIS: Boolean
  }
`;

const resolvers = {
  Application: {
    items: (_parent, _args, { dataSources, auth, language }) => dataSources.ApplicationItems.getItems(auth.user.USER_ID, language.index),
  },
};

const permissions = {

};

module.exports = { typeDef, resolvers, permissions };
