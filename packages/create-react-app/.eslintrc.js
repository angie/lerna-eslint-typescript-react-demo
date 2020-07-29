module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['react-app', 'plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
}
