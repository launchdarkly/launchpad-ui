import type { StoryObj } from '@storybook/react';

import { Counter } from '../src';

export default {
	component: Counter,
	title: 'Components/Counter',
	description: 'Indicates the count value of a resource.',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COUNTER,
		},
	},
	argTypes: {
		subtle: {
			table: {
				category: 'Presentation',
			},
		},
		value: {
			table: {
				category: 'Content',
			},
		},
	},
};

type Story = StoryObj<typeof Counter>;

export const Example: Story = {
	args: {
		value: 12,
	},
};

export const Subtle: Story = {
	args: {
		value: 12,
		subtle: true,
	},
};
