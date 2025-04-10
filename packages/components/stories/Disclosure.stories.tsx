import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentType } from 'react';

import { Icon } from '@launchpad-ui/icons';
import { vars } from '@launchpad-ui/vars';

import { Button } from '../src/Button';
import { Disclosure, DisclosurePanel } from '../src/Disclosure';
import { Heading } from '../src/Heading';

const meta: Meta<typeof Disclosure> = {
	component: Disclosure,
	subcomponents: { DisclosurePanel } as Record<string, ComponentType<unknown>>,
	title: 'Components/Navigation/Disclosure',
};

export default meta;

type Story = StoryObj<typeof Disclosure>;

export const Example: Story = {
	args: {
		children: (
			<>
				<Heading>
					<Button slot="trigger" variant="minimal">
						<Icon name="chevron-right" size="small" />
						Header
					</Button>
				</Heading>
				<DisclosurePanel>
					<p>Panel with content.</p>
				</DisclosurePanel>
			</>
		),
	},
};

export const Accordion: Story = {
	args: {
		children: (
			<>
				<Heading>
					<Button
						slot="trigger"
						style={{ padding: vars.spacing[400], width: '100%', justifyContent: 'flex-start' }}
						variant="minimal"
					>
						<Icon name="chevron-right" size="small" />
						Header
					</Button>
				</Heading>
				<DisclosurePanel>
					<p>Panel with content.</p>
				</DisclosurePanel>
			</>
		),
		style: {
			border: `1px solid ${vars.color.border.interactive.secondary.base}`,
			borderRadius: vars.borderRadius.medium,
		},
	},
};
