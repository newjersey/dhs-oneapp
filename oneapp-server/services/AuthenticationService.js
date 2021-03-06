const config = require('config');
const jwt = require('jsonwebtoken');
const { rule, shield } = require('graphql-shield');
const { createRateLimitRule } = require('graphql-rate-limit');
const { ApolloError, UserInputError } = require('apollo-server-express');
const { has } = require('lodash');
const { OneAppAuthenticationError } = require('../utils/OneAppError');

const rules = {
  isAuthenticated: rule({ cache: 'contextual' })(
    async (_parent, _args, ctx) => has(ctx, 'auth.user'),
  ),
  rateLimit: (options) => createRateLimitRule({
    // Rate limit context is a hybrid of requestIP and authenticated user
    identifyContext: (ctx) => ({
      auth: ctx.auth,
      requestIP: ctx.requestIP,
    }),
  })(options),
};

const service = {

  /* Generate a JWT for a user. This method assumes the user has already authenticated. */
  createToken: (user) => {
    const secret = config.get('authentication.jwt.secret');
    const tokenConfig = { algorithm: config.get('authentication.jwt.algorithm'), expiresIn: config.get('authentication.jwt.expires') };
    const token = jwt.sign(
      { user, roles: ['USER'] },
      secret,
      tokenConfig,
    );
    return { token };
  },

  rules,

  buildPermissions: (permissions) => shield(permissions, {
    allowExternalErrors: true,
    fallbackRule: rules.isAuthenticated,
    fallbackError: (ex) => {
      if (ex instanceof ApolloError || ex instanceof UserInputError) {
        return ex;
      }

      return new OneAppAuthenticationError('You must be logged in to access this data.');
    },
  }),

};

module.exports = service;
