import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from '../src';

const meta: Meta<typeof IconButton> = {
	component: IconButton,
	title: 'Components/Buttons/IconButton',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
	},
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Example: Story = {
	args: { icon: 'add', 'aria-label': 'create' },
};

export const Small: Story = {
	args: { icon: 'add', 'aria-label': 'create', size: 'small' },
};
