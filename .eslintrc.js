// @ts-check
require('@rushstack/eslint-patch/modern-module-resolution')
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: ['@vill-v'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
