import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '@launchpad-ui/icons';
import {
	Button,
	FieldGroup,
	Input,
	Label,
	ListBox,
	ListBoxItem,
	Popover,
	Select,
	SelectValue,
	TextField,
} from '../src';

const meta: Meta<typeof FieldGroup> = {
	component: FieldGroup,
	title: 'Components/Forms/FieldGroup',
};

export default meta;

type Story = StoryObj<typeof FieldGroup>;

export const Example: Story = {
	args: {
		children: (
			<>
				<TextField>
					<Label>Label</Label>
					<Input />
				</TextField>
				<Select>
					<Label>Label</Label>
					<Button>
						<SelectValue />
						<Icon name="chevron-down" size="small" />
					</Button>
					<Popover>
						<ListBox>
							<ListBoxItem>Item one</ListBoxItem>
							<ListBoxItem>Item two</ListBoxItem>
							<ListBoxItem>Item three</ListBoxItem>
						</ListBox>
					</Popover>
				</Select>
			</>
		),
		title: 'legend',
		errorMessage: 'Please fill out the fields.',
	},
};
