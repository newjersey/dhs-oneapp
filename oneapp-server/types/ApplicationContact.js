const { gql } = require('apollo-server-express');

const typeDef = gql`
  extend type Application {
    "The individual applying for benefits"
    contact: ApplicationContact
  }

  type ApplicationContact {
    APPLICANT_FIRST_NAME: String
    APPLICANT_LAST_NAME: String
    APPLICANT_MIDDLE_NAME: String
    APPLICANT_MAIDEN_NAME: String
    PAYEE_FIRST_NAME: String
    PAYEE_LAST_NAME: String
    IS_HOMELESS: Boolean
    ADDRESS1: String
    ADDRESS2: String
    CITY: String
    STATE: String
    ZIP: Int
    ZIP4: Int
    COUNTY_NUMBER: Int
    M_ADDRESS1: String
    M_ADDRESS2: String
    M_CITY: String
    M_STATE: String
    M_ZIP: Int
    M_ZIP4: Int
    HOME_PHONE_NUMBER: Int
    WORK_PHONE_NUMBER: Int
    CELL_PHONE_NUMBER: Int
    OTHER_PHONE_NUMBER: Int
    EMAIL_ADDRESS: String
    NO_PHONE_NUMBER: Boolean
    NO_CONTACT_INFORMATION: Boolean
    APPLICATION_TYPE: Int
    APPLICATION_SUBTYPE: Int
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
