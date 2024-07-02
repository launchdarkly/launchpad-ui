import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumb, Breadcrumbs, Link } from '../src';

const meta: Meta<typeof Breadcrumbs> = {
	component: Breadcrumbs,
	// @ts-ignore
	subcomponents: { Breadcrumb },
	title: 'Components/Navigation/Breadcrumbs',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
	},
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Example: Story = {
	render: (args) => {
		return (
			<Breadcrumbs {...args}>
				<Breadcrumb>
					<Link href="/">Components</Link>
				</Breadcrumb>
				<Breadcrumb>
					<Link href="/navigation/">Navigation</Link>
				</Breadcrumb>
				<Breadcrumb>
					<Link>Breadcrumbs</Link>
				</Breadcrumb>
			</Breadcrumbs>
		);
	},
};
