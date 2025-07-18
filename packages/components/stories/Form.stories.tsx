import type { Meta, StoryObj } from '@storybook/react-vite';

import { Icon } from '@launchpad-ui/icons';
import { vars } from '@launchpad-ui/vars';
import { Controller, useForm } from 'react-hook-form';

import { Button } from '../src/Button';
import { FieldError } from '../src/FieldError';
import { Form } from '../src/Form';
import { Input } from '../src/Input';
import { Label } from '../src/Label';
import { ListBox, ListBoxItem } from '../src/ListBox';
import { Popover } from '../src/Popover';
import { Select, SelectValue } from '../src/Select';
import { TextField } from '../src/TextField';

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

export const Horizontal: Story = {
	args: {
		children: (
			<>
				<Select name="status" defaultSelectedKey="in-progress">
					<Label>Status</Label>
					<Button>
						<SelectValue />
						<Icon name="chevron-down" size="small" />
					</Button>
					<Popover>
						<ListBox>
							<ListBoxItem id="backlog">Backlog</ListBoxItem>
							<ListBoxItem id="in-progress">In Progress</ListBoxItem>
							<ListBoxItem id="in-review">In Review</ListBoxItem>
							<ListBoxItem id="done">Done</ListBoxItem>
						</ListBox>
					</Popover>
					<FieldError />
				</Select>
				<Select name="label" defaultSelectedKey="design-tokens">
					<Label>Label</Label>
					<Button>
						<SelectValue />
						<Icon name="chevron-down" size="small" />
					</Button>
					<Popover>
						<ListBox>
							<ListBoxItem id="design-tokens">Design Tokens</ListBoxItem>
							<ListBoxItem id="components">Components</ListBoxItem>
							<ListBoxItem id="recipes">Recipes</ListBoxItem>
							<ListBoxItem id="design">Design</ListBoxItem>
						</ListBox>
					</Popover>
					<FieldError />
				</Select>
			</>
		),
		orientation: 'horizontal',
	},
	decorators: [
		(Story) => (
			<div style={{ width: vars.size[400] }}>
				<Story />
			</div>
		),
	],
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
