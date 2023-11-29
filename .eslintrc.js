module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['prettier', 'plugin:@typescript-eslint/recommended', 'next/core-web-vitals'],
  rules: {
    'no-debugger': 'warn',
    'max-len': [
      'warn',
      {
        code: 120,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': ['off'],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    'prettier/prettier': 'warn',
    'no-console': 'warn',
  },
};
