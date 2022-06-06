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

export const Success = {
  args: { children: 'Success banner with icon', dismissible: true, kind: AlertKind.SUCCESS },
};

export const Error = {
  args: { children: 'Error banner with icon', dismissible: true, kind: AlertKind.ERROR },
};

export const Warning = {
  args: { children: 'Warning banner with icon', dismissible: true, kind: AlertKind.WARNING },
};

export const Info = {
  args: { children: 'Info banner with icon', dismissible: true, kind: AlertKind.INFO },
};

export const Striped = {
  args: { children: 'Striped banner with icon', dismissible: true, kind: AlertKind.STRIPED },
};
