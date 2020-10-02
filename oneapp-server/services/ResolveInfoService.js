const { parseResolveInfo, simplifyParsedResolveInfoFragmentWithType } = require('graphql-parse-resolve-info');
const _ = require('lodash');

const service = {
  parseReturnFields: (resolveInfo) => {
    const parsedResolvedInfo = parseResolveInfo(resolveInfo);
    const { fields } = simplifyParsedResolveInfoFragmentWithType(parsedResolvedInfo, resolveInfo.returnType);
    return _.chain(fields).toArray().map('name').value();
  },
};

module.exports = service;
