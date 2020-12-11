const { gql } = require('apollo-server-express');

const typeDef = gql`
  extend type Application {
    programInfo: ApplicationProgramInfo
  }
  
  type ApplicationProgramInfo {
    "Applying for SNAP"
    IS_FS_SELECTED: Boolean
    "Applying for TANF"
    IS_TF_SELECTED: Boolean
    "Applying for General Assistance"
    IS_GA_SELECTED: Boolean
    "Has active SNAP case"
    HAVE_ACTIVE_CASE_CURRENTLY: Boolean!
    "Case number(s) of active SNAP applications"
    CURRENT_CASE_NUMBERS: String @constraint(pattern: "^[a-zA-Z0-9,'#@&\-_/\s]+$", maxLength: 50)
    "Has received SNAP previously"
    HAD_ACTIVE_CASE_PREVIOULSY: Boolean!
    "Case number(s) of previous SNAP applications"
    PREVIOUS_CASE_NUMBERS: String @constraint(pattern: "^[a-zA-Z0-9,'#@&\-_/\s]+$", maxLength: 50)
    "Spoken language of applicant"
    SPOKEN_LANGUAGE: String!
    "Applicant needs accommodation"
    NEED_ACCOMODATION: Boolean!
    "Needs accommodation type translator"
    NEED_ACM_TRANSLATOR: Boolean!
    "Needs accommodation type signing"
    NEED_ACM_SIGNING: Boolean!
    "Needs accommodation type visual"
    NEED_ACM_VISUALLY_IMPAIRED: Boolean!
    "Needs accommodation type other"
    NEED_ACM_OTHER: Boolean!
    "Accommodation translator language"
    ACM_TRA_LANGUAGE: String
    "Description of other accommodation type"
    ACM_OTH_DESCRIPTION: String @constraint(pattern: "^[a-zA-Z0-9.,'-'\s]{1,500}$", maxLength: 500)
  }

  input ApplicationProgramInfoInput {
    "Applying for SNAP"
    IS_FS_SELECTED: Boolean
    "Applying for TANF"
    IS_TF_SELECTED: Boolean
    "Applying for General Assistance"
    IS_GA_SELECTED: Boolean
    "Has active SNAP case"
    HAVE_ACTIVE_CASE_CURRENTLY: Boolean!
    "Case number(s) of active SNAP applications"
    CURRENT_CASE_NUMBERS: String @constraint(pattern: "^[a-zA-Z0-9,'#@&\-_/\s]+$", maxLength: 50)
    "Has received SNAP previously"
    HAD_ACTIVE_CASE_PREVIOULSY: Boolean!
    "Case number(s) of previous SNAP applications"
    PREVIOUS_CASE_NUMBERS: String @constraint(pattern: "^[a-zA-Z0-9,'#@&\-_/\s]+$", maxLength: 50)
    "Spoken language of applicant"
    SPOKEN_LANGUAGE: String!
    "Applicant needs accommodation"
    NEED_ACCOMODATION: Boolean!
    "Needs accommodation type translator"
    NEED_ACM_TRANSLATOR: Boolean!
    "Needs accommodation type signing"
    NEED_ACM_SIGNING: Boolean!
    "Needs accommodation type visual"
    NEED_ACM_VISUALLY_IMPAIRED: Boolean!
    "Needs accommodation type other"
    NEED_ACM_OTHER: Boolean!
    "Accommodation translator language"
    ACM_TRA_LANGUAGE: String
    "Description of other accommodation type"
    ACM_OTH_DESCRIPTION: String @constraint(pattern: "^[a-zA-Z0-9.,'-'\s]{1,500}$", maxLength: 500)
  }
`;

const resolvers = {
  Application: {
    programInfo: (_parent, _args, { dataSources, auth, language }) => dataSources.ApplicationProgramInfoDao.getProgramInfo(auth.user.USER_ID, language.index),
  },
};

const permissions = {

};

module.exports = { typeDef, resolvers, permissions };
