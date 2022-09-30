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
    cy.get('[data-test-id="progress-bubbles"]').should('be.visible');
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
});
