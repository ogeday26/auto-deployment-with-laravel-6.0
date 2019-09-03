module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'no-console': 'off',
    'prettier/prettier': 'error',
    'no-console': 'off',
    'consistent-return': 'off',
    'max-len': 'off',
    'no-return-await': 'off',
    'no-param-reassign': 'off',
    'func-names': 'off'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017
  },
  env: {
    es6: true,
    node: true
  }
};
