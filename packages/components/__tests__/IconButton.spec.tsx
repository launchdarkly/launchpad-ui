import { describe, expect, it } from 'vitest';

import { render, screen } from '@launchpad-ui/test-utils';

import { IconButton } from '../src';

describe('IconButton', () => {
	it('renders', () => {
		render(<IconButton icon="add" aria-label="create" />);
		expect(screen.getByRole('button')).toBeVisible();
		expect(screen.getByRole('img', { hidden: true })).toBeVisible();
	});
});
