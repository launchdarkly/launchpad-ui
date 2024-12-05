import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentType } from 'react';

import { useDragAndDrop } from 'react-aria-components';
import { useListData } from 'react-stately';

import {
	DropIndicator,
	GridList,
	GridListItem,
	IconButton,
	Menu,
	MenuItem,
	MenuTrigger,
	Popover,
	Text,
} from '../src';

const meta: Meta<typeof GridList> = {
	component: GridList,
	subcomponents: { GridListItem } as Record<string, ComponentType<unknown>>,
	title: 'Components/Collections/GridList',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
	},
};

export default meta;

type Story = StoryObj<typeof GridList>;

const Options = () => (
	<MenuTrigger>
		<IconButton icon="more-vert" size="small" variant="minimal" aria-label="options" />
		<Popover>
			<Menu>
				<MenuItem>Action one</MenuItem>
				<MenuItem>
					<Text slot="label">Action two</Text>
				</MenuItem>
				<MenuItem>Action three</MenuItem>
			</Menu>
		</Popover>
	</MenuTrigger>
);

const renderGrid = (args: Story['args']) => (
	<GridList {...args}>
		<GridListItem>
			Item one
			<Options />
		</GridListItem>
		<GridListItem>
			Item two
			<Options />
		</GridListItem>
		<GridListItem>
			Item three
			<Options />
		</GridListItem>
	</GridList>
);

export const Example: Story = {
	render: (args) => renderGrid(args),
	args: {
		selectionMode: 'single',
	},
};

export const Selection: Story = {
	render: (args) => renderGrid(args),
	args: {
		selectionMode: 'multiple',
	},
};

export const DragAndDrop: Story = {
	render: (args) => {
		const list = useListData({
			initialItems: [
				{ id: 1, name: 'Item one' },
				{ id: 2, name: 'Item two' },
				{ id: 3, name: 'Item three' },
				{ id: 4, name: 'Item four' },
				{ id: 5, name: 'Item five' },
			],
		});

		const { dragAndDropHooks } = useDragAndDrop({
			getItems: (keys) => [...keys].map((key) => ({ 'text/plain': list.getItem(key)?.name ?? '' })),
			onReorder(e) {
				if (e.target.dropPosition === 'before') {
					list.moveBefore(e.target.key, e.keys);
				} else if (e.target.dropPosition === 'after') {
					list.moveAfter(e.target.key, e.keys);
				}
			},
			renderDropIndicator: (target) => <DropIndicator target={target} />,
		});

		return (
			<GridList dragAndDropHooks={dragAndDropHooks} {...args} items={list.items}>
				{(item) => (
					<GridListItem>
						{item.name}
						<Options />
					</GridListItem>
				)}
			</GridList>
		);
	},
};

export const Empty: Story = {
	args: {
		children: [],
		renderEmptyState: () => 'No results found',
	},
};
