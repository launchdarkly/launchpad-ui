import { Person } from '@launchpad-ui/icons';

import { Avatar } from '../src';

describe('Avatar', () => {
  it('should render', () => {
    cy.mount(<Avatar url="" defaultIcon={Person} />);
    cy.get('[data-test-id="avatar"]').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<Avatar url="" defaultIcon={Person} />);
    cy.checkA11y();
  });
});
