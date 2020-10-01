const pino = require('pino');

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  enabled: !(process.env.LOG_ENABLED === 'false'),
});

module.exports = logger;
