import type { StoryObj } from '@storybook/react';

import { Slider } from '../src';

export default {
	component: Slider,
	title: 'Components/Slider',
	description: 'An element used to set a value within a range.',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__SLIDER,
		},
	},
};

type Story = StoryObj<typeof Slider>;

export const Example: Story = {
	args: {
		value: 25,
		onChange: () => undefined,
		min: 0,
		max: 0,
		step: 1,
		readOnly: false,
		disabled: false,
		hideTrack: false,
	},
	parameters: {
		a11y: {
			options: {
				rules: {
					// @fixme
					label: { enabled: false },
				},
			},
		},
	},
};
