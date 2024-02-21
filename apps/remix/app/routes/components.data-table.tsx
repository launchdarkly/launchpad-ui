import { DataTable } from '@launchpad-ui/core';
import { Cell, Column, Row, TableBody, TableHeader } from '@react-stately/table';

const COLUMNS = [
	{ name: 'Col 1', key: 'first' },
	{ name: 'Col 2', key: 'second' },
	{ name: 'Col 3', key: 'third' },
];

const ROWS = [
	{ first: 'one', second: 'two', third: 'three', key: 1 },
	{ first: 'four', second: 'five', third: 'six', key: 2 },
];

export default function Index() {
	return (
		<DataTable>
			<TableHeader columns={COLUMNS}>{(column) => <Column>{column.name}</Column>}</TableHeader>
			<TableBody items={ROWS}>
				{(item) => <Row>{(columnKey) => <Cell>{item[columnKey as keyof typeof item]}</Cell>}</Row>}
			</TableBody>
		</DataTable>
	);
}
