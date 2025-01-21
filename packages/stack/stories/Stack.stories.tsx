import type { StoryObj } from '@storybook/react';

import { Block } from '../../../.storybook/Block';
import { Stack } from '../src';

export default {
	component: Stack,
	title: 'Legacy/Stack',
	description: 'An element used to add space between components.',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__STACK,
		},
	},
};

type Story = StoryObj<typeof Stack>;

const ELEMENTS = [
	<Block width="32" key={1} />,
	<Block width="48" key={2} />,
	<Block width="64" key={3} />,
	<Block width="80" key={4} />,
];

export const Example: Story = {
	args: {
		children: ELEMENTS,
		gap: '5',
	},
};

export const Left: Story = {
	args: {
		children: ELEMENTS,
		gap: '5',
		align: 'left',
	},
};

export const Center: Story = {
	args: {
		children: ELEMENTS,
		gap: '5',
		align: 'center',
	},
};

export const Right: Story = {
	args: {
		children: ELEMENTS,
		gap: '5',
		align: 'right',
	},
};
