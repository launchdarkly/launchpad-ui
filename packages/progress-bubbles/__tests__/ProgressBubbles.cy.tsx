import { Add, Info } from '@launchpad-ui/icons';

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
      { label: 'Stage 1', icons: <Info /> },
      {
        label: 'Stage 2',
        icons: <Add />,
      },
      {
        label: 'Stage 3',
        isWarning: true,
        icons: <Info />,
      },
      {
        label: 'Stage 4',
        icons: (
          <>
            <Info />
            <Add />
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
