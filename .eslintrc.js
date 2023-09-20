const { withVitest } = require('@kkkaoru/eslint-config');

module.exports = {
  ...withVitest,
  parserOptions: {
    ...withVitest.parserOptions,
    tsconfigRootDir: __dirname,
  },
};
