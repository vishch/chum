module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    project: './tsconfig.json',
  },
  env: {
    'jest/globals': true,
  },
  plugins: [
    'jest',
  ],
  extends: [
    'airbnb-typescript/base',
    'plugin:node/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  rules: {
    'linebreak-style': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    "node/no-missing-import": ["error", {
            "tryExtensions": [".js", ".json", ".ts"]
        }]
  }
};