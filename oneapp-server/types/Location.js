const { gql } = require('apollo-server-express');
const { allow } = require('graphql-shield');

const typeDef = gql`
  extend type Query {
    "All counties"
    counties: [Location!]
    "Check if zipcode and county provided is a valid NJ zipcode"
    isValidNJZipcode(ZIPCODE: Int!, COUNTY_NUMBER: Int!): Boolean
    "Returns county name of given user"
    getCountyNameForUser(USER_ID: String!): Location
  }

  type Location {
    COUNTY_NAME: String,
    COUNTY_NUMBER: Int,
  }
`;

const resolvers = {
  Query: {
    counties: (_parent, _args, { dataSources }) => dataSources.LocationDao.getCounties(),
    isValidNJZipcode: async (_parent, { ZIPCODE, COUNTY_NUMBER }, { dataSources }) => dataSources.LocationDao.isValidNJZipcode(ZIPCODE, COUNTY_NUMBER),
    getCountyNameForUser: async (_parent, { USER_ID }, { dataSources }) => dataSources.LocationDao.getCountyNameForUser(USER_ID),
  },
};

const permissions = {
  Query: {
    counties: allow,
    isValidNJZipcode: allow,
    getCountyNameForUser: allow,
  },
  Location: allow,
};

module.exports = { typeDef, resolvers, permissions };
