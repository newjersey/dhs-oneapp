const nodemailer = require('nodemailer');
const config = require('config');
const { get } = require('lodash');
const yn = require('yn');
const logger = require('./logger.config');

let transporter;

const createTransporter = async () => {
  // Only create the transporter once
  if (transporter) {
    return transporter;
  }

  // Create a test account on ethereal.email when using debug mode
  const debug = yn(config.get('smtp.debug'));
  const testAccount = debug ? await nodemailer.createTestAccount() : undefined;
  const options = {
    host: config.get('smtp.host'),
    port: config.get('smtp.port'),
    secure: yn(config.get('smtp.secure')),
    auth: {
      // Authenticate with the testAccount, if created, otherwise use the config value
      user: get(testAccount, 'user', config.get('smtp.user')),
      pass: get(testAccount, 'pass', config.get('smtp.pass')),
    },
  };
  logger.info(options, 'Creating nodemailer transporter');
  return nodemailer.createTransport(options);
};

module.exports = { createTransporter };
