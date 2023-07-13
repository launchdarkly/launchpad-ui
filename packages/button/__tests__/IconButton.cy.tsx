import { Icon } from '@launchpad-ui/icons';

import { IconButton } from '../src';

describe('IconButton', () => {
  it('renders', () => {
    cy.mount(<IconButton aria-label="Close" icon={<Icon name="close" />} />);
    cy.getByTestId('icon-button').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<IconButton aria-label="Close" icon={<Icon name="close" />} />);
    cy.checkA11y();
  });
});
