const config = {
  client: 'oracledb',

  // Database connection string
  // TODO: Use a config object per environment
  connection: {
    host: '127.0.0.1',
    user: '***REMOVED***',
    password: '***REMOVED***',
    database: 'xe',
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

module.exports = config;
