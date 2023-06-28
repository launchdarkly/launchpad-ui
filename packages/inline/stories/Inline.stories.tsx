import type { StoryObj } from '@storybook/react';

import { Inline } from '../src';

export default {
  component: Inline,
  title: 'Components/Inline',
  description: 'An element used to add horizontal space between components.',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__INLINE,
    },
  },
};

type Story = StoryObj<typeof Inline>;

const ELEMENTS = [
  <div
    style={{
      display: 'block',
      height: 32,
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
      height: 72,
      width: 72,
      background: 'var(--lp-color-bg-ui-tertiary)',
    }}
    key="3"
  />,
];

export const Example: Story = {
  args: {
    children: [...Array(10)].map((_, i) => (
      <div
        style={{
          display: 'block',
          height: 64,
          width: 64,
          background: 'var(--lp-color-bg-ui-tertiary)',
        }}
        key={i}
      />
    )),
    gap: '2',
  },
};

export const XCenter: Story = {
  args: {
    children: ELEMENTS,
    gap: '2',
    alignX: 'center',
  },
};

export const XRight: Story = {
  args: {
    children: ELEMENTS,
    gap: '2',
    alignX: 'right',
  },
};

export const YCenter: Story = {
  args: {
    children: ELEMENTS,
    gap: '2',
    alignY: 'center',
  },
};

export const YTop: Story = {
  args: {
    children: ELEMENTS,
    gap: '2',
    alignY: 'top',
  },
};

export const YBottom: Story = {
  args: {
    children: ELEMENTS,
    gap: '2',
    alignY: 'bottom',
  },
};
