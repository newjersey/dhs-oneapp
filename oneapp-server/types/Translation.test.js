const { createTestClient, dataSources, fields } = require('../__utils/TestingUtils');
const client = createTestClient();

const TRANSLATION = { TEXT_ID: 't1', TEXT: 'translated' };
const TRANSLATIONS = [TRANSLATION];

describe('translations query', () => {
  beforeEach(() => {
    dataSources.TranslationDao.getTranslations.mockReturnValue(TRANSLATIONS);
  });

  it('returns all translations with no args', async () => {
    const query = `
      {
        translations { TEXT_ID, TEXT }
      }
    `;
    const response = await client.query({ query });
    expect(response.data.translations).toEqual(TRANSLATIONS);
    expect(dataSources.TranslationDao.getTranslations).toHaveBeenCalledWith(undefined, 0, fields);
  });

  it('returns select translations with list of TEXT_IDS', async () => {
    const query = `
      {
        translations(TEXT_IDS: ["t1"]) { TEXT_ID, TEXT }
      }
    `;
    const response = await client.query({ query });
    expect(response.data.translations).toEqual(TRANSLATIONS);
    expect(dataSources.TranslationDao.getTranslations).toHaveBeenCalledWith(['t1'], 0, fields);
  });

  it('returns all translations in specified language', async () => {
    const esClient = createTestClient(null, {'accept-language': 'es'});
    const query = `
      {
        translations { TEXT_ID, TEXT }
      }
    `;
    const response = await esClient.query({ query });
    expect(response.data.translations).toEqual(TRANSLATIONS);
    expect(dataSources.TranslationDao.getTranslations).toHaveBeenCalledWith(undefined, 1, fields);
  });
});

describe('translation query', () => {
  beforeEach(() => {
    dataSources.TranslationDao.getTranslation.mockReturnValue(TRANSLATION);
  });

  it('returns an error with no args', async () => {
    const query = `
      {
        translation { TEXT_ID, TEXT }
      }
    `;
    const response = await client.query({ query });
    expect(response.errors[0].code).toEqual('GRAPHQL_VALIDATION_FAILED');
    expect(dataSources.TranslationDao.getTranslation).not.toHaveBeenCalledWith();
  });

  it('returns with a TEXT_ID', async () => {
    const query = `
      {
        translation(TEXT_ID: "t1") { TEXT_ID, TEXT }
      }
    `;
    const response = await client.query({ query });
    expect(response.data.translation).toEqual(TRANSLATION);
    expect(dataSources.TranslationDao.getTranslation).toHaveBeenCalledWith('t1', 0, fields);
  });

  it('returns in specified language', async () => {
    const esClient = createTestClient(null, {'accept-language': 'es'});
    const query = `
      {
        translation(TEXT_ID: "t1") { TEXT_ID, TEXT }
      }
    `;
    const response = await esClient.query({ query });
    expect(response.data.translation).toEqual(TRANSLATION);
    expect(dataSources.TranslationDao.getTranslation).toHaveBeenCalledWith('t1', 1, fields);
  });
});