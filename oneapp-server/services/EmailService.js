const nodemailer = require('nodemailer');
const config = require('config');
const { createTransporter } = require('../email.config');
const logger = require('../logger.config');

const service = {
  sendEmail: async (message) => {
    const transporter = await createTransporter();
    const info = await transporter.sendMail(message);
    logger.debug('Email sent with messageId=%s', info.messageId);
    if (config.get('smtp.debug')) {
      logger.info('Email preview URL: %s', nodemailer.getTestMessageUrl(info));
    }
  },
};

module.exports = service;
