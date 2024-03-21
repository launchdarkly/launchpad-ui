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
});
