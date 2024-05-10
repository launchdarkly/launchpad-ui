import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { FieldGroup, Input, Label, TextField } from '../src';

describe('FieldGroup', () => {
	it('renders', () => {
		render(
			<FieldGroup>
				<TextField>
					<Label>Label</Label>
					<Input />
				</TextField>
				<TextField>
					<Label>Label</Label>
					<Input />
				</TextField>
			</FieldGroup>,
		);
		expect(screen.getByRole('group')).toBeVisible();
	});

	it('sets disabled on children fields', () => {
		render(
			<FieldGroup isDisabled>
				<TextField>
					<Label>Label</Label>
					<Input />
				</TextField>
				<TextField>
					<Label>Label</Label>
					<Input />
				</TextField>
			</FieldGroup>,
		);
		const textboxes = screen.getAllByRole('textbox');
		for (const textbox of textboxes) {
			expect(textbox).toBeDisabled();
		}
	});

	it('sets invalid on children fields', () => {
		render(
			<FieldGroup errorMessage="invalid">
				<TextField>
					<Label>Label</Label>
					<Input />
				</TextField>
				<TextField>
					<Label>Label</Label>
					<Input />
				</TextField>
			</FieldGroup>,
		);
		const textboxes = screen.getAllByRole('textbox');
		for (const textbox of textboxes) {
			expect(textbox).toBeInvalid();
		}
	});
});
