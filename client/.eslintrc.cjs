module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-console': 'off',
    eqeqeq: 'warn',
    'func-style': ['error', 'declaration'],
    'object-shorthand': 'off',
    'keyword-spacing': 'error',
    'no-plusplus': 'off',
    'spaced-comment': 'error',
    quotes: ['error', 'single'],
    semi: 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'always'],
    indent: ['error', 2],
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};