const { createTestClient, dataSources } = require('../__utils/TestingUtils');

describe('application contact query', () => {
  it('fetches contact info', async () => {
    const user = {USER_ID: 'user123'};
    const authClient = createTestClient({user});

    dataSources.ApplicationContactDao.getContact.mockReturnValue({
      APPLICANT_FIRST_NAME: "Test",
      APPLICANT_LAST_NAME: "Test",
      PAYEE_FIRST_NAME: "Test",
      PAYEE_LAST_NAME: "Test",
      IS_HOMELESS: true,
      COUNTY_NUMBER: 1,
    });

    const query = `
      {
        application {
          contact { 
            APPLICANT_FIRST_NAME
            IS_HOMELESS
            COUNTY_NUMBER
          }
        }
      } 
    `;
    const response = await authClient.query({ query });
    expect(response.data.application.contact.APPLICANT_FIRST_NAME).toEqual('Test');
    expect(response.data.application.contact.IS_HOMELESS).toEqual(true);
    expect(response.data.application.contact.COUNTY_NUMBER).toEqual(1);

    expect(dataSources.ApplicationContactDao.getContact).toHaveBeenCalledWith(
      "user123",
      0,
    );
  });
});