/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Icon } from '@launchpad-ui/icons';
import { vars } from '@launchpad-ui/vars';
import { expect, waitFor, within } from '@storybook/test';
import { useState } from 'react';

import { TextField, Input, Label, Group, IconButton, ProgressBar } from '../src';

const meta: Meta<typeof Group> = {
  component: Group,
  title: 'React Aria Components/Group',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
    },
    chromatic: { pauseAnimationAtEnd: true },
  },
  decorators: [
    (Story: StoryFn) => (
      <div style={{ width: vars.size[240] }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Group>;

export const Example: Story = {
  render: (args) => {
    const [text, setText] = useState('');

    return (
      <TextField
        isDisabled={args.isDisabled}
        isInvalid={args.isInvalid}
        value={text}
        onChange={setText}
      >
        <Label>Label</Label>
        <Group {...args}>
          <Icon name="search" size="small" />
          <Input />
          <IconButton
            icon="cancel-circle-outline"
            aria-label="clear"
            size="small"
            variant="minimal"
            isDisabled={args.isDisabled}
            onPress={() => setText('')}
          />
        </Group>
      </TextField>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(async () => {
      await expect(canvas.getByRole('button')).toBeVisible();
    });
  },
};

export const Loading: Story = {
  render: (args) => {
    return (
      <TextField isDisabled={args.isDisabled} isInvalid={args.isInvalid}>
        <Label>Label</Label>
        <Group {...args}>
          <Input />
          <ProgressBar isIndeterminate aria-label="loading" />
        </Group>
      </TextField>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(async () => {
      await expect(canvas.getByRole('progressbar')).toBeVisible();
    });
  },
};
