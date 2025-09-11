// Import actual overlay stories
import { Example as ModalExample } from '../Modal.stories';
import { Example as PopoverExample } from '../Popover.stories';
import { Example as TooltipExample } from '../Tooltip.stories';
// Import shared preview component
import { StoryPreview } from './StoryPreview';

// Overlays category configuration
export const overlaysCategory = {
	category: 'Overlays',
	components: [
		{
			name: 'Modal',
			component: <StoryPreview story={ModalExample} />,
			storyPath: 'components-overlays-modal--docs',
		},
		{
			name: 'Popover',
			component: <StoryPreview story={PopoverExample} />,
			storyPath: 'components-overlays-popover--docs',
		},
		{
			name: 'Tooltip',
			component: <StoryPreview story={TooltipExample} />,
			storyPath: 'components-overlays-tooltip--docs',
		},
	],
};
