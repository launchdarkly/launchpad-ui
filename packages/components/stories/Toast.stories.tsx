import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { expect, userEvent, within } from '@storybook/test';

import { Button, Link, SnackbarContainer, SnackbarQueue, ToastContainer, ToastQueue } from '../src';

const meta: Meta<typeof ToastContainer> = {
	component: ToastContainer,
	// @ts-ignore
	subcomponents: { SnackbarContainer },
	title: 'Components/Status/Toast',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
		chromatic: { pauseAnimationAtEnd: true },
		a11y: {
			element: '[data-react-aria-top-layer]',
		},
	},
	decorators: [
		(Story: StoryFn, { viewMode }) =>
			viewMode === 'story' ? (
				<div style={{ height: '100vh' }}>
					<Story />
				</div>
			) : (
				<Story />
			),
	],
};

export default meta;

type Story = StoryObj<typeof ToastContainer>;

export const Example: Story = {
	render: (args) => {
		return (
			<>
				<ToastContainer {...args} />
				<Button onPress={() => ToastQueue.success(<span>A success toast!</span>)}>
					Show toast
				</Button>
			</>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('button'));
		const body = canvasElement.ownerDocument.body;
		await expect(await within(body).findByRole('alert'));
	},
};

export const Snackbar: Story = {
	render: (args) => {
		return (
			<>
				<SnackbarContainer {...args} />
				<Button
					onPress={() =>
						SnackbarQueue.info({
							title: 'An info snackbar',
							description: 'Dismiss me!',
							action: <Link href="/">Link</Link>,
						})
					}
				>
					Show snackbar
				</Button>
			</>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('button'));
		const body = canvasElement.ownerDocument.body;
		await expect(await within(body).findByRole('alert'));
	},
};
