const EmailService = require('./EmailService');
const logger = require('../logger.config');
const config = require('config');
const nodemailer = require('nodemailer');

jest.mock('../logger.config');
jest.mock('../email.config');
jest.mock('config');
jest.mock('nodemailer');

describe('EmailService sendEmail', () => {
  it('sends an email and logs the messageId', async () => {
    await EmailService.sendEmail({to: 'test'});
    expect(logger.debug).toHaveBeenCalledWith('Email sent with messageId=%s', 'mock-sent-message-id');
  });

  it('logs the preview email URL when debug is enabled', async () => {
    config.get.mockImplementation(prop => {
      switch (prop) {
        case 'smtp.debug':
          return true;
        default:
          return undefined;
      }
    });

    nodemailer.getTestMessageUrl.mockReturnValue('https://test.email');

    await EmailService.sendEmail({to: 'test'});
    expect(nodemailer.getTestMessageUrl).toHaveBeenCalled();
    expect(logger.info).toHaveBeenCalledWith('Email preview URL: %s', 'https://test.email');
  });
});