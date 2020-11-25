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
    "Check if valid USPS address"
    isValidAddress(input: AddressInput!): Boolean
  }

  type County {
    COUNTY_NAME: String,
    COUNTY_NUMBER: Int,
  }

  input CountyInput {
    COUNTY_NAME: String,
    COUNTY_NUMBER: Int,
  }

  input AddressInput {
    ADDRESS: String,
    CITY: String,
    COUNTY: CountyInput,
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
    isValidAddress: async (_parent, { input }, { dataSources }) => dataSources.LocationDao.isValidAddress(input),
  },
};

const permissions = {
  Query: {
    counties: allow,
    isValidNJZipcode: allow,
    isValidAddress: allow,
  },
  County: allow,
};

module.exports = { typeDef, resolvers, permissions };
