import type { ComponentMetadata } from './types';

import { generateDocsUrl, generateStorybookUrl } from './utils/attribution';

interface HighlightedComponent {
	element: HTMLElement;
	name: string;
	bounds: DOMRect;
}

interface InfoPopoverProps {
	component: HighlightedComponent;
	metadata?: ComponentMetadata;
	mousePosition: { x: number; y: number };
	docsBaseUrl: string;
	storybookUrl: string;
}

/**
 * Popover showing component information on hover
 */
export function InfoPopover({
	component,
	metadata,
	mousePosition,
	docsBaseUrl,
	storybookUrl,
}: InfoPopoverProps) {
	// Calculate popover position
	const popoverWidth = 280;
	const popoverHeight = 120; // approximate
	const margin = 16;

	let left = mousePosition.x + margin;
	let top = mousePosition.y + margin;

	// Keep popover in viewport
	if (left + popoverWidth > window.innerWidth) {
		left = mousePosition.x - popoverWidth - margin;
	}
	if (top + popoverHeight > window.innerHeight) {
		top = mousePosition.y - popoverHeight - margin;
	}

	// Generate URLs
	const docsUrl = metadata?.docsUrl || generateDocsUrl(component.name, docsBaseUrl);
	const storyUrl = storybookUrl ? generateStorybookUrl(component.name, storybookUrl) : null;

	return (
		<div
			className="popover"
			style={{
				left: `${left}px`,
				top: `${top}px`,
			}}
		>
			<div className="popover-header">
				<span className="popover-title">{component.name}</span>
				<span className="popover-package">{metadata?.package || '@launchpad-ui/components'}</span>
			</div>

			{metadata?.description && <div className="popover-description">{metadata.description}</div>}

			<div className="popover-links">
				<a href={docsUrl} target="_blank" rel="noopener noreferrer" className="popover-link">
					📖 Docs
				</a>
				{storyUrl && (
					<a href={storyUrl} target="_blank" rel="noopener noreferrer" className="popover-link">
						📚 Storybook
					</a>
				)}
			</div>
		</div>
	);
}
