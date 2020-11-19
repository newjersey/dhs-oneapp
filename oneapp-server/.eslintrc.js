module.exports = {
  env: {
    node: true,
  },
  extends: 'airbnb-base',
  ignorePatterns: [
    'jest.config.js',
    '*.test.js',
    '__utils/**',
    '__mocks__/**',
    'doc/**',
  ],
  rules: {
    'class-methods-use-this': ['warn'],
    'max-len': ['error', { code: 200 }],
  },
};
