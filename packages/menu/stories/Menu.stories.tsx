import type { ComponentStoryObj } from '@storybook/react';

import { userEvent } from '@storybook/testing-library';

import { Menu, MenuDivider, MenuItem, MenuSearch } from '../src';

export default {
  component: Menu,
  subcomponents: { MenuDivider, MenuItem, MenuSearch },
  title: 'Components/Menu',
  description: 'Menus present a list of items a user can choose from.',
  parameters: {
    status: {
      type: process.env.PACKAGE_STATUS__MENU,
    },
  },
};

type Story = ComponentStoryObj<typeof Menu>;

export const Example: Story = {
  args: {
    children: [<MenuItem key="1">item 1</MenuItem>, <MenuItem key="2">item 2</MenuItem>],
  },
  play: async () => {
    await userEvent.tab();
  },
};

export const ExampleWithDisabledItems: Story = {
  args: {
    children: [
      <MenuItem key="1" disabled>
        item 1
      </MenuItem>,
      <MenuItem key="2">item 2</MenuItem>,
    ],
  },
};

export const ExampleWithSearch: Story = {
  args: {
    children: [
      <MenuSearch key="search" />,
      <MenuItem key="1">item 1</MenuItem>,
      <MenuItem key="2">item 2</MenuItem>,
      <MenuDivider key="divider" />,
      <MenuItem key="3">item 3</MenuItem>,
    ],
  },
};

export const ExampleWithTooltips: Story = {
  args: {
    children: [
      <MenuItem key="1" tooltip="Hello">
        item 1
      </MenuItem>,
      <MenuItem key="2">item 2</MenuItem>,
    ],
  },
};

export const ExampleWithSlottedChild: Story = {
  args: {
    children: [
      <MenuItem key="1" asChild>
        <a href="https://www.launchdarkly.com" target="_blank" rel="noreferrer">
          Item 1
        </a>
      </MenuItem>,
      <MenuItem key="2">item 2</MenuItem>,
    ],
  },
};
