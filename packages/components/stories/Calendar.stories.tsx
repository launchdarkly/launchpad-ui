import type { Meta, StoryObj } from '@storybook/react';

import { Calendar, CalendarCell, CalendarGrid, Heading, IconButton } from '../src';

const meta: Meta<typeof Calendar> = {
	component: Calendar,
	title: 'Components/Date and Time/Calendar',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
	},
};

export default meta;

type Story = StoryObj<typeof Calendar>;

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
	},
};
