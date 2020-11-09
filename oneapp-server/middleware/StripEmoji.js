const emojiRegexRGI = require('emoji-regex/RGI_Emoji.js');
const _ = require('lodash');
const mapValuesDeep = require('deepdash/mapValuesDeep');
const logger = require('../logger.config');

const emojiRegex = emojiRegexRGI();
const emojiSpaceBothSideRegex = new RegExp(`\\s(${emojiRegex.source})\\s`);
const emojiSpaceLeftSideRegex = new RegExp(`\\s(${emojiRegex.source})`);
const emojiSpaceRightSideRegex = new RegExp(`(${emojiRegex.source})\\s`);

/**
 * The OneApp Oracle db database does not support a character set with emoji,
 * so to ensure we don't persis any emoji into the database, we're going to
 * filter it out of all GraphQL arguments
 */
const StripEmoji = async (resolve, root, args, context, info) => {
  const argsWithoutEmoji = mapValuesDeep(args, (value) => {
    if (_.isString(value)) {
      return _.chain(value)
        .replace(emojiSpaceBothSideRegex, ' ')
        .replace(emojiSpaceLeftSideRegex, '')
        .replace(emojiSpaceRightSideRegex, '')
        .replace(emojiRegex, '')
        .trim()
        .value();
    }
    return value;
  }, { leavesOnly: true });
  if (logger.isLevelEnabled('trace') && !_.isEqual(args, argsWithoutEmoji)) {
    logger.trace('Removing emoji from arguments before=%o after=%o', args, argsWithoutEmoji);
  }
  return resolve(root, argsWithoutEmoji, context, info);
};

module.exports = StripEmoji;
