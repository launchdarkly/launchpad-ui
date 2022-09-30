import { Pagination } from '../src';

describe('Pagination', () => {
  it('renders', () => {
    cy.mount(
      <Pagination
        resourceName="flags"
        onChange={() => undefined}
        currentOffset={0}
        pageSize={2}
        isReady
        totalCount={4}
      />
    );
    cy.get('[data-test-id="pagination"]').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(
      <Pagination
        resourceName="flags"
        onChange={() => undefined}
        currentOffset={0}
        pageSize={2}
        isReady
        totalCount={4}
      />
    );
    cy.checkA11y();
  });
});
