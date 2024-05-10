import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Portal } from '../src';

describe('Portal', () => {
	it('renders', () => {
		render(<Portal />);
		expect(screen.getByTestId('portal')).toBeVisible();
	});
});
