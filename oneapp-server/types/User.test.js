const { createTestClient, dataSources, services } = require('../__utils/TestingUtils');
const client = createTestClient();
const passwordGenerator = require('generate-password');

jest.mock('generate-password');

describe('userRegister mutation', () => {
  it('registers a user and returns a token', async () => {
    dataSources.UserDao.createUser.mockReturnValue({USER_ID: 'user123', EMAIL_ADDRESS: 'fake@email.com'});
    services.AuthenticationService.createToken.mockReturnValue({token: 'token123'});

    const query = `
      mutation {
        userRegister(input: {
          USER_ID: "user123456",
          PASSWORD: "pass123456",
          HINT_QUESTION: "2",
          HINT_ANSWER: "answer",
          EMAIL_ADDRESS: "test@test.com"
        }) {
          token
        }
      }
    `;
    const response = await client.query({ query });
    expect(response.data.userRegister.token).toEqual('token123');

    expect(dataSources.UserDao.createUser).toHaveBeenCalledWith({
      USER_ID: 'user123456',
      PASSWORD: 'pass123456',
      HINT_QUESTION: '2',
      HINT_ANSWER: 'answer',
      EMAIL_ADDRESS: 'test@test.com'
    });
  });

  it('requires a number in the username', async () => {
    const query = `
      mutation {
        userRegister(input: {
          USER_ID: "user",
          PASSWORD: "pass123456",
          HINT_QUESTION: "2",
          HINT_ANSWER: "answer",
          EMAIL_ADDRESS: "test@test.com"
        }) {
          token
        }
      }
    `;
    const response = await client.query({ query });
    expect(response.errors[0].code).toEqual('GRAPHQL_VALIDATION_FAILED');
  });

  it('requires a letter in the username', async () => {
    const query = `
      mutation {
        userRegister(input: {
          USER_ID: "123",
          PASSWORD: "pass123456",
          HINT_QUESTION: "2",
          HINT_ANSWER: "answer",
          EMAIL_ADDRESS: "test@test.com"
        }) {
          token
        }
      }
    `;
    const response = await client.query({ query });
    expect(response.errors[0].code).toEqual('GRAPHQL_VALIDATION_FAILED');
  });

  it('requires 8 chars in the username', async () => {
    const query = `
      mutation {
        userRegister(input: {
          USER_ID: "user123",
          PASSWORD: "pass123456",
          HINT_QUESTION: "2",
          HINT_ANSWER: "answer",
          EMAIL_ADDRESS: "test@test.com"
        }) {
          token
        }
      }
    `;
    const response = await client.query({ query });
    expect(response.errors[0].code).toEqual('GRAPHQL_VALIDATION_FAILED');
  });

  it('requires at most 15 chars in the username', async () => {
    const query = `
      mutation {
        userRegister(input: {
          USER_ID: "user1234567891234",
          PASSWORD: "pass123456",
          HINT_QUESTION: "2",
          HINT_ANSWER: "answer",
          EMAIL_ADDRESS: "test@test.com"
        }) {
          token
        }
      }
    `;
    const response = await client.query({ query });
    expect(response.errors[0].code).toEqual('GRAPHQL_VALIDATION_FAILED');
  });

  it('requires a no spaces in the username', async () => {
    const query = `
      mutation {
        userRegister(input: {
          USER_ID: "user 123456",
          PASSWORD: "pass123456",
          HINT_QUESTION: "2",
          HINT_ANSWER: "answer",
          EMAIL_ADDRESS: "test@test.com"
        }) {
          token
        }
      }
    `;
    const response = await client.query({ query });
    expect(response.errors[0].code).toEqual('GRAPHQL_VALIDATION_FAILED');
  });

  it('requires a number in the password', async () => {
    const query = `
      mutation {
        userRegister(input: {
          USER_ID: "user123456",
          PASSWORD: "pass",
          HINT_QUESTION: "2",
          HINT_ANSWER: "answer",
          EMAIL_ADDRESS: "test@test.com"
        }) {
          token
        }
      }
    `;
    const response = await client.query({ query });
    expect(response.errors[0].code).toEqual('GRAPHQL_VALIDATION_FAILED');
  });

  it('requires a letter in the password', async () => {
    const query = `
      mutation {
        userRegister(input: {
          USER_ID: "user123456",
          PASSWORD: "123456",
          HINT_QUESTION: "2",
          HINT_ANSWER: "answer",
          EMAIL_ADDRESS: "test@test.com"
        }) {
          token
        }
      }
    `;
    const response = await client.query({ query });
    expect(response.errors[0].code).toEqual('GRAPHQL_VALIDATION_FAILED');
  });

  it('requires 8 chars in the password', async () => {
    const query = `
      mutation {
        userRegister(input: {
          USER_ID: "user123456",
          PASSWORD: "pass123",
          HINT_QUESTION: "2",
          HINT_ANSWER: "answer",
          EMAIL_ADDRESS: "test@test.com"
        }) {
          token
        }
      }
    `;
    const response = await client.query({ query });
    expect(response.errors[0].code).toEqual('GRAPHQL_VALIDATION_FAILED');
  });

  it('requires at most 15 chars in the password', async () => {
    const query = `
      mutation {
        userRegister(input: {
          USER_ID: "user123456",
          PASSWORD: "pass12345678911234",
          HINT_QUESTION: "2",
          HINT_ANSWER: "answer",
          EMAIL_ADDRESS: "test@test.com"
        }) {
          token
        }
      }
    `;
    const response = await client.query({ query });
    expect(response.errors[0].code).toEqual('GRAPHQL_VALIDATION_FAILED');
  });

  it('requires no spaces in the password', async () => {
    const query = `
      mutation {
        userRegister(input: {
          USER_ID: "user123456",
          PASSWORD: "pass 123456",
          HINT_QUESTION: "2",
          HINT_ANSWER: "answer",
          EMAIL_ADDRESS: "test@test.com"
        }) {
          token
        }
      }
    `;
    const response = await client.query({ query });
    expect(response.errors[0].code).toEqual('GRAPHQL_VALIDATION_FAILED');
  });
});

describe('userPasswordReset mutation', () => {
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