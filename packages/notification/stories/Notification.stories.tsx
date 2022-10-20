import type { NotificationProps } from '../src/Notification';
import type { StoryObj } from '@storybook/react';

import { Notification } from '../src/Notification';

export default {
  component: Notification,
  title: 'Components/Notification',
  description: 'Actions trigger notifications based on user interaction.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__NOTIFICATION,
    },
  },
  argTypes: {
    ttl: {
      table: {
        category: 'Presentation',
      },
    },
    level: {
      table: {
        category: 'Presentation',
      },
    },
    message: {
      table: {
        category: 'Content',
      },
      control: {
        type: 'text',
      },
    },
    details: {
      table: {
        category: 'Content',
      },
    },
    onDismiss: {
      table: {
        category: 'Functions',
      },
    },
  },
};

type Story = StoryObj<typeof Notification>;

const makeMessage = (type: NotificationProps['level']) => (
  <span>
    A message using the {type} level, with a <a href="https://launchdarkly.com">contextual link</a>.
  </span>
);

const makeNotificationArgs = (
  level: NotificationProps['level'],
  details?: string,
  json?: string
) => ({
  level,
  message: makeMessage(level),
  details: details ?? '',
  json: json ?? '',
});

export const Success: Story = { args: makeNotificationArgs('success') };

export const Error: Story = { args: makeNotificationArgs('error') };

export const Warning: Story = { args: makeNotificationArgs('warning') };

export const Info: Story = { args: makeNotificationArgs('info') };

export const ErrorDetails: Story = {
  args: makeNotificationArgs(
    'error',
    'This notification has details.',
    "{ details: 'I am a detail' }"
  ),
};
