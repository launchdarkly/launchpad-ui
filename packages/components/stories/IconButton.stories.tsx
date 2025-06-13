import type { Meta, StoryObj } from '@storybook/react-vite';

import { IconButton } from '../src/IconButton';

const meta: Meta<typeof IconButton> = {
	component: IconButton,
	title: 'Components/Buttons/IconButton',
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Example: Story = {
	args: { icon: 'add', 'aria-label': 'create' },
};

export const Small: Story = {
	args: { icon: 'add', 'aria-label': 'create', size: 'small' },
};
