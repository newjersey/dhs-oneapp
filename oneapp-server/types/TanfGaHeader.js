const { gql } = require('apollo-server-express');

const typeDef = gql`
  extend type Application {
    tanfGaHeader: TanfGaHeader
  }
  type TanfGaHeader {
    "Confirmed will seek employment"
    WILL_SEEK_EMPLOYMENT: Boolean!
    "Confirmed will register for work with New Jersey One Step Career Center"
    WILL_REGISTER_FOR_WORK: Boolean!
    "Is willing to work"
    WILLING_TO_WORK: Boolean!
    "If plan to continue living in New Jersey"
    WILL_CONTINUE_LIVING_IN_NJ: Boolean!
    "Reason provided if not planning on continuing to live in New Jersey"
    WONT_CONTINUE_REASON: String
  }
  input TanfGaHeaderInput {
    "Confirmed will seek employment"
    WILL_SEEK_EMPLOYMENT: Boolean!
    "Confirmed will register for work with New Jersey One Step Career Center"
    WILL_REGISTER_FOR_WORK: Boolean!
    "Is willing to work"
    WILLING_TO_WORK: Boolean!
    "If plan to continue living in New Jersey"
    WILL_CONTINUE_LIVING_IN_NJ: Boolean!
    "Reason provided if not planning on continuing to live in New Jersey"
    WONT_CONTINUE_REASON: String
  }
`;

const resolvers = {
  Application: {
    tanfGaHeader: (_parent, _args, { dataSources, auth, language }) => dataSources.TanfGaHeaderDao.getTanfGaHeader(auth.user.USER_ID, language.code),
  },
};

const permissions = {

};

module.exports = { typeDef, resolvers, permissions };