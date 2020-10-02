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
    "The translated text. Content-language header is used to determine the language to return"
    TEXT: String
    "The last time the translation has been updated"
    UPDATE_DATE: DateTime
  }
`;

const resolvers = {
  Query: {
    translations: (_parent, { TEXT_IDS }, { dataSources, services, language }, info) => {
      const fields = services.ResolveInfoService.parseReturnFields(info);
      return dataSources.TranslationDao.getTranslations(TEXT_IDS, language.index, fields);
    },
    translation: (_parent, { TEXT_ID }, { dataSources, services, language }, info) => {
      const fields = services.ResolveInfoService.parseReturnFields(info);
      return dataSources.TranslationDao.getTranslation(TEXT_ID, language.index, fields);
    },
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
