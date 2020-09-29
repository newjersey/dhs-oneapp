const { gql } = require('apollo-server-express');
const { allow } = require('graphql-shield');

const typeDef = gql`
  extend type Query {
    "All language translations"
    translations(TEXT_IDS: [ID]): [Translation!]
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
    UPDATE_DATE: DateTime
  }
`;

const resolvers = {
  Query: {
    translations: (_parent, { TEXT_IDS }, { dataSources }) => dataSources.TranslationDao.getTranslations(TEXT_IDS),
    translation: (_parent, { TEXT_ID }, { dataSources }) => dataSources.TranslationDao.getTranslation(TEXT_ID),
  },
};

const permissions = {
  Query: {
    translations: allow,
    translation: allow,
  },
  Translation: allow,
};

module.exports = { typeDef, resolvers, permissions };
