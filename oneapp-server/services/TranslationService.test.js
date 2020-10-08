const TranslationService = require('./TranslationService');

describe('TranslationService getLanguage', () => {
  it('parses a known english accept-language header', () => {
      const language = TranslationService.getLanguage('en-GB,en;q=0.8');
      expect(language.code).toBe('en');
      expect(language.index).toBe(0);
  });

  it('parses a known spanish accept-language header', () => {
    const language = TranslationService.getLanguage('en-GB,en;q=0.8;es;q=0.9');
    expect(language.code).toBe('es');
    expect(language.index).toBe(1);
  });

  it('parses a null accept-language header', () => {
    const language = TranslationService.getLanguage(null);
    expect(language.code).toBe('en');
    expect(language.index).toBe(0);
  });

  it('parses an empty accept-language header', () => {
    const language = TranslationService.getLanguage('');
    expect(language.code).toBe('en');
    expect(language.index).toBe(0);
  });

  it('parses an unknown accept-language header', () => {
    const language = TranslationService.getLanguage('qr;q=0.9;');
    expect(language.code).toBe('en');
    expect(language.index).toBe(0);
  });
});
