/**
 * Metadata for a LaunchPad component
 */
export interface ComponentMetadata {
	/** Name of the component (e.g., 'Button', 'Modal') */
	name: string;
	/** Package containing the component */
	package: string;
	/** Package version */
	version: string;
	/** URL to component documentation */
	docsUrl?: string;
	/** URL to component in Storybook */
	storybookUrl?: string;
	/** Brief description of the component */
	description?: string;
}

/**
 * Configuration for LaunchPad Contrail
 */
export interface ContrailConfig {
	/** Keyboard shortcut to toggle highlighting (default: "cmd+l") */
	shortcut?: string;
	/** Base URL for component documentation */
	docsBaseUrl?: string;
	/** URL for Storybook instance */
	storybookUrl?: string;
	/** Whether Contrail is enabled (default: true) */
	enabled?: boolean;
	/** Custom component metadata */
	metadata?: Record<string, ComponentMetadata>;
}

/**
 * Props for the LaunchPadContrail component
 */
export interface LaunchPadContrailProps extends ContrailConfig {
	/** Child components (optional) */
	children?: never;
}
