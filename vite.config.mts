/// <reference types="vitest" />

import path from 'path';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';
import { PluginPure } from 'rollup-plugin-pure';
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';

import tsconfig from './tsconfig.json';
import { cssImport } from './vite-plugin-css';

const paths = tsconfig.compilerOptions.paths;
const alias: Record<string, string> = {};
for (const key of Object.keys(paths)) {
	alias[key] = path.resolve(__dirname, paths[key as keyof typeof paths][0]);
}

const { default: packageJSON } = await import(path.resolve('./package.json'), {
	assert: { type: 'json' },
});

const { default: rootPackageJSON } = await import(path.resolve(__dirname, './package.json'), {
	assert: { type: 'json' },
});

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
	'createPortal',
];

export default defineConfig({
	css: {
		transformer: 'lightningcss',
		lightningcss: {
			targets: browserslistToTargets(browserslist(rootPackageJSON.browserslist)),
			drafts: {
				customMedia: true,
			},
			cssModules: {
				pattern: '[hash]_[local]',
			},
		},
		devSourcemap: true,
	},
	plugins: [
		react(),
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
				lines: 85,
				functions: 70,
				branches: 70,
				statements: 85,
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
		},
		sourcemap: true,
		minify: false,
		cssMinify: 'lightningcss',
	},
});
