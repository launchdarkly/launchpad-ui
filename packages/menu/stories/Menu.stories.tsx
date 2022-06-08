import { userEvent } from '@storybook/testing-library';

import { Menu, MenuDivider, MenuItem, MenuSearch } from '../src';

export default {
  component: Menu,
  title: 'Components/Menu',
  description: 'Menus present a list of items a user can choose from.',
};

export const Example = {
  args: {
    children: [<MenuItem key="1">item 1</MenuItem>, <MenuItem key="2">item 2</MenuItem>],
  },
  play: async () => {
    await userEvent.tab();
  },
};

export const ExampleWithDisabledItems = {
  args: {
    children: [
      <MenuItem key="1" disabled>
        item 1
      </MenuItem>,
      <MenuItem key="2">item 2</MenuItem>,
    ],
  },
};

export const ExampleWithSearch = {
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
