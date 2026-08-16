import { describe, expect, it } from 'vitest';

import { render, screen } from '@launchpad-ui/test-utils';

import { DropZone } from '../src';

describe('DropZone', () => {
	it('renders', () => {
		render(<DropZone />);
		expect(screen.getByRole('button')).toBeVisible();
	});
});
