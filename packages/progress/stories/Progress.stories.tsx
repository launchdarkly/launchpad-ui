import type { StoryObj } from '@storybook/react';

import { Progress } from '../src';

export default {
	component: Progress,
	title: 'Legacy/Progress',
	description: 'Progress indicates a page or content is loading.',
	parameters: {
		chromatic: { disableSnapshot: true },
	},
	argTypes: {
		className: {
			table: {
				category: 'Presentation',
			},
		},
		value: {
			table: {
				category: 'Presentation',
			},
		},
		size: {
			table: {
				category: 'Presentation',
			},
		},
		delayMs: {
			table: {
				category: 'Presentation',
			},
		},
	},
};

type Story = StoryObj<typeof Progress>;

export const Default: Story = { args: { size: 'small' } };
