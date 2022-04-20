/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
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
