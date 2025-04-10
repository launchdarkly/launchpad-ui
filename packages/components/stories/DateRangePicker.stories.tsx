import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentType } from 'react';

import { parseDate } from '@internationalized/date';
import { Icon } from '@launchpad-ui/icons';
import { vars } from '@launchpad-ui/vars';
import { expect, userEvent, within } from 'storybook/test';

import { Button } from '../src/Button';
import { CalendarCell, CalendarGrid, RangeCalendar } from '../src/Calendar';
import { DateInput, DateSegment } from '../src/DateField';
import { DateRangePicker, DateRangePickerValue } from '../src/DatePicker';
import { Dialog } from '../src/Dialog';
import { Form } from '../src/Form';
import { Group } from '../src/Group';
import { Heading } from '../src/Heading';
import { IconButton } from '../src/IconButton';
import { Label } from '../src/Label';
import { Popover } from '../src/Popover';

const meta: Meta<typeof DateRangePicker> = {
	component: DateRangePicker,
	subcomponents: { DateRangePickerValue } as Record<string, ComponentType<unknown>>,
	title: 'Components/Date and Time/DateRangePicker',
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

export const InForms: Story = {
	render: (args) => {
		return (
			<Form>
				<DateRangePicker {...args}>
					<Label>Date</Label>
					<Group>
						<DateInput slot="start">{(segment) => <DateSegment segment={segment} />}</DateInput>
						<Icon name="arrow-right-thin" size="small" />
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
				</DateRangePicker>
			</Form>
		);
	},
	args: {
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
