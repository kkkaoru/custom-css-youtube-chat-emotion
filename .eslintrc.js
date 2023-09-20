const { withVitest } = require('@kkkaoru/eslint-config');

module.exports = {
  ...withVitest,
  parserOptions: {
    ...withVitest.parserOptions,
    tsconfigRootDir: __dirname,
  },
  rules: {
    ...withVitest.rules,
    'unicorn/no-array-for-each': 'off',
    'no-console': ['error', { allow: ['info'] }],
  },
};
