import type { ReactRenderer } from '@storybook/react';
import type { DecoratorFunction, GlobalTypes, Parameters } from '@storybook/types';

import { Box } from '@launchpad-ui/box';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { themes } from '@storybook/theming';

import { allModes } from './modes';

import '../packages/components/src/styles/themes.css';
import '../packages/tokens/dist/index.css';
import '../packages/tokens/dist/media-queries.css';
import '../packages/tokens/dist/themes.css';

export const parameters: Parameters = {
	actions: { disable: true },
	controls: { expanded: true },
	options: {
		showPanel: true,
		panelPosition: 'bottom',
		storySort: {
			method: 'alphabetical',
			order: ['Foundations', 'Components', 'Recipes', 'Legacy'],
			locales: 'en-US',
		},
	},
	backgrounds: {
		default: 'default',
		values: [
			{ name: 'default', value: 'var(--lp-color-bg-ui-primary)' },
			{ name: 'dark', value: 'var(--lp-color-bg-ui-primary)' },
		],
	},
	chromatic: {
		modes: {
			default: allModes.default,
			dark: allModes.dark,
		},
	},
	status: {
		statuses: {
			alpha: {
				background: 'hsl(275.4, 48%, 50.2%)',
				color: '#ffffff',
				description:
					'This component is very unstable and will likely break when upgrading versions.',
			},
			beta: {
				background: 'hsl(45.4, 58.3%, 50.2%)',
				color: '#ffffff',
				description:
					'This component is still relatively unstable and may break when upgrading versions.',
			},
			stable: {
				background: 'hsl(154.1, 100%, 36.3%)',
				color: '#ffffff',
				description: 'This component is stable for production use.',
			},
		},
	},
	docs: {
		source: {
			excludeDecorators: true,
		},
		theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? themes.dark : themes.light,
	},
	// https://react-spectrum.adobe.com/react-aria/accessibility.html#false-positives
	a11y: {
		config: {
			rules: [
				{
					id: 'aria-hidden-focus',
					selector: 'body *:not([data-a11y-ignore="aria-hidden-focus"])',
				},
			],
		},
	},
};

export const decorators: DecoratorFunction<ReactRenderer>[] = [
	(StoryFn, context) => {
		const mirror = context.viewMode === 'story' ? context.globals.mirror : undefined;
		const sideBySide = mirror === 'side-by-side';
		const stacked = mirror === 'stacked';

		return mirror ? (
			<Box display="flex" flexDirection={sideBySide ? 'row' : 'column'} minHeight="100vh">
				<Box
					padding="$400"
					width={sideBySide ? '50vw' : undefined}
					height={stacked ? '50vh' : undefined}
				>
					<StoryFn />
				</Box>
				<Box
					data-theme="dark"
					padding="$400"
					width={sideBySide ? '50vw' : undefined}
					height={stacked ? '50vh' : undefined}
				>
					<StoryFn />
				</Box>
			</Box>
		) : (
			<Box padding="$400">
				<StoryFn />
			</Box>
		);
	},
	withThemeByDataAttribute<ReactRenderer>({
		themes: {
			default: 'default',
			dark: 'dark',
		},
		defaultTheme: 'default',
	}),
];

export const globalTypes: GlobalTypes = {
	mirror: {
		name: 'Mirror',
		description: 'Mirror themes',
		toolbar: {
			icon: 'mirror',
			items: [
				{ value: undefined, type: 'reset', title: 'reset' },
				{ value: 'side-by-side', icon: 'sidebyside', title: 'side by side' },
				{ value: 'stacked', icon: 'stacked', title: 'stacked' },
			],
			dynamicTitle: true,
		},
	},
};
