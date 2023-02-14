module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ['airbnb-base', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'off',
    'no-restricted-syntax': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'global-require': 'off',
    'max-len': 'off',
    'no-use-before-define': 'error',
    'comma-dangle': 'off',
    'no-await-in-loop': 'off',
    'arrow-parens': 'off',
    'no-continue': 'off',
    'no-param-reassign': 'off',
    'func-names': 'off',
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',
    'function-paren-newline': 'off',
    'no-new-func': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-newline': 'off',
    'no-unneeded-ternary': 'off',
    'arrow-body-style': 'off',
    'import/newline-after-import': 'off',
    'newline-per-chained-call': 'off',
    indent: 'off',
    radix: 'off',
    camelcase: 'warn'
  }
};
