import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';

import { Icon } from '@launchpad-ui/icons';
import { vars } from '@launchpad-ui/vars';
import { userEvent } from 'storybook/test';

import { DateField, DateInput, DateSegment } from '../src/DateField';
import { Group } from '../src/Group';
import { Label } from '../src/Label';
import { Text } from '../src/Text';

const meta: Meta<typeof DateField> = {
	component: DateField,
	subcomponents: { DateInput, DateSegment } as Record<string, ComponentType<unknown>>,
	title: 'Components/Date and Time/DateField',
	parameters: {
		figma: {
			design:
				'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=10833-32728&m=dev',
		},
	},
	decorators: [
		(Story) => (
			<div style={{ width: vars.size[240] }}>
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof DateField>;

export const Example: Story = {
	args: {
		children: (
			<>
				<Label>Date</Label>
				<Group>
					<Icon name="calendar" size="small" />
					<DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
				</Group>
				<Text slot="description">Please select a weekday.</Text>
			</>
		),
	},
};

export const States: Story = {
	render: (args) => {
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: vars.spacing[400],
				}}
			>
				<DateField {...args}>
					<Label>Focus Visible</Label>
					<Group>
						<Icon name="calendar" size="small" />
						<DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
					</Group>
				</DateField>
				<DateField isInvalid {...args}>
					<Label>Invalid</Label>
					<Group>
						<Icon name="calendar" size="small" />
						<DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
					</Group>
				</DateField>
				<DateField isDisabled {...args}>
					<Label>Disabled</Label>
					<Group>
						<Icon name="calendar" size="small" />
						<DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
					</Group>
				</DateField>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const body = canvasElement.ownerDocument.body;
		body.click();
		await userEvent.tab();
	},
};
