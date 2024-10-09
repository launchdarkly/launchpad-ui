import type { Meta, StoryObj } from '@storybook/react';

import { FlairIcon, Icon } from '../src';

const meta: Meta<typeof FlairIcon> = {
	component: FlairIcon,
	title: 'Foundations/Icons/FlairIcon',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__ICONS,
		},
	},
};

export default meta;

type Story = StoryObj<typeof FlairIcon>;

export const Square: Story = {
	args: { children: <Icon name="flag" />, borderRadius: '0' },
};

export const BluePurple: Story = {
	args: { children: <Icon name="shield-key" /> },
};

export const YellowCyan: Story = {
	args: { children: <Icon name="arrow-up-right-circle" />, background: '$yellow-cyan' },
};

export const PurplePink: Story = {
	args: { children: <Icon name="flask" />, background: '$purple-pink' },
};

export const CyanBlue: Story = {
	args: { children: <Icon name="a-to-b" />, background: '$cyan-blue' },
};

export const CyanPurple: Story = {
	args: { children: <Icon name="warning" />, background: '$cyan-purple' },
};
