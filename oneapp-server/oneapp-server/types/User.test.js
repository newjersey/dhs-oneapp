const { resolvers } = require('./User');
const AuthenticationService = require('../services/AuthenticationService');

const mockDataSources = {
  UserDao: {
    createUser: jest.fn()
  }
};

test('register creates a user and returns a token', async () => {
  const mockUser = { USER_ID: 1 };
  mockDataSources.UserDao.createUser.mockResolvedValue(mockUser);

  const mockToken = 'token';
  AuthenticationService.createToken = jest.fn().mockReturnValue(mockToken);

  const input = { USER_ID: 5 };
  const retVal = await resolvers.Mutation.userRegister(null, { input }, { dataSources: mockDataSources });

  expect(retVal).toBe('token');
  expect(mockDataSources.UserDao.createUser).toHaveBeenCalledWith(input);
  expect(AuthenticationService.createToken).toHaveBeenCalledWith(mockUser);
});