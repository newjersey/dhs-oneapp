module.exports = require('require-dir')('.', {
  filter: (fullPath) => !fullPath.match(/\.test\.js/),
});
