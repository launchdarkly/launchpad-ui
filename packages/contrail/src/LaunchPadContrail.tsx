import type { LaunchPadContrailProps } from './types';

import { useCallback, useEffect, useState } from 'react';

import { ComponentHighlighter } from './ComponentHighlighter';
import { componentMetadata } from './metadata.generated';
import { createShortcutHandler } from './utils/keyboard';

import './styles/contrail.css';

const DEFAULT_CONFIG: Required<Omit<LaunchPadContrailProps, 'metadata' | 'children'>> = {
	shortcut: 'cmd+l',
	docsBaseUrl: 'https://launchpad.launchdarkly.com',
	storybookUrl: '',
	enabled: true,
};

/**
 * LaunchPad Contrail developer tool
 *
 * Provides keyboard shortcut-based component highlighting and documentation access
 * for LaunchPad components on the page.
 */
export function LaunchPadContrail(props: LaunchPadContrailProps) {
	const config = { ...DEFAULT_CONFIG, ...props };
	const metadata = { ...componentMetadata, ...config.metadata };

	const [isActive, setIsActive] = useState(false);

	const toggleActive = useCallback(() => {
		setIsActive((prev) => !prev);
	}, []);

	useEffect(() => {
		if (!config.enabled) {
			return;
		}

		const handleKeyDown = createShortcutHandler(config.shortcut, toggleActive);

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [config.enabled, config.shortcut, toggleActive]);

	// Don't render if disabled
	if (!config.enabled) {
		return null;
	}

	return (
		<ComponentHighlighter
			active={isActive}
			metadata={metadata}
			docsBaseUrl={config.docsBaseUrl}
			storybookUrl={config.storybookUrl}
		/>
	);
}
