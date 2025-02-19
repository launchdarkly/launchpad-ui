import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentType } from 'react';

import { Icon } from '@launchpad-ui/icons';
import { vars } from '@launchpad-ui/vars';
import { expect, userEvent, within } from '@storybook/test';

import {
	ComboBox,
	ComboBoxClearButton,
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
	subcomponents: { ComboBoxClearButton } as Record<string, ComponentType<unknown>>,
	title: 'Components/Pickers/ComboBox',
	decorators: [
		(Story) => (
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
	render: (args) => {
		return (
			<ComboBox {...args}>
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
			</ComboBox>
		);
	},
};

export const Descriptions: Story = {
	render: (args) => {
		return (
			<ComboBox selectedKey="react-aria-2" {...args}>
				<Label>Label</Label>
				<Group>
					<Icon name="search" size="small" />
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
			</ComboBox>
		);
	},
	...open,
	parameters: {
		// @fixme
		a11y: {
			config: {
				rules: [
					{
						id: 'color-contrast',
						selector: '*:not([slot="description"])',
					},
				],
			},
		},
	},
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
				<ComboBox isInvalid {...args}>
					<Label>Invalid</Label>
					{Content}
				</ComboBox>
				<ComboBox isDisabled {...args}>
					<Label>Disabled</Label>
					{Content}
				</ComboBox>
				<ComboBox {...args}>
					<Label>Focus Visible</Label>
					{Content}
				</ComboBox>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const body = canvasElement.ownerDocument.body;
		body.click();
		await userEvent.tab({ shift: true });
	},
};
