/// <reference types="vitest" />

import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import tsconfig from './tsconfig.json';

const paths = tsconfig.compilerOptions.paths;
const alias: Record<string, string> = {};
Object.keys(paths).forEach((key) => {
  alias[key] = path.resolve(__dirname, paths[key as keyof typeof paths][0]);
});

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [path.resolve(__dirname, './tests/setupTests.ts')],
    coverage: {
      lines: 50,
      functions: 50,
      branches: 50,
      statements: 50,
    },
  },
});
