import type { StoryObj } from '@storybook/react';

import { Block } from '../../../.storybook/Block';
import { Inline } from '../src';

export default {
	component: Inline,
	title: 'Legacy/Inline',
	description: 'An element used to add horizontal space between components.',
	parameters: {
		chromatic: { disableSnapshot: true },
	},
};

type Story = StoryObj<typeof Inline>;

const ELEMENTS = [
	<Block width="32" height="32" key={1} />,
	<Block width="48" height="48" key={2} />,
	<Block width="72" height="72" key={3} />,
];

export const Example: Story = {
	args: {
		// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
		children: [...Array(10)].map((_, i) => <Block width="64" key={i} />),
		gap: '2',
	},
};

export const XCenter: Story = {
	args: {
		children: ELEMENTS,
		gap: '2',
		alignX: 'center',
	},
};

export const XRight: Story = {
	args: {
		children: ELEMENTS,
		gap: '2',
		alignX: 'right',
	},
};

export const YCenter: Story = {
	args: {
		children: ELEMENTS,
		gap: '2',
		alignY: 'center',
	},
};

export const YTop: Story = {
	args: {
		children: ELEMENTS,
		gap: '2',
		alignY: 'top',
	},
};

export const YBottom: Story = {
	args: {
		children: ELEMENTS,
		gap: '2',
		alignY: 'bottom',
	},
};
