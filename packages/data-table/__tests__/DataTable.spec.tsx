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

type DataTableComponentProps = Omit<Partial<DataTableProps<object>>, 'ref'> & {
  resizable?: boolean;
};

const DataTableComponent = ({ resizable, ...props }: DataTableComponentProps) => {
  return (
    <DataTable {...props}>
      <TableHeader columns={COLUMNS}>
        {(column) => <Column allowsResizing={resizable}>{column.name}</Column>}
      </TableHeader>
      <TableBody items={ROWS}>
        {(item) => <Row>{(columnKey) => <Cell>{item[columnKey as keyof typeof item]}</Cell>}</Row>}
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

  it('renders column resizers when allowsResizing is passed to columns', () => {
    render(<DataTableComponent resizable />);

    const resizers = screen.getAllByRole('presentation');
    resizers.forEach((resizer) => expect(resizer).toBeVisible());

    const inputs = screen.getAllByLabelText('Resizer');
    inputs.forEach((input) => expect(input).toBeInTheDocument());
  });
});
