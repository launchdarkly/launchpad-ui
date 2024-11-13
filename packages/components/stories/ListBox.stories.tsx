import type { Meta, StoryObj } from '@storybook/react';
import type { Selection as AriaSelection } from 'react-aria-components';

import { Icon } from '@launchpad-ui/icons';
import { fireEvent, userEvent, within } from '@storybook/test';
import { useState } from 'react';

import { Header, ListBox, ListBoxItem, Section, Text } from '../src';

const meta: Meta<typeof ListBox> = {
	component: ListBox,
	// @ts-ignore
	subcomponents: { ListBoxItem, Section, Header },
	title: 'Components/Collections/ListBox',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
	},
};

export default meta;

type Story = StoryObj<typeof ListBox>;

export const Example: Story = {
	render: (args) => {
		return (
			<ListBox aria-label="Items" selectionMode="single" {...args}>
				<ListBoxItem>Item one</ListBoxItem>
				<ListBoxItem>Item two</ListBoxItem>
				<ListBoxItem>Item three</ListBoxItem>
			</ListBox>
		);
	},
};

export const Grouping: Story = {
	render: (args) => {
		return (
			<ListBox aria-label="Items" selectionMode="multiple" {...args}>
				<Section>
					<Header>Group 1</Header>
					<ListBoxItem>Item one</ListBoxItem>
					<ListBoxItem>Item two</ListBoxItem>
					<ListBoxItem>Item three</ListBoxItem>
				</Section>
				<Section>
					<Header>Group 2</Header>
					<ListBoxItem>Item four</ListBoxItem>
					<ListBoxItem>Item five</ListBoxItem>
					<ListBoxItem>Item six</ListBoxItem>
				</Section>
			</ListBox>
		);
	},
};

export const Selection: Story = {
	render: (args) => {
		const [selected, setSelected] = useState<AriaSelection>(new Set(['react-aria-1']));

		return (
			<ListBox
				aria-label="Items"
				selectionMode="single"
				selectedKeys={selected}
				onSelectionChange={setSelected}
				{...args}
			>
				<ListBoxItem>Item one</ListBoxItem>
				<ListBoxItem>Item two</ListBoxItem>
				<ListBoxItem>Item three</ListBoxItem>
			</ListBox>
		);
	},
};

export const Descriptions: Story = {
	render: (args) => {
		return (
			<ListBox aria-label="Items" selectionMode="single" {...args}>
				<ListBoxItem>
					<Text slot="label">Read</Text>
					<Text slot="description">Read only</Text>
				</ListBoxItem>
				<ListBoxItem>
					<Text slot="label">Write</Text>
					<Text slot="description">Read and write only</Text>
				</ListBoxItem>
				<ListBoxItem>
					<Text slot="label">Admin</Text>
					<Text slot="description">Full access</Text>
				</ListBoxItem>
			</ListBox>
		);
	},
};

export const Icons: Story = {
	render: (args) => {
		return (
			<ListBox aria-label="Items" selectionMode="single" {...args}>
				<ListBoxItem>
					<Text slot="label">
						<Icon name="add" size="small" /> Add
					</Text>
				</ListBoxItem>
				<ListBoxItem>
					<Icon name="edit" size="small" /> Edit
				</ListBoxItem>
				<ListBoxItem>
					<Icon name="delete" size="small" /> Delete
				</ListBoxItem>
			</ListBox>
		);
	},
};

export const States: Story = {
	render: (args) => {
		return (
			<ListBox
				aria-label="Items"
				selectionMode="single"
				disabledKeys={new Set(['react-aria-4'])}
				{...args}
			>
				<ListBoxItem>Resting</ListBoxItem>
				<ListBoxItem>Active</ListBoxItem>
				<ListBoxItem>Focus Visible</ListBoxItem>
				<ListBoxItem>Disabled</ListBoxItem>
			</ListBox>
		);
	},
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);

		const options = await canvas.findAllByRole('option');
		await fireEvent.pointerDown(options[1], { pointerType: 'touch' });
		await userEvent.keyboard('{arrowdown}');
	},
};
