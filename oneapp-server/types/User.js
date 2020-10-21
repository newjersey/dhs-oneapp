const { gql } = require('apollo-server-express');
const { allow } = require('graphql-shield');
const _ = require('lodash');
const config = require('config');
const AuthenticationService = require('../services/AuthenticationService');
const { OneAppError, OneAppUserInputError } = require('../utils/OneAppError');

const typeDef = gql`
  extend type Query {
    users: Users
  }

  extend type Mutation {
    userAuthenticate(input: UserLogin!): JwtToken
    userRegister(input: UserInput!): JwtToken
    userPasswordReset(USER_ID: String!, HINT_ANSWER: String!): Boolean
  }

  type Users {
    "Current logged in user"
    current: User!
    "Check if a USER_ID is available"
    userAvailable(USER_ID: String!): Boolean
    "Return a user's password hint question id, for resetting the password"
    userPasswordHintQuestion(USER_ID: String!): String
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
    userPasswordReset: async (_parent, { USER_ID, HINT_ANSWER }, { dataSources, services }) => {
      const randomPassword = 'genme';
      const response = await dataSources.UserDao.resetUserPassword(USER_ID, HINT_ANSWER, randomPassword);
      const user = response[0];
      const responseCode = parseInt(response[1], 10);

      // Handle password successfully changed
      if (responseCode === 1) {
        const message = {
          from: config.get('emails.passwordReset.from'),
          to: user.EMAIL_ADDRESS,
          subject: config.get('emails.passwordReset.subject'),
          html: user.PASSWORD,
        };
        await services.EmailService.sendEmail(message);
      } else if (responseCode === -2) {
        throw new OneAppError('User account locked.', 't2259');
      } else {
        throw new OneAppUserInputError('Answers did not match.', 't2256');
      }
    },
  },
  Users: {
    current: (_parent, _args, { auth, dataSources }) => dataSources.UserDao.getUser(auth.user.USER_ID),
    userAvailable: async (_parent, { USER_ID }, { dataSources }) => {
      const userExists = await dataSources.UserDao.doesUserExist(USER_ID);
      return userExists === false;
    },
    userPasswordHintQuestion: async (_parent, { USER_ID }, { dataSources }) => {
      const response = await dataSources.UserDao.getUserPasswordHintQuestion(USER_ID);
      const user = response[0];
      const responseCode = parseInt(response[1], 10);

      // Handle main success
      if (responseCode === 1) {
        if (_.every([user.HINT_QUESTION, user.EMAIL_ADDRESS], _.isEmpty)) {
          throw new OneAppError('No email address or hint question. Unable to reset account.', 't2258');
        }
        return user.HINT_QUESTION;
      }

      if (responseCode === -2) {
        throw new OneAppError('User account locked.', 't2259');
      } else {
        throw new OneAppError('User not found.', 't2257');
      }
    },
  },
};

const permissions = {
  Query: {
    users: allow,
  },
  Mutation: {
    userAuthenticate: AuthenticationService.rules.rateLimit({ window: '1m', max: 20 }),
    userRegister: allow,
    userPasswordReset: AuthenticationService.rules.rateLimit({ window: '1m', max: 20 }),
  },
  JwtToken: allow,
  Users: {
    userAvailable: AuthenticationService.rules.rateLimit({ window: '1m', max: 20 }),
    userPasswordHintQuestion: allow,
  },
};

module.exports = { typeDef, resolvers, permissions };
