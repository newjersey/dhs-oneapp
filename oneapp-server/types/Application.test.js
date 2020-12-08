const { createTestClient, dataSources, services } = require('../__utils/TestingUtils');
const client = createTestClient();

describe('application confirmation query', () => {
  it('returns confirmation details when authenticated', async () => {
    const user = {USER_ID: 'user123456'};
    const authClient = createTestClient({user});

    dataSources.ApplicationDao.fetchConfirmationDetails.mockReturnValue({
      APPLICATION_NUMBER: 'sent'
    });

    const query = `
      query {
        applicationConfirmation(APPLICATION_NUMBER: "sent") {
          APPLICATION_NUMBER
        }
      } 
    `;
    const response = await authClient.query({ query });
    expect(response.data.applicationConfirmation.APPLICATION_NUMBER).toEqual('sent');
    expect(dataSources.ApplicationDao.fetchConfirmationDetails).toHaveBeenCalledWith('sent', user.USER_ID);
  });

  it('fails when unauthenticated', async () => {
    const query = `
    query {
      applicationConfirmation(APPLICATION_NUMBER: "sent") {
        APPLICATION_NUMBER
      }
    } 
    `;
    const response = await client.query({ query });
    expect(response.errors[0].code).toEqual('UNAUTHENTICATED');
    expect(response.errors[0].message).toEqual('You must be logged in to access this data.');
  });
});

describe('send application mutation', () => {
  it('sends when authenticated', async () => {
    const user = {USER_ID: 'user123456'};
    const authClient = createTestClient({user});

    dataSources.ApplicationDao.sendApplication.mockReturnValue({
      APPLICATION_NUMBER: 'sent'
    });

    const query = `
      mutation {
        applicationSend(DISCLAIMER_UNDERSTOOD: Y) {
          APPLICATION_NUMBER
        }
      } 
    `;
    const response = await authClient.query({ query });
    expect(response.data.applicationSend.APPLICATION_NUMBER).toEqual('sent');
    expect(dataSources.ApplicationDao.sendApplication).toHaveBeenCalledWith(user.USER_ID, 'Y');
  });

  it('fails to send when unauthenticated', async () => {
    const query = `
      mutation {
        applicationSend(DISCLAIMER_UNDERSTOOD: Y) {
          APPLICATION_NUMBER
        }
      } 
    `;
    const response = await client.query({ query });
    expect(response.errors[0].code).toEqual('UNAUTHENTICATED');
    expect(response.errors[0].message).toEqual('You must be logged in to access this data.');
  });
});