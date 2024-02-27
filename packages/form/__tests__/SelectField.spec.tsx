import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { SelectField } from '../src';

describe('SelectField', () => {
	it('renders', () => {
		render(
			<SelectField name="select" aria-label="My select" value="one" onChange={() => undefined}>
				<option value="one" aria-label="option one">
					One
				</option>
				<option value="two" aria-label="option two">
					Two
				</option>
			</SelectField>,
		);
		expect(screen.getByLabelText('My select')).toBeInTheDocument();
	});
});
