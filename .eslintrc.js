module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prefer-template': 'off',
    'prefer-destructuring': ['error', { object: true, array: false }],
    'no-param-reassign': [
      'error',
      { props: false },
    ],
    'no-plusplus': [
      2,
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'vue/no-parsing-error': ['error', {
      'invalid-first-character-of-tag-name': false,
    }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
