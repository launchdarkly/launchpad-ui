import { describe, expect, it } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
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
} from '../src';

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
});
