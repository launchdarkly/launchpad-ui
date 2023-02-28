import { Item } from '@react-stately/collections';

import { SingleSelect } from '../';

import { FRUIT } from './constants';

describe('Select', () => {
  describe('with default single select trigger', () => {
    beforeEach(() => {
      cy.mount(
        <SingleSelect label="Fruit" items={FRUIT}>
          {(item) => <Item>{item.name}</Item>}
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
