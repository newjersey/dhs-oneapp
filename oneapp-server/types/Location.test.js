const { createTestClient, dataSources, services } = require('../__utils/TestingUtils');
const client = createTestClient();
const { OneAppError } = require('../utils/OneAppError');

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

describe('fetch validated mailing address details', () => {
  const user = {USER_ID};
  const authClient = createTestClient({user});

  it('returns details for valid address', async () => {
    const ADDRESS = '41 Airpark Rd';
    const CITY = 'Princeton';
    const STATE = 'NJ';
    const ZIP = '08540';
    const ZIP4 = '1500';
    services.USPSValidationService.getAddressDetails.mockReturnValue({
      ADDRESS1: ADDRESS, CITY, STATE, ZIP, ZIP4,
    });

    const query = `
      {
        getAddressDetails(ADDRESS: "41 Airpark Rd", ZIPCODE: "08540") {
          ADDRESS1
          CITY
          ZIP4
        }
      } 
    `;
    const response = await authClient.query({ query });
    expect(services.USPSValidationService.getAddressDetails).toHaveBeenCalledWith(ADDRESS, ZIP);
    expect(response.data.getAddressDetails.ADDRESS1).toEqual(ADDRESS);
    expect(response.data.getAddressDetails.CITY).toEqual(CITY);
    expect(response.data.getAddressDetails.ZIP4).toEqual(ZIP4);
  });

  it('throws OneAppError for invalid mailing address', async () => {
    const user = {USER_ID};
    const authClient = createTestClient({user});

    services.USPSValidationService.getAddressDetails.mockReturnValue(new OneAppError('Please verify your mailing address.', 't2245'));

    const query = `
    {
      getAddressDetails(ADDRESS: "Invalid address", ZIPCODE: "11111") {
        ADDRESS1
        CITY
        ZIP4
      }
    }  
    `;

    const response = await authClient.query({ query });
    expect(services.USPSValidationService.getAddressDetails).toHaveBeenCalledWith("Invalid address", "11111");
    expect(response.errors[0].code).toEqual('OneAppError');
    expect(response.errors[0].message).toEqual('Please verify your mailing address.');
  });
});
