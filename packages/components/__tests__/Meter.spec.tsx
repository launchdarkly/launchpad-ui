import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Meter } from '../src';

describe('Meter', () => {
	it('renders', () => {
		render(<Meter value={60} aria-label="percent" />);
		expect(screen.getByRole('meter')).toBeVisible();
	});
});
