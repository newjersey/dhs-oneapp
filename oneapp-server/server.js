const args = require('yargs').argv;
const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { applyMiddleware } = require('graphql-middleware');
const { constraintDirective, constraintDirectiveTypeDefs } = require('graphql-constraint-directive');
const { get, values } = require('lodash');
const logger = require('./logger.config');
const AuthenticationService = require('./services/AuthenticationService');
const { typeDefs, resolvers, permissions } = require('./schema');
const middleware = require('./middleware');

const createServer = (dataSources, services, context) => {
  // Build the schema
  const schema = makeExecutableSchema({
    typeDefs: [constraintDirectiveTypeDefs, ...typeDefs],
    resolvers,
    schemaTransforms: [constraintDirective()],
    logger: {
      log: (e) => logger.error(e),
    },
  });

  // Apply schema middleware
  const schemaWithMiddleware = applyMiddleware(
    schema,
    AuthenticationService.buildPermissions(permissions),
    ...values(middleware),
  );

  const populateContext = ({ req }) => ({
    // If logged in, place the auth
    auth: req.auth || null,
    // Place the requesting IP (either from load balancer or direct)
    requestIP: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    // Place the language
    language: services.TranslationService.getLanguage(req.headers['accept-language']),
    // Place the services
    services,
  });

  // Setup the GraphQL server
  const server = new ApolloServer({
    // Specify GraphQL config
    schema: schemaWithMiddleware,

    // Populate the GraphQL context
    context: context || populateContext,

    // Configure our logger implementation
    logger,
    formatError: (error) => {
      logger.error(error);
      return {
        code: error.extensions.code,
        message: error.message,
        path: error.path,
        MESSAGE_TEXT_ID: get(error, 'extensions.exception.MESSAGE_TEXT_ID'),
      };
    },

    // Configure data sources available to GraphQL
    dataSources: () => dataSources,

    // Debug
    debug: true,

    // Mocks
    mocks: args.mock || false,
  });

  return server;
};

module.exports = createServer;
