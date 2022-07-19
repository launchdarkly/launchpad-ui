import type { ComponentStoryObj } from '@storybook/react';

import { Person } from '../../icons/src';
import { IconSize } from '../../icons/src/types';
import { Avatar } from '../src';

export default {
  component: Avatar,
  title: 'Components/Avatar',
  description: 'An element that represents a user visually.',
  parameters: {
    status: {
      type: process.env.PACKAGE_STATUS__AVATAR,
    },
  },
  argTypes: {
    size: {
      defaultValue: IconSize.MEDIUM,
      table: {
        category: 'Presentation',
      },
    },
  },
};

type Story = ComponentStoryObj<typeof Avatar>;

export const Example: Story = {
  args: {
    url: '',
    defaultIcon: Person,
  },
};
