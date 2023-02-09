import { Item } from '@react-stately/collections';
import { it, expect, describe } from 'vitest';

import { MultiSelectTrigger, Select, SingleSelectTrigger } from '../';
import { render, screen, userEvent } from '../../../../test/utils';

import { FRUIT } from './constants';
import { CustomMultiSelectTrigger, CustomSingleSelectTrigger } from './examples';

describe('Select', () => {
  describe('with default single select trigger', () => {
    it('renders', () => {
      render(
        <Select label="Fruit" selectionMode="single" items={FRUIT}>
          {(item) => <Item>{item.name}</Item>}
        </Select>
      );
      expect(screen.getByTestId('select')).toBeVisible();
    });

    it('opens menu, selects item, and updates selected value', async () => {
      const user = userEvent.setup();
      render(
        <Select label="Fruit" selectionMode="single" items={FRUIT}>
          {(item) => <Item>{item.name}</Item>}
        </Select>
      );
      await user.click(screen.getByTestId('select-trigger'));
      await user.click(screen.getAllByRole('option')[0]);
      expect(screen.getByTestId('select-trigger')).toHaveTextContent(FRUIT[0].name);
    });

    it('renders no header by default', async () => {
      const user = userEvent.setup();

      render(
        <Select label="Fruit" selectionMode="multiple" isClearable items={FRUIT}>
          {(item) => <Item>{item.name}</Item>}
        </Select>
      );

      await user.click(screen.getByTestId('select-trigger'));

      expect(screen.queryByTestId('menu-header')).toBeNull();
    });
  });

  describe('with default multi select trigger', () => {
    it('renders', () => {
      render(
        <Select label="Fruit" selectionMode="multiple" items={FRUIT}>
          {(item) => <Item>{item.name}</Item>}
        </Select>
      );
      expect(screen.getByTestId('select')).toBeVisible();
    });

    it('opens menu, selects item, and updates selected value', async () => {
      const user = userEvent.setup();

      render(
        <Select label="Fruit" selectionMode="multiple" items={FRUIT}>
          {(item) => <Item>{item.name}</Item>}
        </Select>
      );

      await user.click(screen.getByTestId('select-trigger'));
      user.click(screen.getAllByRole('option')[0]);
      await user.click(screen.getAllByRole('option')[1]);
      expect(screen.getByTestId('select-trigger')).toHaveTextContent(
        `${FRUIT[0].name}, ${FRUIT[1].name}`
      );
    });
  });

  describe('with isClearable or isSelectableAll in single selection mode', () => {
    it('does not render header', async () => {
      const user = userEvent.setup();

      render(
        <Select label="Fruit" selectionMode="single" isSelectableAll isClearable items={FRUIT}>
          {(item) => <Item>{item.name}</Item>}
        </Select>
      );

      await user.click(screen.getByTestId('select-trigger'));

      expect(screen.queryByTestId('menu-header')).toBeNull();
    });
  });

  describe('with isClearable', () => {
    it('clears selected values when clear button is pressed', async () => {
      const user = userEvent.setup();

      render(
        <Select label="Fruit" selectionMode="multiple" isClearable items={FRUIT}>
          {(item) => <Item>{item.name}</Item>}
        </Select>
      );

      await user.click(screen.getByTestId('select-trigger'));

      await user.click(screen.getAllByRole('option')[0]);
      user.click(screen.getAllByRole('option')[1]);

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
        <Select label="Fruit" selectionMode="multiple" isSelectableAll items={FRUIT}>
          {(item) => <Item>{item.name}</Item>}
        </Select>
      );

      await user.click(screen.getByTestId('select-trigger'));

      expect(screen.getByTestId('menu-header')).toBeVisible();
      expect(screen.getByTestId('select-all-btn')).toBeVisible();

      await user.click(screen.getByTestId('select-all-btn'));
      expect(screen.getByTestId('select-trigger')).toHaveTextContent('5 selected');
    });
  });

  describe('with default multi select trigger passed custom selected value', () => {
    it('renders with custom value', async () => {
      const user = userEvent.setup();
      const DUMMY_TEXT = 'Selected values dummy text';

      render(
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

      expect(screen.getByTestId('select')).toBeVisible();

      await user.click(screen.getByTestId('select-trigger'));
      user.click(screen.getAllByRole('option')[0]);
      await user.click(screen.getAllByRole('option')[1]);
      expect(screen.getByTestId('select-trigger')).toHaveTextContent(DUMMY_TEXT);
    });
  });

  describe('with default single select trigger passed custom selected value', () => {
    it('renders with custom value', async () => {
      const user = userEvent.setup();
      const DUMMY_TEXT = 'Selected value dummy text';

      render(
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

      expect(screen.getByTestId('select')).toBeVisible();

      await user.click(screen.getByTestId('select-trigger'));
      await user.click(screen.getAllByRole('option')[0]);
      expect(screen.getByTestId('select-trigger')).toHaveTextContent(DUMMY_TEXT);
    });
  });

  describe('with custom single select trigger', () => {
    it('renders', () => {
      render(
        <Select
          label="Fruit"
          selectionMode="single"
          trigger={CustomSingleSelectTrigger}
          items={FRUIT}
        >
          {(item) => <Item>{item.name}</Item>}
        </Select>
      );

      expect(screen.getByTestId('select')).toBeVisible();
    });

    it('selects options', async () => {
      const user = userEvent.setup();

      render(
        <Select
          label="Fruit"
          selectionMode="single"
          trigger={CustomSingleSelectTrigger}
          items={FRUIT}
        >
          {(item) => <Item>{item.name}</Item>}
        </Select>
      );

      await user.click(screen.getByTestId('custom-trigger'));
      await user.click(screen.getAllByRole('option')[0]);
      expect(screen.getByTestId('custom-trigger')).toHaveTextContent(FRUIT[0].name);
    });
  });

  describe('with custom multi select trigger', () => {
    it('renders', () => {
      render(
        <Select
          label="Fruit"
          selectionMode="multiple"
          trigger={CustomMultiSelectTrigger}
          items={FRUIT}
        >
          {(item) => <Item>{item.name}</Item>}
        </Select>
      );

      expect(screen.getByTestId('select')).toBeVisible();
    });

    it('selects options', async () => {
      const user = userEvent.setup();

      render(
        <Select
          label="Fruit"
          selectionMode="multiple"
          trigger={CustomMultiSelectTrigger}
          items={FRUIT}
        >
          {(item) => <Item>{item.name}</Item>}
        </Select>
      );

      await user.click(screen.getByTestId('custom-trigger'));
      user.click(screen.getAllByRole('option')[0]);
      await user.click(screen.getAllByRole('option')[2]);

      expect(screen.getAllByTestId('selected-option')[0]).toHaveTextContent(FRUIT[0].name);
      expect(screen.getAllByTestId('selected-option')[1]).toHaveTextContent(FRUIT[2].name);
    });

    it('unselects options', async () => {
      const user = userEvent.setup();

      render(
        <Select
          label="Fruit"
          selectionMode="multiple"
          trigger={CustomMultiSelectTrigger}
          items={FRUIT}
        >
          {(item) => <Item>{item.name}</Item>}
        </Select>
      );

      await user.click(screen.getByTestId('custom-trigger'));
      user.click(screen.getAllByRole('option')[0]);
      await user.click(screen.getAllByRole('option')[2]);
      await user.click(screen.getAllByTestId('unselect-option-btn')[0]);

      expect(screen.getAllByTestId('selected-option')).toHaveLength(1);
    });
  });
});
