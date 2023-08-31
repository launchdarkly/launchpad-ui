import type { StoryObj } from '@storybook/react';

import { Icon } from '@launchpad-ui/icons';
import { userEvent } from '@storybook/testing-library';

import { Menu, MenuDivider, MenuItem, MenuSearch } from '../src';

export default {
  component: Menu,
  subcomponents: { MenuDivider, MenuItem, MenuSearch },
  title: 'Components/Menu',
  description: 'Menus present a list of items a user can choose from.',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__MENU,
    },
  },
};

type Story = StoryObj<typeof Menu>;

export const Basic: Story = {
  args: {
    children: [<MenuItem key="1">item 1</MenuItem>, <MenuItem key="2">item 2</MenuItem>],
  },
  play: async () => {
    await userEvent.tab();
  },
};

export const WithDisabledItems: Story = {
  args: {
    children: [
      <MenuItem key="1" disabled>
        item 1
      </MenuItem>,
      <MenuItem key="2">item 2</MenuItem>,
    ],
  },
};

export const WithSearch: Story = {
  args: {
    children: [
      <MenuSearch key="search" />,
      <MenuItem key="1">item 1</MenuItem>,
      <MenuItem key="2">item 2</MenuItem>,
      <MenuDivider key="divider" />,
      <MenuItem key="3">item 3</MenuItem>,
    ],
  },
  parameters: {
    a11y: {
      options: {
        rules: {
          // @fixme
          'aria-required-children': { enabled: false },
        },
      },
    },
  },
};

export const WithTooltips: Story = {
  args: {
    children: [
      <MenuItem key="1" tooltip="Hello">
        item 1
      </MenuItem>,
      <MenuItem key="2">item 2</MenuItem>,
    ],
  },
};

export const WithHighlightedMenuItem: Story = {
  args: {
    children: [
      <MenuItem key="1" tooltip="Hello">
        item 1
      </MenuItem>,
      <MenuItem key="2" isHighlighted>
        item 2
      </MenuItem>,
    ],
  },
};

export const WithMenuItemIcons: Story = {
  args: {
    children: [
      <MenuItem key="1" icon={<Icon name="check" />}>
        item 1
      </MenuItem>,
      <MenuItem key="2" icon={<Icon name="info" />}>
        item 2
      </MenuItem>,
    ],
  },
};

export const WithSlottedChild: Story = {
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
