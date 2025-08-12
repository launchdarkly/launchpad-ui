// Universal component to render any story at smaller scale for overview
/** biome-ignore-all lint/suspicious/noExplicitAny: <explanation> */
import type { ReactNode } from 'react';

interface StoryType {
	render?: (args?: any, context?: any) => ReactNode;
	args?: any & {
		children?: ReactNode;
	};
}

export const StoryPreview = ({ story, scale = 1 }: { story: StoryType; scale?: number }) => {
	// Handle different story structures:
	// 1. Stories with custom render function (like Button.stories)
	// 2. Stories with args that need to be passed to the component (like DatePicker)
	// 3. Stories with just children in args (like simple components)

	const renderStory = () => {
		if (story.render) {
			// Story has custom render function - use it with args
			return story.render(story.args || {}, {});
		}
		if (story.args) {
			// Story has args - need to render the component properly
			// For stories like DatePicker that need the component wrapper with props
			const storyArgs = story.args;

			// If the story has a component defined in the meta, we should use it
			// For now, we'll extract children if available, but this needs the component context
			if (storyArgs.children) {
				// This is a complex component like DatePicker that needs proper rendering
				// We need the actual component to render with args
				// For now, return the children but this is not ideal
				return storyArgs.children;
			}

			// Fallback for other arg patterns
			return (
				storyArgs.children || <div style={{ fontSize: '12px', color: '#666' }}>Story Preview</div>
			);
		}
		// Fallback: render placeholder
		return <div style={{ fontSize: '12px', color: '#666' }}>Story Preview</div>;
	};

	return (
		<div
			style={{
				transform: `scale(${scale})`,
				transformOrigin: 'center',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				minHeight: '60px',
			}}
		>
			{renderStory()}
		</div>
	);
};
