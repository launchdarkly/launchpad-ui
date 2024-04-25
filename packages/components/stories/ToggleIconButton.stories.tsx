import type { Meta, StoryObj } from '@storybook/react';

import { userEvent, within } from '@storybook/test';

import { ToggleIconButton } from '../src';

const meta: Meta<typeof ToggleIconButton> = {
	component: ToggleIconButton,
	title: 'Components/Buttons/ToggleIconButton',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
	},
};

export default meta;

type Story = StoryObj<typeof ToggleIconButton>;

export const Example: Story = {
	args: { icon: 'star', 'aria-label': 'favorite' },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('button'));
	},
};
