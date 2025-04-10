import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentType } from 'react';

import { parseDate } from '@internationalized/date';
import { vars } from '@launchpad-ui/vars';

import { Calendar, CalendarCell, CalendarGrid } from '../src/Calendar';
import { Heading } from '../src/Heading';
import { IconButton } from '../src/IconButton';

const meta: Meta<typeof Calendar> = {
	component: Calendar,
	subcomponents: { CalendarCell, CalendarGrid, Heading } as Record<string, ComponentType<unknown>>,
	title: 'Components/Date and Time/Calendar',
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

type Story = StoryObj<typeof Calendar>;

const renderCalendar = (args: Story['args']) => (
	<Calendar defaultValue={parseDate('2025-01-01')} {...args}>
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
