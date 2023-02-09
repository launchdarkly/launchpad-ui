import { Item } from '@react-stately/collections';
import { it, expect, describe } from 'vitest';

import { Select } from '../';
import { render, screen } from '../../../../test/utils';

import { FRUIT } from './constants';

describe('Select', () => {
  it('renders', () => {
    render(
      <Select label="Fruit" selectionMode="single" items={FRUIT}>
        {(item) => <Item>{item.name}</Item>}
      </Select>
    );
    expect(screen.getByTestId('select')).toBeVisible();
  });
});
