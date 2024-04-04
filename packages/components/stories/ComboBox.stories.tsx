import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { vars } from '@launchpad-ui/vars';
import { expect, userEvent, within } from '@storybook/test';

import {
	ComboBox,
	Group,
	IconButton,
	Input,
	Label,
	ListBox,
	ListBoxItem,
	Popover,
	Text,
} from '../src';

const meta: Meta<typeof ComboBox> = {
	component: ComboBox,
	title: 'Components/Pickers/ComboBox',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
	},
	decorators: [
		(Story: StoryFn) => (
			<div style={{ width: vars.size[240], height: vars.size[240] }}>
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof ComboBox>;

const open = {
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('button'));
		const body = canvasElement.ownerDocument.body;
		await expect(await within(body).findByRole('listbox'));
	},
};

export const Example: Story = {
	args: {
		children: (
			<>
				<Label>Label</Label>
				<Group>
					<Input />
					<IconButton
						icon="chevron-down"
						size="small"
						variant="minimal"
						aria-label="Show suggestions"
					/>
				</Group>
				<Text slot="description">Description</Text>
				<Popover>
					<ListBox>
						<ListBoxItem>Item one</ListBoxItem>
						<ListBoxItem>Item two</ListBoxItem>
						<ListBoxItem>Item three</ListBoxItem>
					</ListBox>
				</Popover>
			</>
		),
	},
};

export const Descriptions: Story = {
	args: {
		children: (
			<>
				<Label>Label</Label>
				<Group>
					<Input />
					<IconButton
						icon="chevron-down"
						size="small"
						variant="minimal"
						aria-label="Show suggestions"
					/>
				</Group>
				<Popover>
					<ListBox>
						<ListBoxItem textValue="Item one">
							<Text slot="label">Item one</Text>
							<Text slot="description">Description one</Text>
						</ListBoxItem>
						<ListBoxItem textValue="Item two">
							<Text slot="label">Item two</Text>
							<Text slot="description">Description two</Text>
						</ListBoxItem>
						<ListBoxItem textValue="Item three">
							<Text slot="label">Item three</Text>
							<Text slot="description">Description three</Text>
						</ListBoxItem>
					</ListBox>
				</Popover>
			</>
		),
		selectedKey: 'react-aria-2',
	},
	...open,
};

export const States: Story = {
	render: (args) => {
		const Content = (
			<>
				<Group>
					<Input />
					<IconButton
						icon="chevron-down"
						size="small"
						variant="minimal"
						aria-label="Show suggestions"
					/>
				</Group>
				<Popover>
					<ListBox>
						<ListBoxItem>Item one</ListBoxItem>
						<ListBoxItem>Item two</ListBoxItem>
						<ListBoxItem>Item three</ListBoxItem>
					</ListBox>
				</Popover>
			</>
		);
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: vars.spacing[400],
				}}
			>
				<ComboBox {...args}>
					<Label>Focus Visible</Label>
					{Content}
				</ComboBox>
				<ComboBox isInvalid {...args}>
					<Label>Invalid</Label>
					{Content}
				</ComboBox>
				<ComboBox isDisabled {...args}>
					<Label>Disabled</Label>
					{Content}
				</ComboBox>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const body = canvasElement.ownerDocument.body;
		body.click();
		await userEvent.tab();
	},
};
