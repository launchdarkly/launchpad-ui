import type { Key } from '@react-types/shared';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';

import { Icon } from '@launchpad-ui/icons';
import { vars } from '@launchpad-ui/vars';
import { useState } from 'react';
import { expect, userEvent, within } from 'storybook/test';

import { ComboBox, ComboBoxClearButton, ComboBoxTagGroup, ComboBoxValue } from '../src/ComboBox';
import { Group } from '../src/Group';
import { IconButton } from '../src/IconButton';
import { Input } from '../src/Input';
import { Label } from '../src/Label';
import { ListBox, ListBoxItem } from '../src/ListBox';
import { Popover } from '../src/Popover';
import { Text } from '../src/Text';

const meta: Meta<typeof ComboBox> = {
	component: ComboBox,
	subcomponents: {
		ComboBoxClearButton,
		ComboBoxTagGroup,
		ComboBoxValue,
	} as Record<string, ComponentType<unknown>>,
	title: 'Components/Pickers/ComboBox',
	decorators: [
		(Story) => (
			<div style={{ width: vars.size[240], height: vars.size[480] }}>
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

		await userEvent.click(canvas.getByRole('button', { name: /^Show suggestions/ }));
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
	parameters: {
		a11y: {
			config: {
				rules: [
					{
						id: 'aria-hidden-focus',
						selector: '*not([aria-hidden][aria-invalid="true"])',
					},
				],
			},
		},
	},
};

interface StateItem {
	id: string;
	name: string;
}

const states: StateItem[] = [
	{ id: 'CA', name: 'California' },
	{ id: 'CO', name: 'Colorado' },
	{ id: 'FL', name: 'Florida' },
	{ id: 'NY', name: 'New York' },
	{ id: 'TX', name: 'Texas' },
	{ id: 'WA', name: 'Washington' },
];

const MultipleField = ({ placeholder = 'Filter states' }: { placeholder?: string }) => (
	<Group>
		<ComboBoxTagGroup<StateItem> aria-label="Selected states">
			{({ value, textValue }) => value?.name ?? textValue}
		</ComboBoxTagGroup>
		<Input placeholder={placeholder} />
		<IconButton aria-label="Show suggestions" icon="chevron-down" size="small" variant="minimal" />
	</Group>
);

export const MultipleSelection: Story = {
	render: () => (
		<ComboBox selectionMode="multiple" defaultValue={['CA', 'NY']} items={states}>
			<Label>States</Label>
			<MultipleField />
			<Popover>
				<ListBox items={states}>
					{(item) => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
				</ListBox>
			</Popover>
		</ComboBox>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('combobox', { name: 'States' });
		await userEvent.type(input, 'Tex');

		const body = canvasElement.ownerDocument.body;
		await userEvent.click(await within(body).findByRole('option', { name: 'Texas' }));

		await expect(input).toHaveValue('');
		await expect(canvas.getByText('Texas')).toBeVisible();
	},
};

export const MultipleSelectionControlledItems: Story = {
	render: () => {
		const [value, setValue] = useState<Key[]>(['CA', 'NY']);
		const [inputValue, setInputValue] = useState('');
		const filteredStates = states.filter((item) =>
			item.name.toLowerCase().includes(inputValue.toLowerCase()),
		);

		return (
			<ComboBox
				selectionMode="multiple"
				value={value}
				onChange={(nextValue) => {
					setValue(nextValue);
					setInputValue('');
				}}
				inputValue={inputValue}
				onInputChange={setInputValue}
				items={filteredStates}
			>
				<Label>Controlled states</Label>
				<MultipleField placeholder="Filter controlled states" />
				<Popover>
					<ListBox items={filteredStates}>
						{(item) => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
					</ListBox>
				</Popover>
			</ComboBox>
		);
	},
};

export const MultipleSelectionDefaultRenderer: Story = {
	render: () => (
		<ComboBox selectionMode="multiple" defaultValue={['alpha', 'gamma']}>
			<Label>Greek letters</Label>
			<Group>
				<ComboBoxTagGroup aria-label="Selected letters" />
				<Input placeholder="Filter letters" />
				<IconButton
					aria-label="Show suggestions"
					icon="chevron-down"
					size="small"
					variant="minimal"
				/>
			</Group>
			<Popover>
				<ListBox>
					<ListBoxItem id="alpha">Alpha</ListBoxItem>
					<ListBoxItem id="beta">Beta</ListBoxItem>
					<ListBoxItem id="gamma">Gamma</ListBoxItem>
				</ListBox>
			</Popover>
		</ComboBox>
	),
};

const MultipleStateExample = ({
	label,
	isDisabled,
	isInvalid,
	isReadOnly,
}: {
	label: string;
	isDisabled?: boolean;
	isInvalid?: boolean;
	isReadOnly?: boolean;
}) => (
	<ComboBox
		selectionMode="multiple"
		defaultValue={['CA', 'NY']}
		items={states}
		isDisabled={isDisabled}
		isInvalid={isInvalid}
		isReadOnly={isReadOnly}
	>
		<Label>{label}</Label>
		<MultipleField />
		<Popover>
			<ListBox items={states}>
				{(item) => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
			</ListBox>
		</Popover>
	</ComboBox>
);

export const MultipleSelectionStates: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[400] }}>
			<MultipleStateExample label="Invalid" isInvalid />
			<MultipleStateExample label="Disabled" isDisabled />
			<MultipleStateExample label="Read only" isReadOnly />
		</div>
	),
};

export const CustomValue: Story = {
	render: () => (
		<ComboBox defaultValue="react-aria-2">
			<Label>Custom value</Label>
			<Group>
				<Input />
				<IconButton
					aria-label="Show suggestions"
					icon="chevron-down"
					size="small"
					variant="minimal"
				/>
			</Group>
			<ComboBoxValue>
				{({ selectedText }) => `Current selection: ${selectedText || 'None'}`}
			</ComboBoxValue>
			<Popover>
				<ListBox>
					<ListBoxItem id="react-aria-1">Item one</ListBoxItem>
					<ListBoxItem id="react-aria-2">Item two</ListBoxItem>
					<ListBoxItem id="react-aria-3">Item three</ListBoxItem>
				</ListBox>
			</Popover>
		</ComboBox>
	),
};
