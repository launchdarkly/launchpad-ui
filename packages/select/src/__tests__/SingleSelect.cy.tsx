import { SelectItem, SingleSelect } from '../';

import { FRUIT } from './constants';

describe('Select', () => {
  describe('with default single select trigger', () => {
    beforeEach(() => {
      cy.mount(
        <SingleSelect label="Fruit" selectedKey={FRUIT[0].id} items={FRUIT}>
          {(item) => <SelectItem>{item.name}</SelectItem>}
        </SingleSelect>
      );
    });

    it('renders', () => {
      cy.getByTestId('select').should('be.visible');
    });

    it('is accessible', () => {
      cy.checkA11y();
    });
  });
});
