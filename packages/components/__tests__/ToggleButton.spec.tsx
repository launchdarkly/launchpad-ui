import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { ToggleButton } from '../src';

describe('ToggleButton', () => {
	it('renders', () => {
		render(<ToggleButton>toggle</ToggleButton>);
		expect(screen.getByRole('button')).toBeVisible();
	});
});
