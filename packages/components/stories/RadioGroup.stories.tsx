import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentType } from 'react';

import { userEvent, within } from '@storybook/test';

import { Button, FieldError, Form, Label, Radio, RadioGroup, Text } from '../src';

const meta: Meta<typeof RadioGroup> = {
	component: RadioGroup,
	subcomponents: { Radio } as Record<string, ComponentType<unknown>>,
	title: 'Components/Forms/RadioGroup',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
	},
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Example: Story = {
	args: {
		children: (
			<>
				<Label>Group</Label>
				<Radio value="1">First</Radio>
				<Radio value="2">Second</Radio>
				<Radio value="3">Third</Radio>
				<Text slot="description">Description</Text>
			</>
		),
		defaultValue: '1',
	},
	play: async ({ canvasElement }) => {
		const body = canvasElement.ownerDocument.body;
		body.click();
		await userEvent.tab();
	},
};

export const States: Story = {
	args: {
		children: (
			<>
				<Label>Group</Label>
				<Radio value="1">Resting</Radio>
				<Radio value="2" isDisabled>
					Selected, Disabled
				</Radio>
				<Radio value="3" isDisabled>
					Disabled
				</Radio>
			</>
		),
		defaultValue: '2',
	},
};

export const Validation: Story = {
	render: (args) => {
		return (
			<Form>
				<RadioGroup {...args}>
					<Label>Pick one</Label>
					<Radio value="1">First</Radio>
					<Radio value="2">Second</Radio>
					<Radio value="3">Third</Radio>
					<FieldError />
				</RadioGroup>
				<Button type="submit">Submit</Button>
			</Form>
		);
	},
	args: { isRequired: true },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await userEvent.click(canvas.getByRole('button'));
	},
};
