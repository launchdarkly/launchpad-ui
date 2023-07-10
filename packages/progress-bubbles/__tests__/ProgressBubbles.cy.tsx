import { Icon } from '@launchpad-ui/icons';

import { ProgressBubbles } from '../src';

describe('ProgressBubbles', () => {
  it('renders', () => {
    cy.mount(
      <ProgressBubbles
        numBubbles={3}
        currentBubble={1}
        bubbleLabels={['Step 1', 'Step 2', 'Step 3']}
      />
    );
    cy.getByTestId('progress-bubbles').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(
      <ProgressBubbles
        numBubbles={3}
        currentBubble={1}
        bubbleLabels={['Step 1', 'Step 2', 'Step 3']}
      />
    );
    cy.checkA11y();
  });

  it('renders with items', () => {
    const items = [
      { label: 'Stage 1', icons: <Icon name="info" /> },
      {
        label: 'Stage 2',
        icons: <Icon name="add" />,
      },
      {
        label: 'Stage 3',
        isWarning: true,
        icons: <Icon name="info" />,
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

    cy.mount(
      <ProgressBubbles
        numBubbles={3}
        currentBubble={1}
        bubbleLabels={['Step 1', 'Step 2', 'Step 3']}
        items={items}
      />
    );
    cy.contains('Stage 2').should('be.visible');
  });
});
