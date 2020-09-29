const { SQLDataSource } = require('datasource-sql');

class TranslationDao extends SQLDataSource {
  async getTranslations(TEXT_IDS, fields) {
    const query = this.knex.select(fields)
      .from('OA_CONVERSION_TEXT');
    if (TEXT_IDS) {
      query.whereIn('TEXT_ID', TEXT_IDS);
    }
    return query.cache(60 * 60);
  }

  async getTranslation(TEXT_ID, fields) {
    return this.knex.select(fields)
      .from('OA_CONVERSION_TEXT')
      .where({ TEXT_ID })
      .first()
      .cache(60 * 60);
  }
}

module.exports = TranslationDao;
