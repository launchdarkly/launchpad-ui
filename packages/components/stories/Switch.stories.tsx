import type { Meta, StoryObj } from '@storybook/react-vite';

import { Switch } from '../src/Switch';

const meta: Meta<typeof Switch> = {
	component: Switch,
	title: 'Components/Forms/Switch',
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
