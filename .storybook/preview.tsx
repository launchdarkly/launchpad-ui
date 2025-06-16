import type { Preview, ReactRenderer } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import type { DecoratorFunction, GlobalTypes, Parameters } from 'storybook/internal/types';

import { Box } from '@launchpad-ui/box';
import sprite from '@launchpad-ui/icons/img/sprite.svg';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { BrowserRouter, useNavigate } from 'react-router';
import { themes } from 'storybook/theming';

import { RouterProvider as AriaRouterProvider } from '../packages/components/src/RouterProvider';
import { useHref } from '../packages/components/src/utils';
import custom from './custom.svg';
import { allModes } from './modes';

import '../packages/components/src/styles/base.css';
import '../packages/components/src/styles/themes.css';
import '../packages/tokens/dist/index.css';
import '../packages/tokens/dist/media-queries.css';
import '../packages/tokens/dist/themes.css';

fetch(sprite)
	.then(async (response) => response.text())
	.then((data) => {
		const parser = new DOMParser();
		const content = parser.parseFromString(data, 'image/svg+xml').documentElement;
		content.id = 'lp-icons-sprite';
		content.style.display = 'none';
		document.body.appendChild(content);
	})
	.catch((err) => {
		console.log('Failed to fetch sprite', err);
	});

fetch(custom)
	.then(async (response) => response.text())
	.then((data) => {
		const parser = new DOMParser();
		const content = parser.parseFromString(data, 'image/svg+xml').documentElement;
		content.id = 'app-icons-sprite';
		content.style.display = 'none';
		document.body.appendChild(content);
	})
	.catch((err) => {
		console.log('Failed to fetch sprite', err);
	});

const RouterProvider = ({ children }: { children: ReactNode }) => {
	const navigate = useNavigate();
	return (
		<AriaRouterProvider navigate={navigate} useHref={useHref}>
			{children}
		</AriaRouterProvider>
	);
};

const parameters: Parameters = {
	actions: { disable: true },
	controls: { expanded: true },
	options: {
		showPanel: true,
		panelPosition: 'bottom',
		storySort: {
			method: 'alphabetical',
			order: [
				'Getting started',
				'Contributing',
				'Guidelines',
				'Tokens',
				'Components',
				['*', ['Icon', 'BadgeIcon']],
				'Recipes',
				'Legacy',
			],
			locales: 'en-US',
		},
	},
	backgrounds: {
		default: 'default',
		options: {
			default: { name: 'Default', value: 'var(--lp-color-bg-ui-primary)' },
			dark: { name: 'Dark', value: 'var(--lp-color-bg-ui-primary)' },
		},
	},
	chromatic: {
		modes: {
			default: allModes.default,
			dark: allModes.dark,
		},
		pauseAnimationAtEnd: true,
		prefersReducedMotion: 'reduce',
	},
	docs: {
		theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? themes.dark : themes.light,
		codePanel: true,
	},
};

const decorators: DecoratorFunction<ReactRenderer>[] = [
	(StoryFn, context) => {
		const mirror = context.viewMode === 'story' ? context.globals.mirror : undefined;
		const sideBySide = mirror === 'side-by-side';
		const stacked = mirror === 'stacked';

		return (
			<BrowserRouter>
				<RouterProvider>
					{mirror ? (
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
					)}
				</RouterProvider>
			</BrowserRouter>
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

const globalTypes: GlobalTypes = {
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

const preview: Preview = {
	tags: ['autodocs'],
	parameters,
	decorators,
	globalTypes,
	initialGlobals: {
		backgrounds: { value: 'default' },
	},
};

export default preview;
