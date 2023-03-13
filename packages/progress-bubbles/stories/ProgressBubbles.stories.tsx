import type { StoryObj } from '@storybook/react';

import { Button } from '@launchpad-ui/button';
import { CheckCircle, Info, Person, Warning } from '@launchpad-ui/icons';

import { ProgressBubbles } from '../src';

export default {
  component: ProgressBubbles,
  title: 'Components/ProgressBubbles',
  description: 'Shows current progress through a multistep flow.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__PROGRESS_BUBBLES,
    },
  },
};

type Story = StoryObj<typeof ProgressBubbles>;

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
    popover: (
      <div style={{ padding: '1rem' }}>
        <p>You can trigger a popover from a progress bubble item</p>
        <Button onClick={() => alert('Clicked button from popover.')}>Fire alert</Button>
      </div>
    ),
  },
];

export const WithIcons: Story = {
  args: {
    showCurrentLabelOnly: false,
    currentBubble: 2,
    items,
  },
};
