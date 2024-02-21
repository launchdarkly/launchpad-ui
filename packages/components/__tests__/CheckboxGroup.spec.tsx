import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Checkbox, CheckboxGroup, FieldError, Label, Text } from '../src';

describe('CheckboxGroup', () => {
	it('renders', () => {
		render(
			<CheckboxGroup>
				<Label>Label</Label>
				<Checkbox>Checkbox 1</Checkbox>
				<Checkbox>Checkbox 2</Checkbox>
				<Text slot='description'>Description</Text>
				<FieldError />
			</CheckboxGroup>,
		);
		expect(screen.getByRole('group')).toBeVisible();
	});
});
