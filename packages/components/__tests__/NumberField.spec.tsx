import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Group, IconButton, Input, Label, NumberField } from '../src';

describe('NumberField', () => {
	it('renders', () => {
		render(
			<NumberField>
				<Label>Label</Label>
				<Group>
					<Input />
					<IconButton
						icon="minus"
						aria-label="decrement"
						size="small"
						variant="minimal"
						slot="decrement"
					/>
					<IconButton
						icon="add"
						aria-label="increment"
						size="small"
						variant="minimal"
						slot="increment"
					/>
				</Group>
			</NumberField>,
		);
		expect(screen.getByRole('textbox')).toBeVisible();
	});
});
