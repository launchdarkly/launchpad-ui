import type { ComponentStoryObj } from '@storybook/react';

import { Snackbar } from '../src';

export default {
  component: Snackbar,
  title: 'Components/Snackbar',
  description: 'An element that provides brief messages about app processes with a CTA.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__SNACKBAR,
    },
  },
};

type Story = ComponentStoryObj<typeof Snackbar>;

export const Example: Story = {
  args: {
    children: 'A lovely Snackbar component.',
    // arguments for your story
  },
};
