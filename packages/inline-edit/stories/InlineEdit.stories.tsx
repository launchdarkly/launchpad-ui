/* eslint-disable react-hooks/rules-of-hooks */
import type { StoryObj } from '@storybook/react';

import { CopyToClipboard } from '@launchpad-ui/clipboard';
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
      <div style={{ width: '500px' }}>
        <InlineEdit defaultValue={editValue} {...args} onSave={setEditValue}>
          <span>{editValue}</span>
        </InlineEdit>
      </div>
    );
  },
};

export const Title: Story = {
  render: (args) => {
    const [editValue, setEditValue] = useState('This is a title');

    return (
      <div style={{ width: '500px' }}>
        <InlineEdit defaultValue={editValue} {...args} onSave={setEditValue} hideEdit>
          <h3>{editValue}</h3>
        </InlineEdit>
      </div>
    );
  },
};

export const Copy: Story = {
  render: (args) => {
    const [editValue, setEditValue] = useState('auto-generated-key');

    return (
      <div style={{ width: 'max-content' }}>
        <InlineEdit defaultValue={editValue} {...args} onSave={setEditValue}>
          <CopyToClipboard text={editValue} kind="basic">
            {editValue}
          </CopyToClipboard>
        </InlineEdit>
      </div>
    );
  },
};
