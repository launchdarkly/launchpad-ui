import type { Story } from '@storybook/react';

import { ButtonKind, ButtonSize } from '@launchpad-ui/button';
import { Menu, MenuItem } from '@launchpad-ui/menu';

import { Dropdown, DropdownButton } from '../src';

export default {
  component: Dropdown,
  subcomponents: { DropdownButton },
  title: 'Components/Dropdown',
  description: 'Dropdowns display a list of actions or options to a user.',
};

export const Example = {
  args: {
    onInteraction: undefined,
    onStateChange: () => undefined,
    onSelect: () => undefined,
    children: [
      <DropdownButton size={ButtonSize.SMALL} kind={ButtonKind.PRIMARY} key="1">
        Click this button
      </DropdownButton>,
      <Menu key="2">
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </Menu>,
    ],
  },
  decorators: [
    (Story: Story) => (
      <div style={{ position: 'relative', marginBottom: '10rem' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithHtmlButton = {
  args: {
    onInteraction: undefined,
    onStateChange: () => undefined,
    onSelect: () => undefined,
    children: [
      <button key="1">native html button</button>,
      <Menu key="2">
        <MenuItem>Item 1</MenuItem>
      </Menu>,
    ],
  },
};

export const NoArrow = {
  args: {
    onInteraction: undefined,
    onStateChange: () => undefined,
    onSelect: () => undefined,
    children: [
      <DropdownButton hideCaret kind={ButtonKind.PRIMARY} key="1">
        DropdownButton
      </DropdownButton>,
      <Menu key="2">
        <MenuItem>Item 1</MenuItem>
      </Menu>,
    ],
  },
};
