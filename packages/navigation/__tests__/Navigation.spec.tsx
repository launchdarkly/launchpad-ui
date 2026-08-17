import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';

import { render, screen, userEvent, waitFor } from '@launchpad-ui/test-utils';

import type { NavigationItemProps } from '../src';
import { Navigation, NavigationItem } from '../src';
import { useNavigationContext } from '../src/NavigationContext';

vi.mock('../src/NavigationContext', async (importOriginal) => {
	const actual = (await importOriginal()) as Record<string, unknown>;
	return {
		...actual,
		useNavigationContext: vi.fn(actual.useNavigationContext as typeof useNavigationContext),
	};
});

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

	it('can render items with a chip', () => {
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

	it('renders collapsed dropdown', () => {
		vi.mocked(useNavigationContext).mockReturnValue({
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
