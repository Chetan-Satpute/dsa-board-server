module.exports = {
  root: true,
  env: {node: true, es2022: true},
  extends: [
    './node_modules/gts/',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  rules: {},
};
