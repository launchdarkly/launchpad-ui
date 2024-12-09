import { describe, expect, it, vi } from 'vitest';

import { render, screen, userEvent, waitFor } from '../../../test/utils';
import { FilterButton, type FilterButtonProps } from '../src/';

const createComponent = ({ children, ...rest }: Partial<FilterButtonProps>) => (
	<FilterButton name="author" {...rest}>
		{children}
	</FilterButton>
);

describe('FilterButton', () => {
	it('should render name and description', () => {
		render(createComponent({ children: 'description' }));
		expect(screen.getByRole('button')).toHaveTextContent('author:description');
		expect(screen.getByRole('button')).toHaveAccessibleName('author: description');
	});

	it('should hide name if hideName is true', () => {
		render(createComponent({ children: 'description', hideName: true }));
		expect(screen.getByRole('button')).toHaveAccessibleName('author: description');
	});

	it('should hide description if no children provided', () => {
		render(createComponent({ children: null }));
		expect(screen.getByRole('button')).toHaveTextContent('author');
		expect(screen.getByRole('button')).toHaveAccessibleName('author');
	});

	it('should render ExpandMore icon if isClearable is false', () => {
		render(createComponent({ isClearable: false }));
		expect(screen.getByRole('img', { hidden: true })).toBeVisible();
	});

	it('fires onClickFilterButton on click', async () => {
		const spy = vi.fn();
		const user = userEvent.setup();
		render(createComponent({ onClickFilterButton: spy }));
		await user.click(screen.getByRole('button'));
		expect(spy).toHaveBeenCalled();
	});

	describe('clear button', () => {
		it('should render a button to clear the filter if isClearable is true', () => {
			render(createComponent({ isClearable: true }));
			expect(screen.getByRole('button', { name: 'Clear filter' })).toBeVisible();
		});

		it('should render a tooltip with default label', async () => {
			const user = userEvent.setup();
			render(createComponent({ isClearable: true }));

			await user.hover(document.body);
			await user.hover(screen.getByRole('button', { name: 'Clear filter' }));

			await waitFor(() => {
				expect(screen.getByText('Clear filter')).toBeInTheDocument();
			});
		});

		it('should render a tooltip with provided content', async () => {
			const user = userEvent.setup();
			render(createComponent({ isClearable: true, clearTooltip: <span>Bananas</span> }));
			expect(true).toBe(true);

			await user.hover(screen.getByRole('button', { name: 'Clear filter' }));

			await waitFor(() => {
				expect(screen.getByText('Bananas')).toBeInTheDocument();
			});
		});

		it('fires onClear on click', async () => {
			const spy = vi.fn();
			const user = userEvent.setup();
			render(createComponent({ isClearable: true, onClear: spy }));
			await user.click(screen.getByRole('button', { name: 'Clear filter' }));
			expect(spy).toHaveBeenCalled();
		});
	});
});
