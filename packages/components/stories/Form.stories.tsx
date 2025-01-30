import type { Meta, StoryObj } from '@storybook/react';

import { Controller, useForm } from 'react-hook-form';

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

export const ReactHookForm: Story = {
	render: (args) => {
		const { handleSubmit, control } = useForm({
			defaultValues: {
				name: '',
			},
		});
		const onSubmit = (data: object) => {
			console.log(data);
		};

		return (
			<Form onSubmit={handleSubmit(onSubmit)} {...args}>
				<Controller
					control={control}
					name="name"
					rules={{ required: 'Name is required.' }}
					render={({
						field: { name, value, onChange, onBlur, ref },
						fieldState: { invalid, error },
					}) => (
						<TextField
							name={name}
							value={value}
							onChange={onChange}
							onBlur={onBlur}
							isRequired
							validationBehavior="aria"
							isInvalid={invalid}
						>
							<Label>Name</Label>
							<Input ref={ref} />
							<FieldError>{error?.message}</FieldError>
						</TextField>
					)}
				/>
				<Button type="submit">Submit</Button>
			</Form>
		);
	},
};
