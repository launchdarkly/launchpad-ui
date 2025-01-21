import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentType } from 'react';

import { Breadcrumb, Breadcrumbs, Link } from '../src';

const meta: Meta<typeof Breadcrumbs> = {
	component: Breadcrumbs,
	subcomponents: { Breadcrumb } as Record<string, ComponentType<unknown>>,
	title: 'Components/Navigation/Breadcrumbs',
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Example: Story = {
	args: {
		children: (
			<>
				<Breadcrumb>
					<Link href="/">Components</Link>
				</Breadcrumb>
				<Breadcrumb>
					<Link href="/navigation/">Navigation</Link>
				</Breadcrumb>
				<Breadcrumb>
					<Link>Breadcrumbs</Link>
				</Breadcrumb>
			</>
		),
	},
};

export const States: Story = {
	args: {
		children: (
			<>
				<Breadcrumb>
					<Link href="/">Components</Link>
				</Breadcrumb>
				<Breadcrumb>
					<Link href="/navigation/" isDisabled>
						Navigation
					</Link>
				</Breadcrumb>
				<Breadcrumb>
					<Link>Breadcrumbs</Link>
				</Breadcrumb>
			</>
		),
	},
};
