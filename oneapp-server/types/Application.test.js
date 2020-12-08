const { createTestClient, dataSources, services } = require('../__utils/TestingUtils');
const client = createTestClient();
const passwordGenerator = require('generate-password');

jest.mock('generate-password');

describe('applicationUpdate mutation', () => {
  it('updates contact info', async () => {
    const user = {USER_ID: 'user123'};
    const authClient = createTestClient({user});

    dataSources.ApplicationContactDao.updateContact.mockReturnValue(1);

    const query = `
      mutation {
        applicationUpdate(input: {
          contact: {
            APPLICANT_FIRST_NAME: "Test"
            APPLICANT_LAST_NAME: "Test"
            PAYEE_FIRST_NAME: "Test"
            PAYEE_LAST_NAME: "Test"
            IS_HOMELESS: true
            COUNTY_NUMBER: 1
          }
        })
      }
    `;
    const response = await authClient.query({ query });
    expect(response.data.applicationUpdate).toEqual(true);

    expect(dataSources.ApplicationContactDao.updateContact).toHaveBeenCalledWith(
      "user123",
      {
        APPLICANT_FIRST_NAME: 'Test',
        APPLICANT_LAST_NAME: 'Test',
        PAYEE_FIRST_NAME: 'Test',
        PAYEE_LAST_NAME: 'Test',
        IS_HOMELESS: true,
        COUNTY_NUMBER: 1,
      },
    );
  });

  it('enforces constraints on fields', async () => {
    const user = {USER_ID: 'user123'};
    const authClient = createTestClient({user});

    dataSources.ApplicationContactDao.updateContact.mockReturnValue(1);

    const query = `
      mutation {
        applicationUpdate(input: {
          contact: {
            APPLICANT_FIRST_NAME: "!nval!d nam3"
            APPLICANT_LAST_NAME: "Test"
            PAYEE_FIRST_NAME: "Test"
            PAYEE_LAST_NAME: "Test"
            IS_HOMELESS: true
            COUNTY_NUMBER: 1
          }
        })
      }
    `;
    const response = await authClient.query({ query });
    expect(response.errors[0].code).toEqual('GRAPHQL_VALIDATION_FAILED');
  });
  
  it('enforces required fields', async () => {
    const user = {USER_ID: 'user123'};
    const authClient = createTestClient({user});

    dataSources.ApplicationContactDao.updateContact.mockReturnValue(1);

    const query = `
      mutation {
        applicationUpdate(input: {
          contact: {
            APPLICANT_LAST_NAME: "Test"
            PAYEE_FIRST_NAME: "Test"
            PAYEE_LAST_NAME: "Test"
            IS_HOMELESS: true
            COUNTY_NUMBER: 1
          }
        })
      }
    `;
    const response = await authClient.query({ query });
    expect(response.errors[0].code).toEqual('GRAPHQL_VALIDATION_FAILED');
  });
});