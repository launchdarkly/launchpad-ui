import type { LaunchPadContrailProps } from './types';

import { useEffect, useMemo, useRef } from 'react';

import { ContrailController } from './ContrailController';
import { componentMetadata } from './metadata.generated';

import './styles/contrail.css';

const DEFAULT_CONFIG: Required<Omit<LaunchPadContrailProps, 'metadata' | 'children'>> = {
	shortcut: 'cmd+shift+l',
	docsBaseUrl: 'https://launchpad.launchdarkly.com',
	storybookUrl: '',
	enabled: true,
};

/**
 * LaunchPad Contrail developer tool
 *
 * Provides keyboard shortcut-based component highlighting and documentation access
 * for LaunchPad components on the page. Uses CSS-only highlighting for perfect
 * positioning and minimal vanilla JS for rich tooltips.
 */
export function LaunchPadContrail(props: LaunchPadContrailProps) {
	const config = { ...DEFAULT_CONFIG, ...props };
	const metadata = useMemo(() => ({ ...componentMetadata, ...config.metadata }), [config.metadata]);
	const controllerRef = useRef<ContrailController | null>(null);

	useEffect(() => {
		// Don't initialize if disabled
		if (!config.enabled) {
			return;
		}

		// Create and initialize controller
		controllerRef.current = new ContrailController({
			shortcut: config.shortcut,
			docsBaseUrl: config.docsBaseUrl,
			storybookUrl: config.storybookUrl,
			metadata,
			enabled: config.enabled,
		});

		// Cleanup on unmount
		return () => {
			controllerRef.current?.destroy();
			controllerRef.current = null;
		};
	}, [config.enabled, config.shortcut, config.docsBaseUrl, config.storybookUrl, metadata]);

	// No React rendering needed - everything handled by CSS + vanilla JS
	return null;
}
