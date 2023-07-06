/// <reference types="vitest" />

import path from 'path';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import istanbul from 'vite-plugin-istanbul';

import tsconfig from './tsconfig.json';
import { cssImport } from './vite-plugin-css';

const paths = tsconfig.compilerOptions.paths;
const alias: Record<string, string> = {};
Object.keys(paths).forEach((key) => {
  alias[key] = path.resolve(__dirname, paths[key as keyof typeof paths][0]);
});

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJSON = require(path.resolve('./package.json'));

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    cssImport(),
    ...(process.env.CYPRESS ? [istanbul({ cypress: true })] : []),
  ],
  resolve: {
    alias,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [path.resolve(__dirname, './test/setup.ts')],
    include: ['**/__tests__/*.spec.{ts,tsx}'],
    coverage: {
      lines: 90,
      functions: 70,
      branches: 70,
      statements: 90,
      exclude: ['**/*.spec.tsx', '**/test/'],
    },
    deps: {
      registerNodeLoader: true,
    },
  },
  build: {
    lib: {
      entry: packageJSON.source,
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'index.es.js' : 'index.js'),
    },
    rollupOptions: {
      external: [
        ...Object.keys(packageJSON.dependencies || {}),
        ...Object.keys(packageJSON.peerDependencies || {}),
        'react/jsx-runtime',
      ],
    },
    sourcemap: true,
    minify: false,
  },
  logLevel: process.env.CYPRESS ? 'silent' : undefined,
});
