import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Group, IconButton, Input, Label, TextArea, TextField } from '../src';

describe('TextField', () => {
	it('renders an input', () => {
		render(
			<TextField>
				<Label>Label</Label>
				<Input />
			</TextField>,
		);
		expect(screen.getByRole('textbox')).toBeVisible();
	});

	it('renders a textarea', () => {
		render(
			<TextField>
				<Label>Label</Label>
				<TextArea />
			</TextField>,
		);
		expect(screen.getByRole('textbox')).toBeVisible();
	});

	it('sets context for groups', () => {
		render(
			<TextField isInvalid>
				<Label>Label</Label>
				<Group>
					<Input />
					<IconButton icon="add" aria-label="add" size="small" />
				</Group>
			</TextField>,
		);
		expect(screen.getByRole('group')).toHaveAttribute('data-invalid', 'true');
	});
});
