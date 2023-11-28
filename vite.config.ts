/// <reference types="vitest" />

import path from 'path';

import styleXPluginDev from '@stylexjs/babel-plugin';
// @ts-expect-error no types
import stylexPlugin from '@stylexjs/rollup-plugin';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { PluginPure } from 'rollup-plugin-pure';
import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-unresolved
import { configDefaults } from 'vitest/config';

import tsconfig from './tsconfig.json';
import { cssImport } from './vite-plugin-css';

const paths = tsconfig.compilerOptions.paths;
const alias: Record<string, string> = {};
Object.keys(paths).forEach((key) => {
  alias[key] = path.resolve(__dirname, paths[key as keyof typeof paths][0]);
});

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJSON = require(path.resolve('./package.json'));

// https://github.com/babel/babel/blob/main/packages/babel-plugin-transform-react-pure-annotations/src/index.ts
const PURE_CALLS = [
  'cloneElement',
  'createContext',
  'createElement',
  'createFactory',
  'createRef',
  'forwardRef',
  'isValidElement',
  'memo',
  'lazy',
];

// @ts-expect-error rollup-plugin-pure needs to update vite plugin types
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react({
        babel: {
          plugins:
            mode !== 'production'
              ? [
                  [
                    styleXPluginDev,
                    {
                      dev: true,
                      // Required for CSS variable support
                      unstable_moduleResolution: {
                        type: 'commonJS',
                        rootDir: __dirname,
                      },
                    },
                  ],
                ]
              : [],
        },
      }),
      vanillaExtractPlugin(),
      cssImport(),
      PluginPure({
        functions: PURE_CALLS,
        sourcemap: true,
        exclude: [/node_modules/],
      }),
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
        thresholds: {
          lines: 90,
          functions: 70,
          branches: 70,
          statements: 90,
        },
        include: ['**/src/**'],
        exclude: [...configDefaults.exclude, '**/types.ts'],
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
          '@vanilla-extract/recipes/createRuntimeFn',
          'rainbow-sprinkles/createRuntimeFn',
        ],
        plugins: [
          stylexPlugin({
            fileName: 'style.css',
            // Required for CSS variable support
            unstable_moduleResolution: {
              type: 'commonJS',
              rootDir: __dirname,
            },
          }),
        ],
      },
      sourcemap: true,
      minify: false,
    },
  };
});
