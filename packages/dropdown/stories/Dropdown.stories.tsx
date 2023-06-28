import type { ReactRenderer, StoryObj, StoryFn } from '@storybook/react';
import type { StoryContext } from '@storybook/types';

import { Menu, MenuItem } from '@launchpad-ui/menu';

import { Dropdown, DropdownButton } from '../src';

export default {
  component: Dropdown,
  subcomponents: { DropdownButton },
  title: 'Components/Dropdown',
  description: 'Dropdowns display a list of actions or options to a user.',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__DROPDOWN,
    },
  },
  decorators: [
    (Story: StoryFn, context: StoryContext<ReactRenderer>) => (
      <div
        style={{
          width: context.globals.theme === 'side-by-side' ? '50w' : '100vw',
          height: context.globals.theme === 'side-by-side' ? '50vh' : '100vh',
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

type Story = StoryObj<typeof Dropdown>;

export const Example: Story = {
  args: {
    onInteraction: undefined,
    onStateChange: () => undefined,
    onSelect: () => undefined,
    children: [
      <DropdownButton size="small" kind="primary" key="1">
        Click this button
      </DropdownButton>,
      <Menu key="2">
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </Menu>,
    ],
    isOpen: true,
  },
};

export const WithHtmlButton: Story = {
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

export const NoArrow: Story = {
  args: {
    onInteraction: undefined,
    onStateChange: () => undefined,
    onSelect: () => undefined,
    children: [
      <DropdownButton hideCaret kind="primary" key="1">
        DropdownButton
      </DropdownButton>,
      <Menu key="2">
        <MenuItem>Item 1</MenuItem>
      </Menu>,
    ],
  },
};
