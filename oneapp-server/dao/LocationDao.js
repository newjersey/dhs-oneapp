const { SQLDataSource } = require('datasource-sql');

class LocationDao extends SQLDataSource {
  async getCounties() {
    const query = this.knex.column('COUNTY_NUMBER', 'COUNTY_NAME')
      .select()
      .from('OA_COUNTY');
    return query.cache(60 * 60);
  }
}

module.exports = LocationDao;
