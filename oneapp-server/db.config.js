const config = require('config');

const dbConfig = {
  client: 'oracledb',

  // Database connection string
  // TODO: Use a config object per environment
  connection: {
    host: config.get('database.host'),
    port: config.get('database.port'),
    user: config.get('database.user'),
    password: config.get('database.pass'),
    database: config.get('database.sid'),
  },

  // Connection pool settings
  pool: {
    min: 1,
    max: 20,
  },

  // Used by OracleDB to return string types
  fetchAsString: [
    'number',
    'clob',
  ],

  // Extra Knex debugging
  debug: false,
};

module.exports = dbConfig;
