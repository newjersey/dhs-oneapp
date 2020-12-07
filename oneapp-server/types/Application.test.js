const { createTestClient, dataSources, services } = require('../__utils/TestingUtils');
const client = createTestClient();

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
})