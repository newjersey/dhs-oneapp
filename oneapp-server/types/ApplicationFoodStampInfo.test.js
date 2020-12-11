const { createTestClient, dataSources } = require('../__utils/TestingUtils');

describe('application food stamp info query', () => {
  it('fetches food stamp info', async () => {
    const user = {USER_ID: 'user123'};
    const authClient = createTestClient({user});

    dataSources.ApplicationFoodStampInfoDao.getFoodStampInfo.mockReturnValue({
      IS_GROSS_INCOME_LT_150: true,
      IS_RENT_GT_GROSS_INCOME: true,
      HAS_MIGRANT_FARM_WORKER: false,
      HAS_RECEIVED_EMERGENCY_FS: true,
      EMERGENCY_FS_DATE: null,
      EMERGENCY_FS_LOCATION: 'Newark',
      EMERGENCY_FS_STATE: 'NJ',
    });

    const query = `
      {
        application {
          foodStampInfo { 
            HAS_RECEIVED_EMERGENCY_FS
            EMERGENCY_FS_LOCATION
            EMERGENCY_FS_STATE
          }
        }
      } 
    `;
    const response = await authClient.query({ query });
    expect(response.data.application.foodStampInfo.HAS_RECEIVED_EMERGENCY_FS).toEqual(true);
    expect(response.data.application.foodStampInfo.EMERGENCY_FS_LOCATION).toEqual('Newark');
    expect(dataSources.ApplicationFoodStampInfoDao.getFoodStampInfo).toHaveBeenCalledWith(
      "user123",
      0,
    );
  });
});