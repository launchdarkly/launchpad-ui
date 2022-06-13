import type { ComponentStoryObj } from '@storybook/react';

import { Notification } from '../src/Notification';
import { NotificationLevel } from '../src/types';

export default {
  component: Notification,
  title: 'Components/Notification',
  description: 'Actions trigger notifications based on user interaction.',
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

type Story = ComponentStoryObj<typeof Notification>;

const makeMessage = (type: NotificationLevel) => (
  <span>
    A message using the {type} level, with a <a href="https://launchdarkly.com">contextual link</a>.
  </span>
);

const makeNotificationArgs = (level: NotificationLevel, details?: string) => ({
  level,
  message: makeMessage(level),
  details: details ?? '',
});

export const Success: Story = { args: makeNotificationArgs(NotificationLevel.SUCCESS) };

export const Error: Story = { args: makeNotificationArgs(NotificationLevel.ERROR) };

export const Warning: Story = { args: makeNotificationArgs(NotificationLevel.WARNING) };

export const Info: Story = { args: makeNotificationArgs(NotificationLevel.INFO) };

export const ErrorDetails: Story = {
  args: makeNotificationArgs(NotificationLevel.ERROR, 'This notification has details.'),
};
