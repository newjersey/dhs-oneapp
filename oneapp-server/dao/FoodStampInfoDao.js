const { SQLDataSource } = require('datasource-sql');
const oracledb = require('oracledb');

class FoodStampInfoDao extends SQLDataSource {
  async getFoodStampInfo(APPLICATION_ID, LANGUAGE) {
    const con = await this.knex.client.pool.acquire().promise;
    return this.knex.client.transaction(async (tx) => {
      const bindVars = {
        app_id: { dir: oracledb.BIND_IN, val: APPLICATION_ID },
        lang: { dir: oracledb.BIND_IN, val: LANGUAGE },
        info: { dir: oracledb.BIND_OUT },
      };
      return tx.raw('begin OA_PKG_APP.SP_SELECT_FOOD_STAMP_INFO(:app_id, :lang, :info); end;', bindVars);
    }, { connection: con });
  }

  async updateFoodStampInfo(input) {
    const con = await this.knex.client.pool.acquire().promise;
    return this.knex.client.transaction(async (tx) => {
      const bindVars = {
        input: { dir: oracledb.BIND_IN, val: input },
        msg: { dir: oracledb.BIND_OUT },
      };
      return tx.raw('begin OA_PKG_APP.SP_UPDATE_FOOD_STAMP_INFO(:input, :msg); end;', bindVars);
    }, { connection: con });
  }
}

module.exports = FoodStampInfoDao;
