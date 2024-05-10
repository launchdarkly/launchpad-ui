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

	it('renders remove buttons', () => {
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
		const buttons = screen.getAllByRole('button');
		for (const button of buttons) {
			expect(button).toBeVisible();
		}
		expect(buttons[0].getAttribute('aria-label')).toBe('Remove One');
	});
});
