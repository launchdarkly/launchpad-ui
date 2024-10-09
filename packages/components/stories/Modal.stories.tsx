import type { Meta, ReactRenderer, StoryFn, StoryObj } from '@storybook/react';
import type { PlayFunction } from '@storybook/types';

import { Icon } from '@launchpad-ui/icons';
import { expect, userEvent, within } from '@storybook/test';

import { allModes } from '../../../.storybook/modes';
import {
	Button,
	Dialog,
	DialogTrigger,
	Heading,
	IconButton,
	Modal,
	ModalOverlay,
	Text,
} from '../src';

const meta: Meta<typeof Modal> = {
	component: Modal,
	// @ts-ignore
	subcomponents: { ModalOverlay, Dialog, DialogTrigger, Heading },
	title: 'Components/Overlays/Modal',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
		chromatic: { pauseAnimationAtEnd: true },
		a11y: {
			element: 'div[data-rac]',
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

type Story = StoryObj<typeof Modal>;

const renderModal = (args: Story['args'], destructive = false) => (
	<DialogTrigger>
		<Button>Trigger</Button>
		<ModalOverlay>
			<Modal {...args}>
				<Dialog>
					{({ close }) => (
						<>
							<div slot="header">
								{destructive && (
									<Icon
										name="alert-rhombus"
										size="medium"
										variant={null}
										fill="var(--lp-color-fill-feedback-error)"
									/>
								)}
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
								<Button onPress={close}>Cancel</Button>
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
	await expect(await within(body).findByRole('dialog'));
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
	},
	parameters: {
		chromatic: {
			modes: {
				mobile: allModes.mobile,
			},
		},
	},
};

export const Destructive: Story = {
	render: (args) => renderModal(args, true),
	play,
};
