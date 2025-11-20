import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';
import type { Selection as AriaSelection } from 'react-aria-components';

import { Icon } from '@launchpad-ui/icons';
import { useState } from 'react';
import { useFilter } from 'react-aria-components';
import { expect, fireEvent, userEvent, waitFor, within } from 'storybook/test';

import { Autocomplete as AutocompleteComponent } from '../src/Autocomplete';
import { Button } from '../src/Button';
import { Group } from '../src/Group';
import { Header } from '../src/Header';
import { IconButton } from '../src/IconButton';
import { Input } from '../src/Input';
import { Keyboard } from '../src/Keyboard';
import { Menu, MenuItem, MenuTrigger, SubmenuTrigger } from '../src/Menu';
import { Popover } from '../src/Popover';
import { Pressable } from '../src/Pressable';
import { SearchField } from '../src/SearchField';
import { MenuSection } from '../src/Section';
import { Separator } from '../src/Separator';
import { Text } from '../src/Text';

const meta: Meta<typeof Menu> = {
	component: Menu,
	subcomponents: {
		MenuItem,
		MenuTrigger,
		SubmenuTrigger,
		MenuSection,
		Header,
		Keyboard,
		Separator,
	} as Record<string, ComponentType<unknown>>,
	title: 'Components/Collections/Menu',
	parameters: {
		figma: {
			design:
				'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=3583-13908&m=dev',
		},
	},
	decorators: [
		(Story) => (
			<div style={{ height: 'var(--lp-size-320)' }}>
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof Menu>;

const renderMenu = (args: Story['args']) => (
	<MenuTrigger>
		<Button>Trigger</Button>
		<Popover>
			<Menu {...args}>
				<MenuItem>
					<Text slot="label">
						<Icon name="add" size="small" /> Item one
					</Text>
					<Text slot="description">Item one description</Text>
				</MenuItem>
				<MenuItem>
					<Text slot="label">Item two</Text>
				</MenuItem>
				<MenuItem>Item three</MenuItem>
			</Menu>
		</Popover>
	</MenuTrigger>
);

const open = {
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('button'));
		const body = canvasElement.ownerDocument.body;
		await expect(await within(body).findByRole('menu'));
	},
};

export const Example: Story = {
	render: (args) => renderMenu(args),
	...open,
};

export const Grouping: Story = {
	render: (args) => {
		return (
			<MenuTrigger>
				<Button>Trigger</Button>
				<Popover>
					<Menu {...args}>
						<MenuSection>
							<Header>Group 1</Header>
							<MenuItem>Item one</MenuItem>
							<MenuItem>Item two</MenuItem>
						</MenuSection>
						<MenuSection>
							<Header>Group 2</Header>
							<MenuItem>Item three</MenuItem>
						</MenuSection>
					</Menu>
				</Popover>
			</MenuTrigger>
		);
	},
	...open,
};

export const SingleSelection: Story = {
	render: (args) => {
		const [selected, setSelected] = useState<AriaSelection>(new Set(['react-aria-1']));

		return renderMenu({
			selectedKeys: selected,
			onSelectionChange: setSelected,
			selectionMode: 'single',
			...args,
		});
	},
	...open,
};

export const MultipleSelection: Story = {
	render: (args) => {
		const [selected, setSelected] = useState<AriaSelection>(new Set(['react-aria-1']));

		return renderMenu({
			selectedKeys: selected,
			onSelectionChange: setSelected,
			selectionMode: 'multiple',
			...args,
		});
	},
	...open,
};

export const Descriptions: Story = {
	render: (args) => {
		return (
			<MenuTrigger>
				<Button>Trigger</Button>
				<Popover>
					<Menu {...args}>
						<MenuItem>
							<Text slot="label">Copy</Text>
							<Text slot="description">Copy the selected text</Text>
							<Keyboard>⌘C</Keyboard>
						</MenuItem>
						<MenuItem>
							<Text slot="label">Paste</Text>
							<Text slot="description">Paste the copied text</Text>
							<Keyboard>⌘V</Keyboard>
						</MenuItem>
					</Menu>
				</Popover>
			</MenuTrigger>
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

export const Icons: Story = {
	render: (args) => {
		return (
			<MenuTrigger>
				<Button>Trigger</Button>
				<Popover>
					<Menu {...args}>
						<MenuItem>
							<Text slot="label">
								<Icon name="add" size="small" /> Add
							</Text>
						</MenuItem>
						<MenuItem>
							<Icon name="edit" size="small" /> Edit
						</MenuItem>
						<MenuItem variant="destructive">
							<Icon name="delete" size="small" /> Delete
						</MenuItem>
					</Menu>
				</Popover>
			</MenuTrigger>
		);
	},
	...open,
};

export const IconsAndDescriptions: Story = {
	render: (args) => {
		return (
			<MenuTrigger>
				<Button>Trigger</Button>
				<Popover>
					<Menu {...args}>
						<MenuItem>
							<Text slot="label">
								<Icon name="add" size="small" /> Add
							</Text>
							<Text slot="description">Add a new item</Text>
						</MenuItem>
						<MenuItem>
							<Text slot="label">
								<Icon name="edit" size="small" /> Edit
							</Text>
							<Text slot="description">Edit the selected item</Text>
						</MenuItem>
						<MenuItem variant="destructive">
							<Text slot="label">
								<Icon name="delete" size="small" /> Delete
							</Text>
							<Text slot="description">Delete the selected item</Text>
						</MenuItem>
					</Menu>
				</Popover>
			</MenuTrigger>
		);
	},
	...open,
};

export const States: Story = {
	render: (args) => {
		return (
			<MenuTrigger>
				<Button>Trigger</Button>
				<Popover>
					<Menu disabledKeys={new Set(['react-aria-4'])} {...args}>
						<MenuItem>Resting</MenuItem>
						<MenuItem>Active</MenuItem>
						<MenuItem>Focus Visible</MenuItem>
						<MenuItem>Disabled</MenuItem>
					</Menu>
				</Popover>
			</MenuTrigger>
		);
	},
	parameters: {
		test: {
			dangerouslyIgnoreUnhandledErrors: true,
		},
	},
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('button'));
		const body = canvasElement.ownerDocument.body;

		const menuitems = await within(body).findAllByRole('menuitem');
		await fireEvent.pointerDown(menuitems[1], { pointerType: 'touch' });
		await userEvent.keyboard('{arrowdown}');
		await userEvent.keyboard('{arrowdown}');
	},
};

export const Submenus: Story = {
	render: (args) => {
		return (
			<MenuTrigger>
				<Button>Trigger</Button>
				<Popover>
					<Menu {...args}>
						<MenuItem>Item one</MenuItem>
						<MenuItem>Item two</MenuItem>
						<MenuItem>Item three</MenuItem>
						<SubmenuTrigger>
							<MenuItem>Item four</MenuItem>
							<Popover>
								<Menu {...args}>
									<MenuItem>Item five</MenuItem>
									<MenuItem>Item six</MenuItem>
									<SubmenuTrigger>
										<MenuItem>Item seven</MenuItem>
										<Popover>
											<Menu {...args}>
												<MenuItem>Item eight</MenuItem>
												<MenuItem>Item nine</MenuItem>
											</Menu>
										</Popover>
									</SubmenuTrigger>
								</Menu>
							</Popover>
						</SubmenuTrigger>
					</Menu>
				</Popover>
			</MenuTrigger>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('button'));
		const body = canvasElement.ownerDocument.body;
		const items = await within(body).findAllByRole('menuitem');
		await userEvent.hover(items[items.length - 1]);

		await waitFor(async () => {
			await expect(await within(body).findAllByRole('menu')).toHaveLength(2);
		});
		const subItems = await within(body).findAllByRole('menuitem');
		await userEvent.hover(subItems[subItems.length - 1]);
	},
};

export const CustomTrigger: Story = {
	render: (args) => {
		return (
			<MenuTrigger>
				<Pressable>
					{/* biome-ignore lint/a11y/useFocusableInteractive: ignore */}
					<span role="button">Trigger</span>
				</Pressable>
				<Popover>
					<Menu {...args}>
						<MenuItem>Item one</MenuItem>
						<MenuItem>
							<Text slot="label">Item two</Text>
						</MenuItem>
						<MenuItem>Item three</MenuItem>
					</Menu>
				</Popover>
			</MenuTrigger>
		);
	},
	...open,
};

export const Autocomplete: Story = {
	render: (args) => {
		const { contains } = useFilter({ sensitivity: 'base' });

		return (
			<MenuTrigger>
				<Button>Trigger</Button>
				<Popover>
					<AutocompleteComponent filter={contains}>
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
						<Menu {...args}>
							<MenuItem>Item one</MenuItem>
							<MenuItem>Item two</MenuItem>
							<MenuItem>Item three</MenuItem>
							<SubmenuTrigger>
								<MenuItem>Item four</MenuItem>
								<Popover>
									<AutocompleteComponent filter={contains}>
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
										<Menu {...args}>
											<MenuItem>Item five</MenuItem>
											<MenuItem>Item six</MenuItem>
										</Menu>
									</AutocompleteComponent>
								</Popover>
							</SubmenuTrigger>
						</Menu>
					</AutocompleteComponent>
				</Popover>
			</MenuTrigger>
		);
	},
};
