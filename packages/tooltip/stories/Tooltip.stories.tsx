import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@launchpad-ui/button';
import { userEvent, within } from 'storybook/test';

import { Tooltip } from '../src';

export default {
	component: Tooltip,
	title: 'Legacy/Tooltip',
	tags: ['deprecated'],
	description: 'Tooltips provide additional information on hover or focus.',
	parameters: {
		chromatic: { disableSnapshot: true },
	},
	argTypes: {
		placement: {
			table: {
				category: 'Presentation',
			},
		},
		children: {
			table: {
				category: 'Content',
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
} as Meta<typeof Tooltip>;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
	args: {
		children: [<Button key="1">Target</Button>, <span key="2">Content to show</span>],
	},
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);

		for (const button of canvas.getAllByRole('button')) {
			await userEvent.hover(button);
		}
	},
};
