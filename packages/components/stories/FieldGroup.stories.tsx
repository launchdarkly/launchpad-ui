import type { Meta, StoryObj } from '@storybook/react-vite';

import { Icon } from '@launchpad-ui/icons';

import { Button } from '../src/Button';
import { FieldGroup } from '../src/FieldGroup';
import { Input } from '../src/Input';
import { Label } from '../src/Label';
import { ListBox, ListBoxItem } from '../src/ListBox';
import { Popover } from '../src/Popover';
import { Select, SelectValue } from '../src/Select';
import { TextField } from '../src/TextField';

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
