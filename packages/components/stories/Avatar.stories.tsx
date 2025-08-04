import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';

import { Box } from '@launchpad-ui/box';

import { Avatar, InitialsAvatar } from '../src/Avatar';

const meta: Meta<typeof Avatar> = {
	component: Avatar,
	subcomponents: { InitialsAvatar } as Record<string, ComponentType<unknown>>,
	title: 'Components/Content/Avatar',
	parameters: {
		figma: {
			design:
				'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=8095-64629&m=dev',
		},
	},
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Example: Story = {
	args: {
		src: 'https://avatars.githubusercontent.com/u/2147624?v=4',
		alt: 'engineer',
		'aria-label': 'engineer',
	},
};

export const Initials: Story = {
	render: (args) => (
		<InitialsAvatar size={args.size} aria-label="LD">
			LD
		</InitialsAvatar>
	),
};

export const Sizes: Story = {
	render: (args) => (
		<Box display="flex" alignItems="flex-end" gap="$300">
			<Avatar size="small" {...args} />
			<Avatar size="medium" {...args} />
			<Avatar size="large" {...args} />
		</Box>
	),
	args: {
		src: 'https://avatars.githubusercontent.com/u/2147624?v=4',
		alt: 'engineer',
		'aria-label': 'engineer',
	},
};
