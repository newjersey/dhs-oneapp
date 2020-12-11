const { SQLDataSource } = require('datasource-sql');
const oracledb = require('oracledb');
const { OneAppError } = require('../utils/OneAppError');

class ApplicationProgramInfoDao extends SQLDataSource {
  async getProgramInfo(APPLICATION_ID, LANGUAGE) {
    const con = await this.knex.client.pool.acquire().promise;
    return this.knex.client.transaction(async (tx) => {
      const bindVars = {
        app_id: { dir: oracledb.BIND_IN, val: APPLICATION_ID },
        lang: { dir: oracledb.BIND_IN, val: LANGUAGE },
        info: { dir: oracledb.BIND_OUT, type: 'OA_RT_APPLICATION_PROGRAMS' },
      };
      return tx.raw('begin OA_PKG_APP.SP_SELECT_APPLICATION_PROGRAMS(:app_id, :lang, :info); end;', bindVars);
    }, { connection: con });
  }

  async updateProgramInfo(APPLICATION_NUMBER, input) {
    const con = await this.knex.client.pool.acquire().promise;
    const response = await this.knex.client.transaction(async (tx) => {
      const ApplicationProgramsType = await con.getDbObjectClass('OA_RT_APPLICATION_PROGRAMS');
      const applicationPrograms = new ApplicationProgramsType({
        APPLICATION_NUMBER,
        IS_FS_SELECTED: input.IS_FS_SELECTED ? 'Y' : 'N',
        IS_TF_SELECTED: input.IS_TF_SELECTED ? 'Y' : 'N',
        IS_GA_SELECTED: input.IS_GA_SELECTED ? 'Y' : 'N',
        HAVE_ACTIVE_CASE_CURRENTLY: input.HAVE_ACTIVE_CASE_CURRENTLY ? 'Y' : 'N',
        CURRENT_CASE_NUMBERS: input.CURRENT_CASE_NUMBERS,
        HAD_ACTIVE_CASE_PREVIOULSY: input.HAD_ACTIVE_CASE_PREVIOULSY ? 'Y' : 'N',
        PREVIOUS_CASE_NUMBERS: input.PREVIOUS_CASE_NUMBERS,
        SPOKEN_LANGUAGE: input.SPOKEN_LANGUAGE,
        NEED_ACCOMODATION: input.NEED_ACCOMODATION ? 'Y' : 'N',
        NEED_ACM_TRANSLATOR: input.NEED_ACM_TRANSLATOR ? 'Y' : 'N',
        NEED_ACM_SIGNING: input.NEED_ACM_SIGNING ? 'Y' : 'N',
        NEED_ACM_VISUALLY_IMPAIRED: input.NEED_ACM_VISUALLY_IMPAIRED ? 'Y' : 'N',
        NEED_ACM_OTHER: input.NEED_ACM_OTHER ? 'Y' : 'N',
        ACM_TRA_LANGUAGE: input.ACM_TRA_LANGUAGE,
        ACM_OTH_DESCRIPTION: input.ACM_OTH_DESCRIPTION,
      });
      const bindVars = {
        input: { dir: oracledb.BIND_IN, val: applicationPrograms },
        msg: { dir: oracledb.BIND_OUT, type: oracledb.DB_TYPE_NUMBER },
      };
      return tx.raw('begin OA_PKG_APP.SP_UPDATE_APPLICATION_PROGRAMS(:input, :msg); end;', bindVars);
    }, { connection: con });

    // Handle an error
    const responseCode = parseInt(response[0], 10);
    if (responseCode < 0) {
      throw new OneAppError(`Program info not updated. DB_ERROR: ${responseCode}`);
    }

    return responseCode;
  }
}

module.exports = ApplicationProgramInfoDao;
