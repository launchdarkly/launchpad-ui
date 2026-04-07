import type { Meta, StoryObj } from '@storybook/react-vite';

import { Alert } from '../src/Alert';
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
		hideIcon: {
			control: 'boolean',
			description: 'Hides the status icon',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
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
	},
};

export const InlineDefault: Story = {
	args: {
		children: (
			<Text>
				Flag a prerequisite of <strong>1 other flag</strong> in <strong>production</strong>
			</Text>
		),
		variant: 'inline',
		status: 'info',
		isDismissable: true,
	},
	name: 'Inline',
};

export const Neutral: Story = {
	args: {
		children: (
			<>
				<Heading>Let's squash some bugs!</Heading>
				<Text>View a recent error or find a specific error message, URL, or segment.</Text>
			</>
		),
	},
};

export const InlineNeutral: Story = {
	args: {
		children: <Text>View a recent error or find a specific error message, URL, or segment.</Text>,
		variant: 'inline',
		isDismissable: true,
	},
};

export const Info: Story = {
	args: {
		children: (
			<>
				<Heading>Test drive SSO</Heading>
				<Text>
					Test drive to verify SSO is working. If successful, you'll be redirected to this page by
					your ldP. This will not require all account members to sign in with SSO.
				</Text>
			</>
		),
		status: 'info',
	},
};

export const InlineInfo: Story = {
	args: {
		children: (
			<Text>
				Flag a prerequisite of <strong>1 other flag</strong> in <strong>production</strong>
			</Text>
		),
		variant: 'inline',
		isDismissable: true,
		status: 'info',
	},
};

export const ErrorAlert: Story = {
	args: {
		children: (
			<>
				<Heading>Unable to connect to identity provider</Heading>
				<Text>
					We couldn't establish a connection to your SSO provider. Please verify your configuration
					settings and try again.
				</Text>
			</>
		),
		status: 'error',
	},
	name: 'Error',
};

export const InlineError: Story = {
	args: {
		children: <Text>Failed to save changes. Please check your connection and try again.</Text>,
		variant: 'inline',
		isDismissable: true,
		status: 'error',
	},
};

export const Success: Story = {
	args: {
		children: (
			<>
				<Heading>SSO configuration complete</Heading>
				<Text>
					Your team can now sign in using your identity provider. All existing sessions will remain
					active until they expire.
				</Text>
			</>
		),
		status: 'success',
	},
};

export const InlineSuccess: Story = {
	args: {
		children: <Text>Your changes have been saved and deployed to production.</Text>,
		variant: 'inline',
		isDismissable: true,
		status: 'success',
	},
};

export const Warning: Story = {
	args: {
		children: (
			<>
				<Heading>Move with caution</Heading>
				<Text>
					We are currently in a period of merge caution until the end of the week.{' '}
					<strong>All Production flag changes should be guarded releases.</strong> Read our{' '}
					<a href="https://launchpad.launchdarkly.com/?path=/docs/getting-started--docs">
						Holiday Readiness Plan
					</a>{' '}
					for more information.
				</Text>
			</>
		),
		status: 'warning',
	},
};

export const InlineWarning: Story = {
	args: {
		children: (
			<Text>
				Changing the payload will immediately affect all SDKs using this key and may cause
				unexpected behavior in existing applications.
			</Text>
		),
		variant: 'inline',
		isDismissable: true,
		status: 'warning',
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

export const HiddenIcon: Story = {
	args: {
		children: (
			<>
				<Heading>Custom notification</Heading>
				<Text>This alert displays without a status icon for a cleaner appearance.</Text>
			</>
		),
		status: 'info',
		hideIcon: true,
	},
};
