/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';
import type { Selection as AriaSelection } from 'react-aria-components';

import { userEvent, within } from '@storybook/test';
import { useState } from 'react';

import { Header, ListBox, ListBoxItem, Section } from '../src';

const meta: Meta<typeof ListBox> = {
	component: ListBox,
	title: 'React Aria Components/ListBox',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
	},
};

export default meta;

type Story = StoryObj<typeof ListBox>;

export const Example: Story = {
	args: {
		children: (
			<>
				<ListBoxItem>Item one</ListBoxItem>
				<ListBoxItem>Item two</ListBoxItem>
				<ListBoxItem>Item three</ListBoxItem>
			</>
		),
		'aria-label': 'Items',
		selectionMode: 'single',
	},
};

export const Grouping: Story = {
	args: {
		children: (
			<>
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
			</>
		),
		'aria-label': 'Items',
		selectionMode: 'multiple',
	},
};

export const Selection: Story = {
	render: (args) => {
		const [selected, setSelected] = useState<AriaSelection>(new Set(['react-aria-1']));

		return (
			<ListBox selectedKeys={selected} onSelectionChange={setSelected} {...args}>
				<ListBoxItem>Item one</ListBoxItem>
				<ListBoxItem>Item two</ListBoxItem>
				<ListBoxItem>Item three</ListBoxItem>
			</ListBox>
		);
	},
	args: {
		'aria-label': 'Items',
		selectionMode: 'single',
	},
	...open,
};

export const States: Story = {
	args: {
		children: (
			<>
				<ListBoxItem>Resting</ListBoxItem>
				<ListBoxItem>Active</ListBoxItem>
				<ListBoxItem>Focus Visible</ListBoxItem>
				<ListBoxItem>Disabled</ListBoxItem>
			</>
		),
		'aria-label': 'Items',
		selectionMode: 'single',
		disabledKeys: new Set(['react-aria-4']),
	},
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);

		const options = await canvas.findAllByRole('option');
		await userEvent.pointer([{ keys: '[TouchA>]', target: options[1] }]);
		await userEvent.keyboard('{arrowdown}');
	},
};
