import { Menu, MenuItem } from '@launchpad-ui/menu';
import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Dropdown, DropdownButton } from '../src';

describe('Dropdown', () => {
  it('renders', () => {
    render(
      <Dropdown>
        <DropdownButton>Target</DropdownButton>
        <div>content</div>
      </Dropdown>
    );
    expect(screen.getByRole('button', { expanded: false })).toBeInTheDocument();
  });

  it('expands on click', async () => {
    const user = userEvent.setup();
    render(
      <Dropdown>
        <DropdownButton>Target</DropdownButton>
        <div>content</div>
      </Dropdown>
    );

    await user.click(screen.getByRole('button'));
    expect(screen.getByRole('button', { expanded: true })).toBeInTheDocument();
  });

  it('focuses target when closed', async () => {
    const user = userEvent.setup();
    render(
      <Dropdown>
        <DropdownButton>Target</DropdownButton>
        <Menu>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </Menu>
        ,
      </Dropdown>
    );

    await user.click(screen.getByRole('button'));
    await user.tab();
    await user.keyboard('{Escape}');

    expect(screen.getByRole('button')).toHaveFocus();
  });

  it('calls onSelect when a menu item is selected', async () => {
    const spy = vi.fn();
    const user = userEvent.setup();
    render(
      <Dropdown onSelect={spy}>
        <DropdownButton>Target</DropdownButton>
        <Menu>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </Menu>
        ,
      </Dropdown>
    );

    await user.click(screen.getByRole('button'));
    await user.tab();
    await user.keyboard('{Enter}');

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
