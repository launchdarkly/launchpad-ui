// @ts-ignore - Storybook types are available at workspace root
import type { Meta, StoryObj } from '@storybook/react';

import { Button, Heading, Text } from '@launchpad-ui/components';

import { LaunchPadContrail } from '../src';

const meta: Meta<typeof LaunchPadContrail> = {
	title: 'Tools/LaunchPadContrail',
	component: LaunchPadContrail,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component:
					'Developer tool for visually identifying LaunchPad components. Press Cmd/Ctrl + L to toggle highlighting.',
			},
		},
	},
	argTypes: {
		shortcut: {
			control: 'text',
			description: 'Keyboard shortcut to toggle highlighting',
		},
		docsBaseUrl: {
			control: 'text',
			description: 'Base URL for component documentation',
		},
		storybookUrl: {
			control: 'text',
			description: 'URL for Storybook instance',
		},
		enabled: {
			control: 'boolean',
			description: 'Whether Contrail is enabled',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample page with LaunchPad components to test Contrail
const SamplePage = () => (
	<div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
		<Heading level={1}>LaunchPad Contrail Demo</Heading>

		<Text>
			This page contains various LaunchPad components. Press <strong>Cmd/Ctrl + L</strong> to toggle
			component highlighting and hover over components to see their information.
		</Text>

		<div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
			<Button variant="primary">Primary Button</Button>
			<Button variant="default">Default Button</Button>
			<Button variant="destructive">Destructive Button</Button>
		</div>

		<div style={{ marginTop: '2rem' }}>
			<Heading level={2}>Form Example</Heading>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
				{/* These would need actual form components when available */}
				<div
					data-launchpad="TextField"
					style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
				>
					TextField Component
				</div>
				<div data-launchpad="Checkbox" style={{ padding: '0.5rem' }}>
					Checkbox Component
				</div>
				<div
					data-launchpad="Select"
					style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
				>
					Select Component
				</div>
			</div>
		</div>

		<div style={{ marginTop: '2rem' }}>
			<Heading level={2}>Other Components</Heading>
			<div
				data-launchpad="Alert"
				style={{
					padding: '1rem',
					background: '#f0f9ff',
					border: '1px solid #0ea5e9',
					borderRadius: '8px',
					marginBottom: '1rem',
				}}
			>
				This is an Alert component
			</div>

			<div
				data-launchpad="Card"
				style={{
					padding: '1rem',
					border: '1px solid #e5e7eb',
					borderRadius: '8px',
					background: 'white',
				}}
			>
				This is a Card component with some content inside it.
			</div>
		</div>
	</div>
);

export const Default: Story = {
	args: {
		enabled: true,
		shortcut: 'cmd+l',
		docsBaseUrl: 'https://launchpad.launchdarkly.com',
		storybookUrl: 'https://launchpad-storybook.com',
	},
	render: (args: any) => (
		<>
			<SamplePage />
			<LaunchPadContrail {...args} />
		</>
	),
};

export const CustomShortcut: Story = {
	args: {
		...Default.args,
		shortcut: 'ctrl+shift+h',
	},
	render: Default.render,
	parameters: {
		docs: {
			description: {
				story: 'Use a custom keyboard shortcut (Ctrl+Shift+H) to toggle highlighting.',
			},
		},
	},
};

export const Disabled: Story = {
	args: {
		...Default.args,
		enabled: false,
	},
	render: Default.render,
	parameters: {
		docs: {
			description: {
				story: 'Contrail is disabled and will not respond to keyboard shortcuts.',
			},
		},
	},
};
