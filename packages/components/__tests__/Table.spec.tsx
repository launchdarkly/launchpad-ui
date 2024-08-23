import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Cell, Column, ResizableTableContainer, Row, Table, TableBody, TableHeader } from '../src';

describe('Table', () => {
	it('renders', () => {
		render(
			<ResizableTableContainer>
				<Table>
					<TableHeader>
						<Column isRowHeader>Col 1</Column>
						<Column>Col 2</Column>
					</TableHeader>
					<TableBody>
						<Row>
							<Cell>Cell 1</Cell>
							<Cell>Cell 2</Cell>
						</Row>
					</TableBody>
				</Table>
			</ResizableTableContainer>,
		);
		expect(screen.getByRole('grid')).toBeVisible();
	});
});
