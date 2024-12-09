import type { Meta, StoryObj } from '@storybook/react';

import { vars } from '@launchpad-ui/vars';
import { userEvent } from '@storybook/test';

import { DateField, DateInput, DateSegment, Label, Text } from '../src';

const meta: Meta<typeof DateField> = {
	component: DateField,
	// @ts-ignore
	subcomponents: { DateInput, DateSegment },
	title: 'Components/Date and Time/DateField',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
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
				<DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
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
					<DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
				</DateField>
				<DateField isInvalid {...args}>
					<Label>Invalid</Label>
					<DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
				</DateField>
				<DateField isDisabled {...args}>
					<Label>Disabled</Label>
					<DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
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
