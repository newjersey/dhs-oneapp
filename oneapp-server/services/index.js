const { assign } = require('lodash');

const services = require('require-directory')(module, { recurse: false, exclude: /\.test\.js/ });
const mockServices = require('require-directory')(module, './__mocks__', { recurse: false, exclude: /\.test\.js/ });

module.exports = assign({}, services, mockServices);
