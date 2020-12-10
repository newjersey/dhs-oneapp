const { OneAppError } = require('../utils/OneAppError');
const USPSValidationService = require('./USPSValidationService');

describe('USPSValidationService getAddressDetails', () => {
  it('returns details for valid mock address', () => {
      const ADDRESS = '3 Brewster Rd';
      const ZIPCODE = '07114';
      const details = USPSValidationService.getAddressDetails(ADDRESS, ZIPCODE);
      expect(details.ADDRESS1).toBe(ADDRESS);
      expect(details.ZIP).toBe(ZIPCODE);
      expect(details.ZIP4).toBe(undefined);
  });

  it('returns error for invalid mock address', () => {
    const ADDRESS = '3 Brooster Rd';
    const ZIPCODE = '07114';
    const fn = () => USPSValidationService.getAddressDetails(ADDRESS, ZIPCODE);
    expect(fn).toThrow(new OneAppError('Please verify your mailing address.', 't2245'));
  });
});
