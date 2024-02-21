import { describe, expect, it } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { MultiSelect, MultiSelectTrigger, SelectItem } from '../src';

import { FRUIT } from './constants';
import { CustomMultiSelectTrigger } from './examples';

describe('Select', () => {
  describe('with default multi select trigger', () => {
    it('renders', () => {
      render(
        <MultiSelect label="Fruit" items={FRUIT}>
          {(item) => <SelectItem>{item.name}</SelectItem>}
        </MultiSelect>
      );
      expect(screen.getByTestId('select')).toBeVisible();
    });

    it('opens menu, selects item, and updates selected value', async () => {
      const user = userEvent.setup();

      render(
        <MultiSelect label="Fruit" items={FRUIT}>
          {(item) => <SelectItem>{item.name}</SelectItem>}
        </MultiSelect>
      );

      await user.click(screen.getByTestId('select-trigger'));
      await user.click(screen.getAllByRole('option')[0]);
      await user.click(screen.getAllByRole('option')[1]);
      expect(screen.getByTestId('select-trigger')).toHaveTextContent(
        `${FRUIT[0].name}, ${FRUIT[1].name}`
      );
    });
  });

  describe('with isClearable', () => {
    it('clears selected values when clear button is pressed', async () => {
      const user = userEvent.setup();

      render(
        <MultiSelect label="Fruit" isClearable items={FRUIT}>
          {(item) => <SelectItem>{item.name}</SelectItem>}
        </MultiSelect>
      );

      await user.click(screen.getByTestId('select-trigger'));

      await user.click(screen.getAllByRole('option')[0]);
      await user.click(screen.getAllByRole('option')[1]);

      expect(screen.getByTestId('menu-header')).toBeVisible();
      expect(screen.getByTestId('clear-btn')).toBeVisible();

      await user.click(screen.getByTestId('clear-btn'));
      expect(screen.getByTestId('select-trigger')).toHaveTextContent('Select option');
    });
  });

  describe('with isSelectableAll', () => {
    it('selects all values when select all button is pressed', async () => {
      const user = userEvent.setup();

      render(
        <MultiSelect label="Fruit" isSelectableAll items={FRUIT}>
          {(item) => <SelectItem>{item.name}</SelectItem>}
        </MultiSelect>
      );

      await user.click(screen.getByTestId('select-trigger'));

      expect(screen.getByTestId('menu-header')).toBeVisible();
      expect(screen.getByTestId('select-all-btn')).toBeVisible();

      await user.click(screen.getByTestId('select-all-btn'));
      expect(screen.getByTestId('select-trigger')).toHaveTextContent(`${FRUIT.length} selected`);
    });
  });

  describe('with default multi select trigger passed custom selected value', () => {
    it('renders with custom value', async () => {
      const user = userEvent.setup();
      const DUMMY_TEXT = 'Selected values dummy text';

      render(
        <MultiSelect
          label="Fruit"
          trigger={(props) => (
            <MultiSelectTrigger {...props}>{() => DUMMY_TEXT}</MultiSelectTrigger>
          )}
          items={FRUIT}
        >
          {(item) => <SelectItem>{item.name}</SelectItem>}
        </MultiSelect>
      );

      expect(screen.getByTestId('select')).toBeVisible();

      await user.click(screen.getByTestId('select-trigger'));
      await user.click(screen.getAllByRole('option')[0]);
      await user.click(screen.getAllByRole('option')[1]);
      expect(screen.getByTestId('select-trigger')).toHaveTextContent(DUMMY_TEXT);
    });
  });

  describe('with custom multi select trigger', () => {
    it('renders', () => {
      render(
        <MultiSelect label="Fruit" trigger={CustomMultiSelectTrigger} items={FRUIT}>
          {(item) => <SelectItem>{item.name}</SelectItem>}
        </MultiSelect>
      );

      expect(screen.getByTestId('select')).toBeVisible();
    });

    it('selects options', async () => {
      const user = userEvent.setup();

      render(
        <MultiSelect label="Fruit" trigger={CustomMultiSelectTrigger} items={FRUIT}>
          {(item) => <SelectItem>{item.name}</SelectItem>}
        </MultiSelect>
      );

      await user.click(screen.getByTestId('custom-trigger'));
      await user.click(screen.getAllByRole('option')[0]);
      await user.click(screen.getAllByRole('option')[2]);

      expect(screen.getAllByTestId('tag')[0]).toHaveTextContent(FRUIT[0].name);
      expect(screen.getAllByTestId('tag')[1]).toHaveTextContent(FRUIT[2].name);
    });

    it('unselects options', async () => {
      const user = userEvent.setup();

      render(
        <MultiSelect label="Fruit" trigger={CustomMultiSelectTrigger} items={FRUIT}>
          {(item) => <SelectItem>{item.name}</SelectItem>}
        </MultiSelect>
      );

      await user.click(screen.getByTestId('custom-trigger'));
      await user.click(screen.getAllByRole('option')[0]);
      await user.click(screen.getAllByRole('option')[2]);
      await user.click(screen.getAllByTestId('remove-tag-btn')[0]);

      expect(screen.getAllByTestId('tag')).toHaveLength(1);
    });
  });
});
