import { Item } from '@react-stately/collections';

import { Select } from '../Select';

import { FRUIT } from './constants';

describe('Select', () => {
  describe('with default single select trigger', () => {
    beforeEach(() => {
      cy.mount(
        <Select label="Fruit" selectionMode="single" items={FRUIT}>
          {(item) => <Item>{item.name}</Item>}
        </Select>
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
