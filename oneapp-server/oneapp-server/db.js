const config = require('./db.config');

const UserDao = require('./dao/UserDao');

module.exports = {
  UserDao: new UserDao(config),
};
