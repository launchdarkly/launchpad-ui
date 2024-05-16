import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { ExternalLinkIconButton, LinkIconButton } from '../src';

describe('LinkIconButton', () => {
	it('renders', () => {
		render(
			<MemoryRouter>
				<LinkIconButton icon="add" aria-label="create" href="/" />
			</MemoryRouter>,
		);
		expect(screen.getByRole('link')).toBeVisible();
		expect(screen.getByRole('img', { hidden: true })).toBeVisible();
	});
});

describe('ExternalLinkIconButton', () => {
	it('renders', () => {
		render(<ExternalLinkIconButton icon="add" aria-label="create" href="https://www.test.com" />);
		expect(screen.getByRole('link')).toBeVisible();
	});
});
