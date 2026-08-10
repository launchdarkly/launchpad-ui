import type { Meta, StoryObj } from '@storybook/react-vite';
import { userEvent, within } from 'storybook/test';

import { ToggleButton } from '../src/ToggleButton';

const meta: Meta<typeof ToggleButton> = {
	component: ToggleButton,
	title: 'Components/Buttons/ToggleButton',
	parameters: {
		figma: {
			design:
				'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=8085-111168&t=T9MyIVWIOcqcOoT1-4',
		},
	},
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

/**
 * A selected `primary` toggle takes its background from the shared selected state
 * rather than the CTA fill, so its label needs the selected text color to stay
 * readable in both themes.
 */
export const PrimarySelected: Story = {
	args: { children: 'Toggle', variant: 'primary', defaultSelected: true },
};
