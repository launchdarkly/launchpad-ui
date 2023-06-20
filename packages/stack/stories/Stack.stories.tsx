import type { StoryObj } from '@storybook/react';

import { Stack } from '../src';

export default {
  component: Stack,
  title: 'Components/Stack',
  description: 'An element used to add space between components.',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__STACK,
    },
  },
};

type Story = StoryObj<typeof Stack>;

const ELEMENTS = [
  <div
    style={{
      display: 'block',
      height: 48,
      width: 32,
      background: 'var(--lp-color-bg-ui-tertiary)',
    }}
    key="1"
  />,
  <div
    style={{
      display: 'block',
      height: 48,
      width: 48,
      background: 'var(--lp-color-bg-ui-tertiary)',
    }}
    key="2"
  />,
  <div
    style={{
      display: 'block',
      height: 48,
      width: 64,
      background: 'var(--lp-color-bg-ui-tertiary)',
    }}
    key="3"
  />,
  <div
    style={{
      display: 'block',
      height: 48,
      width: 80,
      background: 'var(--lp-color-bg-ui-tertiary)',
    }}
    key="4"
  />,
];

export const Example: Story = {
  args: {
    children: ELEMENTS,
    gap: '5',
  },
};

export const Left: Story = {
  args: {
    children: ELEMENTS,
    gap: '5',
    align: 'left',
  },
};

export const Center: Story = {
  args: {
    children: ELEMENTS,
    gap: '5',
    align: 'center',
  },
};

export const Right: Story = {
  args: {
    children: ELEMENTS,
    gap: '5',
    align: 'right',
  },
};
