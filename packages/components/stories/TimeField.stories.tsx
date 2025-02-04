import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentType } from 'react';

import { Icon } from '@launchpad-ui/icons';
import { vars } from '@launchpad-ui/vars';
import { userEvent } from '@storybook/test';

import { DateInput, DateSegment, Group, Label, Text, TimeField } from '../src';

const meta: Meta<typeof TimeField> = {
	component: TimeField,
	subcomponents: { DateInput, DateSegment } as Record<string, ComponentType<unknown>>,
	title: 'Components/Date and Time/TimeField',
	parameters: {
		a11y: {
			options: {
				rules: {
					'target-size': { enabled: false },
				},
			},
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

type Story = StoryObj<typeof TimeField>;

export const Example: Story = {
	args: {
		children: (
			<>
				<Label>Time</Label>
				<Group>
					<Icon name="clock" size="small" />
					<DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
				</Group>
				<Text slot="description">Please select a time.</Text>
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
				<TimeField {...args}>
					<Label>Focus Visible</Label>
					<Group>
						<Icon name="clock" size="small" />
						<DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
					</Group>
				</TimeField>
				<TimeField isInvalid {...args}>
					<Label>Invalid</Label>
					<Group>
						<Icon name="clock" size="small" />
						<DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
					</Group>
				</TimeField>
				<TimeField isDisabled {...args}>
					<Label>Disabled</Label>
					<Group>
						<Icon name="clock" size="small" />
						<DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
					</Group>
				</TimeField>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const body = canvasElement.ownerDocument.body;
		body.click();
		await userEvent.tab();
	},
};
