const { gql } = require('apollo-server-express');
const { GraphQLDate, GraphQLTime, GraphQLDateTime } = require('graphql-iso-date');
const _ = require('lodash');
const { allow } = require('graphql-shield');

// Schema typeDefs support validation using: https://github.com/confuser/graphql-constraint-directive#readme
const Types = require('./types');

const VERSION = '0.1';

// The base query object which is extended in each resolver
const baseTypes = gql`
    scalar Date
    scalar Time
    scalar DateTime

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
  Date: GraphQLDate,
  Time: GraphQLTime,
  DateTime: GraphQLDateTime,
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
  ..._.chain(Types).mapValues((Type) => Type.typeDef).toArray().value(),
];

// Add a resolver for each object type, merging the object into a single resolver
const resolvers = _.merge(
  baseResolvers,
  ..._.chain(Types).mapValues((Type) => Type.resolvers).toArray().value(),
);

// Add permission for each object type, merging the object into a single permission set
const permissions = _.merge(
  basePermissions,
  ..._.chain(Types).mapValues((Type) => Type.permissions).toArray().value(),
);

module.exports = { typeDefs, resolvers, permissions };
