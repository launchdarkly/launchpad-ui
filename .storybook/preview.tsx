import type { Preview, ReactRenderer } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import type { DecoratorFunction, GlobalTypes, Parameters } from 'storybook/internal/types';

import { Box } from '@launchpad-ui/box';
import sprite from '@launchpad-ui/icons/img/sprite.svg';
import { withThemeByClassName } from '@storybook/addon-themes';
import React from 'react';
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

// Extend Window interface for Storybook addons
declare global {
	interface Window {
		__STORYBOOK_ADDONS_CHANNEL__?: {
			emit: (event: string, data?: unknown) => void;
		};
		__STORYBOOK_ADDONS_MANAGER__?: {
			setConfig: (config: { theme: unknown }) => void;
		};
	}
}

// Helper function to get initial theme from URL or OS preference
const getInitialTheme = (): string => {
	if (typeof window !== 'undefined') {
		const urlParams = new URLSearchParams(window.location.search);

		// Check for theme in globals parameter (e.g., &globals=theme:dark)
		const globals = urlParams.get('globals');
		if (globals) {
			const themeMatch = globals.match(/theme:([^,;&]+)/);
			if (themeMatch) {
				console.log('Theme found in URL globals:', themeMatch[1]);
				return themeMatch[1];
			}
		}

		// Check for direct theme parameter (e.g., &theme=dark)
		const directTheme = urlParams.get('theme');
		if (directTheme) {
			console.log('Theme found in URL direct param:', directTheme);
			return directTheme;
		}

		// Fall back to OS preference
		const osTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		console.log('Using OS theme preference:', osTheme);
		return osTheme;
	}

	return 'light'; // Server-side fallback
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
		// Define the default theme for the docs based on URL or OS preference
		theme: (() => {
			const initialTheme = getInitialTheme();
			return initialTheme === 'dark' ? darkTheme : lightTheme;
		})(),
		codePanel: true,
	},
};

const decorators: DecoratorFunction<ReactRenderer>[] = [
	withThemeByClassName({
		themes: {
			light: 'light-theme',
			dark: 'dark-theme',
		},
		defaultTheme: getInitialTheme(),
		parentSelector: 'html',
	}),
	// Dynamic theme updater for Storybook UI
	(StoryFn, context) => {
		// Get theme from addon-themes globals, fallback to URL/OS detection
		const currentTheme = context.globals.theme || getInitialTheme();
		const isDark = currentTheme === 'dark';

		console.log('First decorator - Theme info:', {
			globalsTheme: context.globals.theme,
			currentTheme,
			isDark,
			allGlobals: context.globals,
		});

		// Always apply theme, not just on changes
		React.useEffect(() => {
			console.log('Theme effect triggered:', { currentTheme, isDark });

			// Update localStorage immediately
			localStorage.setItem('storybook-theme', currentTheme);

			// Send theme change to manager via multiple methods
			if (typeof window !== 'undefined') {
				// Method 1: Channel events
				if (window.__STORYBOOK_ADDONS_CHANNEL__) {
					const channel = window.__STORYBOOK_ADDONS_CHANNEL__;
					console.log('Sending theme via channel:', currentTheme);
					channel.emit('THEMES_CHANGE', currentTheme);
					channel.emit('SET_THEME', currentTheme);
				}

				// Method 2: Direct manager access
				try {
					if (window.parent && window.parent !== window) {
						const parentWindow = window.parent as Window & {
							__STORYBOOK_ADDONS_MANAGER__?: {
								setConfig: (config: { theme: unknown }) => void;
							};
						};
						if (parentWindow.__STORYBOOK_ADDONS_MANAGER__) {
							console.log('Updating manager theme directly');
							const manager = parentWindow.__STORYBOOK_ADDONS_MANAGER__;
							manager.setConfig({
								theme: isDark ? darkTheme : lightTheme,
							});
						}
					}
				} catch (e) {
					console.log('Could not access parent manager:', e);
				}

				// Method 3: Custom event
				window.dispatchEvent(
					new CustomEvent('storybookThemeChange', {
						detail: { theme: currentTheme, isDark },
					}),
				);
			}
		}, [currentTheme, isDark]);

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

			// Also try to update the parent document (manager) directly
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

					// Also trigger storage event on parent window
					window.parent.dispatchEvent(
						new StorageEvent('storage', {
							key: 'storybook-theme',
							newValue: currentTheme,
						}),
					);

					// Try to trigger addon channel events on parent window
					try {
						const parentChannel = (
							window.parent as Window & {
								__STORYBOOK_ADDONS_CHANNEL__?: {
									emit: (event: string, data?: unknown) => void;
								};
							}
						).__STORYBOOK_ADDONS_CHANNEL__;
						if (parentChannel) {
							parentChannel.emit('THEMES_CHANGE', currentTheme);
							parentChannel.emit('SET_THEME', currentTheme);
						}
					} catch (e) {
						console.log('Could not access parent channel:', e);
					}
				} catch (_e) {
					// Cross-origin restrictions, ignore
				}
			}
		}

		return <StoryFn />;
	},
	(StoryFn, context) => {
		// Get theme from addon-themes globals, fallback to URL/OS detection
		const currentTheme = context.globals.theme || getInitialTheme();
		const isDark = currentTheme === 'dark';

		console.log('Second decorator - Theme info:', {
			globalsTheme: context.globals.theme,
			currentTheme,
			isDark,
		});
		const mirror = context.viewMode === 'story' ? context.globals.mirror : undefined;
		const sideBySide = mirror === 'side-by-side';
		const stacked = mirror === 'stacked';

		// Set story background based on theme
		React.useEffect(() => {
			if (typeof window !== 'undefined') {
				console.log('Setting story backgrounds:', { isDark, currentTheme });

				// Find all .docs-story elements and set their background
				const storyElements = document.querySelectorAll(
					'.docs-story, [data-docs-story], .sbdocs .docs-story, .sbdocs [data-docs-story]',
				);
				console.log('Found story elements:', storyElements.length);

				storyElements.forEach((element) => {
					if (isDark) {
						(element as HTMLElement).style.backgroundColor = '#181a1f'; // gray.950
						(element as HTMLElement).style.setProperty('background-color', '#181a1f', 'important');
					} else {
						(element as HTMLElement).style.backgroundColor = '#ffffff'; // white
						(element as HTMLElement).style.setProperty('background-color', '#ffffff', 'important');
					}
				});

				// Also handle any dynamically added story elements
				const observer = new MutationObserver((mutations) => {
					mutations.forEach((mutation) => {
						mutation.addedNodes.forEach((node) => {
							if (node.nodeType === Node.ELEMENT_NODE) {
								const element = node as Element;
								if (
									element.classList.contains('docs-story') ||
									element.hasAttribute('data-docs-story')
								) {
									if (isDark) {
										(element as HTMLElement).style.backgroundColor = '#181a1f';
										(element as HTMLElement).style.setProperty(
											'background-color',
											'#181a1f',
											'important',
										);
									} else {
										(element as HTMLElement).style.backgroundColor = '#ffffff';
										(element as HTMLElement).style.setProperty(
											'background-color',
											'#ffffff',
											'important',
										);
									}
								}
								// Check children too
								const storyChildren = element.querySelectorAll(
									'.docs-story, [data-docs-story], .sbdocs .docs-story, .sbdocs [data-docs-story]',
								);
								storyChildren.forEach((child) => {
									if (isDark) {
										(child as HTMLElement).style.backgroundColor = '#181a1f';
										(child as HTMLElement).style.setProperty(
											'background-color',
											'#181a1f',
											'important',
										);
									} else {
										(child as HTMLElement).style.backgroundColor = '#ffffff';
										(child as HTMLElement).style.setProperty(
											'background-color',
											'#ffffff',
											'important',
										);
									}
								});
							}
						});
					});
				});

				observer.observe(document.body, { childList: true, subtree: true });

				return () => observer.disconnect();
			}
		}, [isDark, currentTheme]);

		// Also apply story backgrounds on every render to ensure they're always current
		React.useEffect(() => {
			if (typeof window !== 'undefined') {
				console.log('Ensuring story backgrounds are applied on every render:', {
					isDark,
					currentTheme,
				});

				// Force update all story backgrounds
				const storyElements = document.querySelectorAll(
					'.docs-story, [data-docs-story], .sbdocs .docs-story, .sbdocs [data-docs-story]',
				);
				storyElements.forEach((element) => {
					if (isDark) {
						(element as HTMLElement).style.backgroundColor = '#181a1f';
						(element as HTMLElement).style.setProperty('background-color', '#181a1f', 'important');
					} else {
						(element as HTMLElement).style.backgroundColor = '#ffffff';
						(element as HTMLElement).style.setProperty('background-color', '#ffffff', 'important');
					}
				});
			}
		}, [isDark, currentTheme]); // Include all dependencies

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
						<Box padding="$400" className={isDark ? 'dark-theme' : 'light-theme'}>
							<StoryFn />
						</Box>
					)}
				</RouterProvider>
			</BrowserRouter>
		);
	},
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
const enhanceArgTypes = (context: { argTypes?: Record<string, unknown> }) => {
	const { argTypes } = context;
	const enhanced: Record<string, unknown> = {};

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
				const hasBoolean = argType.type.value.some((v: { name?: string }) => v.name === 'boolean');

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
							.filter((v: { name?: string; value?: unknown }) => {
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
							.map((v: { name?: string; value?: unknown }) => v.value || v.name)
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
						.filter(
							(v: unknown) => v !== null && v !== undefined && v !== 'null' && v !== 'undefined',
						)
						.map((v: unknown) => v);

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
