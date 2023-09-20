const { commitLint, findPackageNames } = require('@kkkaoru/git-hooks');

module.exports = {
  ...commitLint,
  rules: {
    'scope-enum': [2, 'always', [...findPackageNames(), 'emotion-custom-css-obs', 'changeset', 'github-workflow']],
  },
};
