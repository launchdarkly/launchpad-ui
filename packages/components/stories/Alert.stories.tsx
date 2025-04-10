import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from '../src/Alert';
import { Button } from '../src/Button';
import { ButtonGroup } from '../src/ButtonGroup';
import { Heading } from '../src/Heading';
import { Text } from '../src/Text';

const meta: Meta<typeof Alert> = {
	component: Alert,
	title: 'Components/Status/Alert',
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Neutral: Story = {
	args: {
		children: (
			<>
				<Heading>Heading</Heading>
				<Text>Content</Text>
			</>
		),
	},
};

export const Info: Story = {
	args: {
		children: (
			<>
				<Heading>Heading</Heading>
				<Text>Content</Text>
			</>
		),
		status: 'info',
	},
};

export const ErrorAlert: Story = {
	args: {
		children: (
			<>
				<Heading>Heading</Heading>
				<Text>Content</Text>
			</>
		),
		status: 'error',
	},
	name: 'Error',
};

export const Success: Story = {
	args: {
		children: (
			<>
				<Heading>Heading</Heading>
				<Text>Content</Text>
			</>
		),
		status: 'success',
	},
};

export const Warning: Story = {
	args: {
		children: (
			<>
				<Heading>Heading</Heading>
				<Text>Content</Text>
			</>
		),
		status: 'warning',
	},
};

export const Inline: Story = {
	args: {
		children: <Text>Content</Text>,
		variant: 'inline',
		isDismissable: true,
		onDismiss: () => undefined,
	},
};

export const Actions: Story = {
	args: {
		children: (
			<>
				<Heading>Heading</Heading>
				<Text>Content</Text>
				<ButtonGroup>
					<Button>Label</Button>
					<Button variant="minimal">Label</Button>
				</ButtonGroup>
			</>
		),
		isDismissable: true,
	},
};
