import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Switch } from '../src';

describe('Switch', () => {
	it('renders', () => {
		render(<Switch />);
		expect(screen.getByRole('switch')).toBeVisible();
	});

	it('renders with hideLabels', () => {
		render(<Switch hideLabels defaultSelected />);
		expect(screen.getByRole('switch')).toBeVisible();
		expect(screen.queryByText('On')).not.toBeInTheDocument();
	});

	it('renders with primary variant', () => {
		render(<Switch variant="primary" defaultSelected />);
		expect(screen.getByRole('switch')).toBeVisible();
	});
});
