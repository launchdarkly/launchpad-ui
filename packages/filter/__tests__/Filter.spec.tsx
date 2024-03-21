import type { FilterProps } from '../src';

import { describe, expect, it, vi } from 'vitest';

import { render, screen, userEvent, waitFor } from '../../../test/utils';
import { Filter } from '../src';

const createComponent = (props?: Partial<FilterProps>) => (
	<Filter name="author" description="osmo" options={[]} {...props} />
);

const oneOption = [
	{
		name: 'one',
		value: 1,
	},
];

describe('Filter', () => {
	it('renders the filter button', () => {
		render(createComponent({ options: oneOption }));
		expect(screen.getByRole('button', { name: 'author: osmo' })).toBeInTheDocument();
	});

	it('renders the filter button when hideName is true', () => {
		render(createComponent({ options: oneOption, hideName: true }));
		expect(screen.getByRole('button', { name: 'author: osmo' })).toBeInTheDocument();
	});

	it('renders the filter button when there is no description', () => {
		render(createComponent({ options: oneOption, description: null }));
		expect(screen.getByRole('button', { name: 'author' })).toBeInTheDocument();
	});

	it('opens the menu on click', async () => {
		const user = userEvent.setup();
		render(createComponent({ options: oneOption }));
		await user.click(screen.getByRole('button'));
		expect(screen.getByRole('button', { expanded: true })).toBeInTheDocument();

		await waitFor(() => {
			expect(screen.getByRole('menuitemradio', { name: 'one' })).toBeVisible();
		});
	});

	it('should display a disabled loading menu item when isLoading is true', async () => {
		const user = userEvent.setup();
		render(createComponent({ options: oneOption, isLoading: true }));
		await user.click(screen.getByRole('button'));

		await waitFor(() => {
			expect(screen.getByText('loading...')).toBeVisible();
		});
	});

	it('should render a button to clear the filter if isClearable is true', () => {
		render(createComponent({ options: oneOption, isClearable: true }));
		expect(screen.getByRole('button', { name: 'Clear filter' })).toBeVisible();
	});

	it('should fire onClear when clear button is clicked', async () => {
		const spy = vi.fn();
		const user = userEvent.setup();
		render(createComponent({ options: oneOption, isClearable: true, onClear: spy }));
		await user.click(screen.getByRole('button', { name: 'Clear filter' }));
		expect(spy).toHaveBeenCalled();
	});

	it('should display a tooltip on a disabled menu item when a title is provided', async () => {
		const disabledOptions = [{ name: 'one', value: 1, isDisabled: true }];
		const props = { options: disabledOptions, disabledOptionTooltip: 'disabled tooltip' };

		const user = userEvent.setup();
		render(createComponent(props));

		await user.click(screen.getByRole('button'));
		const menuItem = await screen.findByRole('menuitemradio', { name: 'one' });
		await user.hover(menuItem);

		await waitFor(() => {
			expect(screen.getByText('disabled tooltip')).toBeInTheDocument();
		});
	});

	describe('menu search', () => {
		it('should display a search field when a searchValue is provided', async () => {
			const user = userEvent.setup();
			render(
				createComponent({ options: oneOption, onSearchChange: vi.fn(), searchValue: 'something' }),
			);
			await user.click(screen.getByRole('button'));

			await waitFor(() => {
				expect(screen.getByRole('searchbox', { name: 'Search' })).toBeVisible();
			});
		});

		it('should display a search field with a custom placeholder when provided', async () => {
			const user = userEvent.setup();
			render(
				createComponent({
					options: oneOption,
					onSearchChange: vi.fn(),
					searchValue: 'something',
					searchPlaceholder: 'placeholder text',
				}),
			);
			await user.click(screen.getByRole('button'));

			await waitFor(() => {
				expect(screen.getByPlaceholderText('placeholder text')).toBeVisible();
			});
		});

		it('should display a search field with custom aria label when provided', async () => {
			const user = userEvent.setup();
			render(
				createComponent({
					options: oneOption,
					onSearchChange: vi.fn(),
					searchValue: 'something',
					searchAriaLabel: 'custom searchbox',
				}),
			);
			await user.click(screen.getByRole('button'));

			await waitFor(() => {
				expect(screen.getByRole('searchbox', { name: 'custom searchbox' })).toBeVisible();
			});
		});

		it('should NOT display a search field when a searchValue is NOT provided', async () => {
			const user = userEvent.setup();
			render(
				createComponent({
					options: oneOption,
					onSearchChange: vi.fn(),
					searchValue: undefined,
					isEmpty: true,
				}),
			);
			await user.click(screen.getByRole('button'));

			await waitFor(() => {
				expect(screen.queryByRole('searchbox', { name: 'Search' })).not.toBeInTheDocument();
			});
		});

		it('should display a search field when there are more than 4 options', async () => {
			const manyOptions = [
				{ name: 'one', value: 1 },
				{ name: 'two', value: 2 },
				{ name: 'three', value: 3 },
				{ name: 'four', value: 4 },
				{ name: 'five', value: 5 },
			];

			const user = userEvent.setup();
			render(createComponent({ options: manyOptions, onSearchChange: vi.fn() }));
			await user.click(screen.getByRole('button'));

			await waitFor(() => {
				expect(screen.getByRole('searchbox', { name: 'Search' })).toBeVisible();
			});
		});

		it('should NOT display a search field when there are fewer than 4 options', async () => {
			const user = userEvent.setup();
			render(createComponent({ options: oneOption, onSearchChange: vi.fn(), isEmpty: true }));
			await user.click(screen.getByRole('button'));

			await waitFor(() => {
				expect(screen.queryByRole('searchbox', { name: 'Search' })).not.toBeInTheDocument();
			});
		});

		it('should display a search field when isEmpty is false', async () => {
			const user = userEvent.setup();
			render(createComponent({ options: oneOption, onSearchChange: vi.fn(), isEmpty: false }));
			await user.click(screen.getByRole('button'));

			await waitFor(() => {
				expect(screen.getByRole('searchbox', { name: 'Search' })).toBeVisible();
			});
		});

		it('should NOT display a search field when onSearchChange is NOT provided', async () => {
			const user = userEvent.setup();
			render(createComponent({ options: oneOption, onSearchChange: undefined }));
			await user.click(screen.getByRole('button'));

			await waitFor(() => {
				expect(screen.queryByRole('searchbox', { name: 'Search' })).not.toBeInTheDocument();
			});
		});
	});
});
