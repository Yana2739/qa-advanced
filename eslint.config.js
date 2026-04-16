export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module'
    },
    plugins: {
      prettier: 'eslint-plugin-prettier'
    },
    rules: {
      'prettier/prettier': 'error'
    },
    extends: ['prettier']
  }
];