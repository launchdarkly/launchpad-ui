import { Banner } from '../src';

describe('Banner', () => {
  it('renders', () => {
    cy.mount(<Banner kind="info">Banner</Banner>);
    cy.getByTestId('banner').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<Banner kind="info">Banner</Banner>);
    cy.checkA11y();
  });

  it('can be dismissible', () => {
    cy.mount(
      <Banner kind="info" dismissible>
        An important message
      </Banner>
    );
    cy.get('button').should('be.visible');
  });

  it('renders a header when passed', () => {
    const header = 'My header';
    cy.mount(
      <Banner kind="info" header={header}>
        An important message
      </Banner>
    );

    cy.contains(header).should('be.visible');
  });

  it('triggers onDismiss when close button is clicked', () => {
    const onDismissSpy = cy.spy().as('onDismissSpy');
    const content = 'An important message';
    cy.mount(
      <Banner kind="info" onDismiss={onDismissSpy} dismissible>
        {content}
      </Banner>
    );

    cy.get('button').click();

    cy.get('@onDismissSpy').should('have.been.calledOnce');
  });
});
