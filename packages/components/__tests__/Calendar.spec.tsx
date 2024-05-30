import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Calendar, CalendarCell, CalendarGrid, Heading, IconButton } from '../src';

describe('Calendar', () => {
	it('renders', () => {
		render(
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
			</Calendar>,
		);
		expect(screen.getByRole('application')).toBeVisible();
	});
});
