import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Dialog, Text } from '../src';

describe('Dialog', () => {
	it('renders', () => {
		render(<Dialog>Dialog</Dialog>);
		expect(screen.getByRole('dialog')).toBeVisible();
	});

	it('supports subtitle', () => {
		render(
			<Dialog>
				Dialog
				<Text slot="subtitle">Subtitle</Text>
			</Dialog>,
		);
		expect(screen.getByRole('dialog', { description: 'Subtitle' })).toBeVisible();
	});
});
