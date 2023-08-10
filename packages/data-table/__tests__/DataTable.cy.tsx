import { Cell, Column, Row, TableBody, TableHeader } from '@react-stately/table';

import { DataTable } from '../src';

const COLUMNS = [
  { name: 'Col 1', key: 'first' },
  { name: 'Col 2', key: 'second' },
  { name: 'Col 3', key: 'third' },
];

const ROWS = [
  { first: 'one', second: 'two', third: 'three', key: 1 },
  { first: 'four', second: 'five', third: 'six', key: 2 },
];

describe('DataTable', () => {
  it('renders', () => {
    cy.mount(
      <DataTable>
        <TableHeader columns={COLUMNS}>{(column) => <Column>{column.name}</Column>}</TableHeader>
        <TableBody items={ROWS}>
          {(item) => <Row>{(columnKey) => <Cell>{item[columnKey]}</Cell>}</Row>}
        </TableBody>
      </DataTable>
    );
    cy.getByTestId('data-table').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(
      <DataTable>
        <TableHeader columns={COLUMNS}>{(column) => <Column>{column.name}</Column>}</TableHeader>
        <TableBody items={ROWS}>
          {(item) => <Row>{(columnKey) => <Cell>{item[columnKey]}</Cell>}</Row>}
        </TableBody>
      </DataTable>
    );
    cy.checkA11y();
  });
});
