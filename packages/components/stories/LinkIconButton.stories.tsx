import type { Meta, StoryObj } from '@storybook/react';

import { LinkIconButton } from '../src/LinkIconButton';

const meta: Meta<typeof LinkIconButton> = {
	component: LinkIconButton,
	title: 'Components/Navigation/LinkIconButton',
};

export default meta;

type Story = StoryObj<typeof LinkIconButton>;

export const Example: Story = {
	args: { icon: 'add', 'aria-label': 'create', href: '/test' },
};

export const Small: Story = {
	args: { icon: 'add', 'aria-label': 'create', href: '/test', size: 'small' },
};
