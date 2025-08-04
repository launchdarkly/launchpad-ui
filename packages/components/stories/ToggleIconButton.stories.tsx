import type { Meta, StoryObj } from '@storybook/react-vite';

import { userEvent, within } from 'storybook/test';

import { ToggleIconButton } from '../src/ToggleIconButton';

const meta: Meta<typeof ToggleIconButton> = {
	component: ToggleIconButton,
	title: 'Components/Buttons/ToggleIconButton',
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=14355-114625&m=dev',
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
