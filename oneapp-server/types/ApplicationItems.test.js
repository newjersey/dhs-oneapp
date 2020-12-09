const { createTestClient, dataSources, services } = require('../__utils/TestingUtils');
const client = createTestClient();

describe('application items query', () => {
  it('queries app items', async () => {
    const user = {USER_ID: 'user123'};
    const authClient = createTestClient({user});
    const CODE_TYPE = 'FI';

    dataSources.ApplicationItemsDao.getItems.mockReturnValue({
      CODE_TYPE,
      CODE: CODE_TYPE,
      HAVE_THIS: true,
    });

    const query = `
      {
        application {
            items(codeType: "FI") { 
              CODE_TYPE
              CODE
              HAVE_THIS
          }
        }
      } 
    `;
    const response = await authClient.query({ query });
    expect(response.data.application.items.CODE_TYPE).toEqual(CODE_TYPE);
    expect(response.data.application.items.CODE).toEqual(CODE_TYPE);
    expect(response.data.application.items.HAVE_THIS).toEqual(true);

    expect(dataSources.ApplicationItemsDao.getItems).toHaveBeenCalledWith(
      "user123",
      CODE_TYPE,
      0,
    );
  });
});