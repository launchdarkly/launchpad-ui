import type { StoryObj } from '@storybook/react';

import { Progress } from '../src';

export default {
	component: Progress,
	title: 'Components/Progress',
	description: 'Progress indicates a page or content is loading.',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__PROGRESS,
		},
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
