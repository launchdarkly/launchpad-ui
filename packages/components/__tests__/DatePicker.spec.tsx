import { describe, expect, it } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import {
	Calendar,
	CalendarCell,
	CalendarGrid,
	DateInput,
	DatePicker,
	DateRangePicker,
	DateSegment,
	Dialog,
	Group,
	Heading,
	IconButton,
	Label,
	Popover,
	RangeCalendar,
} from '../src';

describe('DatePicker', () => {
	it('renders', async () => {
		const user = userEvent.setup();
		render(
			<DatePicker>
				<Label>Date</Label>
				<Group>
					<DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
					<IconButton icon="calendar" aria-label="calendar" size="small" variant="minimal" />
				</Group>
				<Popover>
					<Dialog>
						<Calendar>
							<header>
								<IconButton
									slot="previous"
									icon="chevron-left"
									aria-label="previous"
									size="small"
									variant="minimal"
								/>
								<Heading />
								<IconButton
									slot="next"
									icon="chevron-right"
									aria-label="next"
									size="small"
									variant="minimal"
								/>
							</header>
							<CalendarGrid>{(date) => <CalendarCell date={date} />}</CalendarGrid>
						</Calendar>
					</Dialog>
				</Popover>
			</DatePicker>,
		);

		expect(await screen.findByRole('group')).toBeVisible();
		await user.click(screen.getByRole('button'));
		expect(screen.getByRole('application')).toBeVisible();
	});
});

describe('DateRangePicker', () => {
	it('renders', async () => {
		const user = userEvent.setup();
		render(
			<DateRangePicker>
				<Label>Date</Label>
				<Group>
					<DateInput slot="start">{(segment) => <DateSegment segment={segment} />}</DateInput>
					<span aria-hidden="true">–</span>
					<DateInput slot="end">{(segment) => <DateSegment segment={segment} />}</DateInput>
					<IconButton icon="calendar" aria-label="calendar" size="small" variant="minimal" />
				</Group>
				<Popover>
					<Dialog>
						<RangeCalendar>
							<header>
								<IconButton
									slot="previous"
									icon="chevron-left"
									aria-label="previous"
									size="small"
									variant="minimal"
								/>
								<Heading />
								<IconButton
									slot="next"
									icon="chevron-right"
									aria-label="next"
									size="small"
									variant="minimal"
								/>
							</header>
							<CalendarGrid>{(date) => <CalendarCell date={date} />}</CalendarGrid>
						</RangeCalendar>
					</Dialog>
				</Popover>
			</DateRangePicker>,
		);

		expect(await screen.findByRole('group')).toBeVisible();
		await user.click(screen.getByRole('button'));
		expect(screen.getByRole('application')).toBeVisible();
	});
});
