import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Breadcrumb, Breadcrumbs, Link } from '../src';

describe('Breadcrumbs', () => {
	it('renders', () => {
		render(
			<MemoryRouter>
				<Breadcrumbs>
					<Breadcrumb>
						<Link href="/">Components</Link>
					</Breadcrumb>
					<Breadcrumb>
						<Link href="/navigation/">Navigation</Link>
					</Breadcrumb>
					<Breadcrumb>
						<Link>Breadcrumbs</Link>
					</Breadcrumb>
				</Breadcrumbs>
			</MemoryRouter>,
		);
		expect(screen.getByRole('link', { current: 'page' })).toBeVisible();
	});
});
