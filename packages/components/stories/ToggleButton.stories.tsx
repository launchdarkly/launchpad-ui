import type { Meta, StoryObj } from '@storybook/react';

import { userEvent, within } from 'storybook/test';

import { ToggleButton } from '../src';

const meta: Meta<typeof ToggleButton> = {
	component: ToggleButton,
	title: 'Components/Buttons/ToggleButton',
};

export default meta;

type Story = StoryObj<typeof ToggleButton>;

export const Example: Story = {
	args: { children: 'Toggle' },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('button'));
	},
};
