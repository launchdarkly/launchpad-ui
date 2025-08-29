import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Label, Tag, TagGroup, TagList } from '../src';

describe('TagGroup', () => {
	it('renders', () => {
		render(
			<TagGroup>
				<Label>Label</Label>
				<TagList>
					<Tag>One</Tag>
					<Tag>Two</Tag>
					<Tag>Three</Tag>
				</TagList>
			</TagGroup>,
		);
		expect(screen.getByRole('grid')).toBeVisible();
	});

	it('renders remove buttons with correct accessible names', () => {
		render(
			<TagGroup onRemove={() => undefined}>
				<Label>Label</Label>
				<TagList>
					<Tag>One</Tag>
					<Tag>Two</Tag>
					<Tag>Three</Tag>
				</TagList>
			</TagGroup>,
		);

		// Verify all buttons are visible
		const buttons = screen.getAllByRole('button');
		expect(buttons).toHaveLength(3);
		for (const button of buttons) {
			expect(button).toBeVisible();
		}

		// Verify accessible names are correct for each tag
		expect(screen.getByRole('button', { name: 'Remove One' })).toBeVisible();
		expect(screen.getByRole('button', { name: 'Remove Two' })).toBeVisible();
		expect(screen.getByRole('button', { name: 'Remove Three' })).toBeVisible();

		// Verify the aria-label attribute is just "Remove"
		expect(buttons[0].getAttribute('aria-label')).toBe('Remove');
	});
});
