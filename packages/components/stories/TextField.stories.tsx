import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { vars } from '@launchpad-ui/vars';
import { userEvent } from '@storybook/test';

import { Input, Label, Text, TextArea, TextField } from '../src';

const meta: Meta<typeof TextField> = {
	component: TextField,
	title: 'React Aria Components/TextField',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
	},
	decorators: [
		(Story: StoryFn) => (
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
				<Input placeholder='Enter a value' />
				<Text slot='description'>Description</Text>
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
