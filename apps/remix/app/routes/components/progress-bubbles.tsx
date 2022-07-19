import { ProgressBubbles } from '@launchpad-ui/core';

export default function Index() {
  return (
    <ProgressBubbles
      numBubbles={3}
      currentBubble={1}
      bubbleLabels={['Step 1', 'Step 2', 'Step 3']}
    />
  );
}
