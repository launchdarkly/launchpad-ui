import { describe, expect, it, vi } from 'vitest';

import { render, screen, userEvent, waitFor } from '../../../test/utils';
import { Toggle } from '../src';

describe('Toggle', () => {
	it('renders a Toggle', async () => {
		const toggleProps = {
			value: 'cats',
		};
		render(<Toggle {...toggleProps} />);

		expect(screen.getByRole('switch')).toBeInTheDocument();
	});

	it('can be reached with the keyboard', async () => {
		const toggleProps = {
			value: 'cats',
		};
		const user = userEvent.setup();
		render(<Toggle {...toggleProps} />);

		const toggle = screen.getByRole('switch');

		await user.tab();

		expect(toggle).toHaveFocus();
		await user.keyboard('[Space]');
		expect(toggle).toBeChecked();
	});

	it('renders an unchecked Toggle', async () => {
		const toggleProps = {
			value: 'cats',
		};
		render(<Toggle {...toggleProps} />);

		const toggle = screen.getByRole('switch');

		expect((toggle as HTMLInputElement).value).toBe('cats');
		expect(toggle).not.toBeChecked();
		expect(toggle).not.toHaveAttribute('checked', '');
	});

	it('renders a checked Toggle', async () => {
		const toggleProps = {
			value: 'cats',
		};
		const user = userEvent.setup();
		render(<Toggle {...toggleProps} />);

		const toggle = screen.getByRole('switch');

		await waitFor(async () => {
			await user.click(toggle);
		});

		expect(toggle).toBeChecked();
	});

	it('renders a Toggle with an aria-label', async () => {
		const toggleProps = {
			'aria-label': 'Cats',
			value: 'cats',
		};
		render(<Toggle {...toggleProps} />);

		const toggle = screen.getByRole('switch');

		expect(toggle).toHaveAttribute('aria-label', 'Cats');
	});

	it('renders a Toggle with aria-labelledby', async () => {
		const toggleProps = {
			'aria-labelledby': 'CatsId',
			value: 'cats',
		};
		render(
			<div>
				<span id="CatsId">Cats</span>
				<Toggle {...toggleProps} />
			</div>,
		);

		const toggle = screen.getByRole('switch');

		expect(toggle).toHaveAttribute('aria-labelledby', 'CatsId');
	});

	it('renders a disabled Toggle', async () => {
		const toggleProps = {
			value: 'cats',
			isDisabled: true,
		};
		render(<Toggle {...toggleProps} />);

		const toggle = screen.getByRole('switch');

		expect(toggle).toBeDisabled();
	});

	it('calls onChange when toggled', async () => {
		const spy = vi.fn();
		const toggleProps = {
			value: 'cats',
		};
		const user = userEvent.setup();
		render(<Toggle {...toggleProps} onChange={spy} />);

		const toggle = screen.getByRole('switch');

		await waitFor(async () => {
			await user.click(toggle);
		});

		expect(spy).toHaveBeenCalledTimes(1);
	});
});
