const { gql } = require('apollo-server-express');
const { merge } = require('lodash');
const { allow } = require('graphql-shield');

// Import each type in the following format
// Schema typeDefs support validation using: https://github.com/confuser/graphql-constraint-directive#readme
const { typeDef: User, resolvers: userResolvers, permissions: userPermissions } = require('./types/User');

const VERSION = '0.1';

// The base query object which is extended in each resolver
const baseTypes = gql`
    type Query {
      _version: String
    }

    type Mutation {
      _version: String
    }
`;

// Resolvers needed for each type as schema types cannot be null
// Other types will extend these base resolvers
const baseResolvers = {
  Query: {
    _version: () => `OneApp GraphQL Server v${VERSION}`,
  },
  Mutation: {
    _version: () => `OneApp GraphQL Server v${VERSION}`,
  },
};

// Base set of GraphQL Shield permissions
const basePermissions = {
  Query: {
    _version: allow,
  },
  Mutation: {
    _version: allow,
  },
};

// Add a type for each object type
const typeDefs = [
  baseTypes,
  User,
];

// Add a resolver for each object type, merging the object into a single resolver
const resolvers = merge(
  baseResolvers,
  userResolvers,
);

// Add permission for each object type, merging the object into a single permission set
const permissions = merge(
  basePermissions,
  userPermissions,
);

module.exports = { typeDefs, resolvers, permissions };
