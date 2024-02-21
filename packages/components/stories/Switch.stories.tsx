import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '../src';

const meta: Meta<typeof Switch> = {
	component: Switch,
	title: 'React Aria Components/Switch',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
	},
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Off: Story = {
	args: {},
};

export const On: Story = {
	args: { defaultSelected: true },
};
