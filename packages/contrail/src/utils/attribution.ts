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

/**
 * Generate documentation URL for a component
 */
export function generateDocsUrl(
	componentName: string,
	baseUrl = 'https://launchpad.launchdarkly.com',
): string {
	const kebabCase = componentName
		.replace(/([A-Z])/g, '-$1')
		.toLowerCase()
		.slice(1);
	return `${baseUrl}/?path=/docs/components-${kebabCase}--docs`;
}

/**
 * Generate Storybook URL for a component
 */
export function generateStorybookUrl(componentName: string, storybookUrl: string): string {
	const kebabCase = componentName
		.replace(/([A-Z])/g, '-$1')
		.toLowerCase()
		.slice(1);
	return `${storybookUrl}/?path=/docs/components-${kebabCase}--docs`;
}
