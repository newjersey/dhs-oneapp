const { gql } = require('apollo-server-express');

const typeDef = gql`
  extend type Application {
    "The individual applying for benefits"
    contact: ApplicationContact
  }

  type ApplicationContact {
    "Applicant first name"
    APPLICANT_FIRST_NAME: String! @constraint(pattern: "^[a-zA-Z.''-'\s]*$", maxLength: 25)
    "Applicant last name"
    APPLICANT_LAST_NAME: String! @constraint(pattern: "^[a-zA-Z.''-'\s]*$", maxLength: 25)
    "Applicant middle name"
    APPLICANT_MIDDLE_NAME: String @constraint(pattern: "^[a-zA-Z.''-'\s]*$", maxLength: 25)
    "Application maiden name"
    APPLICANT_MAIDEN_NAME: String @constraint(pattern: "^[a-zA-Z.''-'\s]*$", maxLength: 25)
    "Payee first name, if different than applicant"
    PAYEE_FIRST_NAME: String! @constraint(pattern: "^[a-zA-Z.''-'\s]*$", maxLength: 25)
    "Payee last name, if different than applicant"
    PAYEE_LAST_NAME: String! @constraint(pattern: "^[a-zA-Z.''-'\s]*$", maxLength: 25)
    "Is applicant homeless"
    IS_HOMELESS: Boolean
    "Applicant address line 1"
    ADDRESS1: String @constraint(pattern: "^.*(?=.*[a-zA-Z])([a-zA-Z0-9'#@&/-_.,\s])*$", maxLength: 50)
    "Applicant address line 2"
    ADDRESS2: String @constraint(pattern: "^[a-zA-Z0-9.,'#@&\-_/\s]*$", maxLength: 50)
    "Applicant address city"
    CITY: String @constraint(pattern: "^[a-zA-Z0-9.,'#@&\-_/\s]*$", maxLength: 50)
    "Applicant address state"
    STATE: String
    "Applicant address zipcode"
    ZIP: Int @constraint(maxLength: 5)
    "Applicant address zipcode extend 4"
    ZIP4: Int
    "New Jersey county id, retrieved from zipcode to county lookup"
    COUNTY_NUMBER: Int!
    "Mailing address line 1"
    M_ADDRESS1: String @constraint(pattern: "^.*(?=.*[a-zA-Z])([a-zA-Z0-9'#@&/-_.,\s])*$", maxLength: 50)
    "Mailing address line 2"
    M_ADDRESS2: String @constraint(pattern: "^[a-zA-Z0-9.,'#@&\-_/\s]*$", maxLength: 50)
    "Mailing address city"
    M_CITY: String @constraint(pattern: "^[a-zA-Z0-9.,'#@&\-_/\s]*$", maxLength: 50)
    "Mailing address state"
    M_STATE: String
    "Mailing address zipcode"
    M_ZIP: Int @constraint(maxLength: 5)
    "Mailing address zipcode extended 4"
    M_ZIP4: Int @constraint(maxLength: 4)
    "Applicant home phone number"
    HOME_PHONE_NUMBER: Int @constraint(pattern: "^(\([2-9]\d{2}\)|[2-9]\d{2})[- .]?(\([2-9]\d{2}\)|[2-9]\d{2})[- .]?\d{4}$", maxLength: 12)
    "Applicant work phone number"
    WORK_PHONE_NUMBER: Int @constraint(pattern: "^(\([2-9]\d{2}\)|[2-9]\d{2})[- .]?(\([2-9]\d{2}\)|[2-9]\d{2})[- .]?\d{4}$", maxLength: 12)
    "Applicant cell phone number"
    CELL_PHONE_NUMBER: Int @constraint(pattern: "^(\([2-9]\d{2}\)|[2-9]\d{2})[- .]?(\([2-9]\d{2}\)|[2-9]\d{2})[- .]?\d{4}$", maxLength: 12)
    "Applicant other phone number"
    OTHER_PHONE_NUMBER: Int @constraint(pattern: "^(\([2-9]\d{2}\)|[2-9]\d{2})[- .]?(\([2-9]\d{2}\)|[2-9]\d{2})[- .]?\d{4}$", maxLength: 12)
    "Applicant email address"
    EMAIL_ADDRESS: String @constraint(format: "email", maxLength: 50)
    "Does applicant not have a phone number"
    NO_PHONE_NUMBER: Boolean
    "Does applicant not have contact information"
    NO_CONTACT_INFORMATION: Boolean
    "The source of the application; always OA"
    APPLICATION_TYPE: ApplicationType
    "Is special New Jersey Help application; can be null"
    APPLICATION_SUBTYPE: ApplicationSubtype
  }

  input ApplicationContactInput {
    "Applicant first name"
    APPLICANT_FIRST_NAME: String! @constraint(pattern: "^[a-zA-Z.''-'\s]*$", maxLength: 25)
    "Applicant last name"
    APPLICANT_LAST_NAME: String! @constraint(pattern: "^[a-zA-Z.''-'\s]*$", maxLength: 25)
    "Applicant middle name"
    APPLICANT_MIDDLE_NAME: String @constraint(pattern: "^[a-zA-Z.''-'\s]*$", maxLength: 25)
    "Application maiden name"
    APPLICANT_MAIDEN_NAME: String @constraint(pattern: "^[a-zA-Z.''-'\s]*$", maxLength: 25)
    "Payee first name, if different than applicant"
    PAYEE_FIRST_NAME: String! @constraint(pattern: "^[a-zA-Z.''-'\s]*$", maxLength: 25)
    "Payee last name, if different than applicant"
    PAYEE_LAST_NAME: String! @constraint(pattern: "^[a-zA-Z.''-'\s]*$", maxLength: 25)
    "Is applicant homeless"
    IS_HOMELESS: Boolean
    "Applicant address line 1"
    ADDRESS1: String @constraint(pattern: "^.*(?=.*[a-zA-Z])([a-zA-Z0-9'#@&/-_.,\s])*$", maxLength: 50)
    "Applicant address line 2"
    ADDRESS2: String @constraint(pattern: "^[a-zA-Z0-9.,'#@&\-_/\s]*$", maxLength: 50)
    "Applicant address city"
    CITY: String @constraint(pattern: "^[a-zA-Z0-9.,'#@&\-_/\s]*$", maxLength: 50)
    "Applicant address state"
    STATE: String
    "Applicant address zipcode"
    ZIP: Int @constraint(maxLength: 5)
    "Applicant address zipcode extend 4"
    ZIP4: Int
    "New Jersey county id, retrieved from zipcode to county lookup"
    COUNTY_NUMBER: Int!
    "Mailing address line 1"
    M_ADDRESS1: String @constraint(pattern: "^.*(?=.*[a-zA-Z])([a-zA-Z0-9'#@&/-_.,\s])*$", maxLength: 50)
    "Mailing address line 2"
    M_ADDRESS2: String @constraint(pattern: "^[a-zA-Z0-9.,'#@&\-_/\s]*$", maxLength: 50)
    "Mailing address city"
    M_CITY: String @constraint(pattern: "^[a-zA-Z0-9.,'#@&\-_/\s]*$", maxLength: 50)
    "Mailing address state"
    M_STATE: String
    "Mailing address zipcode"
    M_ZIP: Int @constraint(maxLength: 5)
    "Mailing address zipcode extended 4"
    M_ZIP4: Int @constraint(maxLength: 4)
    "Applicant home phone number"
    HOME_PHONE_NUMBER: Int @constraint(pattern: "^(\([2-9]\d{2}\)|[2-9]\d{2})[- .]?(\([2-9]\d{2}\)|[2-9]\d{2})[- .]?\d{4}$", maxLength: 12)
    "Applicant work phone number"
    WORK_PHONE_NUMBER: Int @constraint(pattern: "^(\([2-9]\d{2}\)|[2-9]\d{2})[- .]?(\([2-9]\d{2}\)|[2-9]\d{2})[- .]?\d{4}$", maxLength: 12)
    "Applicant cell phone number"
    CELL_PHONE_NUMBER: Int @constraint(pattern: "^(\([2-9]\d{2}\)|[2-9]\d{2})[- .]?(\([2-9]\d{2}\)|[2-9]\d{2})[- .]?\d{4}$", maxLength: 12)
    "Applicant other phone number"
    OTHER_PHONE_NUMBER: Int @constraint(pattern: "^(\([2-9]\d{2}\)|[2-9]\d{2})[- .]?(\([2-9]\d{2}\)|[2-9]\d{2})[- .]?\d{4}$", maxLength: 12)
    "Applicant email address"
    EMAIL_ADDRESS: String @constraint(format: "email", maxLength: 50)
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
    contact: (_parent, _args, { dataSources, auth, language }) => dataSources.ApplicationContactDao.getContact(auth.user.USER_ID, language.code),
  },
};

const permissions = {

};

module.exports = { typeDef, resolvers, permissions };
