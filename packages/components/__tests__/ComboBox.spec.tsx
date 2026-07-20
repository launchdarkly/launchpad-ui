import type { Key } from '@react-types/shared';

import { describe, expect, expectTypeOf, it, vi } from 'vitest';

import { render, screen, userEvent, waitFor, within } from '../../../test/utils';
import {
	ComboBox,
	ComboBoxClearButton,
	type ComboBoxProps,
	ComboBoxTagGroup,
	type ComboBoxTagGroupProps,
	ComboBoxValue,
	Group,
	IconButton,
	Input,
	Label,
	ListBox,
	ListBoxItem,
	Popover,
} from '../src';

interface Item {
	code: string;
	name: string;
}

const items: Item[] = [
	{ code: 'CA', name: 'California' },
	{ code: 'NY', name: 'New York' },
	{ code: 'TX', name: 'Texas' },
];

const MultipleComboBox = ({
	defaultValue = [],
	isDisabled,
	isReadOnly,
}: {
	defaultValue?: Key[];
	isDisabled?: boolean;
	isReadOnly?: boolean;
}) => (
	<ComboBox
		selectionMode="multiple"
		defaultValue={defaultValue}
		items={items}
		isDisabled={isDisabled}
		isReadOnly={isReadOnly}
	>
		<Label>States</Label>
		<Group>
			<ComboBoxTagGroup<Item> aria-label="Selected states">
				{({ value, textValue }) => value?.name ?? textValue}
			</ComboBoxTagGroup>
			<Input placeholder="Filter states" />
			<ComboBoxClearButton />
			<IconButton
				icon="chevron-down"
				size="small"
				variant="minimal"
				aria-label="Show suggestions"
			/>
		</Group>
		<Popover>
			<ListBox items={items}>
				{(item) => (
					<ListBoxItem id={item.code} textValue={item.name}>
						{item.name}
					</ListBoxItem>
				)}
			</ListBox>
		</Popover>
	</ComboBox>
);

describe('ComboBox', () => {
	it('renders', async () => {
		const user = userEvent.setup();
		render(
			<ComboBox>
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
						<ListBoxItem>Item one</ListBoxItem>
						<ListBoxItem>Item two</ListBoxItem>
						<ListBoxItem>Item three</ListBoxItem>
					</ListBox>
				</Popover>
			</ComboBox>,
		);

		expect(await screen.findByRole('combobox')).toBeVisible();
		await user.click(screen.getByRole('button'));
		expect(await screen.findByRole('listbox')).toBeVisible();
	});

	it('clears value when clear button is clicked', async () => {
		const user = userEvent.setup();
		render(
			<ComboBox defaultSelectedKey="react-aria-1">
				<Label>Label</Label>
				<Group>
					<Input />
					<ComboBoxClearButton />
				</Group>
				<Popover>
					<ListBox>
						<ListBoxItem>Item one</ListBoxItem>
						<ListBoxItem>Item two</ListBoxItem>
						<ListBoxItem>Item three</ListBoxItem>
					</ListBox>
				</Popover>
			</ComboBox>,
		);

		expect(await screen.findByRole('combobox')).toHaveValue('Item one');
		await user.click(screen.getByRole('button'));
		expect(await screen.findByRole('combobox')).toHaveValue('');
	});

	it('selects multiple options and keeps the popover open', async () => {
		const user = userEvent.setup();
		render(<MultipleComboBox />);

		await user.click(screen.getByRole('button', { name: /^Show suggestions/ }));
		const california = await screen.findByRole('option', { name: 'California' });
		await user.click(california);
		await user.click(screen.getByRole('option', { name: 'New York' }));

		const tags = document.querySelector('[data-combobox-tags]');
		expect(tags).toHaveTextContent('California');
		expect(tags).toHaveTextContent('New York');
		expect(california).toHaveAttribute('aria-selected', 'true');
		expect(screen.getByRole('option', { name: 'New York' })).toHaveAttribute(
			'aria-selected',
			'true',
		);
		expect(screen.getByRole('listbox')).toBeVisible();
	});

	it('removes a selected tag and clears an uncontrolled filter', async () => {
		const user = userEvent.setup();
		render(<MultipleComboBox defaultValue={['CA', 'NY']} />);

		const input = screen.getByRole('combobox', { name: 'States' });
		await user.type(input, 'Tex');
		const tags = document.querySelector('[data-combobox-tags]') as HTMLElement;
		await user.click(within(tags).getAllByRole('button', { name: /^Remove/, hidden: true })[0]);

		expect(within(tags).queryByText('California')).not.toBeInTheDocument();
		expect(within(tags).getByText('New York')).toBeVisible();
		expect(input).toHaveValue('');
	});

	it('removes the last selected tag with Backspace from an empty input', async () => {
		const user = userEvent.setup();
		render(<MultipleComboBox defaultValue={['CA', 'NY']} />);

		const input = screen.getByRole('combobox', { name: 'States' });
		const tags = document.querySelector('[data-combobox-tags]') as HTMLElement;
		await user.click(input);
		await user.keyboard('{Backspace}');

		expect(tags).toHaveTextContent('California');
		expect(tags).not.toHaveTextContent('New York');
		expect(input).toHaveFocus();

		await user.type(input, 'T');
		await user.keyboard('{Backspace}');
		expect(tags).toHaveTextContent('California');

		await user.keyboard('{Backspace}');
		expect(tags).not.toHaveTextContent('California');
		expect(tags).not.toHaveAttribute('data-has-tags');
	});

	it('clears every selected tag and the input', async () => {
		const user = userEvent.setup();
		render(<MultipleComboBox defaultValue={['CA', 'NY']} />);

		const input = screen.getByRole('combobox', { name: 'States' });
		await user.type(input, 'Tex');
		const value = document.querySelector('[data-combobox-tags]');
		expect(value).toHaveAttribute('data-has-tags', 'true');

		await user.click(document.querySelector('button[aria-label="Clear"]') as HTMLButtonElement);

		expect(screen.queryByRole('button', { name: /^Remove/ })).not.toBeInTheDocument();
		expect(input).toHaveValue('');
		expect(value).not.toHaveAttribute('data-has-tags');
	});

	it('emits multiple controlled values', async () => {
		const user = userEvent.setup();
		const onChange = vi.fn();
		render(
			<ComboBox selectionMode="multiple" value={['CA']} onChange={onChange} items={items}>
				<Label>States</Label>
				<Group>
					<ComboBoxTagGroup<Item> aria-label="Selected states">
						{({ value, textValue }) => value?.name ?? textValue}
					</ComboBoxTagGroup>
					<Input />
					<IconButton
						icon="chevron-down"
						size="small"
						variant="minimal"
						aria-label="Show suggestions"
					/>
				</Group>
				<Popover>
					<ListBox items={items}>
						{(item) => (
							<ListBoxItem id={item.code} textValue={item.name}>
								{item.name}
							</ListBoxItem>
						)}
					</ListBox>
				</Popover>
			</ComboBox>,
		);

		await user.click(screen.getByRole('button', { name: /^Show suggestions/ }));
		await user.click(await screen.findByRole('option', { name: 'Texas' }));
		expect(onChange).toHaveBeenCalledWith(['CA', 'TX']);
	});

	it('clears controlled selection and input and composes onPress', async () => {
		const user = userEvent.setup();
		const onChange = vi.fn();
		const onInputChange = vi.fn();
		const onPress = vi.fn();
		render(
			<ComboBox
				selectionMode="multiple"
				value={['CA']}
				onChange={onChange}
				inputValue="Cal"
				onInputChange={onInputChange}
				items={items}
			>
				<Label>States</Label>
				<Group>
					<ComboBoxTagGroup<Item> aria-label="Selected states">
						{({ value, textValue }) => value?.name ?? textValue}
					</ComboBoxTagGroup>
					<Input />
					<ComboBoxClearButton onPress={onPress} />
				</Group>
				<ListBox items={items}>
					{(item) => (
						<ListBoxItem id={item.code} textValue={item.name}>
							{item.name}
						</ListBoxItem>
					)}
				</ListBox>
			</ComboBox>,
		);

		await user.click(screen.getByRole('button', { name: 'Clear' }));

		expect(onChange).toHaveBeenCalledWith([]);
		expect(onInputChange).toHaveBeenCalledWith('');
		expect(onPress).toHaveBeenCalledOnce();
	});

	it('keeps a cached chip when controlled items omit its selected item', () => {
		const ControlledItems = ({ availableItems }: { availableItems: Item[] }) => (
			<ComboBox selectionMode="multiple" value={['CA']} items={availableItems}>
				<Label>States</Label>
				<Group>
					<ComboBoxTagGroup<Item> aria-label="Selected states">
						{({ value, textValue }) => value?.name ?? textValue}
					</ComboBoxTagGroup>
					<Input />
				</Group>
				<Popover>
					<ListBox items={availableItems}>
						{(item) => (
							<ListBoxItem id={item.code} textValue={item.name}>
								{item.name}
							</ListBoxItem>
						)}
					</ListBox>
				</Popover>
			</ComboBox>
		);
		const { rerender } = render(<ControlledItems availableItems={items} />);

		rerender(<ControlledItems availableItems={[items[2]]} />);

		expect(screen.getByText('California')).toBeVisible();
		const value = document.querySelector('[data-combobox-tags]');
		expect(value).toHaveAttribute('data-has-tags', 'true');
		expect(value?.parentElement).toHaveAttribute('data-placeholder', 'true');
	});

	it('warns for an unknown selected key and renders it when its item arrives', async () => {
		const warning = vi.spyOn(console, 'warn').mockImplementation(() => {});
		const ControlledItems = ({ availableItems }: { availableItems: Item[] }) => (
			<ComboBox selectionMode="multiple" value={['CA']} items={availableItems}>
				<Label>States</Label>
				<Group>
					<ComboBoxTagGroup<Item> aria-label="Selected states">
						{({ value, textValue }) => value?.name ?? textValue}
					</ComboBoxTagGroup>
					<Input />
				</Group>
				<ListBox items={availableItems}>
					{(item) => (
						<ListBoxItem id={item.code} textValue={item.name}>
							{item.name}
						</ListBoxItem>
					)}
				</ListBox>
			</ComboBox>
		);
		const { rerender } = render(<ControlledItems availableItems={[]} />);

		await waitFor(() =>
			expect(warning).toHaveBeenCalledWith(expect.stringContaining('selected key "CA"')),
		);
		expect(screen.queryByText('California')).not.toBeInTheDocument();

		rerender(<ControlledItems availableItems={[items[0]]} />);
		expect(screen.getByText('California')).toBeVisible();
		warning.mockRestore();
	});

	it('uses collection node keys and text values with the default renderer', () => {
		render(
			<ComboBox selectionMode="multiple" defaultValue={['alpha', 'gamma']}>
				<Label>Letters</Label>
				<Group>
					<ComboBoxTagGroup aria-label="Selected letters" />
					<Input />
				</Group>
				<ListBox>
					<ListBoxItem id="alpha">Alpha</ListBoxItem>
					<ListBoxItem id="beta">Beta</ListBoxItem>
					<ListBoxItem id="gamma">Gamma</ListBoxItem>
				</ListBox>
			</ComboBox>,
		);

		const tags = screen.getByRole('grid', { name: 'Selected letters' });
		expect(within(tags).getByText('Alpha')).toBeVisible();
		expect(within(tags).getByText('Gamma')).toBeVisible();
	});

	it.each([
		['disabled', { isDisabled: true }],
		['read only', { isReadOnly: true }],
	] as const)('does not allow removal when %s', (_, stateProps) => {
		render(<MultipleComboBox defaultValue={['CA', 'NY']} {...stateProps} />);

		const tags = screen.getByRole('grid', { name: 'Selected states' });
		expect(within(tags).queryByRole('button', { name: /^Remove/ })).not.toBeInTheDocument();
	});

	it('renders ComboBoxTagGroup only in multiple mode', () => {
		const warning = vi.spyOn(console, 'warn').mockImplementation(() => {});
		render(
			<ComboBox defaultValue="CA" items={items}>
				<Label>States</Label>
				<Group>
					<ComboBoxTagGroup<Item> aria-label="Selected states" />
					<Input />
				</Group>
				<ListBox items={items}>
					{(item) => (
						<ListBoxItem id={item.code} textValue={item.name}>
							{item.name}
						</ListBoxItem>
					)}
				</ListBox>
			</ComboBox>,
		);

		expect(screen.queryByRole('grid', { name: 'Selected states' })).not.toBeInTheDocument();
		expect(warning).toHaveBeenCalledWith(expect.stringContaining('selectionMode="multiple"'));
		warning.mockRestore();
	});

	it('renders a custom ComboBoxValue', () => {
		render(
			<ComboBox defaultValue="CA" items={items}>
				<Label>States</Label>
				<Group>
					<Input />
				</Group>
				<ComboBoxValue<Item>>{({ selectedText }) => `Selected: ${selectedText}`}</ComboBoxValue>
				<ListBox items={items}>
					{(item) => (
						<ListBoxItem id={item.code} textValue={item.name}>
							{item.name}
						</ListBoxItem>
					)}
				</ListBox>
			</ComboBox>,
		);

		expect(screen.getByText('Selected: California')).toBeVisible();
	});

	it('preserves mode-specific value types and requires a tag-group accessible name', () => {
		type SingleChange = NonNullable<ComboBoxProps<Item>['onChange']>;
		type MultipleChange = NonNullable<ComboBoxProps<Item, 'multiple'>['onChange']>;

		expectTypeOf<Parameters<SingleChange>[0]>().toEqualTypeOf<Key | null>();
		expectTypeOf<Parameters<MultipleChange>[0]>().toEqualTypeOf<Key[]>();
		expectTypeOf<Record<string, never>>().not.toMatchTypeOf<ComboBoxTagGroupProps<Item>>();
		expectTypeOf<{ 'aria-label': string }>().toMatchTypeOf<ComboBoxTagGroupProps<Item>>();
	});
});
