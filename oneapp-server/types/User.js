const { gql } = require('apollo-server-express');
const { allow } = require('graphql-shield');
const AuthenticationService = require('../services/AuthenticationService');

const typeDef = gql`
  extend type Query {
    users: Users
  }

  extend type Mutation {
    userAuthenticate(input: UserLogin!): JwtToken
    userRegister(input: UserInput!): JwtToken
  }

  type Users {
    "Current logged in user"
    current: User!
    "Check if a USER_ID is available"
    userAvailable(USER_ID: String!): Boolean
  }

  type User {
    "Unique username for the user, which also serves as the user_id"
    USER_ID: ID,
    "Number representing the question used for password recovery"
    HINT_QUESTION: String
    HINT_ANSWER: String,
    EMAIL_ADDRESS: String
    CREATION_DATE: Float
  }

  type JwtToken {
    "JWT token to use for authentication"
    token: String!
  }

  input UserLogin {
    "Unique username for the user, which also serves as the user_id"
    USER_ID: ID!,
    PASSWORD: String!
  }

  input UserInput {
    "Unique username for the user, which also serves as the user_id"
    USER_ID: ID!,
    "Password that will be hashed by the database"
    PASSWORD: String!,
    "Number representing the question used for password recovery"
    HINT_QUESTION: String!,
    HINT_ANSWER: String!,
    EMAIL_ADDRESS: String! @constraint(format: "email")
  }
`;

const resolvers = {
  Query: {
    users: () => ({}),
  },
  Mutation: {
    userAuthenticate: async (_parent, { input }, { dataSources }) => {
      const user = await dataSources.UserDao.authenticate(input);
      return AuthenticationService.createToken({
        USER_ID: user.USER_ID,
        EMAIL_ADDRESS: user.EMAIL_ADDRESS,
      });
    },
    userRegister: async (_parent, { input }, { dataSources }) => {
      const user = await dataSources.UserDao.createUser(input);
      return AuthenticationService.createToken({
        USER_ID: user.USER_ID,
        EMAIL_ADDRESS: user.EMAIL_ADDRESS,
      });
    },
  },
  Users: {
    current: (_parent, _args, { auth, dataSources }) => dataSources.UserDao.getUser(auth.user.USER_ID),
    userAvailable: async (_parent, { USER_ID }, { dataSources }) => {
      const userExists = await dataSources.UserDao.doesUserExist(USER_ID);
      return userExists === false;
    },
  },
};

const permissions = {
  Mutation: {
    userAuthenticate: allow,
    userRegister: allow,
  },
  JwtToken: allow,
};

module.exports = { typeDef, resolvers, permissions };
