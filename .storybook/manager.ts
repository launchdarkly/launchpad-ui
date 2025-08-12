import { addons } from 'storybook/internal/manager-api';

import { darkTheme, lightTheme } from './themes';

// Set the default theme
addons.setConfig({
	theme: lightTheme,
});

// Listen for theme changes
if (typeof window !== 'undefined') {
	// Set initial theme based on system preference
	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	if (prefersDark) {
		document.documentElement.classList.add('dark-theme');
	} else {
		document.documentElement.classList.add('light-theme');
	}

	// Listen for theme changes via custom events or global state
	// This will be triggered by the theme decorator
	window.addEventListener('storage', (e) => {
		if (e.key === 'storybook-theme') {
			const currentTheme = e.newValue;
			const theme = currentTheme === 'dark' ? darkTheme : lightTheme;

			addons.setConfig({ theme });

			const managerRoot = document.documentElement;
			if (currentTheme === 'dark') {
				managerRoot.classList.add('dark-theme');
				managerRoot.classList.remove('light-theme');
			} else {
				managerRoot.classList.add('light-theme');
				managerRoot.classList.remove('dark-theme');
			}
		}
	});
}
