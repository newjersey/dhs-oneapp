const { SQLDataSource } = require('datasource-sql');

class LocationDao extends SQLDataSource {
  async getCounties() {
    const query = this.knex.column('COUNTY_NUMBER', 'COUNTY_NAME')
      .select()
      .from('OA_COUNTY');
    return query.cache(60 * 60);
  }

  async isValidNJZipcode(ZIPCODE, COUNTY_NUMBER) {
    const zipcodeCount = await this.knex
      .from('OA_COUNTY_ZIP_LOOKUP')
      .where({ ZIP_CODE: ZIPCODE })
      .where({ COUNTY_NUMBER })
      .count('ZIP_CODE as zipcodes')
      .first();
    return parseInt(zipcodeCount.zipcodes, 10) > 0;
  }

  async getCountyForUser(USER_ID) {
    const countyNumber = await this.knex.select('COUNTY_NUMBER')
      .from('OA_APP_APPLICATION_CONTACT')
      .where({ APPLICATION_NUMBER: USER_ID })
      .first();
    const countyName = await this.knex.select('COUNTY_NAME')
      .from('OA_COUNTY')
      .where({ COUNTY_NUMBER: countyNumber })
      .first();
    return {
      COUNTY_NUMBER: countyNumber,
      COUNTY_NAME: countyName,
    };
  }
}

module.exports = LocationDao;
