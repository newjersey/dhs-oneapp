const { createTestClient, dataSources } = require('../__utils/TestingUtils');
const client = createTestClient();

const COUNTY = { COUNTY_NAME: 'Hudson County', COUNTY_NUMBER: '123' };
const COUNTIES = [COUNTY];

describe('counties query', () => {
  beforeEach(() => {
    dataSources.LocationDao.getCounties.mockReturnValue(COUNTIES);
  });

  it('returns all counties', async () => {
    const query = `
      {
        counties { COUNTY_NAME, COUNTY_NUMBER }
      }
    `;
    const response = await client.query({ query });
    expect(response.data.counties).toEqual(COUNTIES);
    expect(dataSources.LocationDao.getCounties).toHaveBeenCalled();
  });
});