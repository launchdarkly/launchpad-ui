import { RouterProvider } from 'react-aria-components';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { LinkButton } from '../src';

describe('LinkButton', () => {
	it('renders', () => {
		render(
			<MemoryRouter>
				<LinkButton href="/">LinkButton</LinkButton>
			</MemoryRouter>,
		);
		expect(screen.getByRole('link')).toBeVisible();
	});

	it('calls onPress', async () => {
		const spy = vi.fn();
		const user = userEvent.setup();

		render(
			<RouterProvider navigate={vi.fn()}>
				<MemoryRouter>
					<LinkButton href="/path" onPress={spy}>
						LinkButton
					</LinkButton>
				</MemoryRouter>
			</RouterProvider>,
		);

		await user.click(screen.getByRole('link'));

		expect(spy).toHaveBeenCalledTimes(1);
	});
});
