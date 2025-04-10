import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentType } from 'react';

import { parseDate } from '@internationalized/date';
import { vars } from '@launchpad-ui/vars';

import { CalendarCell, CalendarGrid, RangeCalendar } from '../src/Calendar';
import { Heading } from '../src/Heading';
import { IconButton } from '../src/IconButton';

const meta: Meta<typeof RangeCalendar> = {
	component: RangeCalendar,
	subcomponents: { CalendarCell, CalendarGrid, Heading } as Record<string, ComponentType<unknown>>,
	title: 'Components/Date and Time/RangeCalendar',
	parameters: {
		a11y: {
			options: {
				rules: {
					'landmark-banner-is-top-level': { enabled: false },
				},
			},
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
			start: parseDate('2025-01-08'),
			end: parseDate('2025-01-15'),
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
				</div>
			</>
		),
		defaultFocusedValue: parseDate('2025-01-01'),
		visibleDuration: { months: 2 },
	},
};
