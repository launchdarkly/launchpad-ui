/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['../../test/setup.ts'],
		include: ['**/__tests__/*.spec.{ts,tsx}'],
		coverage: {
			thresholds: {
				lines: 70,
				functions: 70,
				branches: 70,
				statements: 70,
			},
			include: ['**/src/**'],
			exclude: ['**/types.ts', '**/*.generated.ts'],
		},
	},
});
