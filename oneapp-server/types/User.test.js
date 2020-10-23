const { createTestClient, dataSources, services } = require('../__utils/TestingUtils');
const client = createTestClient();
const passwordGenerator = require('generate-password');

const { resolvers } = require('./User');
const AuthenticationService = require('../services/AuthenticationService');

const mockDataSources = {
  UserDao: {
    createUser: jest.fn()
  }
};

jest.mock('generate-password');

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

describe('User node', () => {
  beforeEach(() => {
    passwordGenerator.generate.mockReturnValue('random-password');
  });

  it('during password reset, generates a random password and sends it via email', async () => {
    dataSources.UserDao.resetUserPassword.mockResolvedValue([{USER_ID: 'USER_ID', EMAIL_ADDRESS: 'fake@email.com'}, 1]);
    dataSources.TranslationDao.getTranslationText.mockResolvedValue('Replace {0} and {1}');

    const query = `
      mutation {
          userPasswordReset(USER_ID: "RKH1", HINT_ANSWER: "answer")
      }
    `;
    const response = await client.query({ query });
    expect(response.data.userPasswordReset).toBe(true);

    expect(services.EmailService.sendEmail).toHaveBeenCalledWith({
      from: 'DoNotReply@dhs.state.nj.us',
      to: 'fake@email.com',
      subject: 'NJ OneApp Password Reset.',
      html: 'Replace USER_ID and random-password'
    });
  });

  it('during password reset, handles non-matching answers', async () => {
    dataSources.UserDao.resetUserPassword.mockResolvedValue([{USER_ID: 'USER_ID', EMAIL_ADDRESS: 'fake@email.com'}, -50]);

    const query = `
      mutation {
          userPasswordReset(USER_ID: "RKH1", HINT_ANSWER: "answer")
      }
    `;
    const response = await client.query({ query });
    expect(response.data.userPasswordReset).toBeNull();
    expect(response.errors[0]).toEqual({MESSAGE_TEXT_ID: 't2256', code: 'BAD_USER_INPUT', message: 'Answers did not match.', path: ['userPasswordReset']});
  });

  it('during password reset, handles locked accounts', async () => {
    dataSources.UserDao.resetUserPassword.mockResolvedValue([{USER_ID: 'USER_ID', EMAIL_ADDRESS: 'fake@email.com'}, -2]);

    const query = `
      mutation {
          userPasswordReset(USER_ID: "RKH1", HINT_ANSWER: "answer")
      }
    `;
    const response = await client.query({ query });
    expect(response.data.userPasswordReset).toBeNull();
    expect(response.errors[0]).toEqual({MESSAGE_TEXT_ID: 't2259', code: 'OneAppError', message: 'User account locked.', path: ['userPasswordReset']});
  });
});