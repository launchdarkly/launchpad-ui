import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';
import type { Selection as AriaSelection } from 'react-aria-components';

import { Icon } from '@launchpad-ui/icons';
import { useState } from 'react';
import { fireEvent, userEvent, within } from 'storybook/test';

import { Header } from '../src/Header';
import { ListBox, ListBoxItem } from '../src/ListBox';
import { ListBoxSection } from '../src/Section';
import { Text } from '../src/Text';

const meta: Meta<typeof ListBox> = {
	component: ListBox,
	subcomponents: { ListBoxItem, ListBoxSection, Header } as Record<string, ComponentType<unknown>>,
	title: 'Components/Collections/ListBox',
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
				<ListBoxSection>
					<Header>Group 1</Header>
					<ListBoxItem>Item one</ListBoxItem>
					<ListBoxItem>Item two</ListBoxItem>
					<ListBoxItem>Item three</ListBoxItem>
				</ListBoxSection>
				<ListBoxSection>
					<Header>Group 2</Header>
					<ListBoxItem>Item four</ListBoxItem>
					<ListBoxItem>Item five</ListBoxItem>
					<ListBoxItem>Item six</ListBoxItem>
				</ListBoxSection>
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
	parameters: {
		test: {
			dangerouslyIgnoreUnhandledErrors: true,
		},
	},
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);

		const options = await canvas.findAllByRole('option');
		await fireEvent.pointerDown(options[1], { pointerType: 'touch' });
		await userEvent.tab();
		await userEvent.keyboard('{arrowdown}');
		await userEvent.keyboard('{arrowdown}');
	},
};
