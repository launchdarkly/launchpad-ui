import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { ToggleButton } from '../src';

describe('ToggleButton', () => {
	it('renders', () => {
		render(<ToggleButton>toggle</ToggleButton>);
		expect(screen.getByRole('button')).toBeVisible();
	});

	it('exposes the resolved variant as a data attribute', () => {
		render(<ToggleButton variant="primary">toggle</ToggleButton>);
		expect(screen.getByRole('button')).toHaveAttribute('data-variant', 'primary');
	});

	it('exposes the variant as a data attribute when elevated', () => {
		render(<ToggleButton appearance="elevated">toggle</ToggleButton>);
		expect(screen.getByRole('button')).toHaveAttribute('data-variant', 'default');
	});
});
