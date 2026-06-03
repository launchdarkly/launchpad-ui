import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Switch } from '../src';

describe('Switch', () => {
	it('renders', () => {
		render(<Switch />);
		expect(screen.getByRole('switch')).toBeVisible();
	});

	it('shows Off label when unselected', () => {
		render(<Switch />);
		expect(screen.getByText('Off')).toBeVisible();
	});

	it('shows On label when selected', () => {
		render(<Switch defaultSelected />);
		expect(screen.getByText('On')).toBeVisible();
	});

	it('hides labels when hideLabels is set', () => {
		render(<Switch hideLabels />);
		expect(screen.queryByText('Off')).not.toBeInTheDocument();
		expect(screen.queryByText('On')).not.toBeInTheDocument();
	});

	it('renders with primary variant', () => {
		render(<Switch variant="primary" defaultSelected />);
		expect(screen.getByRole('switch')).toBeVisible();
	});
});
