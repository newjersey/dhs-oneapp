const config = require('config');
const cfenv = require('cfenv');

// Override config with CloudFoundary configuration
const cfAppEnv = cfenv.getAppEnv();
const cfUserServices = cfAppEnv.services['user-provided'];

if (cfUserServices && cfUserServices[0]) {
  const cfDbService = cfUserServices[0];
  config.database.host = cfDbService.credentials.DB_HOST;
  config.database.port = cfDbService.credentials.DB_PORT;
  config.database.user = cfDbService.credentials.DB_USER;
  config.database.pass = cfDbService.credentials.DB_PASS;
  config.database.sid = cfDbService.credentials.DB_SID;
}

module.exports = cfenv;