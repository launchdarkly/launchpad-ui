import type { AppliedFilterButtonProps } from '../src/AppliedFilterButton';

import { describe, expect, it, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { AppliedFilterButton } from '../src/AppliedFilterButton';

const createComponent = ({ children, ...rest }: Partial<AppliedFilterButtonProps>) => (
	<AppliedFilterButton name='author' {...rest}>
		{children}
	</AppliedFilterButton>
);

describe('AppliedFilterButton', () => {
	it('should render name and description', () => {
		render(createComponent({ children: 'description' }));
		expect(screen.getByRole('button')).toHaveTextContent('author:description');
		expect(screen.getByRole('button')).toHaveAccessibleName('author: description');
	});

	it('should hide name if not provided', () => {
		render(createComponent({ name: undefined, children: 'description' }));
		expect(screen.getByRole('button')).toHaveTextContent('description');
		expect(screen.getByRole('button')).toHaveAccessibleName('description');
	});

	it('should hide description if no children provided', () => {
		render(createComponent({ children: null }));
		expect(screen.getByRole('button')).toHaveTextContent('author');
		expect(screen.getByRole('button')).toHaveAccessibleName('author');
	});

	it('fires onClickFilterButton on click', async () => {
		const spy = vi.fn();
		const user = userEvent.setup();
		render(createComponent({ onClickFilterButton: spy }));
		await user.click(screen.getByRole('button'));
		expect(spy).toHaveBeenCalled();
	});
});
