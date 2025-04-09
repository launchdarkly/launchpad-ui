import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '@launchpad-ui/icons';
import { vars } from '@launchpad-ui/vars';
import { useState } from 'react';

import { Group, IconButton, Input, Label, ProgressBar, TextField } from '../src';

const meta: Meta<typeof Group> = {
	component: Group,
	title: 'Components/Content/Group',
	decorators: [
		(Story) => (
			<div style={{ width: vars.size[240] }}>
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof Group>;

export const Example: Story = {
	render: (args) => {
		const [text, setText] = useState('');

		return (
			<TextField
				isDisabled={args.isDisabled}
				isInvalid={args.isInvalid}
				value={text}
				onChange={setText}
			>
				<Label>Label</Label>
				<Group {...args}>
					<Icon name="search" size="small" />
					<Input />
					<IconButton
						icon="cancel-circle-outline"
						aria-label="clear"
						size="small"
						variant="minimal"
						isDisabled={args.isDisabled}
						onPress={() => setText('')}
					/>
				</Group>
			</TextField>
		);
	},
};

export const Loading: Story = {
	render: (args) => {
		return (
			<TextField isDisabled={args.isDisabled} isInvalid={args.isInvalid}>
				<Label>Label</Label>
				<Group {...args}>
					<Input />
					<ProgressBar isIndeterminate aria-label="loading" />
				</Group>
			</TextField>
		);
	},
};
