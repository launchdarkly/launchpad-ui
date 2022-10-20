import type { StoryObj } from '@storybook/react';

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

type Story = StoryObj<typeof Snackbar>;

export const Error: Story = {
  args: {
    kind: 'error',
    header: 'Snackbar header',
    description: 'This is a message about an app process.',
    cta: <a href="/">Please try again</a>,
  },
};

export const Info: Story = {
  args: { kind: 'info', description: 'This is a message about an app process.' },
};

export const Warning: Story = {
  args: {
    kind: 'warning',
    description: 'This is a message about an app process.',
    cta: <a href="/">Please try again</a>,
  },
};
