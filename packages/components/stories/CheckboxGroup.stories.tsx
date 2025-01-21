import type { Meta, StoryObj } from '@storybook/react';

import { userEvent, within } from '@storybook/test';

import { Button, Checkbox, CheckboxGroup, FieldError, Form, Label, Text } from '../src';

const meta: Meta<typeof CheckboxGroup> = {
	component: CheckboxGroup,
	title: 'Components/Forms/CheckboxGroup',
};

export default meta;

type Story = StoryObj<typeof CheckboxGroup>;

export const Example: Story = {
	args: {
		children: (
			<>
				<Label>Group</Label>
				<Checkbox value="1">First</Checkbox>
				<Checkbox value="2">Second</Checkbox>
				<Checkbox value="3">Third</Checkbox>
				<Text slot="description">Description</Text>
			</>
		),
	},
};

export const Validation: Story = {
	render: (args) => {
		return (
			<Form>
				<CheckboxGroup {...args}>
					<Label>Agree to the following</Label>
					<Checkbox value="terms" isRequired>
						Terms and conditions
					</Checkbox>
					<Checkbox value="privacy" isRequired>
						Privacy policy
					</Checkbox>
					<Checkbox value="cookies" isRequired>
						Cookie policy
					</Checkbox>
					<FieldError />
				</CheckboxGroup>
				<Button type="submit">Submit</Button>
			</Form>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await userEvent.click(canvas.getByRole('button'));
	},
};
