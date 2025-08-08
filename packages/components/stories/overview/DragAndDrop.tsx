// Import actual drag and drop stories
import { Example as DropZoneExample } from '../DropZone.stories';
// Import shared preview component
import { StoryPreview } from './StoryPreview';

// Drag and Drop category configuration
export const dragAndDropCategory = {
	category: 'Drag and drop',
	components: [
		{
			name: 'DropZone',
			component: <StoryPreview story={DropZoneExample} />,
			storyPath: 'components-drag-and-drop-dropzone--docs',
		},
	],
};
