import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: [
		'../docs/stories/**/*.mdx',
		'../packages/**/*.mdx',
		'../packages/**/*.stories.{mdx,tsx}',
	],
	addons: [
		'@storybook/addon-a11y',
		'@storybook/addon-docs',
		'@storybook/addon-designs',
		'@storybook/addon-themes',
		'storybook-addon-pseudo-states',
	],
	framework: '@storybook/react-vite',
	core: {
		disableTelemetry: true,
	},
	staticDirs: ['.', { from: '../packages/tokens/dist', to: '/static' }],
	async viteFinal(config) {
		return config;
	},
	docs: {
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

export default config;
