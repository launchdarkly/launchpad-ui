import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { LinkIconButton } from '../src';

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
