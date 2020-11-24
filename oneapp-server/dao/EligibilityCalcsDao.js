const { SQLDataSource } = require('datasource-sql');
const oracledb = require('oracledb');

class EligibilityCalcsDao extends SQLDataSource {
  async getEligibility(APPLICATION_ID, LANGUAGE) {
    const con = await this.knex.client.pool.acquire().promise;
    const response = await this.knex.client.transaction(async (tx) => {
      const bindVars = {
        app_id: { dir: oracledb.BIND_IN, val: APPLICATION_ID },
        lang: { dir: oracledb.BIND_IN, val: LANGUAGE },
        eligibility: { dir: oracledb.BIND_OUT, type: oracledb.DB_TYPE_CURSOR },
      };
      return tx.raw('begin OA_PKG_UTIL.GET_ELIGIBILITY(:app_id, :lang, :eligibility); end;', bindVars);
    }, { connection: con });
    const result = await response[0].getRow();
    response[0].close();
    return result;
  }

  async getFcEligibility(APPLICATION_ID, LANGUAGE) {
    const con = await this.knex.client.pool.acquire().promise;
    const response = await this.knex.client.transaction(async (tx) => {
      const bindVars = {
        app_id: { dir: oracledb.BIND_IN, val: APPLICATION_ID },
        lang: { dir: oracledb.BIND_IN, val: LANGUAGE },
        eligibility: { dir: oracledb.BIND_OUT, type: oracledb.DB_TYPE_CURSOR },
      };
      return tx.raw('begin OA_PKG_UTIL.GET_FC_ELIGIBILITY(:app_id, :lang, :eligibility); end;', bindVars);
    }, { connection: con });
    const result = await response[0].getRow();
    response[0].close();
    return result;
  }

  async getTfEligibility(APPLICATION_ID, LANGUAGE) {
    const con = await this.knex.client.pool.acquire().promise;
    const response = await this.knex.client.transaction(async (tx) => {
      const bindVars = {
        app_id: { dir: oracledb.BIND_IN, val: APPLICATION_ID },
        lang: { dir: oracledb.BIND_IN, val: LANGUAGE },
        eligibility: { dir: oracledb.BIND_OUT, type: oracledb.DB_TYPE_CURSOR },
      };
      return tx.raw('begin OA_PKG_UTIL.GET_TF_ELIGIBILITY(:app_id, :lang, :eligibility); end;', bindVars);
    }, { connection: con });
    const result = await response[0].getRow();
    response[0].close();
    return result;
  }

  async getGaEligibility(APPLICATION_ID, LANGUAGE) {
    const con = await this.knex.client.pool.acquire().promise;
    const response = await this.knex.client.transaction(async (tx) => {
      const bindVars = {
        app_id: { dir: oracledb.BIND_IN, val: APPLICATION_ID },
        lang: { dir: oracledb.BIND_IN, val: LANGUAGE },
        eligibility: { dir: oracledb.BIND_OUT, type: oracledb.DB_TYPE_CURSOR },
      };
      return tx.raw('begin OA_PKG_UTIL.GET_GA_ELIGIBILITY(:app_id, :lang, :eligibility); end;', bindVars);
    }, { connection: con });
    const result = await response[0].getRow();
    response[0].close();
    return result;
  }
}

module.exports = EligibilityCalcsDao;
