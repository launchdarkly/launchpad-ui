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
