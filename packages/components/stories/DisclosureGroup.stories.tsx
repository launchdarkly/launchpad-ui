import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '@launchpad-ui/icons';

import { Button } from '../src/Button';
import { Disclosure, DisclosurePanel } from '../src/Disclosure';
import { DisclosureGroup } from '../src/DisclosureGroup';
import { Heading } from '../src/Heading';

const meta: Meta<typeof DisclosureGroup> = {
	component: DisclosureGroup,
	title: 'Components/Navigation/DisclosureGroup',
};

export default meta;

type Story = StoryObj<typeof DisclosureGroup>;

export const Example: Story = {
	args: {
		children: (
			<>
				<Disclosure id="one">
					<Heading>
						<Button slot="trigger" variant="minimal">
							<Icon name="chevron-right" size="small" />
							Disclosure one
						</Button>
					</Heading>
					<DisclosurePanel>
						<p>Panel with content.</p>
					</DisclosurePanel>
				</Disclosure>
				<Disclosure id="two">
					<Heading>
						<Button slot="trigger" variant="minimal">
							<Icon name="chevron-right" size="small" />
							Disclosure two
						</Button>
					</Heading>
					<DisclosurePanel>
						<p>Panel with content.</p>
					</DisclosurePanel>
				</Disclosure>
				<Disclosure id="three">
					<Heading>
						<Button slot="trigger" variant="minimal">
							<Icon name="chevron-right" size="small" />
							Disclosure three
						</Button>
					</Heading>
					<DisclosurePanel>
						<p>Panel with content.</p>
					</DisclosurePanel>
				</Disclosure>
			</>
		),
		defaultExpandedKeys: ['two'],
	},
};
