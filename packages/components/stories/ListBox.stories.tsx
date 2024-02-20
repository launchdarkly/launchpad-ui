import type { Meta, StoryObj } from '@storybook/react';

import { ListBox, ListBoxItem, Section, Header } from '../src';

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

export const Grouping: Story = {
  args: {
    children: (
      <>
        <Section>
          <Header>Group 1</Header>
          <ListBoxItem>Item one</ListBoxItem>
          <ListBoxItem>Item two</ListBoxItem>
          <ListBoxItem>Item three</ListBoxItem>
        </Section>
        <Section>
          <Header>Group 2</Header>
          <ListBoxItem>Item four</ListBoxItem>
          <ListBoxItem>Item five</ListBoxItem>
          <ListBoxItem>Item six</ListBoxItem>
        </Section>
      </>
    ),
    'aria-label': 'Items',
    selectionMode: 'multiple',
  },
};
