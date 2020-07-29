module.exports = {
  parser: '@typescript-eslint/parser',
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['./**/*.test.ts'] }
    ],

    // airbnb doesn't cover .ts in their rule, so override here
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js#L139
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ]
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        // don't report errors with types
        '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }]
      }
    }
  ],
  settings: {
    'import/resolver': {
      // use <root>/tsconfig.json
      typescript: {
        alwaysTryTypes: true,
        directory: './tsconfig.json'
      }
    }
  }
}
