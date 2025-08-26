import type { MenuProps } from '../src';

import { Popover } from '@launchpad-ui/popover';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { render, screen, userEvent, waitFor } from '../../../test/utils';
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
		<MenuItem item="three" isHighlighted>
			three
		</MenuItem>
		<MenuDivider />
		<MenuItem item="four" nested>
			four
		</MenuItem>
	</Menu>
);

describe('Menu', () => {
	// https://github.com/TanStack/virtual/issues/641#issuecomment-2851908893
	beforeEach(() => {
		Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
			value: 800,
		});
		Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
			value: 800,
		});
	});

	it('renders', () => {
		render(createMenu({ size: 'sm' }));
		expect(screen.getByRole('menu')).toBeInTheDocument();
	});

	it('renders with virtualization', () => {
		render(createMenu({ enableVirtualization: true }));
		const items = screen.getAllByRole('presentation');
		expect(items).toHaveLength(7);
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
		const user = userEvent.setup();
		render(createMenu({ hideSearch: false }));
		const search = screen.getByRole('searchbox', {
			name: /search/i,
		});
		expect(search).toBeInTheDocument();
		await user.tab();
		expect(search).toHaveFocus();
		await user.tab();
		expect(search).not.toHaveFocus();
	});

	it('can render a tooltip', async () => {
		const user = userEvent.setup();
		render(
			<Menu>
				<MenuItem item="one" tooltip="hi">
					one
				</MenuItem>
			</Menu>,
		);
		await user.hover(screen.getByRole('menuitem'));
		await waitFor(() => {
			expect(screen.getByRole('tooltip')).toBeInTheDocument();
		});
	});

	it('can cycle through items with keyboard', async () => {
		const user = userEvent.setup();
		render(
			<Popover>
				<button type="button">Target</button>
				<Menu>
					<MenuItem item="one">one</MenuItem>
					<MenuItem item="two">two</MenuItem>
					<MenuItem item="three">three</MenuItem>
				</Menu>
			</Popover>,
		);

		await user.click(screen.getByText('Target'));
		const items = screen.getAllByRole('menuitem');

		expect(items[0]).toHaveFocus();
		await user.keyboard('{arrowdown}');
		expect(items[1]).toHaveFocus();
		await user.keyboard('{arrowup}');
		expect(items[0]).toHaveFocus();
	});

	it('can render items into child slot', async () => {
		const text = 'Click me';
		render(
			<Menu>
				<MenuItem asChild item="one" disabled>
					<a href="https://www.launchdarkly.com">{text}</a>
				</MenuItem>
			</Menu>,
		);
		expect(screen.getByText(text)).toHaveAttribute('disabled');
	});

	it('can cycle through items with keyboard and virtualization enabled', async () => {
		render(
			<Popover>
				<button type="button">Target</button>
				<Menu enableVirtualization>
					<MenuItem item="one">one</MenuItem>
					<MenuItem item="two">two</MenuItem>
					<MenuItem item="three">three</MenuItem>
				</Menu>
			</Popover>,
		);

		const user = userEvent.setup();
		await user.click(screen.getByText('Target'));
		const items = await screen.findAllByRole('menuitem');

		expect(items[0]).toHaveFocus();
		await user.keyboard('{arrowdown}');
		expect(items[1]).toHaveFocus();
		await user.keyboard('{arrowup}');
		expect(items[0]).toHaveFocus();
	});
});
