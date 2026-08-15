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

	it('hides labels when switchLabels is false', () => {
		render(<Switch switchLabels={false} />);
		expect(screen.queryByText('Off')).not.toBeInTheDocument();
		expect(screen.queryByText('On')).not.toBeInTheDocument();
	});

	it('renders a visible label after the track by default', () => {
		render(<Switch>Dark mode</Switch>);
		expect(screen.getByRole('switch', { name: /Dark mode/ }).closest('label')?.className).not.toContain('labelStart');
	});

	it('renders a visible label before the track when labelPosition is start', () => {
		render(<Switch labelPosition="start">Dark mode</Switch>);
		expect(screen.getByRole('switch', { name: /Dark mode/ }).closest('label')?.className).toContain('labelStart');
	});

	it('renders with primary variant', () => {
		render(<Switch variant="primary" defaultSelected />);
		expect(screen.getByRole('switch')).toBeVisible();
	});
});
