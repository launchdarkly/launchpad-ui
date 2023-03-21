import { MultiSelect, SelectItem } from '../';

import { FRUIT } from './constants';

describe('Select', () => {
  describe('with default single select trigger', () => {
    beforeEach(() => {
      cy.mount(
        <MultiSelect label="Fruit" selectedKeys={[FRUIT[0].id]} items={FRUIT}>
          {(item) => <SelectItem>{item.name}</SelectItem>}
        </MultiSelect>
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
