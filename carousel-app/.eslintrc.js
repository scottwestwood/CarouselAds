module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    "jest/globals": true
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
    allowImportExportEverywhere: false
  },
  plugins: ['react', 'flowtype', 'jsx-a11y', 'import', 'prettier', 'jest', 'react-hooks'],
  rules: {
    'prettier/prettier': 1,
    'prettier/prettier': [
      1,
      {
        singleQuote: true,
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': [1],
    'valid-jsdoc': ['warn'],
    'require-jsdoc': [
      'warn',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true
        }
      }
    ],
    'camelcase': 0
  },
  overrides: [
    {
      files: ['*.test.js'],
      rules: {
        'no-unused-expressions': { allowShortCircuit: true }
      }
    }
  ],
  globals: {
    ErrorCustom: true,
    expect: true,
    shallow: true,
    mount: true,
    jest: true,
    render: true,
    Generator: true,
    SyntheticEvent: true,
    SyntheticInputEvent: true,
    Class: true,
    React$Component: true,
    System: true
  }
};
