/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';

import { userEvent } from '@storybook/test';
import { useListData } from 'react-stately';

import { TagGroup, TagList, Tag, Label } from '../src';

const meta: Meta<typeof TagGroup> = {
  component: TagGroup,
  title: 'React Aria Components/TagGroup',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
    },
  },
};

export default meta;

type Story = StoryObj<typeof TagGroup>;

export const Example: Story = {
  args: {
    children: (
      <>
        <Label>Label</Label>
        <TagList>
          <Tag>One</Tag>
          <Tag>Two</Tag>
          <Tag>Three</Tag>
        </TagList>
      </>
    ),
  },
};

export const Removable: Story = {
  render: (args) => {
    const list = useListData({
      initialItems: [
        { id: 1, name: 'One' },
        { id: 2, name: 'Two' },
        { id: 3, name: 'Three' },
      ],
    });
    return (
      <TagGroup onRemove={(keys) => list.remove(...keys)} {...args}>
        <Label>Label</Label>
        <TagList items={list.items}>
          {(item: { id?: number; name?: string }) => <Tag>{item.name}</Tag>}
        </TagList>
      </TagGroup>
    );
  },
};

export const States: Story = {
  args: {
    children: (
      <>
        <Label>Label</Label>
        <TagList>
          <Tag>Selected</Tag>
          <Tag>Focus Visible</Tag>
          <Tag>Disabled</Tag>
        </TagList>
      </>
    ),
    selectionMode: 'multiple',
    selectedKeys: ['react-aria-1'],
    disabledKeys: ['react-aria-3'],
  },
  play: async ({ canvasElement }) => {
    const body = canvasElement.ownerDocument.body;
    body.click();
    await userEvent.tab();
    await userEvent.keyboard('{arrowdown}');
  },
};
