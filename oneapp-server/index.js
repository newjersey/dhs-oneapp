// eslint-disable-next-line import/newline-after-import
const dotenv = require('dotenv');
dotenv.config();

const config = require('config');
const express = require('express');
const expressJwt = require('express-jwt');

// eslint-disable-next-line no-unused-vars
const cfConfig = require('./cf.config.js'); // cfConfig must be first import to override config values with CloudFoundary values
const logger = require('./logger.config');
const createServer = require('./server');

logger.info('Starting with environment config: %s', config.util.getEnv('NODE_ENV'));

// Setup the app
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

const server = createServer();
server.applyMiddleware({ app, path: config.get('server.path') });

// Start the server
app.listen({ port: config.get('server.port') }, () => {
  logger.info('Running OneApp GraphQL API server at: %s', `http://localhost:${config.get('server.port')}${server.graphqlPath}`);
  logger.info('Database URL: %s:%d', config.get('database.host'), config.get('database.port'));
});
