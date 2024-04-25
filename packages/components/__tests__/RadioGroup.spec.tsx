import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { ButtonGroup, Label, Radio, RadioButton, RadioGroup } from '../src';

describe('Radio', () => {
	it('renders', () => {
		render(
			<RadioGroup>
				<Label>Label</Label>
				<Radio value="1">First</Radio>
				<Radio value="2">Second</Radio>
				<Radio value="3">Third</Radio>
			</RadioGroup>,
		);
		expect(screen.getByRole('radiogroup')).toBeVisible();
	});

	it('renders selected', () => {
		render(
			<RadioGroup defaultValue="2">
				<Label>Label</Label>
				<ButtonGroup spacing="compact" role="presentation">
					<RadioButton value="1">First</RadioButton>
					<RadioButton value="2">Second</RadioButton>
					<RadioButton value="3">Third</RadioButton>
				</ButtonGroup>
			</RadioGroup>,
		);
		expect(screen.getByRole('radiogroup')).toBeVisible();
	});
});
