import { Slider } from '../src';

describe('Slider', () => {
  it('renders', () => {
    cy.mount(<Slider min={0} max={50} value={25} onChange={() => undefined} />);
    cy.get('[data-test-id="slider"]').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(
      <>
        <label htmlFor="slider">label</label>
        <Slider id="slider" min={0} max={50} value={25} onChange={() => undefined} />
      </>
    );
    cy.checkA11y();
  });
});
