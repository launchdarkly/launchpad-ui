import { test, expect } from '@playwright/experimental-ct-react';

import { Table, type TableProps } from '../src/Table';
import { TableBody } from '../src/TableBody';
import { TableCell } from '../src/TableCell';
import { TableHead } from '../src/TableHead';
import { TableHeadCell } from '../src/TableHeadCell';
import { TableRow } from '../src/TableRow';

test.use({ viewport: { width: 500, height: 500 } });

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

test.describe('Table', () => {
  test('is accessible', async ({ mount, page }) => {
    const component = await mount(createComponent());

    await expect(component).toBeVisible();
    await expect(page).toBeAccessible();
  });
});
