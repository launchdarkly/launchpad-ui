import { Close } from '@launchpad-ui/icons';

import { IconButton } from '../src';

describe('IconButton', () => {
  it('renders', () => {
    cy.mount(<IconButton aria-label="Close" icon={<Close />} />);
    cy.getByTestId('icon-button').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<IconButton aria-label="Close" icon={<Close />} />);
    cy.checkA11y();
  });
});
