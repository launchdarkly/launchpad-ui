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
	managerHead: (head) => `
		${head}
		<link rel="stylesheet" href="./manager.css" />
	`,
	previewHead: (head) => `
		${head}
		<link rel="stylesheet" href="./manager.css" />
		<style>
			/* Ensure docs content gets proper theme styling using LaunchPad design tokens */
			.dark-theme .docs-story,
			.dark-theme [data-docs-story] {
				background-color: #181A1F !important; /* gray.950 */
				color: #ECEFF2 !important; /* gray.50 */
			}
			
			/* Light theme docs styling */
			.light-theme .docs-story,
			.light-theme [data-docs-story] {
				background-color: #FFFFFF !important; /* white.950 */
				color: #23252A !important; /* gray.900 */
			}
		</style>
	`,
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
					? !/node_modules\/\.pnpm\/(?!react-aria-components|react-aria|react-stately|@react-types|@react-aria|@react-stately|react-router|class-variance-authority|@internationalized)/.test(
							prop.parent.fileName,
						)
					: true,
			shouldExtractValuesFromUnion: true,
		},
	},
};

export default config;
