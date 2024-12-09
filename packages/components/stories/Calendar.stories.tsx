import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentType } from 'react';

import {
	getLocalTimeZone,
	parseDate,
	startOfMonth,
	startOfWeek,
	today,
} from '@internationalized/date';
import { vars } from '@launchpad-ui/vars';
import { useLocale } from 'react-aria';

import {
	Calendar,
	CalendarCell,
	CalendarGrid,
	CalendarPicker,
	Group,
	Heading,
	IconButton,
	Preset,
	Separator,
	Toolbar,
} from '../src';

const meta: Meta<typeof Calendar> = {
	component: Calendar,
	subcomponents: { CalendarCell, CalendarGrid, CalendarPicker, Heading, Preset } as Record<
		string,
		ComponentType<unknown>
	>,
	title: 'Components/Date and Time/Calendar',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
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

type Story = StoryObj<typeof Calendar>;

const renderCalendar = (args: Story['args']) => (
	<Calendar defaultValue={parseDate('2024-01-01')} {...args}>
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
);

export const Example: Story = {
	render: (args) => renderCalendar({ ...args }),
};

export const States: Story = {
	render: (args) => {
		return (
			<div style={{ display: 'flex', gap: vars.spacing[900], overflow: 'auto' }}>
				{renderCalendar({ ...args, isDisabled: true })}
				{renderCalendar({ ...args, isInvalid: true })}
			</div>
		);
	},
	parameters: {
		a11y: {
			options: {
				rules: {
					'landmark-no-duplicate-banner': { enabled: false },
					'landmark-unique': { enabled: false },
				},
			},
		},
	},
};

export const Presets: Story = {
	render: (args) => {
		const now = today(getLocalTimeZone());
		const { locale } = useLocale();
		return (
			<CalendarPicker style={{ width: 'fit-content' }}>
				<Toolbar orientation="vertical" aria-label="presets">
					<Group>
						<Preset value={now}>Today</Preset>
						<Preset value={startOfWeek(now.add({ weeks: 1 }), locale)}>Next week</Preset>
						<Preset value={startOfMonth(now.add({ months: 1 }))}>Next month</Preset>
					</Group>
				</Toolbar>
				<Separator orientation="vertical" />
				{renderCalendar(args)}
			</CalendarPicker>
		);
	},
};
