// Import the actual components for complex cases
import { DatePicker } from '../../src/DatePicker';
// Import actual date and time stories
import { Example as CalendarExample } from '../Calendar.stories';
import { Example as DateFieldExample } from '../DateField.stories';
import { Example as DatePickerExample } from '../DatePicker.stories';
import { Example as TimeFieldExample } from '../TimeField.stories';
// Import shared preview component
import { StoryPreview } from './StoryPreview';

// Custom wrapper for DatePicker that renders the story properly
const DatePickerPreview = () => {
	const storyArgs = DatePickerExample.args || {};

	return (
		<div style={{ transform: 'scale(0.8)', transformOrigin: 'center' }}>
			<DatePicker {...storyArgs}>{storyArgs.children}</DatePicker>
		</div>
	);
};

// Date and Time category configuration
export const dateAndTimeCategory = {
	category: 'Date and Time',
	components: [
		{
			name: 'Calendar',
			component: <StoryPreview story={CalendarExample} />,
			storyPath: 'components-date-and-time-calendar--docs',
		},
		{
			name: 'DateField',
			component: <StoryPreview story={DateFieldExample} />,
			storyPath: 'components-date-and-time-datefield--docs',
		},
		{
			name: 'DatePicker',
			component: <DatePickerPreview />,
			storyPath: 'components-date-and-time-datepicker--docs',
		},
		{
			name: 'TimeField',
			component: <StoryPreview story={TimeFieldExample} />,
			storyPath: 'components-date-and-time-timefield--docs',
		},
	],
};
