import type { StoryObj } from '@storybook/react';

import { ProgressBar } from '../src';

export default {
  component: ProgressBar,
  title: 'React Aria Components/ProgressBar',
  description:
    "An implementation of LaunchDarkly's LaunchPad Design System using React Aria Components.",
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
    },
  },
};

type Story = StoryObj<typeof ProgressBar>;

export const Example: Story = {
  args: { isIndeterminate: true, 'aria-label': 'loading' },
};
