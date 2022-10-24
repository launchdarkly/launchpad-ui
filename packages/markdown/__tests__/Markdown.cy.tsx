import { Markdown } from '../src';

import { SAMPLE_MARKDOWN } from './constants';

describe('Markdown', () => {
  it('renders', () => {
    cy.mount(<Markdown source={SAMPLE_MARKDOWN} />);
    cy.getByTestId('markdown').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<Markdown source={SAMPLE_MARKDOWN} />);
    cy.checkA11y();
  });
});
