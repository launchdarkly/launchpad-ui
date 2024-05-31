import type { Meta, StoryObj } from '@storybook/react';

import { parseDate } from '@internationalized/date';
import { vars } from '@launchpad-ui/vars';

import { Calendar, CalendarCell, CalendarGrid, Heading, IconButton } from '../src';

const meta: Meta<typeof Calendar> = {
	component: Calendar,
	// @ts-ignore
	subcomponents: { CalendarCell, CalendarGrid, Heading },
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
