import type { MenuProps } from '../src';

import { Popover } from '@launchpad-ui/popover';
import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent, waitFor } from '../../../test/utils';
import { Menu, MenuDivider, MenuItem, MenuItemLink, MenuSearch, MenuSize } from '../src';

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
    render(createMenu({ size: MenuSize.SMALL }));
    expect(screen.getByRole('menu')).toBeInTheDocument();
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
    await userEvent.tab();
    expect(search).not.toHaveFocus();
  });

  it('can render a tooltip', async () => {
    render(
      <Menu>
        <MenuItem item="one" tooltip="hi">
          one
        </MenuItem>
      </Menu>
    );
    userEvent.setup();
    await userEvent.hover(screen.getByRole('menuitem'));
    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
    });
  });

  it('can cycle through items with keyboard', async () => {
    render(
      <Popover>
        <button>Target</button>
        <Menu>
          <MenuItem item="one">one</MenuItem>
          <MenuItem item="two">two</MenuItem>
          <MenuItem item="three">three</MenuItem>
        </Menu>
      </Popover>
    );
    const user = userEvent.setup();
    await user.click(screen.getByText('Target'));
    const items = screen.getAllByRole('menuitem');

    expect(items[0]).toHaveFocus();
    await user.keyboard('{arrowdown}');
    expect(items[1]).toHaveFocus();
    await user.keyboard('{arrowup}');
    expect(items[0]).toHaveFocus();
  });

  it('can render items as links', async () => {
    const { container } = render(
      <Menu>
        <MenuItemLink to="#" useHistory={false}>
          link
        </MenuItemLink>
      </Menu>
    );
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector('a')).not.toBeNull();
  });

  it('can render items into child slot', async () => {
    const text = 'Click me';
    render(
      <Menu>
        <MenuItem asChild item="one" disabled>
          <a href="https://www.launchdarkly.com">{text}</a>
        </MenuItem>
      </Menu>
    );
    expect(screen.getByText(text)).toHaveAttribute('disabled');
  });

  it('can cycle through items with keyboard and virtualization enabled', async () => {
    render(
      <Popover>
        <button>Target</button>
        <Menu enableVirtualization>
          <MenuItem item="one">one</MenuItem>
          <MenuItem item="two">two</MenuItem>
          <MenuItem item="three">three</MenuItem>
        </Menu>
      </Popover>
    );

    const user = userEvent.setup();
    await user.click(screen.getByText('Target'));
    const items = screen.getAllByRole('menuitem');

    expect(items[0]).toHaveFocus();
    await user.keyboard('{arrowdown}');
    expect(items[1]).toHaveFocus();
    await user.keyboard('{arrowup}');
    expect(items[0]).toHaveFocus();
  });
});
