import { create } from 'storybook/theming';

// Base configuration
const baseTheme = {
	brandTitle: 'LaunchPad UI',
	brandUrl: 'https://github.com/launchdarkly/launchpad-ui',
	brandImage: './launchpad_logo.svg',
	brandTarget: '_self',

	// Typography
	fontBase: '"Inter", sans-serif',
	fontCode: '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Courier New", monospace',

	// Toolbar default and active colors
	barSelectedColor: '#405BFF', // brand.blue.base
	barBg: 'transparent',

	// Form colors
	inputBorder: '#D8DDE3', // gray.100
	inputTextColor: '#23252A', // gray.900
	inputBorderRadius: 6,
};

export const lightTheme = create({
	base: 'light',
	...baseTheme,

	// Storybook-specific color palette using LaunchPad design tokens
	colorPrimary: '#405BFF', // brand.blue.base
	colorSecondary: '#23252A', // gray.900

	// UI colors
	appBg: '#FFFFFF', // white.950
	appContentBg: '#F7F9FB', // gray.0
	appPreviewBg: '#FFFFFF', // white.950
	appBorderColor: '#D8DDE3', // gray.100
	appBorderRadius: 8,

	// Text colors using gray scale
	textColor: '#23252A', // gray.900
	textInverseColor: '#FFFFFF', // white.950
	textMutedColor: '#6C727A', // gray.500

	// Toolbar colors
	barTextColor: '#6C727A', // gray.500
	barHoverColor: '#7084FF', // brand.blue.light
	barBg: '#FFFFFF', // white.950
	barSelectedColor: '#405BFF', // brand.blue.base

	// Button colors
	buttonBg: '#F7F9FB', // gray.0
	buttonBorder: '#D8DDE3', // gray.100

	// Form colors
	inputBg: '#FFFFFF', // white.950
});

export const darkTheme = create({
	base: 'dark',
	...baseTheme,

	// Storybook-specific color palette using LaunchPad design tokens
	colorPrimary: '#7084FF', // brand.blue.light (better for dark backgrounds)
	colorSecondary: '#ECEFF2', // gray.50

	// UI colors using darker grays
	appBg: '#181A1F', // gray.950
	appContentBg: '#23252A', // gray.900
	appPreviewBg: '#181A1F', // gray.950
	appBorderColor: '#3F454C', // gray.700
	appBorderRadius: 8,

	// Text colors using gray scale
	textColor: '#ECEFF2', // gray.50
	textInverseColor: '#23252A', // gray.900
	textMutedColor: '#A9AFB4', // gray.300

	// Toolbar colors
	barTextColor: '#A9AFB4', // gray.300
	barHoverColor: '#7084FF', // brand.blue.light
	barBg: '#23252A', // gray.900

	// Button colors
	buttonBg: '#3F454C', // gray.700
	buttonBorder: '#545A62', // gray.600

	// Form colors
	inputBg: '#3F454C', // gray.700
	inputTextColor: '#ECEFF2', // gray.50
	inputBorder: '#545A62', // gray.600
});
