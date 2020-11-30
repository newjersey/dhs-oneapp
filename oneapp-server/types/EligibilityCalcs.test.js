const { createTestClient, dataSources, services } = require('../__utils/TestingUtils');
const client = createTestClient();
const passwordGenerator = require('generate-password');

jest.mock('generate-password');

describe('food stamp eligibility', () => {
  it('return unauthenticated when not signed in', async () => {
    const query = `
      {
        application {
          eligibility { FOODSTAMP_TEST }
        }
      } 
    `;
    const response = await client.query({ query });
    expect(response.errors[0].code).toEqual('UNAUTHENTICATED');
    expect(response.errors[0].message).toEqual('You must be logged in to access this data.');
  });
  
  it('return the foodstamp eligibility calculations', async () => {
    const user = {USER_ID: 'user123456'};
    const authClient = createTestClient({user});
    const foodstampCalcs = {FOODSTAMP_TEST: 'INELIGIBLE', FOODSTAMP_BENEFITS: 'test', GROSS_INCOME_TEST: 'PASSED', NET_INCOME_TEST: 'PASSED'};

    dataSources.EligibilityCalcsDao.getEligibility.mockReturnValue(foodstampCalcs);

    const query = `
      {
        application {
          eligibility { 
            FOODSTAMP_TEST
            FOODSTAMP_BENEFITS
            GROSS_INCOME_TEST
            NET_INCOME_TEST
          }
        }
      } 
    `;
    const response = await authClient.query({ query });
    expect(response.data.application.eligibility).toEqual(foodstampCalcs);

    expect(dataSources.EligibilityCalcsDao.getEligibility).toHaveBeenCalledWith(user.USER_ID, "en");
  });
});