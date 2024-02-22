import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { LinkButton } from '../src';

describe('LinkButton', () => {
	it('renders', () => {
		render(
			<MemoryRouter>
				<LinkButton to="/">LinkButton</LinkButton>
			</MemoryRouter>,
		);
		expect(screen.getByRole('link')).toBeVisible();
	});

	it('calls onPress', async () => {
		const spy = vi.fn();
		const user = userEvent.setup();

		render(
			<MemoryRouter>
				<LinkButton to="/" onPress={spy}>
					LinkButton
				</LinkButton>
			</MemoryRouter>,
		);

		await user.click(screen.getByRole('link'));

		expect(spy).toHaveBeenCalledTimes(1);
	});
});
