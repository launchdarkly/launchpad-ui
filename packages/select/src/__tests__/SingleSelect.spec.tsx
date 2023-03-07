import { it, expect, describe } from 'vitest';

import { SelectItem, SingleSelect, SingleSelectTrigger } from '..';
import { render, screen, userEvent } from '../../../../test/utils';

import { FRUIT } from './constants';
import { CustomSingleSelectTrigger } from './examples';

describe('Select', () => {
  describe('with default single select trigger', () => {
    it('renders', () => {
      render(
        <SingleSelect label="Fruit" items={FRUIT}>
          {(item) => <SelectItem>{item.name}</SelectItem>}
        </SingleSelect>
      );
      expect(screen.getByTestId('select')).toBeVisible();
    });

    it('opens menu, selects item, and updates selected value', async () => {
      const user = userEvent.setup();
      render(
        <SingleSelect label="Fruit" items={FRUIT}>
          {(item) => <SelectItem>{item.name}</SelectItem>}
        </SingleSelect>
      );
      await user.click(screen.getByTestId('select-trigger'));
      await user.click(screen.getAllByRole('option')[0]);
      expect(screen.getByTestId('select-trigger')).toHaveTextContent(FRUIT[0].name);
    });

    it('renders no header by default', async () => {
      const user = userEvent.setup();

      render(
        <SingleSelect label="Fruit" items={FRUIT}>
          {(item) => <SelectItem>{item.name}</SelectItem>}
        </SingleSelect>
      );

      await user.click(screen.getByTestId('select-trigger'));

      expect(screen.queryByTestId('menu-header')).toBeNull();
    });
  });

  describe('with default single select trigger passed custom selected value', () => {
    it('renders with custom value', async () => {
      const user = userEvent.setup();
      const DUMMY_TEXT = 'Selected value dummy text';

      render(
        <SingleSelect
          label="Fruit"
          trigger={(props) => (
            <SingleSelectTrigger {...props}>{() => DUMMY_TEXT}</SingleSelectTrigger>
          )}
          items={FRUIT}
        >
          {(item) => <SelectItem>{item.name}</SelectItem>}
        </SingleSelect>
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
        <SingleSelect label="Fruit" trigger={CustomSingleSelectTrigger} items={FRUIT}>
          {(item) => <SelectItem>{item.name}</SelectItem>}
        </SingleSelect>
      );

      expect(screen.getByTestId('select')).toBeVisible();
    });

    it('selects options', async () => {
      const user = userEvent.setup();

      render(
        <SingleSelect label="Fruit" trigger={CustomSingleSelectTrigger} items={FRUIT}>
          {(item) => <SelectItem>{item.name}</SelectItem>}
        </SingleSelect>
      );

      await user.click(screen.getByTestId('custom-trigger'));
      await user.click(screen.getAllByRole('option')[0]);
      expect(screen.getByTestId('custom-trigger')).toHaveTextContent(FRUIT[0].name);
    });
  });

  describe('with select item rendered as something other than li', () => {
    it('renders', async () => {
      const user = userEvent.setup();

      render(
        <SingleSelect label="Fruit" items={FRUIT}>
          {(item) => (
            <SelectItem as="a" href="/">
              {item.name}
            </SelectItem>
          )}
        </SingleSelect>
      );

      await user.click(screen.getByTestId('select-trigger'));

      screen.getAllByRole('option').forEach((option) => {
        expect(option).toHaveAttribute('href');
      });
    });
  });
});
