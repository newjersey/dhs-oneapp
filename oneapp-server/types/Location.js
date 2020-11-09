const { gql } = require('apollo-server-express');
const { allow } = require('graphql-shield');

const typeDef = gql`
  extend type Query {
    "All counties"
    counties: [Location!]
  }

  type Location {
    COUNTY_NAME: String,
    COUNTY_NUMBER: String,
  }
`;

const resolvers = {
  Query: {
    counties: (_parent, _args, { dataSources }) => dataSources.LocationDao.getCounties(),
  },
};

const permissions = {
  Query: {
    counties: allow,
  },
};

module.exports = { typeDef, resolvers, permissions };
