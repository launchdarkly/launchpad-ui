import type { StoryObj } from '@storybook/react';

import { FlairIcon, Icon } from '../src';

export default {
	component: FlairIcon,
	title: 'Foundations/Icons/FlairIcon',
	description:
		'Flair icons can be used as either square or circular icons with gradient backgrounds.',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__ICONS,
		},
	},
};

type Story = StoryObj<typeof FlairIcon>;

export const Circular: Story = {
	args: { children: <Icon name="flag" />, isRounded: true },
};

export const BlueToPurple: Story = {
	args: { children: <Icon name="shield-key" />, gradient: 'purpleToBlue' },
};

export const YellowToCyan: Story = {
	args: { children: <Icon name="arrow-up-right-circle" />, gradient: 'yellowToCyan' },
};

export const PinkToPurple: Story = {
	args: { children: <Icon name="flask" />, gradient: 'pinkToPurple' },
};

export const CyanToBlue: Story = {
	args: { children: <Icon name="a-to-b" />, gradient: 'cyanToBlue' },
};

export const CyanToPurple: Story = {
	args: { children: <Icon name="warning" />, gradient: 'cyanToPurple' },
};
