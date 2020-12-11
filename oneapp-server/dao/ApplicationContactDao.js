const { SQLDataSource } = require('datasource-sql');
const oracledb = require('oracledb');
const { OneAppError } = require('../utils/OneAppError');

class ApplicationContactDao extends SQLDataSource {
  async getContact(APPLICATION_ID, LANGUAGE) {
    const con = await this.knex.client.pool.acquire().promise;
    const response = await this.knex.client.transaction(async (tx) => {
      const bindVars = {
        app_id: { dir: oracledb.BIND_IN, val: APPLICATION_ID },
        lang: { dir: oracledb.BIND_IN, val: LANGUAGE },
        info: { dir: oracledb.BIND_OUT, type: 'OA_TT_APP_CONTACT' },
      };
      return tx.raw('begin OA_PKG_APP.SP_SELECT_APP_CONTACT(:app_id, :lang, :info); end;', bindVars);
    }, { connection: con });
    return response[0].getElement(0);
  }

  async updateContact(APPLICATION_NUMBER, input) {
    const con = await this.knex.client.pool.acquire().promise;
    const response = await this.knex.client.transaction(async (tx) => {
      const ContactType = await con.getDbObjectClass('OA_RT_APP_CONTACT');
      const contact = new ContactType({
        APPLICATION_NUMBER,
        APPLICATION_TYPE: 'OA', // Always OA for OneApp
        APPLICANT_FIRST_NAME: input.APPLICANT_FIRST_NAME,
        APPLICANT_LAST_NAME: input.APPLICANT_LAST_NAME,
        APPLICANT_MIDDLE_NAME: input.APPLICANT_MIDDLE_NAME,
        APPLICANT_MAIDEN_NAME: input.APPLICANT_MAIDEN_NAME,
        PAYEE_FIRST_NAME: input.PAYEE_FIRST_NAME,
        PAYEE_LAST_NAME: input.PAYEE_LAST_NAME,
        IS_HOMELESS: input.IS_HOMELESS ? 'Y' : 'N',
        ADDRESS1: input.ADDRESS1,
        ADDRESS2: input.ADDRESS2,
        CITY: input.CITY,
        STATE: input.STATE,
        ZIP: input.ZIP,
        ZIP4: input.ZIP4,
        COUNTY_NUMBER: input.COUNTY_NUMBER.toString(),
        M_ADDRESS1: input.M_ADDRESS1,
        M_ADDRESS2: input.M_ADDRESS2,
        M_CITY: input.M_CITY,
        M_STATE: input.M_STATE,
        M_ZIP: input.M_ZIP,
        M_ZIP4: input.M_ZIP4,
        HOME_PHONE_NUMBER: input.HOME_PHONE_NUMBER,
        WORK_PHONE_NUMBER: input.WORK_PHONE_NUMBER,
        CELL_PHONE_NUMBER: input.CELL_PHONE_NUMBER,
        OTHER_PHONE_NUMBER: input.OTHER_PHONE_NUMBER,
        EMAIL_ADDRESS: input.EMAIL_ADDRESS,
      });
      const bindVars = {
        input: { dir: oracledb.BIND_IN, val: contact },
        msg: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER },
      };
      return tx.raw('begin OA_PKG_APP.SP_UPDATE_APP_CONTACT(:input, :msg); end;', bindVars);
    }, { connection: con });

    // Handle an error
    const responseCode = parseInt(response[0], 10);
    if (responseCode < 0) {
      throw new OneAppError(`Contact not updated. DB_ERROR: ${responseCode}`);
    }

    return responseCode;
  }
}

module.exports = ApplicationContactDao;
