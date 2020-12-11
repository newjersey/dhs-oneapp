const { SQLDataSource } = require('datasource-sql');
const oracledb = require('oracledb');
const { toUpper } = require('lodash');
const { OneAppError, OneAppAuthenticationError } = require('../utils/OneAppError');
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
        return tx.raw('begin OA_PKG_APP.SP_SEND_APPLICATION(:app_id, :disclaimer, :info); end;', bindVars);
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

  async fetchConfirmationDetails(APPLICATION_NUMBER, USER_ID) {
    try {
      const con = await this.knex.client.pool.acquire().promise;
      const response = await this.knex.client.transaction(async (tx) => {
        // Don't allow access to applications the user does not own
        const userApplication = await tx
          .select('APPLICATION_NUMBER')
          .from('OA_APP_APPLICATION_HEADER')
          .whereRaw('regexp_like(USER_ID, ?, \'i\') and APPLICATION_NUMBER = ?', [`^${toUpper(USER_ID)}$`, APPLICATION_NUMBER]) // Check against case-insensitive USER_ID
          .first();
        if (userApplication == null) {
          throw new OneAppAuthenticationError('You do not have access to this data.');
        }

        const bindVars = {
          app_id: { dir: oracledb.BIND_IN, val: APPLICATION_NUMBER },
          confirmation: { dir: oracledb.BIND_OUT, type: oracledb.DB_TYPE_CURSOR },
        };
        return tx.raw('begin OA_PKG_GEN.SP_GET_CONFIRMATION_DETAILS(:app_id, :confirmation); end;', bindVars);
      }, { connection: con });

      try {
        const result = await response[0].getRow();
        return {
          ...result,
          IS_FS_SELECTED: result.IS_FS_SELECTED === 'Y',
          IS_TF_SELECTED: result.IS_TF_SELECTED === 'Y',
          IS_GA_SELECTED: result.IS_GA_SELECTED === 'Y',
        };
      } finally {
        response[0].close();
      }
    } catch (err) {
      logger.error(err);
      if (!(err instanceof OneAppAuthenticationError)) {
        throw new OneAppError('Failed to fetch application', 't247');
      }
      throw err;
    }
  }
}

module.exports = ApplicationDao;
