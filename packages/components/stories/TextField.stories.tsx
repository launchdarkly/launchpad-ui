import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';

import { vars } from '@launchpad-ui/vars';
import { userEvent, within } from 'storybook/test';

import { FieldError } from '../src/FieldError';
import { Input } from '../src/Input';
import { Label } from '../src/Label';
import { Text } from '../src/Text';
import { TextArea } from '../src/TextArea';
import { TextField } from '../src/TextField';

const meta: Meta<typeof TextField> = {
	component: TextField,
	subcomponents: { Label, Text, Input, TextArea, FieldError } as Record<
		string,
		ComponentType<unknown>
	>,
	title: 'Components/Forms/TextField',
	parameters: {
		figma: {
			design:
				'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-34456&m=dev',
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

type Story = StoryObj<typeof TextField>;

export const Example: Story = {
	args: {
		children: (
			<>
				<Label>Label</Label>
				<Input placeholder="Enter a value" />
				<Text slot="description">Description</Text>
			</>
		),
	},
};

export const States: Story = {
	render: (args) => {
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: vars.spacing[400],
				}}
			>
				<TextField {...args}>
					<Label>Focus Visible</Label>
					<Input />
				</TextField>
				<TextField isInvalid {...args}>
					<Label>Invalid</Label>
					<Input />
				</TextField>
				<TextField isDisabled {...args}>
					<Label>Disabled</Label>
					<Input />
				</TextField>
			</div>
		);
	},
	args: { defaultValue: 'Value' },
	play: async ({ canvasElement }) => {
		const body = canvasElement.ownerDocument.body;
		body.click();
		await userEvent.tab();
	},
};

export const MultiLine: Story = {
	args: {
		children: (
			<>
				<Label>Label</Label>
				<TextArea />
			</>
		),
		defaultValue: 'Value',
	},
};

export const Minimal: Story = {
	render: (args) => {
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: vars.spacing[400],
				}}
			>
				<TextField {...args}>
					<Label>Resting</Label>
					<Input variant="minimal" />
				</TextField>
				<TextField {...args}>
					<Label>Hover</Label>
					<Input variant="minimal" />
				</TextField>
			</div>
		);
	},
	args: { defaultValue: 'Value' },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const inputs = canvas.getAllByRole('textbox');
		await userEvent.hover(inputs[1]);
	},
};
