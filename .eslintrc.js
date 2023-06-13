module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'plugin:import/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        endOfLine: 'lf',
        singleQuote: true,
        tabWidth: 2,
        indentStyle: 'space',
        useTabs: true,
        trailingComma: 'es5'
      }
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false
        }
      }
    ],
    'react-hooks/exhaustive-deps': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? ["error", { allow: ["warn", "error"] }] : 'off'
  }
};
