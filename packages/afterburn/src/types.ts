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
	/** Brief description of the component */
	description?: string;
}

/**
 * Configuration for LaunchPad Afterburn
 */
export interface AfterburnConfig {
	/** Keyboard shortcut to toggle highlighting (default: "cmd+shift+l") */
	shortcut?: string;
	/** Base URL for component documentation */
	docsBaseUrl?: string;
	/** Whether Afterburn is enabled (default: true) */
	enabled?: boolean;
	/** Custom component metadata */
	metadata?: Record<string, ComponentMetadata>;
}

/**
 * Props for the LaunchPad Afterburn component
 */
export interface LaunchPadAfterburnProps extends AfterburnConfig {
	/** Child components (optional) */
	children?: never;
}
