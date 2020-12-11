const { SQLDataSource } = require('datasource-sql');
const oracledb = require('oracledb');
const { OneAppError } = require('../utils/OneAppError');

class TanfGaHeaderDao extends SQLDataSource {
  async getTanfGaHeader(APPLICATION_ID, LANGUAGE) {
    const con = await this.knex.client.pool.acquire().promise;
    const response = await this.knex.client.transaction(async (tx) => {
      const bindVars = {
        app_id: { dir: oracledb.BIND_IN, val: APPLICATION_ID },
        lang: { dir: oracledb.BIND_IN, val: LANGUAGE },
        info: { dir: oracledb.BIND_OUT, type: 'OA_TT_TANF_GA_HEADER' },
      };
      return tx.raw('begin OA_PKG_APP.SP_SELECT_TANF_GA_HEADER(:app_id, :lang, :info); end;', bindVars);
    }, { connection: con });
    return response[0].getElement(0);
  }

  async updateTanfGaHeader(APPLICATION_NUMBER, input) {
    const con = await this.knex.client.pool.acquire().promise;
    const response = await this.knex.client.transaction(async (tx) => {
      const HeaderType = await con.getDbObjectClass('OA_RT_TANF_GA_HEADER');
      const header = new HeaderType({
        APPLICATION_NUMBER,
        WILL_SEEK_EMPLOYMENT: input.WILL_SEEK_EMPLOYMENT ? 'Y' : 'N',
        WILL_REGISTER_FOR_WORK: input.WILL_REGISTER_FOR_WORK ? 'Y' : 'N',
        WILLING_TO_WORK: input.WILLING_TO_WORK ? 'Y' : 'N',
        WILL_CONTINUE_LIVING_IN_NJ: input.WILL_CONTINUE_LIVING_IN_NJ ? 'Y' : 'N',
        WONT_CONTINUE_REASON: input.WILL_CONTINUE_LIVING_IN_NJ === true ? null : input.WONT_CONTINUE_REASON,
      });
      const bindVars = {
        input: { dir: oracledb.BIND_IN, val: header },
        msg: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER },
      };
      return tx.raw('begin OA_PKG_APP.SP_UPDATE_TANF_GA_HEADER(:input, :msg); end;', bindVars);
    }, { connection: con });

    // Handle an error
    const responseCode = parseInt(response[0], 10);
    if (responseCode < 0) {
      throw new OneAppError(`TANF/GA header not updated. DB_ERROR: ${responseCode}`);
    }

    return responseCode;
  }
}

module.exports = TanfGaHeaderDao;
