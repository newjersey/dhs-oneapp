const { createTestClient } = require('apollo-server-testing');
const { assign } = require('lodash');
const createServer = require('../server');
const dataSources = require('../db');
const services = require('../services');
const mockServices = module.exports = require('require-directory')(module, '../services/__mocks__', { recurse: false, exclude: /\.test\.js/ });
const TranslationService = require('../services/TranslationService');

jest.mock('../db');
jest.mock('../services');

// Replace mocked services where available
assign(services, mockServices);

const utils = {
  createTestClient: (auth = null, headers = {}) => {
    const context = {
      auth,
      requestIP: '0.0.0.0',
      language: TranslationService.getLanguage(headers['accept-language']),
      services,
    };
    const server = createServer(dataSources, services, context);
    const client = createTestClient(server);
    return client;
  },
  dataSources,
  services,
  fields: services.ResolveInfoService.parseReturnFields()
};

module.exports = utils;