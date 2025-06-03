import type { NavigationItemProps } from '../src';

import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';

import { render, screen, userEvent, waitFor } from '../../../test/utils';
import { Navigation, NavigationItem } from '../src';
// biome-ignore lint/performance/noNamespaceImport: ignore
import * as ctx from '../src/NavigationContext';

globalThis.matchMedia = vi.fn().mockReturnValue({
	matches: true,
	onchange: null,
	addEventListener: vi.fn(),
	removeEventListener: vi.fn(),
	dispatchEvent: vi.fn(),
	addListener: vi.fn(),
	removeListener: vi.fn(),
});

const createComponent = (items: NavigationItemProps[]) => (
	<MemoryRouter>
		<Navigation items={items} title="nav" kind="primary">
			{(item) => (
				<NavigationItem
					key={item.to}
					name={item.name}
					to={item.to}
					tooltip={item.tooltip}
					tooltipContent={item.tooltipContent}
					status={item.status}
				/>
			)}
		</Navigation>
	</MemoryRouter>
);

describe('Navigation', () => {
	it('renders', () => {
		render(
			createComponent([
				{
					name: 'First',
					to: '/first',
				},
				{
					name: 'Second',
					to: '/second',
				},
			]),
		);
		expect(screen.getByRole('navigation')).toBeInTheDocument();
	});

	it('can render items with a tooltip', async () => {
		const user = userEvent.setup();
		render(
			createComponent([
				{
					name: 'First',
					to: '/first',
					tooltip: true,
					tooltipContent: 'one',
				},
				{
					name: 'Second',
					to: '/second',
				},
			]),
		);

		await user.hover(screen.getByText('First'));
		await waitFor(() => {
			expect(screen.getByRole('tooltip')).toBeInTheDocument();
		});
	});

	it('can render items with a chip', async () => {
		render(
			createComponent([
				{
					name: 'First',
					to: '/first',
					status: 'new',
				},
				{
					name: 'Second',
					to: '/second',
					tooltip: <>tooltip</>,
				},
			]),
		);
		expect(screen.getByTestId('nav-item-chip')).not.toBeNull();
	});

	it('renders collapsed dropdown', async () => {
		vi.spyOn(ctx, 'useNavigationContext').mockReturnValue({
			shouldCollapse: true,
			refs: { wrapperRef: { current: null }, itemListRef: { current: null } },
		});

		render(
			createComponent([
				{
					name: 'First',
					to: '/first',
					status: 'new',
				},
				{
					name: 'Second',
					to: '/second',
					tooltip: <>tooltip</>,
				},
			]),
		);
		expect(screen.getByTestId('navigation-menu-button')).not.toBeNull();
	});
});
