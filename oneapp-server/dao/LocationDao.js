const { SQLDataSource } = require('datasource-sql');
const oracledb = require('oracledb');
const soap = require('soap');

class LocationDao extends SQLDataSource {
  async getCounties() {
    const query = this.knex.column('COUNTY_NUMBER', 'COUNTY_NAME')
      .select()
      .from('OA_COUNTY');
    return query.cache(60 * 60);
  }

  /**
   * Returns whether the provided zipcode is valid in NJ
   * @param {*} ZIPCODE Zipcode in string format because all NJ zipcodes start with `0`
   * @param {*} COUNTY_NUMBER Code of county provided
   * @param {*} IS_HOMELESS If true, validation returns true
   */
  async isValidNJZipcode(ZIPCODE, COUNTY_NUMBER, IS_HOMELESS) {
    const con = await this.knex.client.pool.acquire().promise;
    const response = await this.knex.client.transaction(async (tx) => {
      // Stored procedure expects string value
      const isHomelessStr = IS_HOMELESS ? 'True' : 'False';
      const bindVars = {
        zipcode: { dir: oracledb.BIND_IN, val: ZIPCODE },
        county: { dir: oracledb.BIND_IN, val: COUNTY_NUMBER },
        is_homeless: { dir: oracledb.BIND_IN, val: isHomelessStr },
        is_valid: { dir: oracledb.BIND_OUT, type: oracledb.DB_TYPE_NUMBER },
      };
      return tx.raw('begin OA_PKG_APP.SP_VALIDATE_ZIPCODE(:zipcode, :county, :is_homeless, :is_valid); end;', bindVars);
    }, { connection: con });
    return response[0] !== 0;
  }

  async getCountyDetails(USER_ID) {
    const con = await this.knex.client.pool.acquire().promise;
    const response = await this.knex.client.transaction(async (tx) => {
      const bindVars = {
        user_id: { dir: oracledb.BIND_IN, val: USER_ID },
        county: { dir: oracledb.BIND_OUT, type: oracledb.DB_TYPE_CURSOR },
      };
      return tx.raw('begin OA_PKG_GEN.SP_GET_COUNTY_DETAILS(:user_id, :county); end;', bindVars);
    }, { connection: con });
    const result = await response[0].getRow();
    response[0].close();
    return {
      COUNTY_NAME: result ? result.COUNTY_NAME : null,
      COUNTY_NUMBER: result ? result.COUNTY_NUMBER : null,
    };
  }

  async isValidAddress(input) {
    const url = 'https://sws.dhs.state.nj.us/uspsControl.wsdl';
    const args = {address: input.ADDRESS, CtyStateOrZip: input.CITY, accessKey: '***REMOVED***'}
    return await soap.createClientAsync(url).then((client) => {
      return client.validateAddress(args);
    }).then((result) => {
      console.log(result);
      return result;
    });
    return input !== null;
  }
}

module.exports = LocationDao;
