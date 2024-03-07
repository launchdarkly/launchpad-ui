import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Button, SnackbarContainer, SnackbarQueue, ToastContainer, ToastQueue } from '../src';

const meta: Meta<typeof ToastContainer> = {
	component: ToastContainer,
	title: 'React Aria Components/Toast',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
		chromatic: { pauseAnimationAtEnd: true },
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
				<Button onPress={() => ToastQueue.info(<span>An info toast!</span>)}>Show toast</Button>
			</>
		);
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
						})
					}
				>
					Show snackbar
				</Button>
			</>
		);
	},
};
