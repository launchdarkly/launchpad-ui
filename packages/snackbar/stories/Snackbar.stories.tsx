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
    description: 'This is a message.',
    cta: (
      <a href="/" target="_blank">
        Link
      </a>
    ),
  },
};

export const Info: Story = {
  args: {
    kind: 'info',
    description: 'This is a message.',
    cta: (
      <a href="/" target="_blank">
        Link
      </a>
    ),
  },
};

export const Warning: Story = {
  args: {
    kind: 'warning',
    description: 'This is a message.',
    cta: (
      <a href="/" target="_blank">
        Link
      </a>
    ),
  },
};

export const Success: Story = {
  args: {
    kind: 'success',
    description: 'This is a message.',
    cta: (
      <a href="/" target="_blank">
        Link
      </a>
    ),
  },
};

export const WithHeader: Story = {
  args: {
    kind: 'info',
    header: 'Snackbar header',
    description: 'This is a message.',
    cta: (
      <a href="/" target="_blank">
        Link
      </a>
    ),
  },
};
