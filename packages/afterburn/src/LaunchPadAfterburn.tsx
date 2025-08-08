import type { LaunchPadAfterburnProps } from './types';

import { useEffect, useMemo, useRef } from 'react';

import { AfterburnController } from './AfterburnController';
import { componentMetadata } from './metadata.generated';

import './styles/afterburn.css';

const DEFAULT_CONFIG: Required<Omit<LaunchPadAfterburnProps, 'metadata' | 'children'>> = {
	shortcut: 'cmd+shift+l',
	docsBaseUrl: 'https://launchpad.launchdarkly.com',
	enabled: true,
};

/**
 * LaunchPad Afterburn developer tool
 *
 * Provides keyboard shortcut-based component highlighting and documentation access
 * for LaunchPad components on the page. Uses CSS-only highlighting for perfect
 * positioning and minimal vanilla JS for rich tooltips. The 'afterburn' creates
 * a visible highlighting effect on components, like the trail left by a rocket engine.
 */
export function LaunchPadAfterburn(props: LaunchPadAfterburnProps) {
	const config = { ...DEFAULT_CONFIG, ...props };
	const metadata = useMemo(() => ({ ...componentMetadata, ...config.metadata }), [config.metadata]);
	const controllerRef = useRef<AfterburnController | null>(null);

	useEffect(() => {
		// Don't initialize if disabled
		if (!config.enabled) {
			return;
		}

		// Create and initialize controller
		controllerRef.current = new AfterburnController({
			shortcut: config.shortcut,
			docsBaseUrl: config.docsBaseUrl,
			metadata,
			enabled: config.enabled,
		});

		// Cleanup on unmount
		return () => {
			controllerRef.current?.destroy();
			controllerRef.current = null;
		};
	}, [config.enabled, config.shortcut, config.docsBaseUrl, metadata]);

	// No React rendering needed - everything handled by CSS + vanilla JS
	return null;
}
