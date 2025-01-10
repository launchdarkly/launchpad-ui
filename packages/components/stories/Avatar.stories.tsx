import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '../src';

const meta: Meta<typeof Avatar> = {
	component: Avatar,
	title: 'Components/Content/Avatar',
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Icon: Story = {
	args: { variant: 'icon' },
};

export const Image: Story = {
	args: {
		variant: 'image',
		src: 'https://avatars.githubusercontent.com/u/2147624?v=4',
		alt: 'engineer',
	},
};

export const Initials: Story = {
	args: { variant: 'initials', children: 'RN', alt: 'Robb' },
};
