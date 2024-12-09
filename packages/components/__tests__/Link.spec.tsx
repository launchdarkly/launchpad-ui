import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Link, RouterProvider, useHref } from '../src';

describe('Link', () => {
	it('renders', () => {
		const navigate = vi.fn();
		render(
			<RouterProvider navigate={navigate} useHref={useHref}>
				<MemoryRouter>
					<Link href="/test">Link</Link>
				</MemoryRouter>
			</RouterProvider>,
		);
		expect(screen.getByRole('link')).toBeVisible();
		expect(screen.getByRole('link')).toHaveAttribute('href', '/test');
	});

	it('renders external links', () => {
		const navigate = vi.fn();
		render(
			<RouterProvider navigate={navigate} useHref={useHref}>
				<MemoryRouter>
					<Link href="https://www.test.com">Link</Link>
				</MemoryRouter>
			</RouterProvider>,
		);
		expect(screen.getByRole('link')).toBeVisible();
		expect(screen.getByRole('link')).toHaveAttribute('href', 'https://www.test.com');
	});
});
