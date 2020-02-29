module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: [ 'standard', 'vue' ],
  // required to lint *.vue files
  plugins: [ 'html', 'import', 'vue' ],
  // add your custom rules here
  rules: {},
  globals: {}
};
