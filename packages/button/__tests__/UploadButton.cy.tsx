import { UploadButton } from '../src';

describe('Button', () => {
  it('renders', () => {
    cy.mount(
      <UploadButton maxSize={10000} id="test" onSelect={() => undefined}>
        UploadButton
      </UploadButton>
    );
    cy.getByTestId('upload-button').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(
      <UploadButton maxSize={10000} id="test" onSelect={() => undefined}>
        UploadButton
      </UploadButton>
    );
    cy.checkA11y();
  });
});
