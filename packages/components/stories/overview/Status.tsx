// Import the actual components for args-only stories
import { Alert } from '../../src/Alert';
import { Meter } from '../../src/Meter';
import { ProgressBar } from '../../src/ProgressBar';
// Import actual status stories
import { Neutral as AlertExample } from '../Alert.stories';
import { Example as MeterExample } from '../Meter.stories';
import { Example as ProgressBarExample } from '../ProgressBar.stories';
import { Example as ToastExample } from '../Toast.stories';
// Import shared preview component
import { StoryPreview } from './StoryPreview';

// Custom wrapper for Alert that renders the story properly
const AlertPreview = () => {
	const storyArgs = AlertExample.args || {};

	return (
		<div style={{ transform: 'scale(0.8)', transformOrigin: 'center' }}>
			<Alert {...storyArgs}>{storyArgs.children}</Alert>
		</div>
	);
};

// Custom wrapper for ProgressBar that renders the story properly
const ProgressBarPreview = () => {
	const storyArgs = ProgressBarExample.args || {};

	return (
		<div style={{ transform: 'scale(0.8)', transformOrigin: 'center' }}>
			<ProgressBar {...storyArgs} />
		</div>
	);
};

// Custom wrapper for Meter that renders the story properly
const MeterPreview = () => {
	const storyArgs = MeterExample.args || {};

	return (
		<div style={{ transform: 'scale(0.8)', transformOrigin: 'center' }}>
			<Meter {...storyArgs} />
		</div>
	);
};

// Status category configuration
export const statusCategory = {
	category: 'Status',
	components: [
		{
			name: 'Alert',
			component: <AlertPreview />,
			storyPath: 'components-status-alert--docs',
		},
		{
			name: 'Toast',
			component: <StoryPreview story={ToastExample} />,
			storyPath: 'components-status-toast--docs',
		},
		{
			name: 'ProgressBar',
			component: <ProgressBarPreview />,
			storyPath: 'components-status-progressbar--docs',
		},
		{
			name: 'Meter',
			component: <MeterPreview />,
			storyPath: 'components-status-meter--docs',
		},
	],
};
