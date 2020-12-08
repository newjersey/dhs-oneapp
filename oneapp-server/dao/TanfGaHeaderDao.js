const { SQLDataSource } = require('datasource-sql');
const oracledb = require('oracledb');
const { OneAppError } = require('../utils/OneAppError');

class TanfGaHeaderDao extends SQLDataSource {
  async getTanfGaHeader(APPLICATION_ID, LANGUAGE) {
    const con = await this.knex.client.pool.acquire().promise;
    return this.knex.client.transaction(async (tx) => {
      const bindVars = {
        app_id: { dir: oracledb.BIND_IN, val: APPLICATION_ID },
        lang: { dir: oracledb.BIND_IN, val: LANGUAGE },
        info: { dir: oracledb.BIND_OUT, type: 'OA_TT_TANF_GA_HEADER' },
      };
      return tx.raw('begin OA_PKG_APP.SP_SELECT_TANF_GA_HEADER(:app_id, :lang, :info); end;', bindVars);
    }, { connection: con });
  }

  async updateTanfGaHeader(input) {
    const con = await this.knex.client.pool.acquire().promise;

    const HeaderType = await con.getDbObjectClass('OA_RT_TANF_GA_HEADER');

    // Validate logic for input fields
    const parsedInput = input;
    if (parsedInput.WILL_CONTINUE_LIVING_IN_NJ === true) {
      parsedInput.WONT_CONTINUE_REASON = null;
    }

    const header = new HeaderType({
      WILL_SEEK_EMPLOYMENT: input.WILL_SEEK_EMPLOYMENT,
      WILL_REGISTER_FOR_WORK: input.WILL_REGISTER_FOR_WORK,
      WILLING_TO_WORK: input.WILLING_TO_WORK,
      WILL_CONTINUE_LIVING_IN_NJ: input.WILL_CONTINUE_LIVING_IN_NJ,
      WONT_CONTINUE_REASON: input.WILL_CONTINUE_LIVING_IN_NJ === true ? null : input.WILL_CONTINUE_LIVING_IN_NJ,
    });

    const response = await this.knex.client.transaction(async (tx) => {
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
