import { describe, expect, it, vi } from 'vitest';

import { render, screen, waitFor } from '../../../test/utils';
import { Progress } from '../src';

describe('Progress', () => {
	it('renders after a delay', async () => {
		render(<Progress delayMs={250} size="small" />);
		await waitFor(() => {
			expect(screen.getByRole('progressbar')).toBeInTheDocument();
		});
	});

	it('does not render immediately if a delay is specified', () => {
		vi.spyOn(global, 'setTimeout');
		render(<Progress delayMs={1000} />);
		expect(setTimeout).toHaveBeenCalledTimes(1);
		expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
		expect(screen.queryByRole('progressbar')).toBeNull();
	});

	it('renders a svg with no delay', async () => {
		render(<Progress value={2} />);
		expect(screen.getByRole('progressbar')).toBeInTheDocument();
	});
});
