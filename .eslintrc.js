module.exports = {
  env: {
    jest: true,
    browser: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  plugins: ['react'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }]
  }
};
