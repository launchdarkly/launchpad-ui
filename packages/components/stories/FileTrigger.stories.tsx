import type { Meta, StoryObj } from '@storybook/react';

import { Button, FileTrigger } from '../src';

const meta: Meta<typeof FileTrigger> = {
	component: FileTrigger,
	title: 'Components/Buttons/FileTrigger',
};

export default meta;

type Story = StoryObj<typeof FileTrigger>;

export const Example: Story = {
	args: {
		children: <Button>Select a file</Button>,
	},
};
