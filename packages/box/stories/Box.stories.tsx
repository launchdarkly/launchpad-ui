import type { StoryObj } from '@storybook/react';

import { Button } from '@launchpad-ui/components';

import { Box } from '../src';

export default {
	component: Box,
	title: 'Legacy/Experimental/Box',
	description: '',
};

type Story = StoryObj<typeof Box>;

export const Example: Story = {
	args: {
		backgroundColor: { default: '$black.800', dark: '$gray.700' },
		color: '$white.950',
		padding: { desktop: '$400', tablet: '$300', mobile: '$200' },
		width: { desktop: '$400', tablet: '$256', mobile: '$192' },
		children: 'I am a box',
	},
};

export const Composition: Story = {
	args: {
		background: '$yellow-cyan',
		borderColor: '$brand.cyan.base',
		color: '$black.900',
		asChild: true,
		children: <Button>Button</Button>,
	},
};
