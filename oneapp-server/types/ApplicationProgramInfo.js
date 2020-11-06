const { gql } = require('apollo-server-express');

const typeDef = gql`
  extend type Application {
    programInfo: ApplicationProgramInfo
  }

  type ApplicationProgramInfo {
    IS_FS_SELECTED: Boolean
    IS_TF_SELECTED: Boolean
    IS_GA_SELECTED: Boolean
    HAVE_ACTIVE_CASE_CURRENTLY: Boolean
    CURRENT_CASE_NUMBERS: String
    HAD_ACTIVE_CASE_PREVIOULSY: Boolean
    PREVIOUS_CASE_NUMBERS: String
    SPOKEN_LANGUAGE: String
    HAS_PAYEE: Boolean
    NEED_ACCOMODATION: Boolean
    NEED_ACM_TRANSLATOR: Boolean
    NEED_ACM_SIGNING: Boolean
    NEED_ACM_VISUALLY_IMPAIRED: Boolean
    NEED_ACM_OTHER: Boolean
    ACM_TRA_LANGUAGE: String
    ACM_OTH_DESCRIPTION: String
  }
`;

const resolvers = {
  Application: {
    programInfo: () => ({}),
  },
};

const permissions = {

};

module.exports = { typeDef, resolvers, permissions };
