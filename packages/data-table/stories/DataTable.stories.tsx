import type { StoryObj } from '@storybook/react';

import { Chip } from '@launchpad-ui/chip';
import { CopyToClipboard } from '@launchpad-ui/clipboard';
import { Stack } from '@launchpad-ui/stack';
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

const COLUMNS = [
  { name: 'Name', key: 'name' },
  { name: 'Type', key: 'type' },
  { name: 'Status', key: 'status' },
];

const ROWS = [
  {
    name: 'Alert',
    type: 'Component',
    status: 'beta',
    key: 1,
    package: 'alert',
    description:
      'An element that informs users of a state or function of the product at a more granular level than banners.',
  },
  {
    name: 'InlineEdit',
    type: 'Component',
    status: 'alpha',
    key: 2,
    package: 'inline-edit',
    description: 'An element used to display and allow inline editing of a form element value.',
  },
  {
    name: '--lp-color-blue-100',
    type: 'Token',
    status: 'beta',
    key: 3,
    package: 'tokens',
    description:
      'LaunchPad design tokens delivered as CSS custom properties, CommonJS modules, and ES modules.',
  },
];

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

export const Selection: Story = {
  render: (args) => {
    return (
      <DataTable aria-label="Selection table" selectionMode="multiple" {...args}>
        <TableHeader columns={COLUMNS}>{(column) => <Column>{column.name}</Column>}</TableHeader>
        <TableBody items={ROWS}>
          {(item) => (
            <Row>{(columnKey) => <Cell>{item[columnKey as keyof typeof item]}</Cell>}</Row>
          )}
        </TableBody>
      </DataTable>
    );
  },
};

export const Composition: Story = {
  render: (args) => {
    return (
      <DataTable aria-label="Selection table" {...args}>
        <TableHeader columns={COLUMNS}>{(column) => <Column>{column.name}</Column>}</TableHeader>
        <TableBody items={ROWS}>
          {(item) => (
            <Row>
              {(columnKey) => (
                <Cell>
                  {columnKey === 'name' && (
                    <Stack gap="3">
                      <span>{item[columnKey]}</span>
                      <span>{item.description}</span>
                      <CopyToClipboard text={item.package} kind="basic">
                        {item.package}
                      </CopyToClipboard>
                    </Stack>
                  )}
                  {columnKey === 'type' && <>{item[columnKey]}</>}
                  {columnKey === 'status' && (
                    <Chip kind={item[columnKey] === 'alpha' ? 'new' : 'beta'}>
                      {item[columnKey]}
                    </Chip>
                  )}
                </Cell>
              )}
            </Row>
          )}
        </TableBody>
      </DataTable>
    );
  },
};
