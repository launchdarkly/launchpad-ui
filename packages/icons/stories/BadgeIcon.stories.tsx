import type { Meta, StoryObj } from '@storybook/react';

import { BadgeIcon, Icon } from '../src';

const meta: Meta<typeof BadgeIcon> = {
	component: BadgeIcon,
	title: 'Foundations/Icons/BadgeIcon',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__ICONS,
		},
	},
};

export default meta;

type Story = StoryObj<typeof BadgeIcon>;

const children = <Icon name="crown" />;

export const Default: Story = {
	args: { children },
};

export const Blue: Story = {
	args: { children, variant: 'blue' },
};

export const Cyan: Story = {
	args: { children, variant: 'cyan' },
};

export const Puple: Story = {
	args: { children, variant: 'purple' },
};

export const Pink: Story = {
	args: { children, variant: 'pink' },
};

export const Orange: Story = {
	args: { children, variant: 'orange' },
};

export const Yellow: Story = {
	args: { children, variant: 'yellow' },
};

export const Green: Story = {
	args: { children, variant: 'green' },
};

export const Gradient1: Story = {
	args: { children, variant: 'gradient-1' },
};

export const Gradient2: Story = {
	args: { children, variant: 'gradient-2' },
};

export const Gradient3: Story = {
	args: { children, variant: 'gradient-3' },
};

export const Gradient4: Story = {
	args: { children, variant: 'gradient-4' },
};

export const Gradient5: Story = {
	args: { children, variant: 'gradient-5' },
};

export const Gradient6: Story = {
	args: { children, variant: 'gradient-6' },
};

export const Gradient7: Story = {
	args: { children, variant: 'gradient-7' },
};
