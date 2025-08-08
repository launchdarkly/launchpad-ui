import { Button } from '../../src/Button';
import { GridList, GridListItem } from '../../src/GridList';
import { IconButton } from '../../src/IconButton';
// Import the actual components for custom previews
import { ListBox, ListBoxItem } from '../../src/ListBox';
import { Menu, MenuItem, MenuTrigger } from '../../src/Menu';
import { Popover } from '../../src/Popover';
import { Cell, Column, Row, Table, TableBody, TableHeader } from '../../src/Table';
import { TagGroup } from '../../src/TagGroup';
import { Text } from '../../src/Text';
import { Tree, TreeItem, TreeItemContent } from '../../src/Tree';
// Import actual collection stories
import { Example as TagGroupExample } from '../TagGroup.stories';

// Custom preview components that properly handle collection contexts

const ListBoxPreview = () => (
	<div style={{ transform: 'scale(0.8)', transformOrigin: 'center' }}>
		<ListBox aria-label="Items" selectionMode="single" style={{ width: '200px' }}>
			<ListBoxItem>Item one</ListBoxItem>
			<ListBoxItem>Item two</ListBoxItem>
			<ListBoxItem>Item three</ListBoxItem>
		</ListBox>
	</div>
);

const TagGroupPreview = () => {
	const storyArgs = TagGroupExample.args || {};

	return (
		<div style={{ transform: 'scale(0.8)', transformOrigin: 'center' }}>
			<TagGroup {...storyArgs}>{storyArgs.children}</TagGroup>
		</div>
	);
};

const TablePreview = () => (
	<div style={{ transform: 'scale(0.8)', transformOrigin: 'center' }}>
		<Table aria-label="table" style={{ width: '250px' }}>
			<TableHeader>
				<Column isRowHeader>Name</Column>
				<Column>Status</Column>
			</TableHeader>
			<TableBody>
				<Row>
					<Cell>Item 1</Cell>
					<Cell>Active</Cell>
				</Row>
				<Row>
					<Cell>Item 2</Cell>
					<Cell>Inactive</Cell>
				</Row>
			</TableBody>
		</Table>
	</div>
);

// Options component for GridList items (simplified for overview)
const GridOptions = () => (
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

const GridListPreview = () => (
	<div style={{ transform: 'scale(0.8)', transformOrigin: 'center' }}>
		<GridList selectionMode="single" aria-label="Items" style={{ width: '250px' }}>
			<GridListItem>
				Item one
				<GridOptions />
			</GridListItem>
			<GridListItem>
				Item two
				<GridOptions />
			</GridListItem>
			<GridListItem>
				Item three
				<GridOptions />
			</GridListItem>
		</GridList>
	</div>
);

const TreePreview = () => (
	<div style={{ transform: 'scale(0.8)', transformOrigin: 'center' }}>
		<Tree aria-label="File System" style={{ width: '200px' }} defaultExpandedKeys={['documents']}>
			<TreeItem id="documents" textValue="Documents">
				<TreeItemContent>Documents</TreeItemContent>
				<TreeItem id="project" textValue="Project">
					<TreeItemContent>Project</TreeItemContent>
				</TreeItem>
			</TreeItem>
			<TreeItem id="photos" textValue="Photos">
				<TreeItemContent>Photos</TreeItemContent>
			</TreeItem>
		</Tree>
	</div>
);

const MenuPreview = () => (
	<div style={{ transform: 'scale(0.8)', transformOrigin: 'center' }}>
		<MenuTrigger>
			<Button>Open Menu</Button>
			<Popover>
				<Menu>
					<MenuItem>Item one</MenuItem>
					<MenuItem>Item two</MenuItem>
					<MenuItem>Item three</MenuItem>
				</Menu>
			</Popover>
		</MenuTrigger>
	</div>
);

// Collections category configuration
export const collectionsCategory = {
	category: 'Collections',
	components: [
		{
			name: 'Table',
			component: <TablePreview />,
			storyPath: 'components-collections-table--docs',
		},
		{
			name: 'GridList',
			component: <GridListPreview />,
			storyPath: 'components-collections-gridlist--docs',
		},
		{
			name: 'ListBox',
			component: <ListBoxPreview />,
			storyPath: 'components-collections-listbox--docs',
		},
		{
			name: 'Tree',
			component: <TreePreview />,
			storyPath: 'components-collections-tree--docs',
		},
		{
			name: 'TagGroup',
			component: <TagGroupPreview />,
			storyPath: 'components-collections-taggroup--docs',
		},
		{
			name: 'Menu',
			component: <MenuPreview />,
			storyPath: 'components-collections-menu--docs',
		},
	],
};
