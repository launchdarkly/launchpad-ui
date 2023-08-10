import type { DataTableProps } from '../src';

import { Cell, Column, Row, TableBody, TableHeader } from '@react-stately/table';
import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
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

const DataTableComponent = <T extends object>(props: Omit<Partial<DataTableProps<T>>, 'ref'>) => {
  return (
    <DataTable {...props}>
      <TableHeader columns={COLUMNS}>{(column) => <Column>{column.name}</Column>}</TableHeader>
      <TableBody items={ROWS}>
        {(item) => <Row>{(columnKey) => <Cell>{item[columnKey]}</Cell>}</Row>}
      </TableBody>
    </DataTable>
  );
};

describe('DataTable', () => {
  it('renders', () => {
    render(<DataTableComponent />);
    expect(screen.getByRole('grid')).toBeVisible();
  });

  it('renders checkboxes when selectable', () => {
    render(<DataTableComponent selectionMode="multiple" />);
    expect(screen.getByLabelText('Select All')).toBeVisible();
  });
});
