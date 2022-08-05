module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // plugins: 'react',
  root: true,
  extends: [
    'react-app',
    'eslint:recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  // parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/prop-types': 0,
    'react/prefer-stateless-function': ['off'],
    'arrow-body-style': ['error', 'always'],
    // react 함수형 컴포넌트 정의 방식 선언
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'function-declaration',
      },
    ],
    // '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'no-use-before-define': 'off',
  },
  //   useTabs: false,
};
