const emojiRegexRGI = require('emoji-regex/RGI_Emoji.js');
const { isString, isEqual } = require('lodash');
const mapValuesDeep = require('deepdash/mapValuesDeep');
const logger = require('../logger.config');

const emojiRegex = emojiRegexRGI();

/**
 * The OneApp Oracle db database does not support a character set with emoji,
 * so to ensure we don't persis any emoji into the database, we're going to
 * filter it out of all GraphQL arguments
 */
const StripEmoji = async (resolve, root, args, context, info) => {
  const argsWithoutEmoji = mapValuesDeep(args, (value) => (isString(value) ? value.replace(emojiRegex, '') : value), { leavesOnly: true });
  if (logger.isLevelEnabled('trace') && !isEqual(args, argsWithoutEmoji)) {
    logger.trace('Removing emoji from arguments before=%o after=%o', args, argsWithoutEmoji);
  }
  return resolve(root, argsWithoutEmoji, context, info);
};

module.exports = StripEmoji;
