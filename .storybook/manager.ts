import { addons } from 'storybook/internal/manager-api';

import { darkTheme, lightTheme } from './themes';

// Helper function to get initial theme from URL or OS preference
const getInitialTheme = (): 'light' | 'dark' => {
	if (typeof window !== 'undefined') {
		const urlParams = new URLSearchParams(window.location.search);

		// Check for theme in globals parameter (e.g., &globals=theme:dark)
		const globals = urlParams.get('globals');
		if (globals) {
			const themeMatch = globals.match(/theme:([^,;&]+)/);
			if (themeMatch) {
				console.log('Manager: Theme found in URL globals:', themeMatch[1]);
				return themeMatch[1] === 'dark' ? 'dark' : 'light';
			}
		}

		// Check for direct theme parameter (e.g., &theme=dark)
		const directTheme = urlParams.get('theme');
		if (directTheme) {
			console.log('Manager: Theme found in URL direct param:', directTheme);
			return directTheme === 'dark' ? 'dark' : 'light';
		}

		// Fall back to OS preference
		const osTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		console.log('Manager: Using OS theme preference:', osTheme);
		return osTheme;
	}

	return 'light'; // Server-side fallback
};

// Set the initial theme based on URL or system preference
const initialThemeType = getInitialTheme();
const initialTheme = initialThemeType === 'dark' ? darkTheme : lightTheme;

// Configure the manager theme
addons.setConfig({
	theme: initialTheme,
	selectedPanel: undefined,
});

// Listen for theme changes
if (typeof window !== 'undefined') {
	// Set initial theme based on URL or system preference
	const initialTheme = getInitialTheme();
	console.log('Manager: Setting initial DOM theme:', initialTheme);

	if (initialTheme === 'dark') {
		document.documentElement.classList.add('dark-theme');
		document.documentElement.classList.remove('light-theme');
	} else {
		document.documentElement.classList.add('light-theme');
		document.documentElement.classList.remove('dark-theme');
	}

	// Debug: Log all channel events to see what's being fired
	const channel = addons.getChannel();
	const originalEmit = channel.emit;
	channel.emit = function (...args) {
		console.log('Channel event emitted:', args[0], args.slice(1));
		return originalEmit.apply(this, args);
	};

	// Listen for theme changes via custom events or global state
	// This will be triggered by the theme decorator
	window.addEventListener('storage', (e) => {
		console.log('Manager received storage theme change:', e);
		if (e.key === 'storybook-theme') {
			const currentTheme = e.newValue;
			const theme = currentTheme === 'dark' ? darkTheme : lightTheme;

			console.log('Applying theme via storage event:', { currentTheme, theme });
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

	// Helper function to apply theme
	const applyTheme = (currentTheme: string, source: string) => {
		console.log(`Applying theme from ${source}:`, currentTheme);
		const isDark = currentTheme === 'dark';
		const storyBookTheme = isDark ? darkTheme : lightTheme;

		console.log('Theme objects:', {
			currentTheme,
			isDark,
			lightTheme: lightTheme.base,
			darkTheme: darkTheme.base,
			selectedTheme: storyBookTheme.base,
		});

		// Update the manager theme
		addons.setConfig({ theme: storyBookTheme });

		// Update DOM classes
		const managerRoot = document.documentElement;
		if (isDark) {
			managerRoot.classList.add('dark-theme');
			managerRoot.classList.remove('light-theme');
		} else {
			managerRoot.classList.add('light-theme');
			managerRoot.classList.remove('dark-theme');
		}

		// Also update localStorage for compatibility
		localStorage.setItem('storybook-theme', currentTheme);

		console.log('Theme applied successfully');
	};

	// Listen for theme changes via addon-themes API
	addons.getChannel().on('THEMES_CHANGE', (theme) => {
		applyTheme(theme, 'THEMES_CHANGE');
	});

	// Also listen for the specific theme change event from addon-themes
	addons.getChannel().on('SET_THEME', (theme) => {
		applyTheme(theme, 'SET_THEME');
	});

	// Listen for storybook global changes
	addons.getChannel().on('SET_GLOBALS', (data) => {
		console.log('Manager received SET_GLOBALS:', data);
		if (data?.globals?.theme) {
			applyTheme(data.globals.theme, 'SET_GLOBALS');
		}
	});

	// Listen for storybook global updates
	addons.getChannel().on('UPDATE_GLOBALS', (data) => {
		console.log('Manager received UPDATE_GLOBALS:', data);
		if (data?.globals?.theme) {
			applyTheme(data.globals.theme, 'UPDATE_GLOBALS');
		}
	});

	// Listen for all possible global events
	addons.getChannel().on('GLOBALS_UPDATED', (data) => {
		console.log('Manager received GLOBALS_UPDATED:', data);
		if (data?.globals?.theme) {
			applyTheme(data.globals.theme, 'GLOBALS_UPDATED');
		}
	});

	// Listen for custom theme change events
	window.addEventListener('storybookThemeChange', (e: Event) => {
		const customEvent = e as CustomEvent<{ theme: string; isDark: boolean }>;
		console.log('Manager received custom theme event:', customEvent.detail);
		applyTheme(customEvent.detail.theme, 'CUSTOM_EVENT');
	});

	// Try a polling approach as fallback
	let lastTheme = localStorage.getItem('storybook-theme') || 'light';
	setInterval(() => {
		const currentTheme = localStorage.getItem('storybook-theme') || 'light';
		if (currentTheme !== lastTheme) {
			console.log('Theme change detected via polling:', { lastTheme, currentTheme });
			applyTheme(currentTheme, 'POLLING');
			lastTheme = currentTheme;
		}
	}, 500);
}
