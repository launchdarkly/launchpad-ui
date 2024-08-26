import type { StoryObj } from '@storybook/react';

import { Button, ButtonGroup } from '@launchpad-ui/button';
import { useState } from 'react';

import { Alert } from '../src';

export default {
	component: Alert,
	title: 'Legacy/Deprecated/Alert',
	description: 'Actions trigger alerts based on user interaction.',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__ALERT,
		},
		chromatic: { disableSnapshot: true },
	},
	argTypes: {
		testId: {
			control: 'text',
			table: {
				category: 'Testing',
				subcategory: 'Data attributes',
			},
		},
		className: {
			table: {
				category: 'Presentation',
			},
		},
		compact: {
			control: 'boolean',
			table: {
				category: 'Presentation',
				subcategory: 'Sizing',
			},
		},
		isInline: {
			control: 'boolean',
			table: {
				category: 'Presentation',
			},
		},
		kind: {
			table: {
				category: 'Presentation',
			},
		},
		flairLevel: {
			table: {
				category: 'Presentation',
			},
		},
		size: {
			table: {
				category: 'Presentation',
				subcategory: 'Sizing',
			},
		},
		wide: {
			control: 'boolean',
			table: {
				category: 'Presentation',
				subcategory: 'Sizing',
			},
		},
		dismissible: {
			control: 'boolean',
			table: {
				category: 'Presentation',
			},
		},
		onDismiss: {
			table: {
				category: 'Presentation',
			},
		},
		children: {
			table: {
				category: 'Content',
			},
		},
	},
};

type Story = StoryObj<typeof Alert>;

export const Success: Story = {
	args: {
		kind: 'success',
		children: 'Success Alert',
		dismissible: false,
	},
};

export const Warning: Story = {
	args: { kind: 'warning', children: 'Warning alert', dismissible: false },
};

export const Info: Story = {
	args: { kind: 'info', children: 'Info alert', dismissible: false },
};

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export const Error: Story = {
	args: { kind: 'error', children: 'Error alert', dismissible: false },
};

export const SmallInlineSuccess: Story = {
	args: {
		isInline: true,
		kind: 'success',
		size: 'small',
		children: 'Small Inline Success alert',
	},
};

export const SmallInlineWarning: Story = {
	args: {
		isInline: true,
		kind: 'warning',
		size: 'small',
		children: 'Small Inline Warning alert',
	},
};

export const SmallInlineInfo: Story = {
	args: {
		isInline: true,
		kind: 'info',
		size: 'small',
		children: 'Small Inline Info alert',
	},
};

export const SmallInlineError: Story = {
	args: {
		isInline: true,
		kind: 'error',
		size: 'small',
		children: 'Small Inline Error alert',
	},
};

export const Dismissible: Story = {
	args: { kind: 'info', children: 'Dismissible alert', dismissible: true },
};

export const WithHeader: Story = {
	args: { header: 'With Header', children: 'Warning alert', dismissible: true },
};

export const WithActions: Story = {
	args: {
		children: (
			<div>
				My description
				<ButtonGroup>
					<Button>Label</Button>
					<Button kind="minimal">Label</Button>
				</ButtonGroup>
			</div>
		),
		dismissible: true,
	},
};

export const WithContent: Story = {
	args: {
		children: (
			<>
				<p>My description</p>
				<ul>
					<li>This is item one of a list</li>
					<li>This is item two of a list</li>
				</ul>
				<ButtonGroup>
					<Button>Label</Button>
					<Button kind="minimal">Label</Button>
				</ButtonGroup>
			</>
		),
		header: 'My title',
		dismissible: true,
	},
};

export const WithControlledDismissed: Story = {
	render: () => {
		const Component = () => {
			const [dismissed, setDismissed] = useState(false);

			return (
				<Alert
					dismissible={true}
					dismissed={dismissed}
					onDismiss={() => {
						setDismissed(true);

						setTimeout(() => {
							setDismissed(false);
						}, 1500);
					}}
				>
					With the parent handling dismiss behavior. In this example, the parent resets the{' '}
					<code>dismissed</code> value after 3 seconds.
				</Alert>
			);
		};

		return <Component />;
	},
};

export const Notification = {
	args: {
		kind: 'notification',
		flairLevel: 'default',
		header: 'Heading about a cool thing',
		primaryButton: {
			children: 'Primary action',
		},
		link: {
			href: 'https://launchdarkly.com',
			text: 'Link to learn more',
		},
		children: <div>Description about the cool thing you want people to know about</div>,
		dismissible: true,
	},
};
