const { createTestClient } = require('apollo-server-testing');
const createServer = require('../server');
const dataSources = require('../db');
const services = require('../services');
const TranslationService = require('../services/TranslationService');

jest.mock('../db');
jest.mock('../services');

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