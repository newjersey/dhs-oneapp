const config = require('config');
const args = require('yargs').argv;
const express = require('express');
const expressJwt = require('express-jwt');
const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { applyMiddleware } = require('graphql-middleware');
const { constraintDirective, constraintDirectiveTypeDefs } = require('graphql-constraint-directive');

// eslint-disable-next-line no-unused-vars
const cfConfig = require('./cf.config.js'); // cfConfig must be first import to override config values with CloudFoundary values
const dataSources = require('./db');
const logger = require('./logger.config');
const AuthenticationService = require('./services/AuthenticationService');
const { typeDefs, resolvers, permissions } = require('./schema');

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
);

// Setup the server
const app = express();

// Configure authentication
app.use(expressJwt({
  secret: config.get('authentication.jwt.secret'),
  algorithms: [config.get('authentication.jwt.algorithm')],
  requestProperty: 'auth',
  credentialsRequired: false, // This allows for some endpoints to not be authorized
}), (err, req, res, next) => {
  // Treat invalid tokens as unauthorized
  if (err.code === 'invalid_token') return next();
  return next(err);
});

// Setup the GraphQL server
const server = new ApolloServer({
  // Specify GraphQL config
  schema: schemaWithMiddleware,

  // Process the user authentication
  context: ({ req }) => {
    // If logged in, place the auth on the GraphQL context
    const auth = req.auth || null;
    const requestIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    return { auth, requestIP };
  },

  // Configure our logger implementation
  logger,
  formatError: (error) => {
    logger.error(error);
    return {
      code: error.extensions.code,
      message: error.message,
      path: error.path,
    };
  },

  // Configure data sources available to GraphQL
  dataSources: () => dataSources,

  // Debug
  debug: true,

  // Mocks
  mocks: args.mock || false,
});
server.applyMiddleware({ app, path: config.get('server.path') });

// Start the server
app.listen({ port: config.get('server.port') }, () => {
  logger.info('Running OneApp GraphQL API server at: %s', `http://localhost:${config.get('server.port')}${server.graphqlPath}`);
  logger.info('Database URL: %s:%d', config.get('database.host'), config.get('database.port'));
});

module.exports = server;
