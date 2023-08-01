import type { StoryObj } from '@storybook/react';

import { Card } from '../src';

export default {
  component: Card,
  title: 'Components/Card',
  description: '',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__CARD,
    },
  },
};

type Story = StoryObj<typeof Card>;

export const Example: Story = {};
