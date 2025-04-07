import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '@launchpad-ui/icons';
import { useState } from 'react';
import { expect, userEvent, within } from 'storybook/test';

import {
	Autocomplete,
	Button,
	Dialog,
	DialogTrigger,
	Group,
	IconButton,
	Input,
	ListBox,
	ListBoxItem,
	Menu,
	MenuItem,
	Popover,
	SearchField,
} from '../src';

const meta: Meta<typeof Autocomplete> = {
	component: Autocomplete,
	title: 'Components/Pickers/Autocomplete',
};

export default meta;

type Story = StoryObj<typeof Autocomplete>;

const open = {
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('button'));
		const body = canvasElement.ownerDocument.body;
		await expect(await within(body).findByRole('dialog'));
		await userEvent.keyboard('{arrowdown}');
	},
};

export const Example: Story = {
	render: (args) => {
		const [search, setSearch] = useState('');
		const items = [
			{ id: '1', name: 'Item one' },
			{ id: '2', name: 'Item two' },
			{ id: '3', name: 'Item three' },
		];

		return (
			<DialogTrigger>
				<Button>Trigger</Button>
				<Popover placement="bottom start">
					<Dialog aria-label="dialog with autocomplete">
						<Autocomplete inputValue={search} onInputChange={setSearch} {...args}>
							<SearchField aria-label="search" autoFocus>
								<Group>
									<Icon name="search" size="small" />
									<Input placeholder="Search" />
									<IconButton
										icon="cancel-circle-outline"
										aria-label="clear"
										size="small"
										variant="minimal"
									/>
								</Group>
							</SearchField>
							<Menu
								items={items.filter((item) =>
									item.name.toLowerCase().includes(search.toLowerCase()),
								)}
								selectionMode="multiple"
							>
								{(item) => <MenuItem id={item.id}>{item.name}</MenuItem>}
							</Menu>
						</Autocomplete>
					</Dialog>
				</Popover>
			</DialogTrigger>
		);
	},
	...open,
};

export const ListBoxExample: Story = {
	render: (args) => {
		const [search, setSearch] = useState('');
		const items = [
			{ id: '1', name: 'Item one' },
			{ id: '2', name: 'Item two' },
			{ id: '3', name: 'Item three' },
		];

		return (
			<DialogTrigger>
				<Button>Trigger</Button>
				<Popover placement="bottom start">
					<Dialog aria-label="dialog with autocomplete">
						<Autocomplete inputValue={search} onInputChange={setSearch} {...args}>
							<SearchField aria-label="search" autoFocus>
								<Group>
									<Icon name="search" size="small" />
									<Input placeholder="Search" />
									<IconButton
										icon="cancel-circle-outline"
										aria-label="clear"
										size="small"
										variant="minimal"
									/>
								</Group>
							</SearchField>
							<ListBox
								selectionMode="single"
								items={items.filter((item) =>
									item.name.toLowerCase().includes(search.toLowerCase()),
								)}
								shouldFocusWrap
							>
								{(item) => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
							</ListBox>
						</Autocomplete>
					</Dialog>
				</Popover>
			</DialogTrigger>
		);
	},
	...open,
	name: 'ListBox',
};
