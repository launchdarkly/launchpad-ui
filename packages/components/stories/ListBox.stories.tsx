import type { Meta, StoryObj } from '@storybook/react';

import { ListBox, ListBoxItem } from '../src';

const meta: Meta<typeof ListBox> = {
  component: ListBox,
  title: 'React Aria Components/ListBox',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ListBox>;

export const Example: Story = {
  args: {
    children: (
      <>
        <ListBoxItem>Item one</ListBoxItem>
        <ListBoxItem>Item two</ListBoxItem>
        <ListBoxItem>Item three</ListBoxItem>
      </>
    ),
    'aria-label': 'Items',
    selectionMode: 'single',
  },
};
