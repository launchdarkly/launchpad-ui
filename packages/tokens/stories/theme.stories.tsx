import type { Args, StoryContext } from '@storybook/react-vite';

import { useEffect, useState } from 'react';

import { Button } from '../../components/src/Button';

export default {
	title: 'Tokens/Themes',
	tags: ['!dev'],
};

export const NestedThemes = {
	render: (_args: Args, context: StoryContext) => {
		const NestedThemesComponent = () => {
			const [isDark, setIsDark] = useState(() => {
				return (
					document.documentElement.classList.contains('dark-theme') ||
					window.location.search.includes('theme:dark') ||
					window.location.search.includes('theme=dark')
				);
			});

			useEffect(() => {
				const checkTheme = () => {
					const newIsDark =
						document.documentElement.classList.contains('dark-theme') ||
						window.location.search.includes('theme:dark') ||
						window.location.search.includes('theme=dark');
					setIsDark(newIsDark);
				};

				// Listen for theme changes
				const observer = new MutationObserver(checkTheme);
				observer.observe(document.documentElement, {
					attributes: true,
					attributeFilter: ['class'],
				});

				// Listen for custom theme events
				window.addEventListener('storybookThemeChange', checkTheme);

				return () => {
					observer.disconnect();
					window.removeEventListener('storybookThemeChange', checkTheme);
				};
			}, []);

			const defaultStyles = {
				backgroundColor: isDark ? '#23252A' : '#F7F9FB', // gray.900 : gray.0
				color: isDark ? '#ECEFF2' : '#23252A', // gray.50 : gray.900
				border: `1px solid ${isDark ? '#3F454C' : '#D8DDE3'}`, // gray.700 : gray.100
				padding: 'var(--lp-spacing-300)',
			};

			const invertedStyles = {
				backgroundColor: isDark ? '#F7F9FB' : '#23252A', // gray.0 : gray.900 (inverted)
				color: isDark ? '#23252A' : '#ECEFF2', // gray.900 : gray.50 (inverted)
				border: `1px solid ${isDark ? '#D8DDE3' : '#3F454C'}`, // gray.100 : gray.700 (inverted)
				marginTop: 'var(--lp-spacing-500)',
				padding: 'var(--lp-spacing-300)',
			};

			return (
				<>
					<div style={defaultStyles}>
						<h1>Default mode</h1>
						<p>Currently, we are in a default mode context.</p>
						<Button>Click me</Button>

						<div data-theme={context.globals.theme === 'dark' ? 'default' : 'dark'}>
							<div style={invertedStyles}>
								<h1>Inverted theme</h1>

								<p>
									By adding <code>data-theme=&quot;dark&quot;</code> to a container, you can make
									the children adopt that theme.
								</p>

								<Button>Click me</Button>
							</div>
						</div>
					</div>
				</>
			);
		};

		return <NestedThemesComponent />;
	},
	parameters: {
		docs: { disable: false },
		chromatic: {
			modes: {
				dark: { disable: true },
			},
		},
	},
};
