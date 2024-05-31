import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { DateField, DateInput, DateSegment, Label, TimeField } from '../src';

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

describe('TimeField', () => {
	it('renders', () => {
		render(
			<TimeField>
				<Label>Date</Label>
				<DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
			</TimeField>,
		);
		expect(screen.getByRole('group')).toBeVisible();
	});
});
