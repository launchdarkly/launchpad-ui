import { Item } from '@react-stately/collections';

import { MultiSelect } from '../';

import { FRUIT } from './constants';

describe('Select', () => {
  describe('with default single select trigger', () => {
    beforeEach(() => {
      cy.mount(
        <MultiSelect label="Fruit" items={FRUIT}>
          {(item) => <Item>{item.name}</Item>}
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
