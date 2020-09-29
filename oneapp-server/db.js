const config = require('./db.config');

const TranslationDao = require('./dao/TranslationDao');
const UserDao = require('./dao/UserDao');

module.exports = {
  TranslationDao: new TranslationDao(config),
  UserDao: new UserDao(config),
};
