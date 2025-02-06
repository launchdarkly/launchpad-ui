import type { Meta, StoryObj } from '@storybook/react';

import { parseDate } from '@internationalized/date';
import { Icon } from '@launchpad-ui/icons';
import { vars } from '@launchpad-ui/vars';
import { expect, userEvent, within } from '@storybook/test';

import {
	Button,
	Calendar,
	CalendarCell,
	CalendarGrid,
	DatePicker,
	DatePickerValue,
	Dialog,
	Heading,
	IconButton,
	Label,
	Popover,
} from '../src';

const meta: Meta<typeof DatePicker> = {
	component: DatePicker,
	title: 'Components/Date and Time/DatePicker',
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
