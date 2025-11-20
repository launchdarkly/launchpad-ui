import type { Meta, StoryObj } from '@storybook/react-vite';

import { vars } from '@launchpad-ui/vars';
import { userEvent, within } from 'storybook/test';

import { Checkbox } from '../src/Checkbox';

const meta: Meta<typeof Checkbox> = {
	component: Checkbox,
	title: 'Components/Forms/Checkbox',
	parameters: {
		figma: {
			design:
				'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-32733&p=f&m=dev',
		},
	},
	decorators: [
		(Story) => (
			<div style={{ width: vars.size[240] }}>
				<Story />
			</div>
		),
	],
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
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
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
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const body = canvasElement.ownerDocument.body;
		body.click();
		await userEvent.tab();
	},
};
