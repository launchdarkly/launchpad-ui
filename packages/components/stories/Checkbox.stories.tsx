import type { Meta, StoryObj } from '@storybook/react';

import { userEvent, within } from '@storybook/test';

import { Checkbox } from '../src';

const meta: Meta<typeof Checkbox> = {
	component: Checkbox,
	title: 'React Aria Components/Checkbox',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
		chromatic: { pauseAnimationAtEnd: true },
	},
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Example: Story = {
	args: { children: 'Label' },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await userEvent.click(canvas.getByRole('checkbox'));
	},
};

export const Indeterminate: Story = {
	args: { isIndeterminate: true, children: 'Label' },
};

export const States: Story = {
	render: (args) => {
		return (
			<>
				<Checkbox {...args}>Focus Visible</Checkbox>
				<Checkbox isDisabled {...args}>
					Disabled
				</Checkbox>
				<Checkbox isDisabled isSelected {...args}>
					Checked, Disabled
				</Checkbox>
				<Checkbox isInvalid {...args}>
					Invalid
				</Checkbox>
				<Checkbox isInvalid isSelected {...args}>
					Checked, Invalid
				</Checkbox>
			</>
		);
	},
	play: async ({ canvasElement }) => {
		const body = canvasElement.ownerDocument.body;
		body.click();
		await userEvent.tab();
	},
};
