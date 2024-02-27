import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Link } from '../src';

describe('Link', () => {
	it('renders', () => {
		render(<Link href="#">Link</Link>);
		expect(screen.getByRole('link')).toBeVisible();
	});
});
