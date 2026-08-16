import { describe, expect, it, vi } from 'vitest';

import { render, screen } from '@launchpad-ui/test-utils';

import { Checkbox } from '../src';

describe('Checkbox', () => {
	it('renders', () => {
		render(
			<Checkbox checked={false} aria-label="Test checkbox" onChange={() => undefined}>
				Label
			</Checkbox>,
		);
		expect(screen.getByLabelText('Test checkbox')).toBeInTheDocument();
	});

	it('renders disabled', () => {
		render(
			<Checkbox checked={false} aria-label="Test checkbox" onChange={() => undefined} disabled>
				Label
			</Checkbox>,
		);
		expect(screen.getByText('Label')).toBeInTheDocument();
	});

	it('warns about a11y requirements', () => {
		console.warn = vi.fn();
		render(<Checkbox checked onChange={() => undefined} />);
		expect(console.warn).toHaveBeenCalledWith(
			'If you do not provide children, you must specify an aria-label for accessibility',
		);
	});
});
