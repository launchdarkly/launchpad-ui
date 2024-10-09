import type { Meta, StoryObj } from '@storybook/react';

import { Alert, Button, ButtonGroup, Heading, Text } from '../src';

const meta: Meta<typeof Alert> = {
	component: Alert,
	title: 'Components/Status/Alert',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
	},
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Info: Story = {
	args: {
		children: (
			<>
				<Heading>Heading</Heading>
				<Text>Content</Text>
			</>
		),
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

export const Subtle: Story = {
	args: {
		children: <Text>Content</Text>,
		variant: 'subtle',
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
