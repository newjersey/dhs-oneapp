const pino = require('pino');

const logger = pino({
  name: 'oneapp-server',
  level: process.env.LOG_LEVEL || 'info',
  enabled: !(process.env.LOG_ENABLED === 'false'),
  // Remove sensitive information from logs
  redact: {
    paths: [
      'auth.user',
      'auth.pass',
    ],
  },
});

module.exports = logger;
