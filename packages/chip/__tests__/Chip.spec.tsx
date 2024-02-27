import { describe, expect, it, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Chip } from '../src';

describe('Chip', () => {
	it('renders', () => {
		render(<Chip size="small">Default Chip</Chip>);
		expect(screen.getByText('Default Chip')).toBeInTheDocument();
	});

	it('can be clickable', async () => {
		const spy = vi.fn();
		const user = userEvent.setup();
		render(
			<Chip kind="new" onClick={spy}>
				New Chip
			</Chip>,
		);

		await user.click(screen.getByRole('button'));

		expect(spy).toHaveBeenCalledTimes(1);
	});
});
