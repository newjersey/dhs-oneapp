const AuthenticationService = require('./AuthenticationService');

test('createToken returns a token', () => {
  const retVal = AuthenticationService.createToken({USER_ID: 1});
  expect(retVal.token).toMatch(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/);
});