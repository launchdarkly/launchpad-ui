/* eslint-disable react-hooks/rules-of-hooks */
import type { StoryObj } from '@storybook/react';

import { CopyToClipboard } from '@launchpad-ui/clipboard';
import { Form, FormField, TextArea, TextField } from '@launchpad-ui/form';
import { useState } from '@storybook/client-api';
import { userEvent, within } from '@storybook/testing-library';

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
      <InlineEdit defaultValue={editValue} {...args} onConfirm={setEditValue}>
        <span>{editValue}</span>
      </InlineEdit>
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    const edit = canvas.getAllByRole('button');
    userEvent.click(edit[0]);
  },
};

export const EditTitle: Story = {
  render: (args) => {
    const [editValue, setEditValue] = useState('Unnamed title');

    return (
      <div style={{ width: '500px' }}>
        <InlineEdit defaultValue={editValue} {...args} onConfirm={setEditValue} hideEdit>
          <h3>{editValue}</h3>
        </InlineEdit>
      </div>
    );
  },
};

export const EditCopy: Story = {
  render: (args) => {
    const [editValue, setEditValue] = useState('auto-generated-key');

    return (
      <div style={{ width: 'max-content' }}>
        <InlineEdit defaultValue={editValue} {...args} onConfirm={setEditValue}>
          <CopyToClipboard text={editValue} kind="basic">
            {editValue}
          </CopyToClipboard>
        </InlineEdit>
      </div>
    );
  },
};

export const WithTextarea: Story = {
  render: (args) => {
    const [editValue, setEditValue] = useState('edit description');

    return (
      <InlineEdit
        defaultValue={editValue}
        {...args}
        onConfirm={setEditValue}
        renderInput={<TextArea />}
      >
        <span>{editValue}</span>
      </InlineEdit>
    );
  },
};

export const InForm: Story = {
  render: (args) => {
    const [editValue, setEditValue] = useState('');

    return (
      <Form>
        <FormField
          name="Name"
          label="Name"
          htmlFor="inline-edit"
          isRequired
          errorMessage={editValue ? undefined : 'No value entered'}
        >
          <InlineEdit
            defaultValue={editValue}
            {...args}
            onConfirm={setEditValue}
            renderInput={<TextField id="inline-edit" />}
          >
            <span>{editValue || 'Enter a value'}</span>
          </InlineEdit>
        </FormField>
      </Form>
    );
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [editValue, setEditValue] = useState('edit me');
    const [isEditing, setEditing] = useState(true);

    return (
      <InlineEdit
        defaultValue={editValue}
        isEditing={isEditing}
        onCancel={() => setEditing(false)}
        onEdit={() => setEditing(true)}
        {...args}
        onConfirm={(value) => {
          setEditValue(value);
          setEditing(false);
        }}
      >
        <span>{editValue}</span>
      </InlineEdit>
    );
  },
};
