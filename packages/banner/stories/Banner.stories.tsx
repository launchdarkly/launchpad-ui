import type { ComponentStoryObj } from '@storybook/react';

import { AlertKind } from '@launchpad-ui/alert';

import { Banner } from '../src';

export default {
  component: Banner,
  title: 'Components/Banner',
  description: 'Banners contain a system-wide message or status.',
  argTypes: {
    testId: {
      control: 'text',
      table: {
        category: 'Testing',
        subcategory: 'Data attributes',
      },
    },
    className: {
      table: {
        category: 'Presentation',
      },
    },
    dismissible: {
      control: 'boolean',
      table: {
        category: 'Presentation',
      },
    },
    kind: {
      table: {
        category: 'Presentation',
      },
    },
    onDismiss: {
      table: {
        category: 'Presentation',
      },
    },
    children: {
      table: {
        category: 'Content',
      },
    },
  },
};

type Story = ComponentStoryObj<typeof Banner>;

export const Success: Story = {
  args: { children: 'Success banner with icon', dismissible: true, kind: AlertKind.SUCCESS },
};

export const Error: Story = {
  args: { children: 'Error banner with icon', dismissible: true, kind: AlertKind.ERROR },
};

export const Warning: Story = {
  args: { children: 'Warning banner with icon', dismissible: true, kind: AlertKind.WARNING },
};

export const Info: Story = {
  args: { children: 'Info banner with icon', dismissible: true, kind: AlertKind.INFO },
};

export const Striped: Story = {
  args: { children: 'Striped banner with icon', dismissible: true, kind: AlertKind.STRIPED },
};
