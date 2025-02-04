import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentType } from 'react';

import {
	endOfMonth,
	endOfWeek,
	getLocalTimeZone,
	parseDate,
	startOfMonth,
	startOfWeek,
	today,
} from '@internationalized/date';
import { vars } from '@launchpad-ui/vars';
import { useLocale } from 'react-aria';

import {
	CalendarCell,
	CalendarGrid,
	CalendarPicker,
	Group,
	Heading,
	IconButton,
	Preset,
	RangeCalendar,
	Separator,
	Toolbar,
} from '../src';

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
				</div>
			</>
		),
		defaultFocusedValue: parseDate('2024-01-01'),
		visibleDuration: { months: 2 },
	},
};

export const Presets: Story = {
	render: (args) => {
		const now = today(getLocalTimeZone());
		const nextMonth = now.add({ months: 1 });
		const { locale } = useLocale();
		return (
			<CalendarPicker style={{ width: 'fit-content' }}>
				<Toolbar orientation="vertical" aria-label="presets">
					<Group>
						<Preset value={{ start: startOfMonth(now), end: endOfMonth(now) }}>This month</Preset>
						<Preset value={{ start: startOfWeek(now, locale), end: endOfWeek(now, locale) }}>
							This week
						</Preset>
						<Preset value={{ start: startOfMonth(nextMonth), end: endOfMonth(nextMonth) }}>
							Next month
						</Preset>
					</Group>
				</Toolbar>
				<Separator orientation="vertical" />
				<RangeCalendar {...args}>
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
			</CalendarPicker>
		);
	},
	args: {
		defaultFocusedValue: parseDate('2024-02-01'),
	},
};
