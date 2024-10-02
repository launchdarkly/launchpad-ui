import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '@launchpad-ui/icons';

import { Button, Disclosure, DisclosurePanel, Heading } from '../src';

const meta: Meta<typeof Disclosure> = {
	component: Disclosure,
	// @ts-ignore
	subcomponents: { DisclosurePanel },
	title: 'Components/Navigation/Disclosure',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
	},
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
