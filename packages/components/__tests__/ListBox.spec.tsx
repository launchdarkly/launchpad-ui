import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { ListBox, ListBoxItem } from '../src';

describe('ListBox', () => {
  it('renders', async () => {
    render(
      <ListBox aria-label="Items">
        <ListBoxItem>Item one</ListBoxItem>
        <ListBoxItem>Item two</ListBoxItem>
        <ListBoxItem>Item three</ListBoxItem>
      </ListBox>
    );

    expect(await screen.findByRole('listbox')).toBeVisible();
  });
});
