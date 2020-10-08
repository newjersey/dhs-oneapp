const { parseResolveInfo, simplifyParsedResolveInfoFragmentWithType } = require('graphql-parse-resolve-info');
const ResolveInfoService = require('./ResolveInfoService');

jest.mock('graphql-parse-resolve-info');

describe('ResolveInfoServe parseReturnFields', () => {
  it('parses resolveInfo into a list of GraphQL requested fields', () => {
    const resolveInfo = { returnType: 'Translation' };
    const parsedResolveInfo = { parsed: true };
    const simplifiedParsedResolveInfo = {
      fields: [
        { name: 'field1' },
        { name: 'field2' }
      ]
    };

    parseResolveInfo.mockReturnValue(parsedResolveInfo);
    simplifyParsedResolveInfoFragmentWithType.mockReturnValue(simplifiedParsedResolveInfo);

    const returnFields = ResolveInfoService.parseReturnFields(resolveInfo);

    expect(parseResolveInfo).toHaveBeenCalledWith(resolveInfo);
    expect(simplifyParsedResolveInfoFragmentWithType).toHaveBeenCalledWith(parsedResolveInfo, 'Translation');

    expect(returnFields).toHaveLength(2);
    expect(returnFields).toContain('field1');
    expect(returnFields).toContain('field2');
  });
});