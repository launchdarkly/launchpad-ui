import type { TableProps } from '../src';

import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '../src';

const createComponent = (props?: TableProps) => (
  <Table {...props}>
    <TableHead>
      <TableRow>
        <TableHeadCell id="1" scope="col">
          Col 1
        </TableHeadCell>
        <TableHeadCell id="2" scope="col">
          Col 2
        </TableHeadCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell headers="1">Data 1</TableCell>
        <TableCell headers="2">Data 2</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

describe('Table', () => {
  it('renders', () => {
    cy.mount(createComponent());
    cy.get('[data-test-id="table"]').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(createComponent());
    cy.checkA11y();
  });
});
