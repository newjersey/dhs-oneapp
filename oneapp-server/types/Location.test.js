const { createTestClient, dataSources } = require('../__utils/TestingUtils');
const client = createTestClient();

// All NJ zipcodes start with 0
const ZIPCODE = 8055;
const COUNTY_NUMBER = 3;
const COUNTY = { COUNTY_NAME: 'BURLINGTON', COUNTY_NUMBER: COUNTY_NUMBER };
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

describe('checks if valid NJ zipcode', () => {
  it('passes through correct zipcode and county arguments', async () => {
    const query = `
      {
        isValidNJZipcode(ZIPCODE: 8055, COUNTY_NUMBER: 3)
      }
    `;
    const response = await client.query({ query });
    expect(dataSources.LocationDao.isValidNJZipcode).toHaveBeenCalledWith(
      ZIPCODE,
      COUNTY_NUMBER,
    );
  });
});
