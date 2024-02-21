import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Group, IconButton, Input, Label, SearchField } from '../src';

describe('SearchField', () => {
	it('renders', () => {
		render(
			<SearchField>
				<Label>Label</Label>
				<Group>
					<Input />
					<IconButton
						icon='cancel-circle-outline'
						aria-label='clear'
						size='small'
						variant='minimal'
					/>
				</Group>
			</SearchField>,
		);
		expect(screen.getByRole('searchbox')).toBeVisible();
	});
});
