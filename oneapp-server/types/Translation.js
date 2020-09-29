const { gql } = require('apollo-server-express');
const { allow } = require('graphql-shield');

const typeDef = gql`
  extend type Query {
    "All language translations"
    translations: [Translation!]
    "Translation by id"
    translation(TEXT_ID: ID!): Translation
  }

  type Translation {
    "The id of the translation"
    TEXT_ID: ID
    "Incremented on each new translated field"
    TEXT_NUMBER: Int
    "English"
    LANGUAGE_0: String
    "Spanish"
    LANGUAGE_1: String
    "The last time the translation has been updated"
    UPDATE_DATE: Date
  }
`;

const resolvers = {
  Query: {
    translations: () => [],
    translation: () => null,
  },
};

const permissions = {
  Query: {
    translations: allow,
    translation: allow,
  },
};

module.exports = { typeDef, resolvers, permissions };
