const { SQLDataSource } = require('datasource-sql');
const oracledb = require('oracledb');
const { OneAppError } = require('../utils/OneAppError');

class ApplicationFoodStampInfoDao extends SQLDataSource {
  async getFoodStampInfo(APPLICATION_ID, LANGUAGE) {
    const con = await this.knex.client.pool.acquire().promise;
    const response = await this.knex.client.transaction(async (tx) => {
      const bindVars = {
        app_id: { dir: oracledb.BIND_IN, val: APPLICATION_ID },
        lang: { dir: oracledb.BIND_IN, val: LANGUAGE },
        info: { dir: oracledb.BIND_OUT },
      };
      return tx.raw('begin OA_PKG_APP.SP_SELECT_FOOD_STAMP_INFO(:app_id, :lang, :info); end;', bindVars);
    }, { connection: con });
    return response[0];
  }

  async updateFoodStampInfo(APPLICATION_NUMBER, input) {
    const con = await this.knex.client.pool.acquire().promise;
    const response = await this.knex.client.transaction(async (tx) => {
      const FoodStampInfoType = await con.getDbObjectClass('OA_RT_FOOD_STAMP_INFO');
      const foodStampInfo = new FoodStampInfoType({
        APPLICATION_NUMBER,
        IS_GROSS_INCOME_LT_150: input.IS_GROSS_INCOME_LT_150 ? 'Y' : 'N',
        IS_RENT_GT_GROSS_INCOME: input.IS_RENT_GT_GROSS_INCOME ? 'Y' : 'N',
        HAS_MIGRANT_FARM_WORKER: input.HAS_MIGRANT_FARM_WORKER ? 'Y' : 'N',
        HAS_RECEIVED_EMERGENCY_FS: input.HAS_RECEIVED_EMERGENCY_FS ? 'Y' : 'N',
        EMERGENCY_FS_DATE: input.HAS_RECEIVED_EMERGENCY_FS ? input.EMERGENCY_FS_DATE : null,
        EMERGENCY_FS_LOCATION: input.HAS_RECEIVED_EMERGENCY_FS ? input.EMERGENCY_FS_LOCATION : null,
        EMERGENCY_FS_STATE: input.HAS_RECEIVED_EMERGENCY_FS ? input.EMERGENCY_FS_STATE : null,
      });
      const bindVars = {
        input: { dir: oracledb.BIND_IN, val: foodStampInfo },
        msg: { dir: oracledb.BIND_OUT, type: oracledb.DB_TYPE_NUMBER },
      };
      return tx.raw('begin OA_PKG_APP.SP_UPDATE_FOOD_STAMP_INFO(:input, :msg); end;', bindVars);
    }, { connection: con });

    // Handle an error
    const responseCode = parseInt(response[0], 10);
    if (responseCode < 0) {
      throw new OneAppError(`Food stamp info not updated. DB_ERROR: ${responseCode}`);
    }

    return responseCode;
  }
}

module.exports = ApplicationFoodStampInfoDao;
