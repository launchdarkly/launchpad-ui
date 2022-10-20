module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:cypress/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint', 'testing-library', 'functional', 'jsx-a11y'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
  },
  ignorePatterns: [
    'dist',
    'node_modules',
    '/packages/icons/src/*.tsx',
    '!/packages/icons/src/Icon.tsx',
    '!/packages/icons/src/StatusIcon.tsx',
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'testing-library/prefer-user-event': 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
        groups: ['type', 'builtin', 'external', 'internal', 'parent', ['sibling', 'index']],
        'newlines-between': 'always',
        pathGroups: [],
        pathGroupsExcludedImportTypes: [],
        warnOnUnassignedImports: true,
      },
    ],
    'import/no-unresolved': ['error', { ignore: ['^@launchpad-ui/'] }],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'functional/no-class': 'error',
    'react/no-unused-prop-types': 'error',
    'jsx-a11y/no-autofocus': [
      2,
      {
        ignoreNonDOM: true,
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSQualifiedName[left.name=React]',
        message: "Don't use the React namespace. Import the type instead.",
      },
    ],
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.spec.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
    {
      files: ['**/src/**/*.[jt]s?(x)'],
      rules: { 'import/no-default-export': 2, 'import/exports-last': 2, 'import/group-exports': 2 },
    },
  ],
};
