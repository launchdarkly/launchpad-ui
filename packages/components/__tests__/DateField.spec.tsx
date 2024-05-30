import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { DateField, DateInput, DateSegment, Label } from '../src';

describe('DateField', () => {
	it('renders', () => {
		render(
			<DateField>
				<Label>Date</Label>
				<DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
			</DateField>,
		);
		expect(screen.getByRole('group')).toBeVisible();
	});
});
