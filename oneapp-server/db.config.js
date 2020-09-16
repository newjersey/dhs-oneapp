const config = require('config');

const dbConfig = {
  client: 'oracledb',

  // Database connection string
  connection: {
    user: config.get('database.user'),
    password: config.get('database.pass'),
    connectString: `${config.get('database.host')}:${config.get('database.port')}/${config.get('database.sid')}`,
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
