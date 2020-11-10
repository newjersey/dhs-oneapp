const { gql } = require('apollo-server-express');
const { allow } = require('graphql-shield');

const typeDef = gql`
  extend type Query {
    "All counties"
    counties: [Location!]
    "Check if zipcode and county provided is a valid NJ zipcode"
    isValidNJZipcode(ZIPCODE: Int!, COUNTY_NUMBER: Int!, IS_HOMELESS: Boolean!): Boolean
    "Returns county name of given user"
    getCountyDetails: Location
  }

  type Location {
    COUNTY_NAME: String,
    COUNTY_NUMBER: Int,
  }
`;

const resolvers = {
  Query: {
    counties: (_parent, _args, { dataSources }) => dataSources.LocationDao.getCounties(),
    isValidNJZipcode: async (_parent, { ZIPCODE, COUNTY_NUMBER, IS_HOMELESS }, { dataSources }) => {
      const response = await dataSources.LocationDao.isValidNJZipcode(ZIPCODE, COUNTY_NUMBER, IS_HOMELESS);
      return response[0];
    },
    getCountyDetails: async (_parent, _args, { auth, dataSources }) => dataSources.LocationDao.getCountyDetails(auth.user.USER_ID),
  },
};

const permissions = {
  Query: {
    counties: allow,
    isValidNJZipcode: allow,
  },
  Location: allow,
};

module.exports = { typeDef, resolvers, permissions };
