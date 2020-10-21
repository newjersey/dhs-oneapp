/* eslint-disable class-methods-use-this */
const { SQLDataSource } = require('datasource-sql');
const oracledb = require('oracledb');
const { OneAppError, OneAppAuthenticationError } = require('../utils/OneAppError');

class UserDao extends SQLDataSource {
  async getUser(USER_ID, conn = this.knex) {
    return conn.select('USER_ID', 'HINT_QUESTION', 'HINT_ANSWER', 'EMAIL_ADDRESS', 'CREATION_DATE')
      .from('OA_SAP_USER')
      .where({ USER_ID })
      .first();
  }

  async doesUserExist(USER_ID, conn = this.knex) {
    const userCount = await conn
      .from('OA_SAP_USER')
      .whereRaw('regexp_like(USER_ID, ?, \'i\')', [`^${USER_ID}$`]) // Check against case-insensitive USER_ID
      .count('USER_ID as users')
      .first();
    return parseInt(userCount.users, 10) > 0;
  }

  async authenticate(user) {
    const tx = await this.knex.transaction();

    try {
      const response = await tx.raw('begin OA_PKG_GEN.SP_AUTHENTICATE_APP_USER(?, ?); end;', [
        { dir: oracledb.BIND_IN, type: 'OA_RT_USER', val: user },
        { dir: oracledb.BIND_OUT, type: oracledb.DB_TYPE_NUMBER },
      ]);

      // Handle an error creating a user
      const responseCode = parseInt(response[0], 10);
      if (responseCode === 0) {
        throw new OneAppAuthenticationError('USER_PASS_INCORRECT', 't608');
      } else if (responseCode === -1) {
        throw new OneAppAuthenticationError('ACCOUNT_LOCKED', 't2260');
      } else if (responseCode === -2) {
        throw new OneAppAuthenticationError('ACCOUNT_LOCKED_RECREATE_ACCOUNT', 't2259');
      } else if (responseCode === -999) {
        throw new OneAppAuthenticationError('APPLICATION_45DAYS_EXPIRED', 't2319');
      } else if (responseCode < 1) {
        throw new OneAppError('UNKNOWN_ERROR');
      }

      // Fetch the created user from the database
      const createdUser = await this.getUser(user.USER_ID, tx);
      tx.commit();
      return createdUser;
    } catch (e) {
      tx.rollback();
      throw e;
    }
  }

  async createUser(user) {
    const tx = await this.knex.transaction();

    try {
      const response = await tx.raw('begin OA_PKG_GEN.SP_INSERT_APP_USER(?, ?); end;', [
        { dir: oracledb.BIND_IN, type: 'OA_RT_USER', val: user },
        { dir: oracledb.BIND_OUT, type: oracledb.DB_TYPE_NUMBER },
      ]);

      // Handle an error creating a user
      const responseCode = parseInt(response[0], 10);
      if (responseCode < -1) {
        throw new OneAppError(`User not created. DB_ERROR: ${responseCode}`);
      }

      // Fetch the created user from the database
      const createdUser = await this.getUser(user.USER_ID, tx);
      tx.commit();
      return createdUser;
    } catch (e) {
      tx.rollback();
      throw e;
    }
  }

  /**
   * Returns the question used for the password reset hint
   * @param {*} USER_ID
   * @param {*} SELECTED_LANGUAGE Optional. 0 is English. 1 is Spanish. Applies to older-style translations.
   */
  async getUserPasswordHintQuestion(USER_ID, SELECTED_LANGUAGE = 0) {
    // This is helpful to understand this syntax: https://github.com/knex/knex/issues/3451
    const con = await this.knex.client.pool.acquire().promise;
    return this.knex.client.transaction(async (tx) => {
      const UserType = await con.getDbObjectClass('OA_RT_USER');
      const user = new UserType({ USER_ID });

      const bindVars = {
        user: { dir: oracledb.BIND_INOUT, val: user },
        lang: SELECTED_LANGUAGE,
        msg: { dir: oracledb.BIND_OUT, type: oracledb.DB_TYPE_NUMBER },
      };

      return tx.raw('begin OA_PKG_GEN.SP_GET_HINT(:user, :lang, :msg); end;', bindVars);
    }, { connection: con });
  }

  /**
   * Resets the user's password
   * @param {*} USER_ID User to reset
   * @param {*} HINT_ANSWER Used to validate if the user can reset their password
   * @param {*} PASSWORD The new password to reset to. Will be hashed by the stored procedure
   */
  async resetUserPassword(USER_ID, HINT_ANSWER, PASSWORD) {
    const con = await this.knex.client.pool.acquire().promise;
    return this.knex.client.transaction(async (tx) => {
      const existingUser = await this.getUser(USER_ID);

      // Fall back on default error messages
      if (!existingUser) {
        throw new OneAppError('User not found.', 't2257');
      }

      const UserType = await con.getDbObjectClass('OA_RT_USER');
      const user = new UserType({ ...existingUser, HINT_ANSWER, PASSWORD });

      const bindVars = {
        user: { dir: oracledb.BIND_INOUT, val: user },
        msg: { dir: oracledb.BIND_OUT, type: oracledb.DB_TYPE_NUMBER },
      };

      return tx.raw('begin OA_PKG_GEN.SP_RESET_PASSWORD(:user, :msg); end;', bindVars);
    }, { connection: con });
  }
}

module.exports = UserDao;
