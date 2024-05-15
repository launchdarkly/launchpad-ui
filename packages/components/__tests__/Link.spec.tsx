import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { ExternalLink, Link } from '../src';

describe('Link', () => {
	it('renders', () => {
		render(
			<MemoryRouter>
				<Link href="/test">Link</Link>
			</MemoryRouter>,
		);
		expect(screen.getByRole('link')).toBeVisible();
		expect(screen.getByRole('link')).toHaveAttribute('href', '/test');
	});
});

describe('ExternalLink', () => {
	it('renders', () => {
		render(<ExternalLink href="https://www.test.com">Link</ExternalLink>);
		expect(screen.getByRole('link')).toBeVisible();
		expect(screen.getByRole('link')).toHaveAttribute('href', 'https://www.test.com');
	});
});
