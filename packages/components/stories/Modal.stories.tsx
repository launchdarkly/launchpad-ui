import type { Meta, ReactRenderer, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';
import type { PlayFunction } from 'storybook/internal/types';

import { expect, userEvent, waitFor, within } from 'storybook/test';

import { allModes } from '../../../.storybook/modes';
import { Button } from '../src/Button';
import { Dialog, DialogTrigger } from '../src/Dialog';
import { Heading } from '../src/Heading';
import { IconButton } from '../src/IconButton';
import { Modal, ModalOverlay } from '../src/Modal';
import { Text } from '../src/Text';
import { ToastRegion, toastQueue } from '../src/Toast';

const meta: Meta<typeof Modal> = {
	component: Modal,
	subcomponents: { ModalOverlay, Dialog, DialogTrigger, Heading } as Record<
		string,
		ComponentType<unknown>
	>,
	title: 'Components/Overlays/Modal',
	parameters: {
		figma: {
			design:
				'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=8079-93230&m=dev',
		},
	},
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

type Story = StoryObj<typeof Modal>;

const renderModal = (args: Story['args']) => (
	<DialogTrigger>
		<Button>Trigger</Button>
		<ModalOverlay>
			<Modal {...args}>
				<Dialog>
					{({ close }) => (
						<>
							<div slot="header">
								<Heading slot="title">Title</Heading>
								<IconButton
									aria-label="close"
									icon="cancel"
									size="small"
									variant="minimal"
									onPress={close}
								/>
								<Text slot="subtitle">Subtitle</Text>
							</div>
							<div slot="body">Body text</div>
							<div slot="footer">
								<Button slot="close">Cancel</Button>
								<Button variant="primary">Confirm</Button>
							</div>
						</>
					)}
				</Dialog>
			</Modal>
		</ModalOverlay>
	</DialogTrigger>
);

const play: PlayFunction<ReactRenderer> = async ({ canvasElement }) => {
	const canvas = within(canvasElement);

	await userEvent.click(canvas.getByRole('button'));
	const body = canvasElement.ownerDocument.body;
	await waitFor(async () => {
		expect(await within(body).findByRole('dialog')).toBeVisible();
	});
};

export const Example: Story = {
	render: (args) => renderModal(args),
	play,
	parameters: {
		chromatic: {
			modes: {
				mobile: allModes.mobile,
			},
		},
	},
};

export const Drawer: Story = {
	render: (args) => renderModal(args),
	play,
	args: {
		variant: 'drawer',
		size: 'small',
	},
	parameters: {
		chromatic: {
			modes: {
				mobile: allModes.mobile,
			},
		},
	},
};

/**
 * Bug reproduction: Dialog closes when clicking a button inside it while Toast is active.
 *
 * Steps to reproduce:
 * 1. Click "Show Toast" to display a toast notification
 * 2. Click "Open Dialog" to open the modal
 * 3. Click "Click Me" button inside the dialog
 *
 * Expected: Button click should work normally, dialog stays open
 * Actual: Dialog closes unexpectedly
 */
export const DialogWithActiveToast: Story = {
	render: (args) => {
		return (
			<>
				<ToastRegion />
				<div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
					<DialogTrigger>
						<Button variant="primary">Open Dialog</Button>
						<ModalOverlay>
							<Modal {...args}>
								<Dialog>
									{({ close }) => (
										<>
											<div slot="header">
												<Heading slot="title">Dialog with Toast Active</Heading>
												<IconButton
													aria-label="close"
													icon="cancel"
													size="small"
													variant="minimal"
													onPress={close}
												/>
												<Text slot="subtitle">Try clicking the button below with toast active</Text>
											</div>
											<div slot="body">
												<p>
													When a toast is visible, clicking the button below should NOT close the
													dialog.
												</p>
												<div style={{ marginTop: '1rem' }}>
													<Button
														onPress={() => {
															toastQueue.add({
																title: 'Toast is active',
																description: 'Now try clicking the button inside the dialog',
																status: 'info',
															});
														}}
													>
														Show Toast
													</Button>{' '}
												</div>
											</div>
											<div slot="footer">
												<Button slot="close">Cancel</Button>
												<Button variant="primary">Confirm</Button>
											</div>
										</>
									)}
								</Dialog>
							</Modal>
						</ModalOverlay>
					</DialogTrigger>
				</div>
			</>
		);
	},
};
