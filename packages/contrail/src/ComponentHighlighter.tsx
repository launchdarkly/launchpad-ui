import type { ComponentMetadata } from './types';

import { useCallback, useEffect, useState } from 'react';

import { InfoPopover } from './InfoPopover';
import { findLaunchPadComponents, getComponentName } from './utils/attribution';

interface ComponentHighlighterProps {
	active: boolean;
	metadata: Record<string, ComponentMetadata>;
	docsBaseUrl: string;
	storybookUrl: string;
}

interface HighlightedComponent {
	element: HTMLElement;
	name: string;
	bounds: DOMRect;
}

/**
 * Component that handles highlighting of LaunchPad components
 */
export function ComponentHighlighter({
	active,
	metadata,
	docsBaseUrl,
	storybookUrl,
}: ComponentHighlighterProps) {
	const [components, setComponents] = useState<HighlightedComponent[]>([]);
	const [hoveredComponent, setHoveredComponent] = useState<HighlightedComponent | null>(null);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	const updateComponents = useCallback(() => {
		if (!active) {
			setComponents([]);
			return;
		}

		const elements = findLaunchPadComponents();
		const highlighted = elements
			.map((element) => {
				const name = getComponentName(element);
				if (!name) return null;

				return {
					element,
					name,
					bounds: element.getBoundingClientRect(),
				};
			})
			.filter((comp): comp is HighlightedComponent => comp !== null);

		setComponents(highlighted);
	}, [active]);

	const handleMouseMove = useCallback(
		(event: MouseEvent) => {
			setMousePosition({ x: event.clientX, y: event.clientY });

			// Find component under mouse
			const element = document.elementFromPoint(event.clientX, event.clientY) as HTMLElement;
			if (!element) return;

			// Find closest LaunchPad component (could be the element itself or an ancestor)
			let current: HTMLElement | null = element;
			while (current) {
				const name = getComponentName(current);
				if (name) {
					const component = components.find((c) => c.element === current);
					setHoveredComponent(component || null);
					return;
				}
				current = current.parentElement;
			}

			setHoveredComponent(null);
		},
		[components],
	);

	// Update component list when active state changes or on resize
	useEffect(() => {
		updateComponents();

		if (active) {
			const handleResize = () => updateComponents();
			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);
			};
		}
		return;
	}, [active, updateComponents]);

	// Handle mouse events when active
	useEffect(() => {
		if (active) {
			document.addEventListener('mousemove', handleMouseMove);

			return () => {
				document.removeEventListener('mousemove', handleMouseMove);
			};
		}
		setHoveredComponent(null);
		return;
	}, [active, handleMouseMove]);

	if (!active) {
		return null;
	}

	return (
		<div className="contrail" data-testid="component-highlighter">
			{/* Component highlights */}
			{components.map((component, index) => (
				<div
					key={`${component.name}-${index}`}
					className="highlight"
					data-component-name={component.name}
					style={{
						top: component.bounds.top + window.scrollY,
						left: component.bounds.left + window.scrollX,
						width: component.bounds.width,
						height: component.bounds.height,
					}}
				/>
			))}

			{/* Info popover */}
			{hoveredComponent && (
				<InfoPopover
					component={hoveredComponent}
					metadata={metadata[hoveredComponent.name]}
					mousePosition={mousePosition}
					docsBaseUrl={docsBaseUrl}
					storybookUrl={storybookUrl}
				/>
			)}
		</div>
	);
}
