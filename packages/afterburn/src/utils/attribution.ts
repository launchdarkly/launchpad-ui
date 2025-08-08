/**
 * Utilities for working with LaunchPad component attribution
 */

import type { ComponentMetadata } from '../types';

/**
 * Find all LaunchPad components on the page
 */
export function findLaunchPadComponents(): HTMLElement[] {
	return Array.from(document.querySelectorAll('[data-launchpad]'));
}

/**
 * Get component name from a LaunchPad element
 */
export function getComponentName(element: HTMLElement): string | null {
	return element.getAttribute('data-launchpad');
}

/**
 * Check if an element is a LaunchPad component
 */
export function isLaunchPadComponent(element: HTMLElement): boolean {
	return element.hasAttribute('data-launchpad');
}

/**
 * Get component metadata for a given component name
 */
export function getComponentMetadata(
	componentName: string,
	metadata: Record<string, ComponentMetadata>,
): ComponentMetadata | null {
	return metadata[componentName] || null;
}

// Component category mapping for correct Storybook URLs
// Based on actual Storybook structure: components-{category}-{component}--docs
const COMPONENT_CATEGORIES: Record<string, string> = {
	// Buttons category
	Button: 'buttons',
	ButtonGroup: 'buttons',
	FileTrigger: 'buttons',
	IconButton: 'buttons',
	ToggleButton: 'buttons',
	ToggleButtonGroup: 'buttons',
	ToggleIconButton: 'buttons',

	// Collections category
	GridList: 'collections',
	ListBox: 'collections',
	Menu: 'collections',
	Table: 'collections',
	TagGroup: 'collections',
	Tree: 'collections',

	// Content category
	Avatar: 'content',
	Code: 'content',
	Group: 'content',
	Heading: 'content',
	Label: 'content',
	Text: 'content',
	Toolbar: 'content',

	// Date and Time category
	Calendar: 'date-and-time',
	DateField: 'date-and-time',
	DatePicker: 'date-and-time',
	DateRangePicker: 'date-and-time',
	RangeCalendar: 'date-and-time',
	TimeField: 'date-and-time',

	// Drag and drop category
	DropZone: 'drag-and-drop',

	// Forms category
	Checkbox: 'forms',
	CheckboxGroup: 'forms',
	FieldGroup: 'forms',
	Form: 'forms',
	NumberField: 'forms',
	RadioGroup: 'forms',
	SearchField: 'forms',
	Switch: 'forms',
	TextField: 'forms',

	// Icons category
	Icon: 'icons',
	BadgeIcon: 'icons',

	// Navigation category
	Breadcrumbs: 'navigation',
	Disclosure: 'navigation',
	DisclosureGroup: 'navigation',
	Link: 'navigation',
	LinkButton: 'navigation',
	LinkIconButton: 'navigation',
	Tabs: 'navigation',

	// Overlays category
	Modal: 'overlays',
	Popover: 'overlays',
	Tooltip: 'overlays',

	// Pickers category
	Autocomplete: 'pickers',
	ComboBox: 'pickers',
	Select: 'pickers',

	// Status category
	Alert: 'status',
	Meter: 'status',
	ProgressBar: 'status',
	Toast: 'status',
};

/**
 * Generate documentation URL for a component with proper category
 */
export function generateDocsUrl(
	componentName: string,
	baseUrl = 'https://launchpad.launchdarkly.com',
): string {
	const category = COMPONENT_CATEGORIES[componentName];
	// Convert component name to lowercase for URL (no hyphens added)
	const urlComponent = componentName.toLowerCase();

	if (category) {
		return `${baseUrl}/?path=/docs/components-${category}-${urlComponent}--docs`;
	}

	// Fallback to generic components path with kebab-case
	const kebabCase = componentName
		.replace(/([A-Z])/g, '-$1')
		.toLowerCase()
		.slice(1);
	return `${baseUrl}/?path=/docs/components-${kebabCase}--docs`;
}
