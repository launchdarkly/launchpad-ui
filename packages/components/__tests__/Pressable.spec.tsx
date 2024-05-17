import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Pressable } from '../src';

describe('Pressable', () => {
	it('renders', () => {
		render(<Pressable>Pressable</Pressable>);
		expect(screen.getByRole('button')).toBeVisible();
	});
});
