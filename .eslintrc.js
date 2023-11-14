module.exports = {
  env: {
    es2021: true,
    browser: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb-base'],
  plugins: ['react', 'prettier'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  rules: {
    'linebreak-style': 0,
    'react/prop-types': 0,
    indent: 0,
    'comma-dangle': ['error', 'never'],
    'max-lines': ['error', { max: 1500, skipComments: true }],
    'max-len': [
      'error',
      {
        code: 300,
        ignoreComments: true,
        ignoreUrls: true
      }
    ],
    'prettier/prettier': [
      'error',
      {
        semi: true,
        trailingComma: 'none',
        singleQuote: true,
        arrowParens: 'always',
        proseWrap: 'preserve',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        printWidth: 80
      }
    ],
    'import/prefer-default-export': 0,
    'react/react-in-tsx-scope': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never'
      }
    ],
    camelcase: 0,
    'operator-linebreak': 0
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['src', 'node_modules']
      }
    }
  }
};
