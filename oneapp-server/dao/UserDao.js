/* eslint-disable class-methods-use-this */
const { SQLDataSource } = require('datasource-sql');
const oracledb = require('oracledb');
const { AuthenticationError, ApolloError } = require('apollo-server-express');

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
        throw new AuthenticationError('USER_PASS_INCORRECT');
      } else if (responseCode === -1) {
        throw new AuthenticationError('UNKNOWN_ERROR: -1');
      } else if (responseCode === -2) {
        throw new AuthenticationError('UNKNOWN_ERROR: -2');
      } else if (responseCode === -999) {
        throw new AuthenticationError('UNKNOWN_ERROR: -999');
      } else if (responseCode < 1) {
        throw new AuthenticationError(`Unable to authenticate. errorCode=${responseCode}`);
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
        throw new ApolloError('User not created.', `DB_ERROR: ${responseCode}`);
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
    await this.knex.client.transaction(async (tx) => {
      const UserType = await con.getDbObjectClass('OA_RT_USER');
      const user = new UserType({ USER_ID });

      const bindVars = {
        user: { dir: oracledb.BIND_INOUT, val: user },
        lang: SELECTED_LANGUAGE,
        msg: { dir: oracledb.BIND_OUT, type: oracledb.DB_TYPE_NUMBER },
      };

      const response = await tx.raw('begin OA_PKG_GEN.SP_GET_HINT(:user, :lang, :msg); end;', bindVars);
      const responseCode = parseInt(response[1], 10);

      // Handle main success
      if (responseCode === 1) {
        console.log(user);
        return 'mainFlow';
      }

      if (responseCode === -2) {
        throw new ApolloError('User account locked.', `DB_ERROR: ${responseCode}`);
      } else {
        throw new ApolloError('User not found.', `DB_ERROR: ${responseCode}`);
      }
    }, { connection: con });
  }
}

module.exports = UserDao;
