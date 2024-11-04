import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { GridList, GridListItem } from '../src';

describe('GridList', () => {
	it('renders', async () => {
		render(
			<GridList aria-label="Items">
				<GridListItem>Item one</GridListItem>
				<GridListItem>Item two</GridListItem>
				<GridListItem>Item three</GridListItem>
			</GridList>,
		);

		expect(await screen.findByRole('grid')).toBeVisible();
	});
});
