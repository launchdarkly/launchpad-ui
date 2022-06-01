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
  plugins: ['react', '@typescript-eslint', 'testing-library'],
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
    '!/packages/icons/src/KindIcon.tsx',
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
      },
    ],
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
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
    {
      files: ['**/src/**/*.[jt]s?(x)'],
      rules: { 'import/no-default-export': 2, 'import/exports-last': 2, 'import/group-exports': 2 },
    },
  ],
};
