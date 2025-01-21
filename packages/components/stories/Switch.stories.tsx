import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '../src';

const meta: Meta<typeof Switch> = {
	component: Switch,
	title: 'Components/Forms/Switch',
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Off: Story = {
	args: {},
};

export const On: Story = {
	args: { defaultSelected: true },
};

export const States: Story = {
	args: { isDisabled: true },
};
