const { SQLDataSource } = require('datasource-sql');
const oracledb = require('oracledb');

class LocationDao extends SQLDataSource {
  async getCounties() {
    const query = this.knex.column('COUNTY_NUMBER', 'COUNTY_NAME')
      .select()
      .from('OA_COUNTY');
    return query.cache(60 * 60);
  }

  /**
   * Returns whether the provided zipcode is valid in NJ
   * @param {*} ZIPCODE
   * @param {*} COUNTY_NUMBER
   * @param {*} IS_HOMELESS
   */
  async isValidNJZipcode(ZIPCODE, COUNTY_NUMBER, IS_HOMELESS) {
    const con = await this.knex.client.pool.acquire().promise;
    return this.knex.client.transaction(async (tx) => {
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
  }

  async getCountyDetails(USER_ID) {
    const con = await this.knex.client.pool.acquire().promise;
    return this.knex.client.transaction(async (tx) => {
      const bindVars = {
        user_id: { dir: oracledb.BIND_IN, val: USER_ID },
        county: { dir: oracledb.BIND_OUT },
      };
      return tx.raw('begin OA_PKG_GEN.SP_GET_COUNTY_DETAILS(:user_id, :county); end;', bindVars);
    }, { connection: con });
  }
}

module.exports = LocationDao;
