import type { Preview, ReactRenderer } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import type { DecoratorFunction, GlobalTypes, Parameters } from 'storybook/internal/types';

import { Box } from '@launchpad-ui/box';
import sprite from '@launchpad-ui/icons/img/sprite.svg';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { BrowserRouter, useNavigate } from 'react-router';

import { RouterProvider as AriaRouterProvider } from '../packages/components/src/RouterProvider';
import { useHref } from '../packages/components/src/utils';
import custom from './custom.svg';
import { allModes } from './modes';
import { darkTheme, lightTheme } from './themes';

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
				'Component Overview',
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
		theme: lightTheme, // Default theme, will be updated dynamically
		codePanel: true,
	},
};

const decorators: DecoratorFunction<ReactRenderer>[] = [
	// Dynamic theme updater for Storybook UI
	(StoryFn, context) => {
		const currentTheme = context.globals.theme || 'default';
		const isDark = currentTheme === 'dark';

		// Update the docs theme dynamically
		if (context.parameters.docs) {
			context.parameters.docs.theme = isDark ? darkTheme : lightTheme;
		}

		// Apply theme classes to the document
		if (typeof window !== 'undefined') {
			// Update current document (preview iframe)
			const currentRoot = document.documentElement;
			if (isDark) {
				currentRoot.classList.add('dark-theme');
				currentRoot.classList.remove('light-theme');
			} else {
				currentRoot.classList.add('light-theme');
				currentRoot.classList.remove('dark-theme');
			}

			// Communicate theme change to manager via localStorage
			localStorage.setItem('storybook-theme', currentTheme);
			window.dispatchEvent(
				new StorageEvent('storage', {
					key: 'storybook-theme',
					newValue: currentTheme,
				}),
			);

			// Also try to update the parent document (manager)
			if (window.parent && window.parent !== window) {
				try {
					const managerRoot = window.parent.document.documentElement;
					if (isDark) {
						managerRoot.classList.add('dark-theme');
						managerRoot.classList.remove('light-theme');
					} else {
						managerRoot.classList.add('light-theme');
						managerRoot.classList.remove('dark-theme');
					}
				} catch (_e) {
					// Cross-origin restrictions, ignore
				}
			}
		}

		return <StoryFn />;
	},
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
		attributeName: 'data-theme',
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

// Auto-enhance argTypes based on prop types
const enhanceArgTypes = (context: any) => {
	const { argTypes } = context;
	const enhanced: any = {};

	Object.keys(argTypes || {}).forEach((key) => {
		const argType = argTypes[key];

		// Skip if already has a control defined, is disabled, or is ref
		if (argType.control !== undefined || argType.table?.disable) {
			return;
		}

		// Auto-detect control type based on prop type
		if (argType.type) {
			const typeName = argType.type.name || '';

			// Function props → disable completely
			if (
				typeName === 'func' ||
				typeName === 'function' ||
				key.startsWith('on') ||
				key === 'ref' ||
				(key === 'children' && argType.type !== 'string')
			) {
				enhanced[key] = {
					...argType,
					control: { disable: true },
				};
			}
			// Boolean props → toggle
			else if (typeName === 'boolean' || (typeName === 'enum' && argType.type.value.length === 2)) {
				enhanced[key] = {
					...argType,
					control: { type: 'boolean' },
				};
			}
			// Check for boolean unions (like boolean | undefined) → checkbox
			else if (typeName === 'union' && argType.type.value) {
				const hasBoolean = argType.type.value.some((v: any) => v.name === 'boolean');

				if (hasBoolean) {
					enhanced[key] = {
						...argType,
						control: { type: 'boolean' },
					};
				} else {
					// Component-specific props that should be radio buttons (whitelist approach)
					const componentProps = [
						'size',
						'variant',
						'spacing',
						'orientation',
						'color',
						'appearance',
						'position',
						'placement',
					];

					if (componentProps.includes(key)) {
						const options = argType.type.value
							.filter((v: any) => {
								if (v.name === 'literal') {
									const value = v.value;
									return (
										value !== null &&
										value !== undefined &&
										value !== 'null' &&
										value !== 'undefined' &&
										value !== '' &&
										typeof value === 'string'
									);
								}
								return v.name !== 'null' && v.name !== 'undefined' && v.name !== 'void';
							})
							.map((v: any) => v.value || v.name)
							.filter(Boolean);

						if (options.length > 0) {
							//
							if (options.length <= 5) {
								enhanced[key] = {
									...argType,
									control: { type: 'radio' },
									options,
								};
							} else {
								enhanced[key] = {
									...argType,
									control: { type: 'select' },
									options,
								};
							}
						}
					} else {
						// All other string/union props → text input
						enhanced[key] = {
							...argType,
							control: { type: 'text' },
						};
					}
				}
			}
			// Enum types → radio or select (for whitelisted component props only)
			else if (typeName === 'enum' && argType.type.value) {
				const componentProps = [
					'size',
					'variant',
					'spacing',
					'orientation',
					'color',
					'appearance',
					'position',
					'placement',
				];

				if (componentProps.includes(key)) {
					const options = argType.type.value
						.filter((v: any) => v !== null && v !== undefined && v !== 'null' && v !== 'undefined')
						.map((v: any) => v);

					if (options.length > 0) {
						if (options.length <= 5) {
							enhanced[key] = {
								...argType,
								control: { type: 'radio' },
								options,
							};
						} else {
							enhanced[key] = {
								...argType,
								control: { type: 'select' },
								options,
							};
						}
					}
				} else {
					// Non-whitelisted enums → text input
					enhanced[key] = {
						...argType,
						control: { type: 'text' },
					};
				}
			}
			// All string props → text input
			else if (typeName === 'string') {
				enhanced[key] = {
					...argType,
					control: { type: 'text' },
				};
			}
			// Number props → number input
			else if (typeName === 'number') {
				enhanced[key] = {
					...argType,
					control: { type: 'number' },
				};
			}
		}
	});

	return enhanced;
};

const preview: Preview = {
	tags: ['autodocs'],
	parameters,
	decorators,
	globalTypes,
	initialGlobals: {
		backgrounds: { value: 'default' },
	},
	// Auto-enhance argTypes for better controls
	argTypesEnhancers: [(context) => enhanceArgTypes(context)],
	// Global argTypes that apply to all stories
	argTypes: {
		// Hide technical props
		style: { table: { disable: true } },
		UNSAFE_className: { table: { disable: true } },
		UNSAFE_style: { table: { disable: true } },

		// Hide verbose aria props (keep common ones like aria-label visible)
		'aria-controls': { table: { disable: true } },
		'aria-expanded': { table: { disable: true } },
		'aria-haspopup': { table: { disable: true } },
		'aria-pressed': { table: { disable: true } },
		'aria-required': { table: { disable: true } },
		'aria-roledescription': { table: { disable: true } },
		'aria-selected': { table: { disable: true } },
		'aria-describedby': { table: { disable: true } },
		'aria-details': { table: { disable: true } },
		'aria-labelledby': { table: { disable: true } },
	},
};

export default preview;
