const _ = require('lodash');
const doaObjects = require('./dao');
const config = require('./db.config');

module.exports = _.mapValues(doaObjects, (DaoObject) => new DaoObject(config));
