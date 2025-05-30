import type { Meta, StoryObj } from '@storybook/react';

import { expect, userEvent, within } from 'storybook/test';

import { Button } from '../src/Button';
import { ButtonGroup } from '../src/ButtonGroup';
import { Link } from '../src/Link';
import { SnackbarRegion, snackbarQueue, ToastRegion, toastQueue } from '../src/Toast';

const meta: Meta<typeof ToastRegion> = {
	component: ToastRegion,
	title: 'Components/Status/Toast',
	decorators: [
		(Story, { viewMode }) =>
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

type Story = StoryObj<typeof ToastRegion>;

export const Example: Story = {
	render: (args) => {
		return (
			<>
				<ToastRegion {...args} />
				<ButtonGroup>
					<Button onPress={() => toastQueue.add({ title: 'A success toast!', status: 'success' })}>
						Show toast
					</Button>
					<Button
						onPress={() => {
							for (const toast of toastQueue.visibleToasts) {
								toastQueue.close(toast.key);
							}
						}}
					>
						Clear
					</Button>
				</ButtonGroup>
			</>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getAllByRole('button')[0]);
		const body = canvasElement.ownerDocument.body;
		await expect(await within(body).findByRole('alert'));
	},
};

export const Snackbar: Story = {
	render: (args) => {
		return (
			<>
				<SnackbarRegion {...args} />
				<ButtonGroup>
					<Button
						onPress={() => {
							snackbarQueue.add({
								title: 'An info snackbar',
								description: 'Dismiss me!',
								action: <Link href="/">Link</Link>,
								status: 'info',
							});
						}}
					>
						Show snackbar
					</Button>
					<Button
						onPress={() => {
							for (const toast of snackbarQueue.visibleToasts) {
								snackbarQueue.close(toast.key);
							}
						}}
					>
						Clear
					</Button>
				</ButtonGroup>
			</>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getAllByRole('button')[0]);
		const body = canvasElement.ownerDocument.body;
		await expect(await within(body).findByRole('alert'));
	},
};
