import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';

import { Icon } from '@launchpad-ui/icons';
import { vars } from '@launchpad-ui/vars';
import { userEvent, within } from 'storybook/test';

import { Button } from '../src/Button';
import { FieldError } from '../src/FieldError';
import { Form } from '../src/Form';
import { Label } from '../src/Label';
import { Radio } from '../src/Radio';
import { RadioGroup } from '../src/RadioGroup';
import { Text } from '../src/Text';

const meta: Meta<typeof RadioGroup> = {
	component: RadioGroup,
	subcomponents: { Radio } as Record<string, ComponentType<unknown>>,
	title: 'Components/Forms/RadioGroup',
	parameters: {
		figma: {
			design:
				'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-33616&m=dev',
		},
	},
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Example: Story = {
	args: {
		children: (
			<>
				<Label>Group</Label>
				<Radio value="1">First</Radio>
				<Radio value="2">Second</Radio>
				<Radio value="3">Third</Radio>
				<Text slot="description">Description</Text>
			</>
		),
		defaultValue: '1',
	},
	play: async ({ canvasElement }) => {
		const body = canvasElement.ownerDocument.body;
		body.click();
		await userEvent.tab();
	},
};

export const States: Story = {
	args: {
		children: (
			<>
				<Label>Group</Label>
				<Radio value="1">Resting</Radio>
				<Radio value="2" isDisabled>
					Selected, Disabled
				</Radio>
				<Radio value="3" isDisabled>
					Disabled
				</Radio>
			</>
		),
		defaultValue: '2',
	},
};

export const Validation: Story = {
	render: (args) => {
		return (
			<Form>
				<RadioGroup {...args}>
					<Label>Pick one</Label>
					<Radio value="1">First</Radio>
					<Radio value="2">Second</Radio>
					<Radio value="3">Third</Radio>
					<FieldError />
				</RadioGroup>
				<Button type="submit">Submit</Button>
			</Form>
		);
	},
	args: { isRequired: true },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await userEvent.click(canvas.getByRole('button'));
	},
};

export const Card: Story = {
	args: {
		variant: 'card',
		defaultValue: 'feature',
	},
	render: (args) => {
		return (
			<div
				style={{
					width: vars.size['320'],
				}}
			>
				<RadioGroup {...args}>
					<Label>Experiment type</Label>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: vars.spacing[300],
						}}
					>
						<Radio value="feature">
							<div slot="heading">
								<div slot="icon">
									<Icon name="flag" size="medium" />
								</div>
								<div>
									<div slot="label">Feature change</div>
									<div slot="subtitle">A/B test different variations</div>
								</div>
							</div>
							<div slot="description">Compare treatments to see which one wins</div>
						</Radio>
						<Radio value="funnel">
							<div slot="heading">
								<div slot="icon">
									<Icon name="flask" size="medium" />
								</div>
								<div>
									<div slot="label">Funnel optimization</div>
									<div slot="subtitle">Multi-step conversion tracking</div>
								</div>
							</div>
							<div slot="description">Track the success of a multi-step user flow</div>
						</Radio>
						<Radio value="export">
							<div slot="heading">
								<div slot="icon">
									<Icon name="data" size="medium" />
								</div>
								<div>
									<div slot="label">Data Export only</div>
									<div slot="subtitle">Raw data for analysis</div>
								</div>
							</div>
							<div slot="description">Create custom experiment analysis in your warehouse</div>
						</Radio>
						<Radio value="snowflake" isDisabled>
							<div slot="heading">
								<div slot="icon">
									<Icon name="circle" size="medium" />
								</div>
								<div>
									<div slot="label">Snowflake native</div>
									<div slot="subtitle">Warehouse-powered insights</div>
								</div>
							</div>
							<div slot="description">Analysis powered by your Snowflake warehouse</div>
						</Radio>
						<Radio value="simple">
							<div slot="heading">
								<div slot="icon">
									<Icon name="gear" size="medium" />
								</div>
								<div>
									<div slot="label">Simple option</div>
									<div slot="subtitle">Basic configuration</div>
								</div>
							</div>
						</Radio>
					</div>
				</RadioGroup>
			</div>
		);
	},
};
