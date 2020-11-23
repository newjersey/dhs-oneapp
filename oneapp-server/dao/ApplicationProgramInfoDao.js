const { SQLDataSource } = require('datasource-sql');
const oracledb = require('oracledb');
const { OneAppError } = require('../utils/OneAppError');

class ApplicationProgramInfoDao extends SQLDataSource {
  async getProgramInfo(APPLICATION_ID, LANGUAGE) {
    const con = await this.knex.client.pool.acquire().promise;
    return this.knex.client.transaction(async (tx) => {
      const bindVars = {
        app_id: { dir: oracledb.BIND_IN, val: APPLICATION_ID },
        lang: { dir: oracledb.BIND_IN, val: LANGUAGE },
        info: { dir: oracledb.BIND_OUT },
      };
      return tx.raw('begin OA_PKG_APP.SP_SELECT_APPLICATION_PROGRAMS(:app_id, :lang, :info); end;', bindVars);
    }, { connection: con });
  }

  async updateProgramInfo(input) {
    const con = await this.knex.client.pool.acquire().promise;
    const response = await this.knex.client.transaction(async (tx) => {
      const bindVars = {
        input: { dir: oracledb.BIND_IN, val: input },
        msg: { dir: oracledb.BIND_OUT },
      };
      return tx.raw('begin OA_PKG_APP.SP_UPDATE_APPLICATION_PROGRAMS(:input, :msg); end;', bindVars);
    }, { connection: con });

    // Handle an error
    const responseCode = parseInt(response[0], 10);
    if (responseCode < 0) {
      throw new OneAppError(`Program info not updated. DB_ERROR: ${responseCode}`);
    }

    return responseCode;
  }
}

module.exports = ApplicationProgramInfoDao;