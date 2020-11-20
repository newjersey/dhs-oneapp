const { gql } = require('apollo-server-express');
const { GraphQLDate, GraphQLTime, GraphQLDateTime } = require('graphql-iso-date');
const _ = require('lodash');
const { allow } = require('graphql-shield');

// Schema typeDefs support validation using: https://github.com/confuser/graphql-constraint-directive#readme
const Types = require('./types');

// The base query object which is extended in each resolver
const baseTypes = gql`
    scalar Date
    scalar Time
    scalar DateTime

    type Query {
      _version: ServerVersion
    }

    type Mutation {
      _version: ServerVersion
    }

    type ServerVersion {
      "Git commit the server is built off of"
      commitHash: String
      "Date of the git commit the server is built off of"
      commitDate: DateTime
    }
`;

const serverVersionResolver = (_parent, _args, { services }) => ({
  commitHash: services.GitVersionService.fetchCommitHash(),
  commitDate: services.GitVersionService.fetchCommitDate(),
});

// Resolvers needed for each type as schema types cannot be null
// Other types will extend these base resolvers
const baseResolvers = {
  Date: GraphQLDate,
  Time: GraphQLTime,
  DateTime: GraphQLDateTime,
  Query: {
    _version: serverVersionResolver,
  },
  Mutation: {
    _version: serverVersionResolver,
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
  ServerVersion: allow,
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
