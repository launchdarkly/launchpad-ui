import { describe, expect, it } from 'vitest';

import { render, screen } from '@launchpad-ui/test-utils';

import { Button } from '../src';

describe('Button', () => {
	it('renders', () => {
		render(<Button>Button</Button>);
		expect(screen.getByRole('button')).toBeVisible();
	});

	it('renders progressbar when pending', () => {
		render(<Button isPending>Button</Button>);
		expect(screen.getByRole('progressbar')).toBeVisible();
	});

	it('exposes the resolved variant as a data attribute', () => {
		render(<Button>Button</Button>);
		expect(screen.getByRole('button')).toHaveAttribute('data-lp-variant', 'default');
	});

	it('exposes an explicit variant as a data attribute', () => {
		render(<Button variant="primary">Button</Button>);
		expect(screen.getByRole('button')).toHaveAttribute('data-lp-variant', 'primary');
	});
});
