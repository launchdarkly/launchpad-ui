import type { ProgressBubblesProps } from '../src';

import { Icon } from '@launchpad-ui/icons';
import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { ProgressBubbles } from '../src';

const createComponent = (props?: Partial<ProgressBubblesProps>) => {
  const allProps = {
    numBubbles: 3,
    currentBubble: 1,
    bubbleLabels: ['Step 1', 'Step 2', 'Step 3'],
    ...(props || {}),
  };
  return <ProgressBubbles {...allProps} />;
};

describe('ProgressBubbles', () => {
  it('renders', () => {
    render(createComponent());
    expect(screen.getByText('Step 2')).toBeInTheDocument();
  });

  it('renders with items', () => {
    const items = [
      { label: 'Stage 1', icons: <Icon name="info" /> },
      {
        label: 'Stage 2',
      },
      {
        label: 'Stage 3',
        isWarning: true,
      },
      {
        label: 'Stage 4',
        icons: (
          <>
            <Icon name="info" />
            <Icon name="add" />
          </>
        ),
      },
      {
        label: 'Complete',
      },
    ];

    render(createComponent({ items }));
    expect(screen.getByText('Stage 2')).toBeInTheDocument();
  });
});
