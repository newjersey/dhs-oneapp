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
}

module.exports = LocationDao;
