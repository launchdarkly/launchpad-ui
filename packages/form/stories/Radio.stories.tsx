import type { StoryObj } from '@storybook/react';

import { Radio } from '../src';

export default {
	component: Radio,
	title: 'Legacy/Deprecated/Form/Radio',
	description: 'A radio button allows the user to select one of a set of options."',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__FORM,
		},
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
