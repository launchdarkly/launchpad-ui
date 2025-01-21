import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '@launchpad-ui/icons';
import { vars } from '@launchpad-ui/vars';
import { userEvent } from '@storybook/test';

import { Group, IconButton, Input, Label, SearchField, Text } from '../src';

const meta: Meta<typeof SearchField> = {
	component: SearchField,
	title: 'Components/Forms/SearchField',
	decorators: [
		(Story) => (
			<div style={{ width: vars.size[240] }}>
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof SearchField>;

export const Example: Story = {
	args: {
		children: (
			<>
				<Label>Label</Label>
				<Group>
					<Icon name="search" size="small" />
					<Input placeholder="Enter a value" />
					<IconButton
						icon="cancel-circle-outline"
						aria-label="clear"
						size="small"
						variant="minimal"
					/>
				</Group>
				<Text slot="description">Description</Text>
			</>
		),
	},
};

export const States: Story = {
	render: (args) => {
		const ExampleGroup = (
			<Group>
				<Input placeholder="Enter a value" />
				<IconButton
					icon="cancel-circle-outline"
					aria-label="clear"
					size="small"
					variant="minimal"
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
				<SearchField {...args}>
					<Label>Focus Visible</Label>
					{ExampleGroup}
				</SearchField>
				<SearchField isInvalid {...args}>
					<Label>Invalid</Label>
					{ExampleGroup}
				</SearchField>
				<SearchField isDisabled {...args}>
					<Label>Disabled</Label>
					{ExampleGroup}
				</SearchField>
			</div>
		);
	},
	args: { defaultValue: 'Value' },
	play: async ({ canvasElement }) => {
		const body = canvasElement.ownerDocument.body;
		body.click();
		await userEvent.tab();
	},
};
