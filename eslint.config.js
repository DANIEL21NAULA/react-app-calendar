import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import airbnb from 'eslint-config-airbnb'
import airbnbBase from 'eslint-config-airbnb-base'
//console.log({ airbnbBase })
console.log({ reactHooks })
console.log({ airbnb })
export default [
  { ignores: ['dist','eslint.config.js'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    /*extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
      "airbnb",
      "airbnb/hooks",
    ],*/
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'airbnb': airbnb,
      'airbnbBase': airbnbBase,
      // 'airbnb/hooks': airbnbBase.parserOptions.reactHooks,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      ...airbnb.rules,
      ...airbnbBase.rules,
      'react/jsx-no-target-blank': 'off',
      'react/react-in-jsx-scope': "off",
      'import/prefer-default-export': "off",
      'react/jsx-filename-extension': [1, { "extensions": [".js", ".jsx"] }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
