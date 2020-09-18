
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
  },
  overrides: [
    {
      files: [
        "**/*.spec.js"
      ],
      env: {
        "jest": true
      },
      rules: {
        "no-unused-expressions": 0
      }
    }
  ],
};