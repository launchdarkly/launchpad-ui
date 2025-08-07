/**
 * Attribution utilities for LaunchPad components
 * Provides minimal data attributes for component identification
 */

export interface AttributionDataAttributes {
	'data-launchpad': string;
}

/**
 * Generates minimal data attribute for LaunchPad component attribution
 *
 * @param componentName - Name of the component (e.g., 'Button', 'Modal')
 * @returns Object containing single data attribute for component identification
 */
export function addLaunchPadAttribution(componentName: string): AttributionDataAttributes {
	return {
		'data-launchpad': componentName,
	};
}
