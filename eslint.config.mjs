import {fixupConfigRules} from '@eslint/compat';
import {FlatCompat} from '@eslint/eslintrc';
import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import {defineConfig} from 'eslint/config';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    ignores: [
      'node_modules/',
      'lib/',
      'dist/',
      'lib-esm/',
      'docs/',
      'coverage/',
      '.yarn/',
      'example/node_modules/',
      'example/ios/',
      'example/android/',
      'example/dist/',
    ],
  },
  {
    extends: fixupConfigRules(compat.extends('@react-native', 'prettier')),
    plugins: {prettier},
    rules: {
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': 'error',
      'react-hooks/exhaustive-deps': 'error',
    },
  },
  {
    files: ['jest.setup.js'],
    languageOptions: {globals: {jest: 'readonly'}},
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {prefer: 'type-imports', fixStyle: 'separate-type-imports'},
      ],
    },
  },
]);
