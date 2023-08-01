import type { StoryObj } from '@storybook/react';

import { Primitives } from '../src';

export default {
  component: Primitives,
  title: 'Components/Primitives',
  description: 'Elements used as the foundation of other components.',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__PRIMITIVES,
    },
  },
};

type Story = StoryObj<typeof Primitives>;

export const Example: Story = {
  args: {
    children: 'A lovely Primitives component.',
    // arguments for your story
  },
};
