import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  TableVerticalAlignType,
  TableColumnWidths,
} from '../src';

describe('Table', () => {
  it('renders', () => {
    render(
      <Table auto compact isResourceTable>
        <TableHead>
          <TableRow verticalAlign={TableVerticalAlignType.MIDDLE}>
            <TableHeadCell id="1" scope="col" defaultColWidth={TableColumnWidths.ONE_OF_TWELVE}>
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
    expect(screen.getByRole('table')).toBeInTheDocument();
  });
});
