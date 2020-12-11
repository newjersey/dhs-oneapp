const { createTestClient, dataSources, services } = require('../__utils/TestingUtils');
const client = createTestClient();

describe('TANF/GA query', () => {
  it('queries TANF/GA header', async () => {
    const user = {USER_ID: 'user123'};
    const authClient = createTestClient({user});
    const REASON = "A reason for moving";

    dataSources.TanfGaHeaderDao.getTanfGaHeader.mockReturnValue({
      WILL_SEEK_EMPLOYMENT: "Yes",
      WILL_REGISTER_FOR_WORK: "Yes",
      WILLING_TO_WORK: "Yes",
      WILL_CONTINUE_LIVING_IN_NJ: "No",
      WONT_CONTINUE_REASON: REASON,
    });

    const query = `
      {
        application {
          tanfGaHeader { 
            WILL_SEEK_EMPLOYMENT
            WILL_REGISTER_FOR_WORK
            WILLING_TO_WORK
            WILL_CONTINUE_LIVING_IN_NJ
            WONT_CONTINUE_REASON
          }
        }
      } 
    `;
    const response = await authClient.query({ query });
    expect(response.data.application.tanfGaHeader.WILL_SEEK_EMPLOYMENT).toEqual('Yes');
    expect(response.data.application.tanfGaHeader.WILL_CONTINUE_LIVING_IN_NJ).toEqual('No');
    expect(response.data.application.tanfGaHeader.WONT_CONTINUE_REASON).toEqual(REASON);

    expect(dataSources.TanfGaHeaderDao.getTanfGaHeader).toHaveBeenCalledWith(
      "user123",
      0,
    );
  });
}); 