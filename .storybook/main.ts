import type { StorybookConfig } from '@storybook/react-vite';

import fs from 'fs';
import path from 'path';
import fg from 'fast-glob';

import tsconfig from '../tsconfig.json';

const getStories = () =>
	fg.sync([
		path.resolve(
			__dirname,
			'../packages/!(button|card|chip|counter|drawer|dropdown|filter|focus-trap|form|menu|modal|overlay|popover|portal|progress|select|tag|toggle|tooltip)/stories/*.stories.{mdx,tsx}',
		),
		'!**/node_modules',
	]);

const config: StorybookConfig = {
	stories: [...getStories(), '../packages/**/*.mdx'],
	addons: [
		'@storybook/addon-a11y',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'storybook-addon-pseudo-states',
		'@storybook/addon-designs',
		'@storybook/addon-themes',
	],
	framework: '@storybook/react-vite',
	core: {
		disableTelemetry: true,
	},
	staticDirs: [
		'.',
		{ from: '../packages/icons/src/img', to: '/static' },
		{ from: '../packages/card/src/img', to: '/static' },
	],
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
					? !/node_modules/.test(prop.parent.fileName) ||
					  /(react-aria-components|react-aria|react-stately|@react-types|@react-aria|@react-stately|react-router-dom)/.test(
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
