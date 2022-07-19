import type { ComponentStoryObj } from '@storybook/react';

import { CheckCircle, Info, Person, Warning } from '@launchpad-ui/icons';

import { ProgressBubbles } from '../src';

export default {
  component: ProgressBubbles,
  title: 'Components/ProgressBubbles',
  description: 'Shows current progress through a multistep flow.',
  parameters: {
    status: {
      type: process.env.PACKAGE_STATUS__PROGRESS_BUBBLES,
    },
  },
};

type Story = ComponentStoryObj<typeof ProgressBubbles>;

export const Example: Story = {
  args: {
    numBubbles: 3,
    currentBubble: 1,
    bubbleLabels: ['Step 1', 'Step 2', 'Step 3'],
  },
};
const items = [
  { label: 'Stage 1', icons: <CheckCircle /> },
  {
    label: 'Stage 2',
    icons: (
      <>
        <Info />
        <Warning />
      </>
    ),
  },
  {
    label: 'Stage 3',
    icons: <Info />,
    isWarning: true,
  },
  {
    label: 'Stage 4',
  },
  {
    label: 'Complete',
    icons: <Person />,
  },
];

export const WithIcons: Story = {
  args: {
    showCurrentLabelOnly: false,
    currentBubble: 2,
    items,
  },
};
