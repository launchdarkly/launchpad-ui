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
    environment: 'happy-dom',
    setupFiles: [path.resolve(__dirname, './test/setup.ts')],
    include: ['**/__tests__/*.spec.{ts,tsx}'],
    coverage: {
      lines: 80,
      functions: 70,
      branches: 70,
      statements: 80,
      exclude: ['**/*.spec.tsx', '**/test/'],
    },
  },
});
