import type { Meta, StoryObj } from '@storybook/react-vite';

import { Alert, AlertText } from '../src/Alert';
import { Button } from '../src/Button';
import { ButtonGroup } from '../src/ButtonGroup';
import { Heading } from '../src/Heading';
import { Text } from '../src/Text';

const meta: Meta<typeof Alert> = {
	component: Alert,
	title: 'Components/Status/Alert',
	parameters: {
		figma: {
			design:
				'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=8225-704&m=dev',
		},
	},
	argTypes: {
		actionsLayout: {
			control: 'inline-radio',
			options: ['stacked', 'inline'],
			description: 'Controls the layout of actions (block variant only)',
		},
		hideIcon: {
			control: 'boolean',
			description: 'Hides the status icon (block variant only)',
		},
		status: {
			control: 'select',
			options: ['neutral', 'info', 'error', 'success', 'warning'],
		},
		variant: {
			control: 'inline-radio',
			options: ['default', 'inline'],
		},
	},
};

export default meta;

type Story = StoryObj<typeof Alert>;

// =============================================================================
// Block Variant Stories
// =============================================================================

export const BlockDefault: Story = {
	args: {
		children: (
			<>
				<Heading>Test drive SSO</Heading>
				<Text>
					Test drive to verify SSO is working. If successful, you'll be redirected to this page by
					your ldP. This will not require all account members to sign in with SSO.
				</Text>
				<ButtonGroup>
					<Button>Test drive SSO</Button>
					<Button variant="minimal">Secondary action</Button>
				</ButtonGroup>
			</>
		),
		status: 'info',
		isDismissable: true,
		actionsLayout: 'stacked',
	},
	name: 'Block/Default',
};

export const BlockTones: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
			<Alert>
				<Heading>Neutral alert</Heading>
				<Text>This is a neutral alert with no specific status.</Text>
			</Alert>
			<Alert status="info" isDismissable>
				<Heading>Info alert</Heading>
				<Text>This is an informational alert.</Text>
			</Alert>
			<Alert status="error">
				<Heading>Error alert</Heading>
				<Text>This is an error alert.</Text>
			</Alert>
			<Alert status="success">
				<Heading>Success alert</Heading>
				<Text>This is a success alert.</Text>
			</Alert>
			<Alert status="warning">
				<Heading>Warning alert</Heading>
				<Text>This is a warning alert.</Text>
			</Alert>
		</div>
	),
	name: 'Block/Tones',
};

export const BlockDismissable: Story = {
	args: {
		children: (
			<>
				<Heading>Session expiring soon</Heading>
				<Text>Your session will expire in 5 minutes due to inactivity.</Text>
			</>
		),
		status: 'warning',
		isDismissable: true,
		actionsLayout: 'stacked',
	},
	name: 'Block/Dismissable',
};

export const BlockWithActions: Story = {
	args: {
		children: (
			<>
				<Heading>Test drive SSO</Heading>
				<Text>
					Test drive to verify SSO is working. If successful, you'll be redirected to this page by
					your ldP. This will not require all account members to sign in with SSO.
				</Text>
				<ButtonGroup>
					<Button>Test drive SSO</Button>
					<Button variant="minimal">Secondary action</Button>
				</ButtonGroup>
			</>
		),
		status: 'info',
		actionsLayout: 'stacked',
	},
	name: 'Block/With Actions',
};

export const BlockInlineActions: Story = {
	args: {
		children: (
			<>
				<AlertText>
					<Heading>SDK Update Available</Heading>
					<Text>A new version of the SDK is available with performance improvements.</Text>
				</AlertText>
				<ButtonGroup>
					<Button>Update now</Button>
				</ButtonGroup>
			</>
		),
		status: 'info',
		actionsLayout: 'inline',
		isDismissable: true,
	},
	name: 'Block/Inline Actions',
};

export const BlockWithoutHeader: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
			<Alert status="warning" actionsLayout="inline">
				<AlertText>
					<Text>Your session will expire in 5 minutes.</Text>
				</AlertText>
				<ButtonGroup>
					<Button>Extend session</Button>
				</ButtonGroup>
			</Alert>
			<Alert status="error" actionsLayout="inline" isDismissable>
				<AlertText>
					<Text>Something went wrong.</Text>
				</AlertText>
			</Alert>
			<Alert status="info" actionsLayout="inline" isDismissable>
				<AlertText>
					<Text>
						Test drive to verify SSO is working. If successful, you'll be redirected to this page by
						your ldP. This will not require all account members to sign in with SSO.
					</Text>
				</AlertText>
				<ButtonGroup>
					<Button>Update now</Button>
				</ButtonGroup>
			</Alert>
			<Alert status="neutral" actionsLayout="inline">
				<AlertText>
					<Text>A new version of the SDK is available with performance improvements.</Text>
				</AlertText>
			</Alert>
		</div>
	),
	name: 'Block/Without Header',
};

// =============================================================================
// Inline Variant Stories
// =============================================================================

export const InlineDefault: Story = {
	args: {
		children: (
			<Text>
				Flag is a prerequisite of <strong>1 other flag</strong> in <strong>production</strong>
			</Text>
		),
		variant: 'inline',
		status: 'info',
		isDismissable: true,
	},
	name: 'Inline/Default',
};

export const InlineTones: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
			<Alert variant="inline">
				<Text>This is a neutral inline alert.</Text>
			</Alert>
			<Alert variant="inline" status="info">
				<Text>This is an info inline alert.</Text>
			</Alert>
			<Alert variant="inline" status="error">
				<Text>This is an error inline alert.</Text>
			</Alert>
			<Alert variant="inline" status="success">
				<Text>This is a success inline alert.</Text>
			</Alert>
			<Alert variant="inline" status="warning">
				<Text>This is a warning inline alert.</Text>
			</Alert>
		</div>
	),
	name: 'Inline/Tones',
};
