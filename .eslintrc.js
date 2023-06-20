module.exports = {
  root: true,
  extends: '@react-native-community',
  rule: {
    'prettier/prettier': 'error',
    'react-native/no-inline-styles': 0,
  },
  globals: {
    jest: true,
  },
  env: {
    browser: true,
  },
};
