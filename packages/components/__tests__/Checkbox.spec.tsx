import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Checkbox } from '../src';

describe('Checkbox', () => {
	it('renders', () => {
		render(<Checkbox>Label</Checkbox>);
		expect(screen.getByRole('checkbox')).toBeVisible();
	});

	it('renders indeterminate', () => {
		render(<Checkbox isIndeterminate>Label</Checkbox>);
		expect(screen.getByRole('checkbox')).toBeVisible();
	});

	it('renders selected', () => {
		render(<Checkbox isSelected>Label</Checkbox>);
		expect(screen.getByRole('checkbox')).toBeVisible();
	});

	it('exposes a stable indicator hook for styling and tests', () => {
		const { container } = render(<Checkbox>Label</Checkbox>);
		expect(container.querySelector('[data-indicator="checkbox"]')).toBeInTheDocument();
	});
});
