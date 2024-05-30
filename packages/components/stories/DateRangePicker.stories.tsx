import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { vars } from '@launchpad-ui/vars';
import { expect, userEvent, within } from '@storybook/test';

import {
	CalendarCell,
	CalendarGrid,
	DateInput,
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

const meta: Meta<typeof DateRangePicker> = {
	component: DateRangePicker,
	title: 'Components/Date and Time/DateRangePicker',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
	},
	decorators: [
		(Story: StoryFn) => (
			<div style={{ width: vars.size[320], height: vars.size[480] }}>
				<div style={{ width: vars.size[240] }}>
					<Story />
				</div>
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof DateRangePicker>;

export const Example: Story = {
	args: {
		children: (
			<>
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
			</>
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('button'));
		const body = canvasElement.ownerDocument.body;
		await expect(await within(body).findByRole('application'));
	},
};
