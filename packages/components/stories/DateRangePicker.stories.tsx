import type { Meta, StoryObj } from '@storybook/react';

import { parseDate } from '@internationalized/date';
import { Icon } from '@launchpad-ui/icons';
import { vars } from '@launchpad-ui/vars';
import { expect, userEvent, within } from '@storybook/test';

import {
	Button,
	CalendarCell,
	CalendarGrid,
	DateRangePicker,
	DateRangePickerValue,
	Dialog,
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
		chromatic: { pauseAnimationAtEnd: true },
	},
	decorators: [
		(Story) => (
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
				<Button>
					<Icon name="calendar" size="small" />
					<DateRangePickerValue />
					<Icon name="chevron-down" size="small" />
				</Button>
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
		defaultValue: {
			start: parseDate('2025-01-08'),
			end: parseDate('2025-01-15'),
		},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('button'));
		const body = canvasElement.ownerDocument.body;
		await expect(await within(body).findByRole('application'));
	},
};
