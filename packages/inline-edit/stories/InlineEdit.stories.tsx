/* eslint-disable react-hooks/rules-of-hooks */
import type { StoryObj } from '@storybook/react';

import { useState } from '@storybook/client-api';

import { InlineEdit } from '../src';

export default {
  component: InlineEdit,
  title: 'Components/InlineEdit',
  description: 'An element used to display and allow inline editing of a form element value.',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__INLINE_EDIT,
    },
  },
};

type Story = StoryObj<typeof InlineEdit>;

export const Example: Story = {
  render: (args) => {
    const [editValue, setEditValue] = useState('edit me');

    return (
      <InlineEdit defaultValue={editValue} {...args} onSave={setEditValue}>
        <span>{editValue}</span>
      </InlineEdit>
    );
  },
};

export const Title: Story = {
  render: (args) => {
    const [editValue, setEditValue] = useState('This is a title');

    return (
      <InlineEdit defaultValue={editValue} {...args} onSave={setEditValue}>
        <h2>{editValue}</h2>
      </InlineEdit>
    );
  },
};
