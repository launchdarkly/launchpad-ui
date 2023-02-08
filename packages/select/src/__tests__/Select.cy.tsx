import { Item } from '@react-stately/collections';

import { MultiSelectTrigger } from '../MultiSelectTrigger';
import { Select } from '../Select';
import { SingleSelectTrigger } from '../SingleSelectTrigger';

import { FRUIT } from './constants';
import { CustomMultiSelectTrigger, CustomSingleSelectTrigger } from './examples';

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

    it('opens menu, selects item, and updates selected value', () => {
      cy.getByTestId('select-trigger').click();
      cy.getByRole('option').first().click();
      cy.getByTestId('select-trigger').should('have.text', FRUIT[0].name);
    });
  });

  describe('with default multi select trigger', () => {
    beforeEach(() => {
      cy.mount(
        <Select label="Fruit" selectionMode="multiple" items={FRUIT}>
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

    it('opens menu, selects item, and updates selected value', () => {
      cy.getByTestId('select-trigger').click();
      cy.getByRole('option').first().click();
      cy.getByRole('option').eq(1).click();
      cy.getByTestId('select-trigger').should('have.text', `${FRUIT[0].name}, ${FRUIT[1].name}`);
    });
  });

  describe('with default multi select trigger passed custom selected value', () => {
    it('renders with custom value', () => {
      const DUMMY_TEXT = 'Selected values dummy text';
      cy.mount(
        <Select
          label="Fruit"
          selectionMode="multiple"
          trigger={(props) => (
            <MultiSelectTrigger {...props}>{() => DUMMY_TEXT}</MultiSelectTrigger>
          )}
          items={FRUIT}
        >
          {(item) => <Item>{item.name}</Item>}
        </Select>
      );
      cy.getByTestId('select').should('be.visible');
      cy.getByTestId('select-trigger').click();
      cy.getByRole('option').first().click();
      cy.getByRole('option').eq(1).click();
      cy.getByTestId('select-trigger').should('have.text', DUMMY_TEXT);
    });
  });

  describe('with default single select trigger passed custom selected value', () => {
    it('renders with custom value', () => {
      const DUMMY_TEXT = 'Selected value dummy text';
      cy.mount(
        <Select
          label="Fruit"
          selectionMode="single"
          trigger={(props) => (
            <SingleSelectTrigger {...props}>{() => DUMMY_TEXT}</SingleSelectTrigger>
          )}
          items={FRUIT}
        >
          {(item) => <Item>{item.name}</Item>}
        </Select>
      );
      cy.getByTestId('select').should('be.visible');
      cy.getByTestId('select-trigger').click();
      cy.getByRole('option').first().click();
      cy.getByTestId('select-trigger').should('have.text', DUMMY_TEXT);
    });
  });

  describe('with custom single select trigger', () => {
    beforeEach(() => {
      cy.mount(
        <Select
          label="Fruit"
          selectionMode="single"
          trigger={CustomSingleSelectTrigger}
          items={FRUIT}
        >
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

    it('selects options', () => {
      cy.getByTestId('custom-trigger').click();
      cy.getByRole('option').first().click();
      cy.getByTestId('custom-trigger').should('have.text', FRUIT[0].name);
    });
  });

  describe('with custom multi select trigger', () => {
    beforeEach(() => {
      cy.mount(
        <Select
          label="Fruit"
          selectionMode="multiple"
          trigger={CustomMultiSelectTrigger}
          items={FRUIT}
        >
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

    it('selects options', () => {
      cy.getByTestId('custom-trigger').click();
      cy.getByRole('option').first().click();
      cy.getByRole('option').eq(2).click();

      cy.getByTestId('selected-option').first().should('have.text', FRUIT[0].name);
      cy.getByTestId('selected-option').eq(1).should('have.text', FRUIT[2].name);
    });

    it('unselects options', () => {
      cy.getByTestId('custom-trigger').click();
      cy.getByRole('option').first().click();
      cy.getByRole('option').eq(2).click();

      cy.getByTestId('unselect-option-btn').first().click();
      cy.getByTestId('selected-option').should('have.length', 1);
    });
  });
});
