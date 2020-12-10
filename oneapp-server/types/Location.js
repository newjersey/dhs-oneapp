const { gql } = require('apollo-server-express');
const { allow } = require('graphql-shield');

const typeDef = gql`
  extend type Query {
    "All counties"
    counties: [County!]
    "Check if zipcode and county provided is a valid NJ zipcode"
    isValidNJZipcode(ZIPCODE: String!, COUNTY_NUMBER: Int!, IS_HOMELESS: Boolean!): Boolean
    "Returns county name of given user"
    getCountyDetails: County
    "Return details if valid USPS address"
    getAddressDetails(ADDRESS: String!, ZIPCODE: String!): Address
  }

  type County {
    COUNTY_NAME: String,
    COUNTY_NUMBER: Int,
  }

  input CountyInput {
    COUNTY_NAME: String,
    COUNTY_NUMBER: Int,
  }

  type Address {
    ADDRESS1: String,
    ADDRESS2: String,
    CITY: String,
    COUNTY: County,
    STATE: String,
    ZIP: String,
    ZIP4: String,
  }
`;

const resolvers = {
  Query: {
    counties: (_parent, _args, { dataSources }) => dataSources.LocationDao.getCounties(),
    isValidNJZipcode: async (_parent, { ZIPCODE, COUNTY_NUMBER, IS_HOMELESS }, { dataSources }) => dataSources.LocationDao.isValidNJZipcode(ZIPCODE, COUNTY_NUMBER, IS_HOMELESS),
    getCountyDetails: async (_parent, _args, { auth, dataSources }) => dataSources.LocationDao.getCountyDetails(auth.user.USER_ID),
    getAddressDetails: async (_parent, { ADDRESS, ZIPCODE }, { services }) => services.USPSValidationService.getAddressDetails(ADDRESS, ZIPCODE),
  },
};

const permissions = {
  Query: {
    counties: allow,
    isValidNJZipcode: allow,
  },
  County: allow,
};

module.exports = { typeDef, resolvers, permissions };
