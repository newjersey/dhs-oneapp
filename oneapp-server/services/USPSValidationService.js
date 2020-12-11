const { OneAppError } = require('../utils/OneAppError');

const MOCK_DATA = [
  {
    ADDRESS: '3 Brewster Rd',
    ZIPCODE: '07114',
    result: {
      ADDRESS1: '3 Brewster Rd', CITY: 'Newark', STATE: 'NJ', ZIP: '07114',
    },
  },
  {
    ADDRESS: '101 Atlantic City International Airport',
    ZIPCODE: '08234',
    result: {
      ADDRESS1: '101 Atlantic City International Airport', CITY: 'Egg Harbor Township', STATE: 'NJ', ZIP: '08234', ZIP4: '9590',
    },
  },
  {
    ADDRESS: '41 Airpark Rd',
    ZIPCODE: '08540',
    result: {
      ADDRESS1: '41 Airpark Rd', CITY: 'Princeton', STATE: 'NJ', ZIP: '08540', ZIP4: '1500',
    },
  },
];

const service = {
  getAddressDetails: (address, zipcode) => {
    const match = MOCK_DATA.find((mock) => mock.ADDRESS === address && mock.ZIPCODE === zipcode);
    if (match != null) {
      return match.result;
    }
    throw new OneAppError('Please verify your mailing address.', 't2245');
  },
};

module.exports = service;
