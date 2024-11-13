import type { Meta, StoryObj } from '@storybook/react';
import type { SortDescriptor } from 'react-aria-components';

import { useState } from 'react';
import { useDragAndDrop } from 'react-aria-components';
import { useListData } from 'react-stately';

import {
	Cell,
	Column,
	DropIndicator,
	ResizableTableContainer,
	Row,
	Table,
	TableBody,
	TableHeader,
} from '../src';

const meta: Meta<typeof Table> = {
	component: Table,
	// @ts-ignore
	subcomponents: { Cell, Column, ResizableTableContainer, Row, TableBody, TableHeader },
	title: 'Components/Collections/Table',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
	},
};

export default meta;

type Story = StoryObj<typeof Table>;

const renderTable = (args: Story['args']) => (
	<Table {...args}>
		<TableHeader>
			<Column isRowHeader>Name</Column>
			<Column>Description</Column>
			<Column>ID</Column>
		</TableHeader>
		<TableBody>
			<Row>
				<Cell>Name 1</Cell>
				<Cell>Some data</Cell>
				<Cell>001</Cell>
			</Row>
			<Row>
				<Cell>Name 2</Cell>
				<Cell>Some data</Cell>
				<Cell>002</Cell>
			</Row>
			<Row>
				<Cell>Name 3</Cell>
				<Cell>Some data</Cell>
				<Cell>003</Cell>
			</Row>
			<Row>
				<Cell>Name 4</Cell>
				<Cell>Some data</Cell>
				<Cell>004</Cell>
			</Row>
		</TableBody>
	</Table>
);

export const Example: Story = {
	render: (args) => renderTable(args),
	args: {
		'aria-label': 'table',
	},
};

export const Selection: Story = {
	render: (args) => renderTable(args),
	args: {
		'aria-label': 'table',
		selectionMode: 'multiple',
	},
};

export const ColumnResizing: Story = {
	render: (args) => {
		const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
			column: 'name',
			direction: 'ascending',
		});

		const items = [
			{ name: 'Name 1', description: 'Some data', id: '001' },
			{ name: 'Name 2', description: 'Some data', id: '002' },
			{ name: 'Name 3', description: 'Some data', id: '003' },
			{ name: 'Name 4', description: 'Some data', id: '004' },
		].sort((a, b) => {
			// @ts-ignore
			const d = a[sortDescriptor.column].localeCompare(b[sortDescriptor.column]);
			return sortDescriptor.direction === 'descending' ? -d : d;
		});

		return (
			<ResizableTableContainer
				style={{ height: 400, width: 500, overflow: 'auto', scrollPaddingTop: 25 }}
			>
				<Table sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor} {...args}>
					<TableHeader>
						<Column id="name" isRowHeader allowsSorting>
							Name
						</Column>
						<Column id="description" allowsSorting>
							Description
						</Column>
						<Column id="id" allowsSorting>
							ID
						</Column>
					</TableHeader>
					<TableBody items={items}>
						{(item) => (
							<Row>
								<Cell>{item.name}</Cell>
								<Cell>{item.description}</Cell>
								<Cell>{item.id}</Cell>
							</Row>
						)}
					</TableBody>
				</Table>
			</ResizableTableContainer>
		);
	},
	args: {
		'aria-label': 'table',
	},
};

export const DragAndDrop: Story = {
	render: (args) => {
		const list = useListData({
			initialItems: [
				{ name: 'Name 1', description: 'Some data', id: '001' },
				{ name: 'Name 2', description: 'Some data', id: '002' },
				{ name: 'Name 3', description: 'Some data', id: '003' },
				{ name: 'Name 4', description: 'Some data', id: '004' },
			],
		});

		const { dragAndDropHooks } = useDragAndDrop({
			getItems: (keys) =>
				[...keys].map((key) => ({
					'text/plain': list.getItem(key).name,
				})),
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
			<Table dragAndDropHooks={dragAndDropHooks} {...args}>
				<TableHeader>
					<Column isRowHeader>Name</Column>
					<Column>Description</Column>
					<Column>ID</Column>
				</TableHeader>
				<TableBody items={list.items}>
					{(item) => (
						<Row>
							<Cell>{item.name}</Cell>
							<Cell>{item.description}</Cell>
							<Cell>{item.id}</Cell>
						</Row>
					)}
				</TableBody>
			</Table>
		);
	},
	args: {
		'aria-label': 'table',
	},
};

export const Empty: Story = {
	args: {
		children: (
			<>
				<TableHeader>
					<Column isRowHeader>Name</Column>
					<Column>Description</Column>
					<Column>ID</Column>
				</TableHeader>
				<TableBody renderEmptyState={() => 'No results found'}>{[]}</TableBody>
			</>
		),
	},
};
