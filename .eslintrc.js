module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    project: [
      './tsconfig.json',
      './client/tsconfig.json'
    ],
  },
  env: {
    'jest/globals': true,
  },
  plugins: [
    'jest',
    "import",
  ],
  extends: [
    'airbnb-typescript/base',
    'plugin:node/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  settings: {
    "import/resolver": {
      typescript: {}
    },
  },
  rules: {
    'quotes': 'off',
    'padded-blocks': 'off',
    "@typescript-eslint/quotes": "off",
    'linebreak-style': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    "node/no-extraneous-import": "off",
    "node/no-missing-import": "off",
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'lines-between-class-members': 'off',
    'consistent-return': 'off',
    'import/no-cycle': 'off',
    "arrow-parens": "off",
  }
};