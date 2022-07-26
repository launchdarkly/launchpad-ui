import type { ComponentStoryObj } from '@storybook/react';

import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '../src';

export default {
  component: Table,
  subcomponents: { TableBody, TableCell, TableHead, TableHeadCell, TableRow },
  title: 'Components/Table',
  description: 'An element used to organize and display data to users.',
  parameters: {
    status: {
      type: process.env.PACKAGE_STATUS__TABLE,
    },
  },
};

type Story = ComponentStoryObj<typeof Table>;

enum TableHeaders {
  TYPE = 'type',
  TOTAL = 'total',
}

export const Example: Story = {
  args: {
    compact: false,
    auto: false,
    children: [
      <TableHead key="head">
        <TableRow>
          <TableHeadCell id={TableHeaders.TYPE} scope="col">
            Type
          </TableHeadCell>
          <TableHeadCell id={TableHeaders.TOTAL} scope="col">
            Total
          </TableHeadCell>
        </TableRow>
      </TableHead>,
      <TableBody key="body">
        {[
          { key: 'test1', total: 203, name: 'feature' },
          { key: 'test2', name: 'click', total: 22 },
        ].map((item) => (
          <TableRow key={item.key}>
            <TableCell headers={TableHeaders.TYPE}>{item.name}</TableCell>
            <TableCell headers={TableHeaders.TOTAL}>{item.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>,
    ],
  },
};
