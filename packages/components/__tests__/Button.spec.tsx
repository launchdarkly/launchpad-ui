import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Button } from '../src';

describe('Button', () => {
	it('renders', () => {
		render(<Button>Button</Button>);
		expect(screen.getByRole('button')).toBeVisible();
	});
});
