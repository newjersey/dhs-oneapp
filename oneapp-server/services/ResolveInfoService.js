const { parseResolveInfo, simplifyParsedResolveInfoFragmentWithType } = require('graphql-parse-resolve-info');
const _ = require('lodash');

const service = {
  getReturnFields: (resolveInfo) => {
    const paredResolvedInfo = parseResolveInfo(resolveInfo);
    const { fields } = simplifyParsedResolveInfoFragmentWithType(paredResolvedInfo, resolveInfo.returnType);
    return _.chain(fields).toArray().map('name').value();
  },
};

module.exports = service;
