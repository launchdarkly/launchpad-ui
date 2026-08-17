import { describe, expect, it } from 'vitest';

import { render, screen } from '@launchpad-ui/test-utils';

import { ProgressBar } from '../src';

describe('ProgressBar', () => {
	it('renders', () => {
		render(<ProgressBar value={60} aria-label="loading" />);
		expect(screen.getByRole('progressbar')).toBeVisible();
	});

	it('renders indeterminate', () => {
		render(<ProgressBar isIndeterminate aria-label="loading" />);
		expect(screen.getByRole('progressbar')).toBeVisible();
	});
});
