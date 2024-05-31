import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { vars } from '@launchpad-ui/vars';
import { userEvent } from '@storybook/test';

import { DateInput, DateSegment, Label, Text, TimeField } from '../src';

const meta: Meta<typeof TimeField> = {
	component: TimeField,
	// @ts-ignore
	subcomponents: { DateInput, DateSegment },
	title: 'Components/Date and Time/TimeField',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
		a11y: {
			options: {
				rules: {
					'target-size': { enabled: false },
				},
			},
		},
	},
	decorators: [
		(Story: StoryFn) => (
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
				<DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
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
					<DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
				</TimeField>
				<TimeField isInvalid {...args}>
					<Label>Invalid</Label>
					<DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
				</TimeField>
				<TimeField isDisabled {...args}>
					<Label>Disabled</Label>
					<DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
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
