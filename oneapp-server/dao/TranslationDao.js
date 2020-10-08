const { SQLDataSource } = require('datasource-sql');

const parseFieldsForTranslation = (langIndex, fields) => {
  const fieldSet = new Set(fields);
  // Remove the 'TEXT' field with the actual language field (using column aliases)
  if (fieldSet.has('TEXT')) {
    const langField = { TEXT: `LANGUAGE_${langIndex}` };
    fieldSet.delete('TEXT');
    fieldSet.add(langField);
  }
  return Array.from(fieldSet);
};

class TranslationDao extends SQLDataSource {
  async getTranslations(TEXT_IDS, langIndex, fields) {
    const columns = parseFieldsForTranslation(langIndex, fields);
    const query = this.knex.column(columns)
      .select()
      .from('OA_CONVERSION_TEXT');
    if (TEXT_IDS) {
      query.whereIn('TEXT_ID', TEXT_IDS);
    }
    return query.cache(60 * 60);
  }

  async getTranslation(TEXT_ID, langIndex, fields) {
    const columns = parseFieldsForTranslation(langIndex, fields);
    return this.knex.column(columns)
      .select()
      .from('OA_CONVERSION_TEXT')
      .where({ TEXT_ID })
      .first()
      .cache(60 * 60);
  }
}

module.exports = TranslationDao;
