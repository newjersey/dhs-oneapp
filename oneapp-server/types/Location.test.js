const { createTestClient, dataSources } = require('../__utils/TestingUtils');
const client = createTestClient();

// All NJ zipcodes start with 0
const ZIPCODE = "07001";
const COUNTY_NUMBER = 12;
const COUNTY = { COUNTY_NAME: 'MIDDLESEX', COUNTY_NUMBER: COUNTY_NUMBER };
const COUNTIES = [COUNTY];
const USER_ID = "test";

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
        isValidNJZipcode(ZIPCODE: "07001", COUNTY_NUMBER: 12, IS_HOMELESS: false)
      }
    `;
    const response = await client.query({ query });
    expect(dataSources.LocationDao.isValidNJZipcode).toHaveBeenCalledWith(
      ZIPCODE,
      COUNTY_NUMBER,
      false,
    );
  });
});

describe('get county for user', () => {
  it('return unauthenticated without a bearer token', async () => {
    const query = `
      {
        getCountyDetails {
          COUNTY_NAME
          COUNTY_NUMBER
        }
      } 
    `;
    const response = await client.query({ query });
    expect(response.errors[0].code).toEqual('UNAUTHENTICATED');
    expect(response.errors[0].message).toEqual('You must be logged in to access this data.');
  });

  it('return the current logged in user when authenticated', async () => {
    const user = {USER_ID};
    const authClient = createTestClient({user});

    dataSources.LocationDao.getCountyDetails.mockReturnValue(COUNTY);

    const query = `
      {
        getCountyDetails {
          COUNTY_NAME
          COUNTY_NUMBER
        }
      } 
    `;
    const response = await authClient.query({ query });
    expect(dataSources.LocationDao.getCountyDetails).toHaveBeenCalledWith(USER_ID);
    expect(response.data.getCountyDetails).toEqual(COUNTY);
  });
});
