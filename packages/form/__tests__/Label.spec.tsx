import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Label } from '../src';

describe('Label', () => {
	it('renders', () => {
		render(<Label required>Label</Label>);
		expect(screen.getByText('Label')).toBeInTheDocument();
		expect(screen.getByText('*')).toBeInTheDocument();
	});

	it('can render as optional', () => {
		render(<Label optional>Label</Label>);
		expect(screen.getByText('Label')).toBeInTheDocument();
		expect(screen.getByText('(optional)')).toBeInTheDocument();
	});
});
