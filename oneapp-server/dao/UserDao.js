/* eslint-disable class-methods-use-this */
const { SQLDataSource } = require('datasource-sql');
const oracledb = require('oracledb');
const { AuthenticationError } = require('apollo-server-express');
const logger = require('../logger.config');

class UserDao extends SQLDataSource {
  async getUser(USER_ID, conn = this.knex) {
    return conn.select('USER_ID', 'HINT_QUESTION', 'HINT_ANSWER', 'EMAIL_ADDRESS', 'CREATION_DATE')
      .from('OA_SAP_USER')
      .where({ USER_ID })
      .first();
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
}

module.exports = UserDao;
