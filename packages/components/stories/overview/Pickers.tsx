// Import the actual components for complex cases
import { Select } from '../../src/Select';
import { Example as ComboBoxExample } from '../ComboBox.stories';
// Import actual picker stories
import { Example as SelectExample } from '../Select.stories';
// Import shared preview component
import { StoryPreview } from './StoryPreview';

// Custom wrapper for Select that renders the story properly
const SelectPreview = () => {
	const storyArgs = SelectExample.args || {};

	return (
		<div style={{ transform: 'scale(0.8)', transformOrigin: 'center' }}>
			<Select {...storyArgs}>{storyArgs.children}</Select>
		</div>
	);
};

// Pickers category configuration
export const pickersCategory = {
	category: 'Pickers',
	components: [
		{
			name: 'Select',
			component: <SelectPreview />,
			storyPath: 'components-pickers-select--docs',
		},
		{
			name: 'ComboBox',
			component: <StoryPreview story={ComboBoxExample} />,
			storyPath: 'components-pickers-combobox--docs',
		},
	],
};
