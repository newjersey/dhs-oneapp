const { SQLDataSource } = require('datasource-sql');
const oracledb = require('oracledb');
const { OneAppError } = require('../utils/OneAppError');

class ApplicationItemsDao extends SQLDataSource {
  async getItems(APPLICATION_ID, CODE_TYPE, LANGUAGE) {
    const con = await this.knex.client.pool.acquire().promise;
    const response = await this.knex.client.transaction(async (tx) => {
      const bindVars = {
        app_id: { dir: oracledb.BIND_IN, val: APPLICATION_ID },
        code_type: { dir: oracledb.BIND_IN, val: CODE_TYPE },
        lang: { dir: oracledb.BIND_IN, val: LANGUAGE },
        info: { dir: oracledb.BIND_OUT, type: 'OA_TT_APPLICATION_ITEMS' },
      };
      return tx.raw('begin OA_PKG_APP.SP_SELECT_APPLICATION_ITEMS(:app_id, :code_type, :lang, :info); end;', bindVars);
    }, { connection: con });
    return response[0].getElement(0);
  }

  async updateItems(APPLICATION_NUMBER, input) {
    const con = await this.knex.client.pool.acquire().promise;
    const response = await this.knex.client.transaction(async (tx) => {
      const ItemType = await con.getDbObjectClass('OA_TT_APPLICATION_ITEMS');
      const item = new ItemType({
        APPLICATION_NUMBER,
        CODE_TYPE: input.CODE_TYPE,
        CODE: input.CODE,
        HAVE_THIS: input.HAVE_THIS ? 'Y' : 'N',
      });
      const bindVars = {
        input: { dir: oracledb.BIND_IN, val: item },
        msg: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER },
      };
      return tx.raw('begin OA_PKG_APP.SP_UPDATE_APPLICATION_ITEMS(:input, :msg); end;', bindVars);
    }, { connection: con });

    // Handle an error
    const responseCode = parseInt(response[0], 10);
    if (responseCode < 0) {
      throw new OneAppError(`Items not updated. DB_ERROR: ${responseCode}`);
    }

    return responseCode;
  }
}

module.exports = ApplicationItemsDao;