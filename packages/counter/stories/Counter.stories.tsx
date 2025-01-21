import type { StoryObj } from '@storybook/react';

import { Counter } from '../src';

export default {
	component: Counter,
	title: 'Legacy/Counter',
	description: 'Indicates the count value of a resource.',
	parameters: {
		chromatic: { disableSnapshot: true },
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
