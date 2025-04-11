import type { Meta, StoryObj } from '@storybook/react';

import { vars } from '@launchpad-ui/vars';
import { userEvent } from 'storybook/test';

import { Group } from '../src/Group';
import { IconButton } from '../src/IconButton';
import { Input } from '../src/Input';
import { Label } from '../src/Label';
import { NumberField } from '../src/NumberField';

const meta: Meta<typeof NumberField> = {
	component: NumberField,
	title: 'Components/Forms/NumberField',
	decorators: [
		(Story) => (
			<div style={{ width: vars.size[240] }}>
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof NumberField>;

export const Example: Story = {
	args: {
		children: (
			<>
				<Label>Label</Label>
				<Group>
					<Input />
					<IconButton
						icon="minus"
						aria-label="decrement"
						size="small"
						variant="minimal"
						slot="decrement"
					/>
					<IconButton
						icon="add"
						aria-label="increment"
						size="small"
						variant="minimal"
						slot="increment"
					/>
				</Group>
			</>
		),
		defaultValue: 10,
	},
};

export const States: Story = {
	render: (args) => {
		const ExampleGroup = (
			<Group>
				<Input />
				<IconButton
					icon="minus"
					aria-label="decrement"
					size="small"
					variant="minimal"
					slot="decrement"
				/>
				<IconButton
					icon="add"
					aria-label="increment"
					size="small"
					variant="minimal"
					slot="increment"
				/>
			</Group>
		);

		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: vars.spacing[400],
				}}
			>
				<NumberField {...args}>
					<Label>Focus Visible</Label>
					{ExampleGroup}
				</NumberField>
				<NumberField isInvalid {...args}>
					<Label>Invalid</Label>
					{ExampleGroup}
				</NumberField>
				<NumberField isDisabled {...args}>
					<Label>Disabled</Label>
					{ExampleGroup}
				</NumberField>
			</div>
		);
	},
	args: { defaultValue: 10 },
	play: async ({ canvasElement }) => {
		const body = canvasElement.ownerDocument.body;
		body.click();
		await userEvent.tab();
	},
};
