import type { StoryObj } from '@storybook/react';

import { Cell, Column, Row, TableBody, TableHeader } from '@react-stately/table';

import { DataTable } from '../src';

export default {
  component: DataTable,
  title: 'Components/DataTable',
  description: 'An element used to display data in rows and columns.',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__DATA_TABLE,
    },
  },
};

type Story = StoryObj<typeof DataTable>;

export const Example: Story = {
  render: (args) => {
    return (
      <DataTable aria-label="Example table" {...args}>
        <TableHeader>
          <Column>Name</Column>
          <Column>Type</Column>
          <Column>Status</Column>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>Alert</Cell>
            <Cell>Component</Cell>
            <Cell>Beta</Cell>
          </Row>
          <Row>
            <Cell>InlineEdit</Cell>
            <Cell>Component</Cell>
            <Cell>Alpha</Cell>
          </Row>
          <Row>
            <Cell>--lp-color-blue-100</Cell>
            <Cell>Token</Cell>
            <Cell>Beta</Cell>
          </Row>
        </TableBody>
      </DataTable>
    );
  },
};
