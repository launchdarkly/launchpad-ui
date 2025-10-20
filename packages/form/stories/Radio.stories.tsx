import type { StoryObj } from '@storybook/react-vite';

import { Radio } from '../src';

export default {
	component: Radio,
	title: 'Legacy/Form/Radio',
	tags: ['deprecated'],
	description: 'A radio button allows the user to select one of a set of options."',
	parameters: {
		chromatic: { disableSnapshot: true },
	},
};

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
	args: {
		id: 'optionOne',
		value: 'Option One',
		checked: true,
		'aria-label': 'radio',
	},
	parameters: {
		a11y: {
			options: {
				rules: {
					// @fixme
					'duplicate-id-aria': { enabled: false },
				},
			},
		},
	},
};
