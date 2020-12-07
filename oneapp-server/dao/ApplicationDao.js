const { SQLDataSource } = require('datasource-sql');
const oracledb = require('oracledb');
const { OneAppError } = require('../utils/OneAppError');
const logger = require('../logger.config');

class ApplicationDao extends SQLDataSource {
  async sendApplication(APPLICATION_ID, DISCLAIMER_UNDERSTOOD) {
    try {
      const con = await this.knex.client.pool.acquire().promise;
      const response = await this.knex.client.transaction(async (tx) => {
        const bindVars = {
          app_id: { dir: oracledb.BIND_IN, val: APPLICATION_ID },
          disclaimer: { dir: oracledb.BIND_IN, val: DISCLAIMER_UNDERSTOOD },
          info: { dir: oracledb.BIND_OUT, type: oracledb.DB_TYPE_CURSOR },
        };
        return tx.raw('begin OA_PKG_APP.SP_SELECT_FOOD_STAMP_INFO(:app_id, :disclaimer, :info); end;', bindVars);
      }, { connection: con });

      try {
        const result = await response[0].getRow();
        return result;
      } finally {
        response[0].close();
      }
    } catch (err) {
      logger.error(err);
      throw new OneAppError('Failed to send application', 't247');
    }
  }
}

module.exports = ApplicationDao;
