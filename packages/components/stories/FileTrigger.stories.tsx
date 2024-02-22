import type { Meta, StoryObj } from '@storybook/react';

import { Button, FileTrigger } from '../src';

const meta: Meta<typeof FileTrigger> = {
	component: FileTrigger,
	title: 'React Aria Components/FileTrigger',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
	},
};

export default meta;

type Story = StoryObj<typeof FileTrigger>;

export const Example: Story = {
	args: {
		children: <Button>Select a file</Button>,
	},
};
