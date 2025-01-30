import type { Meta, StoryObj } from '@storybook/react';

import { Button, FieldError, Form, Input, Label, TextField } from '../src';

const meta: Meta<typeof Form> = {
	component: Form,
	title: 'Components/Forms/Form',
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Example: Story = {
	args: {
		children: (
			<>
				<TextField name="email" type="email" isRequired>
					<Label>Email</Label>
					<Input />
					<FieldError />
				</TextField>
				<Button type="submit">Submit</Button>
			</>
		),
	},
};
