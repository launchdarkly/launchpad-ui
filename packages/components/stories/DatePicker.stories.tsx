import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';

import { parseDate } from '@internationalized/date';
import { Icon } from '@launchpad-ui/icons';
import { vars } from '@launchpad-ui/vars';
import { expect, userEvent, within } from 'storybook/test';

import { Button } from '../src/Button';
import { Calendar, CalendarCell, CalendarGrid } from '../src/Calendar';
import { DateInput, DateSegment } from '../src/DateField';
import { DatePicker, DatePickerValue } from '../src/DatePicker';
import { Dialog } from '../src/Dialog';
import { Form } from '../src/Form';
import { Group } from '../src/Group';
import { Heading } from '../src/Heading';
import { IconButton } from '../src/IconButton';
import { Label } from '../src/Label';
import { Popover } from '../src/Popover';

const meta: Meta<typeof DatePicker> = {
	component: DatePicker,
	subcomponents: { DatePickerValue } as Record<string, ComponentType<unknown>>,
	title: 'Components/Date and Time/DatePicker',
	parameters: {
		figma: {
			design:
				'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=10826-35493&m=dev',
		},
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

type Story = StoryObj<typeof DatePicker>;

export const Example: Story = {
	args: {
		children: (
			<>
				<Label>Date</Label>
				<Button>
					<Icon name="calendar" size="small" />
					<DatePickerValue />
					<Icon name="chevron-down" size="small" />
				</Button>
				<Popover>
					<Dialog>
						<Calendar>
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
					</Dialog>
				</Popover>
			</>
		),
		defaultValue: parseDate('2025-01-01'),
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
				<DatePicker {...args}>
					<Label>Date</Label>
					<Group>
						<DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
						<IconButton icon="calendar" aria-label="calendar" size="small" variant="minimal" />
					</Group>
					<Popover>
						<Dialog>
							<Calendar>
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
						</Dialog>
					</Popover>
				</DatePicker>
			</Form>
		);
	},
	args: {
		defaultValue: parseDate('2025-01-01'),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('button'));
		const body = canvasElement.ownerDocument.body;
		await expect(await within(body).findByRole('application'));
	},
};
