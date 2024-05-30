import type { Meta, StoryObj } from '@storybook/react';

import { parseDate } from '@internationalized/date';
import { vars } from '@launchpad-ui/vars';

import { CalendarCell, CalendarGrid, Heading, IconButton, RangeCalendar } from '../src';

const meta: Meta<typeof RangeCalendar> = {
	component: RangeCalendar,
	title: 'Components/Date and Time/RangeCalendar',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
	},
};

export default meta;

type Story = StoryObj<typeof RangeCalendar>;

export const Example: Story = {
	args: {
		children: (
			<>
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
			</>
		),
		defaultValue: {
			start: parseDate('2024-01-08'),
			end: parseDate('2024-01-15'),
		},
	},
};

export const MultipleMonths: Story = {
	args: {
		children: (
			<>
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
				<div style={{ display: 'flex', gap: vars.spacing[900], overflow: 'auto' }}>
					<CalendarGrid>{(date) => <CalendarCell date={date} />}</CalendarGrid>
					<CalendarGrid offset={{ months: 1 }}>
						{(date) => <CalendarCell date={date} />}
					</CalendarGrid>
					<CalendarGrid offset={{ months: 2 }}>
						{(date) => <CalendarCell date={date} />}
					</CalendarGrid>
				</div>
			</>
		),
		defaultFocusedValue: parseDate('2024-02-01'),
		visibleDuration: { months: 3 },
	},
};
