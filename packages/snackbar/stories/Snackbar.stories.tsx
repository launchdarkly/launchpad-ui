import type { ComponentStoryObj } from '@storybook/react';

import { Snackbar, SnackbarKind } from '../src';

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

export const Error: Story = {
  args: {
    kind: SnackbarKind.ERROR,
    title: 'Snackbar title',
    description: 'This is a message about an app process.',
    cta: <a href="/">Please try again</a>,
  },
};

export const Info: Story = {
  args: { kind: SnackbarKind.INFO, description: 'This is a message about an app process.' },
};

export const Warning: Story = {
  args: {
    kind: SnackbarKind.WARNING,
    description: 'This is a message about an app process.',
    cta: <a href="/">Please try again</a>,
  },
};
