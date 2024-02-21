import { describe, expect, it, vi } from 'vitest';

import { render, screen, userEvent, waitFor } from '../../../test/utils';
import { Popover } from '../src';

describe('Popover', () => {
	it('renders', () => {
		render(
			<Popover isOpen enableArrow>
				<button>Target</button>
				<span>Content</span>
			</Popover>,
		);
		expect(screen.getByRole('tooltip')).toBeInTheDocument();
	});

	it('opens on click of the target', async () => {
		const user = userEvent.setup();
		render(
			<Popover>
				<button>Target</button>
				<span>Content</span>
			</Popover>,
		);

		await user.click(screen.getByRole('button'));
		expect(screen.getByRole('tooltip')).toBeInTheDocument();
	});

	it('does not open when content is empty string', async () => {
		render(
			<Popover content=''>
				<button>Target</button>
			</Popover>,
		);

		const user = userEvent.setup();
		await user.click(screen.getByRole('button'));
		await waitFor(() => {
			expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
		});
	});

	it('opens and closes on mouse hover/unhover of the target', async () => {
		const user = userEvent.setup();
		render(
			<Popover interactionKind='hover'>
				<button>Target</button>
				<span>Content</span>
			</Popover>,
		);

		await user.hover(screen.getByRole('button'));
		await waitFor(() => {
			expect(screen.getByRole('tooltip')).toBeInTheDocument();
		});
		await user.unhover(screen.getByRole('button'));
		await waitFor(() => {
			expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
		});
	});

	it('opens and closes on mouse focus/blur of the target', async () => {
		const user = userEvent.setup();
		render(
			<Popover interactionKind='hover-or-focus'>
				<button>Target</button>
				<span>Content</span>
			</Popover>,
		);

		await user.tab();
		await waitFor(() => {
			expect(screen.getByRole('tooltip')).toBeInTheDocument();
		});
		await user.tab({ shift: true });
		await waitFor(() => {
			expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
		});
	});

	it('closes when the Escape key is pressed', async () => {
		const user = userEvent.setup();
		render(
			<Popover interactionKind='hover'>
				<button>Target</button>
				<span>Content</span>
			</Popover>,
		);

		await user.hover(screen.getByRole('button'));
		await user.keyboard('{Escape}');
		await waitFor(() => {
			expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
		});
	});

	it('updates to fixed position in a modal', async () => {
		document.body.classList.add('has-overlay');
		const user = userEvent.setup();
		render(
			<Popover>
				<button>Target</button>
				<span>Content</span>
			</Popover>,
		);

		await user.click(screen.getByRole('button'));
		expect(screen.getByRole('tooltip').style.position).toBe('fixed');
	});

	it('calls onClose when closed', async () => {
		const user = userEvent.setup();
		const spy = vi.fn();
		render(
			<Popover interactionKind='hover' onClose={spy}>
				<button>Target</button>
				<span>Content</span>
			</Popover>,
		);

		await user.hover(screen.getByRole('button'));
		await user.unhover(screen.getByRole('button'));
		await waitFor(() => {
			expect(spy).toHaveBeenCalledTimes(1);
		});
	});
});
