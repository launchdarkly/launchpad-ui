import type { ComponentStoryObj } from '@storybook/react';

import { Toast } from '../src';

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

export const Info: Story = {
  args: { kind: 'info', content: 'This is a message about an app process.' },
};

export const Warning: Story = {
  args: {
    kind: 'warning',
    content: 'This is a message about an app process.',
  },
};

export const Success: Story = {
  args: {
    kind: 'success',
    content: 'This is a message about an app process.',
  },
};
