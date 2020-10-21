const nodemailer = require('nodemailer');
const config = require('config');
const { get } = require('lodash');

let transporter;

const createTransporter = async () => {
  // Only create the transporter once
  if (transporter) {
    return transporter;
  }

  // Create a test account on ethereal.email when using debug mode
  const debug = config.get('smtp.debug');
  const testAccount = debug ? await nodemailer.createTestAccount() : undefined;

  return nodemailer.createTransport({
    host: config.get('smtp.host'),
    port: config.get('smtp.port'),
    secure: config.get('smtp.secure'),
    auth: {
      // Authenticate with the testAccount, if created, otherwise use the config value
      user: get(testAccount, 'user', config.get('smtp.user')),
      pass: get(testAccount, 'pass', config.get('smtp.pass')),
    },
  });
};

module.exports = { createTransporter };
