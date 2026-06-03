import type { Meta, StoryObj } from '@storybook/react-vite';

import { Switch } from '../src/Switch';

const meta: Meta<typeof Switch> = {
	component: Switch,
	title: 'Components/Forms/Switch',
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'primary'],
		},
	},
	parameters: {
		figma: {
			design:
				'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-34112&m=dev',
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

export const States: Story = {
	args: { isDisabled: true },
};

export const Primary: Story = {
	args: { defaultSelected: true, variant: 'primary' },
};

export const HideLabels: Story = {
	args: { hideLabels: true },
};

export const PrimaryHideLabels: Story = {
	args: { defaultSelected: true, variant: 'primary', hideLabels: true },
};
