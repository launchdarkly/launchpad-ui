import type { MenuProps } from '../src';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { it, expect, describe, vi } from 'vitest';

import { Menu, MenuDivider, MenuItem, MenuSearch } from '../src';

type TestMenu = {
  hideSearch?: boolean;
};

const createMenu = ({
  hideSearch,
  ...props
}: Omit<MenuProps<string>, 'children'> & TestMenu = {}) => (
  <Menu<string> {...props}>
    {hideSearch ? null : <MenuSearch />}
    <MenuItem item="one">one</MenuItem>
    <MenuItem item="two" disabled>
      two
    </MenuItem>
    <MenuItem item="three">three</MenuItem>
    <MenuDivider />
    <MenuItem item="four">four</MenuItem>
  </Menu>
);

describe('Menu', () => {
  it('renders', () => {
    render(createMenu());
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  it('is accessible', async () => {
    const { container } = render(createMenu());
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('renders with virtualization', () => {
    render(createMenu({ enableVirtualization: true }));
    const items = screen.getAllByRole('presentation');
    expect(items).toHaveLength(5);
  });

  it('renders the search field', () => {
    render(createMenu());
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('renders the search field with virtualization', () => {
    render(createMenu({ enableVirtualization: true }));
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('automatically adds the scroll container around menu items', () => {
    render(createMenu());
    expect(screen.getByTestId('menu-item-list')).toBeInTheDocument();
  });

  it('fires onSelect when item is clicked', () => {
    const spy = vi.fn();
    render(createMenu({ onSelect: spy }));
    const thirdItem = screen.getByRole('menuitem', {
      name: /three/i,
    });
    thirdItem.click();
    expect(spy).toBeCalledTimes(1);
  });

  it('does not fire onSelect on disabled items', () => {
    const spy = vi.fn();
    render(createMenu({ onSelect: spy }));
    const itemTwo = screen.getByRole('menuitem', {
      name: /two/i,
    });
    expect(itemTwo).toHaveAttribute('aria-disabled', 'true');
    itemTwo.click();
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('makes the search field focusable if there is one', async () => {
    render(createMenu({ hideSearch: false }));
    const search = screen.getByRole('searchbox', {
      name: /search/i,
    });
    expect(search).toBeInTheDocument();
    await userEvent.tab();
    expect(search).toHaveFocus();
  });
});
