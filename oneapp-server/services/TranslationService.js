const parser = require('accept-language-parser');
const { keys } = require('lodash');

const SUPPORTED_LANGUAGES = {
  en: 0,
  es: 1,
};

const service = {
  getLanguage: (acceptLanguage) => {
    const langCode = parser.pick(keys(SUPPORTED_LANGUAGES), acceptLanguage) || 'en';
    return {
      code: langCode,
      index: SUPPORTED_LANGUAGES[langCode],
    };
  },
};

module.exports = service;
