import type { ComponentStoryObj } from '@storybook/react';

import { Toast, ToastKind } from '../src';

export default {
  component: Toast,
  title: 'Components/Toast',
  description: 'An element that provides brief messages about app processes with a CTA.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__TOAST,
    },
  },
};

type Story = ComponentStoryObj<typeof Toast>;

export const Error: Story = {
  args: {
    kind: ToastKind.ERROR,
    title: 'Toast title',
    content: 'This is a message about an app process.',
  },
};

export const Info: Story = {
  args: { kind: ToastKind.INFO, content: 'This is a message about an app process.' },
};

export const Warning: Story = {
  args: {
    kind: ToastKind.WARNING,
    content: 'This is a message about an app process.',
  },
};

export const Success: Story = {
  args: {
    kind: ToastKind.SUCCESS,
    content: 'This is a message about an app process.',
  },
};
