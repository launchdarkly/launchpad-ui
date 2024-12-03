import type { StorybookConfig } from '@storybook/react-vite';

import fs from 'fs';
import path from 'path';

import tsconfig from '../tsconfig.json';

const config: StorybookConfig = {
	stories: ['../packages/**/*.stories.{mdx,tsx}', '../packages/**/*.mdx'],
	addons: [
		'@storybook/addon-a11y',
		{
			name: '@storybook/addon-essentials',
			options: {
				actions: false,
			},
		},
		'@storybook/addon-interactions',
		'storybook-addon-pseudo-states',
		'@storybook/addon-designs',
		'@storybook/addon-themes',
	],
	framework: '@storybook/react-vite',
	core: {
		disableTelemetry: true,
	},
	staticDirs: ['.', { from: '../packages/card/src/img', to: '/static' }],
	env: (config) => {
		const packageStatuses = getPackageStatusEnvVars();

		return { ...config, ...packageStatuses };
	},
	async viteFinal(config) {
		return config;
	},
	docs: {
		autodocs: true,
		defaultName: 'Docs',
	},
	typescript: {
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			savePropValueAsString: true,
			shouldRemoveUndefinedFromOptional: true,
			propFilter: (prop) =>
				prop.parent
					? !/launchpad-ui\/node_modules\/.pnpm\/(?!react-aria-components|react-aria|react-stately|@react-types|@react-aria|@react-stately|react-router|class-variance-authority|@internationalized)/.test(
							prop.parent.fileName,
						)
					: true,
		},
	},
};

const getPackageStatusEnvVars = () => {
	const paths = tsconfig.compilerOptions.paths;
	const statuses: Record<string, string> = {};

	for (const key of Object.keys(paths)) {
		const filepath = path.resolve(
			__dirname,
			`.${paths[key as keyof typeof paths][0]}/../package.json`,
		);
		const contents = fs.readFileSync(filepath);
		const { status } = JSON.parse(contents.toString());
		const statusKey = key.replace('@launchpad-ui/', '').replace(/-/g, '_').toUpperCase();
		statuses[`STORYBOOK_PACKAGE_STATUS__${statusKey}`] = status;
	}

	return statuses;
};

export default config;
