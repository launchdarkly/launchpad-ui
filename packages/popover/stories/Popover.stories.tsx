import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@launchpad-ui/button';
import { userEvent, within } from '@storybook/test';

import { Popover } from '../src';

export default {
	component: Popover,
	title: 'Legacy/Popover',
	description: 'Popovers display content within a portal triggered by user interactions.',
	parameters: {
		chromatic: { disableSnapshot: true },
	},
	argTypes: {
		placement: {
			table: {
				category: 'Presentation',
			},
		},
		interactionKind: {
			table: {
				category: 'Presentation',
			},
		},
		children: {
			table: {
				category: 'Content',
			},
		},
		onClick: {
			table: {
				category: 'Functions',
			},
		},
		onClose: {
			table: {
				category: 'Functions',
			},
		},
		onInteraction: {
			table: {
				category: 'Functions',
			},
		},
	},
	decorators: [
		(Story) => (
			<div
				style={{
					height: '100vh',
					display: 'grid',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Story />
			</div>
		),
	],
} as Meta<typeof Popover>;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
	args: {
		children: [
			<Button key="1">Target</Button>,
			<div key="2" style={{ padding: '1.25rem' }}>
				Content to show
			</div>,
		],
		interactionKind: 'hover-or-focus',
	},
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);

		for (const button of canvas.getAllByRole('button')) {
			await userEvent.hover(button);
		}
	},
};
