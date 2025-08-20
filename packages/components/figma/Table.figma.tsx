import figma from '@figma/code-connect';

import { Cell, Column, Row, Table, TableBody, TableHeader } from '../src/Table';

figma.connect(
	Table,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=4670%3A84987',
	{
		props: {},
		example: () => (
			<Table>
				<TableHeader>
					<Column>Column 1</Column>
					<Column>Column 2</Column>
					<Column>Column 3</Column>
				</TableHeader>
				<TableBody>
					<Row>
						<Cell>Cell 1</Cell>
						<Cell>Cell 2</Cell>
						<Cell>Cell 3</Cell>
					</Row>
				</TableBody>
			</Table>
		),
	},
);
