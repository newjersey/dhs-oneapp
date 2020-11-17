const { gql } = require('apollo-server-express');

const typeDef = gql`
  extend type Application {
    "The individual applying for benefits"
    contact: ApplicationContact
  }

  type ApplicationContact {
    "Applicant first name"
    APPLICANT_FIRST_NAME: String
    "Applicant last name"
    APPLICANT_LAST_NAME: String
    "Applicant middle name"
    APPLICANT_MIDDLE_NAME: String
    "Application maiden name"
    APPLICANT_MAIDEN_NAME: String
    "Payee first name, if different than applicant"
    PAYEE_FIRST_NAME: String
    "Payee last name, if different than applicant"
    PAYEE_LAST_NAME: String
    "Is applicant homeless"
    IS_HOMELESS: Boolean
    "Applicant address line 1"
    ADDRESS1: String
    "Applicant address line 2"
    ADDRESS2: String
    "Applicant address city"
    CITY: String
    "Applicant address state"
    STATE: String
    "Applicant address zipcode"
    ZIP: Int
    "Applicant address zipcode extend 4"
    ZIP4: Int
    "New Jersey county id, retrieved from zipcode to county lookup"
    COUNTY_NUMBER: Int
    "Mailing address line 1"
    M_ADDRESS1: String
    "Mailing address line 2"
    M_ADDRESS2: String
    "Mailing address city"
    M_CITY: String
    "Mailing address state"
    M_STATE: String
    "Mailing address zipcode"
    M_ZIP: Int
    "Mailing address zipcode extended 4"
    M_ZIP4: Int
    "Applicant home phone number"
    HOME_PHONE_NUMBER: Int
    "Applicant work phone number"
    WORK_PHONE_NUMBER: Int
    "Applicant cell phone number"
    CELL_PHONE_NUMBER: Int
    "Applicant other phone number"
    OTHER_PHONE_NUMBER: Int
    "Applicant email address"
    EMAIL_ADDRESS: String
    "Does applicant not have a phone number"
    NO_PHONE_NUMBER: Boolean
    "Does applicant not have contact information"
    NO_CONTACT_INFORMATION: Boolean
    "The source of the application; always OA"
    APPLICATION_TYPE: ApplicationType
    "Is special New Jersey Help application; can be null"
    APPLICATION_SUBTYPE: ApplicationSubtype
  }

  enum ApplicationType {
    "OneApp"
    OA
  }

  enum ApplicationSubtype {
    "New Jersey Helps"
    NJHE
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
