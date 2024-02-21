import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Counter } from '../src';

describe('Counter', () => {
	it('renders', () => {
		render(<Counter value={12} subtle />);
		expect(screen.getByText('12')).toBeInTheDocument();
	});
});
