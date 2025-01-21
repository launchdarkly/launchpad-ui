import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@launchpad-ui/button';
import { Icon } from '@launchpad-ui/icons';
import { Tooltip } from '@launchpad-ui/tooltip';
import { userEvent, within } from '@storybook/test';
import { useState } from 'react';
import { useRef } from 'react';

import { allModes } from '../../../.storybook/modes';
import { REACT_NODE_TYPE_DOCS } from '../../../.storybook/utils';
import { AbsoluteModalFooter, Modal, ModalBody, ModalFooter, ModalHeader } from '../src';

export default {
	component: Modal,
	title: 'Legacy/Modal',
	description: 'Modals presents users information and actions over a page.',
	parameters: {
		controls: { sort: 'requiredFirst' },
		chromatic: { disableSnapshot: true },
	},
	subcomponents: {
		ModalHeader,
		ModalBody,
		AbsoluteModalFooter,
		ModalFooter,
	},
	argTypes: {
		size: {
			description: 'A configurable width variant.',
			options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
			control: { type: 'radio', description: 'lkfjdslkfds' },
		},
		children: {
			description: 'A slot for adding child components.',
			control: 'text',
			table: {
				type: REACT_NODE_TYPE_DOCS,
			},
		},
		status: {
			description:
				'Currently, only a "warning" status is exposed, which should only be used when the modal is destructive.',
			options: ['warning', undefined],
			control: { type: 'radio' },
		},
		cancelWithOverlayClick: {
			description: 'When false, disables ability to cancel when clicking overlay.',
			control: 'boolean',
		},
		onReady: {
			table: {
				disable: true,
			},
		},
		onCancel: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		size: 'medium',
	},
	decorators: [
		(Story) => (
			<div
				style={{
					height: '100vh',
				}}
			>
				<Story />
			</div>
		),
	],
} as Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;

const play = async ({
	canvasElement,
	viewMode,
}: {
	canvasElement: HTMLElement;
	viewMode: 'story' | 'docs';
}) => {
	if (viewMode !== 'docs') {
		const canvas = within(canvasElement);
		await userEvent.click(canvas.getAllByRole('button')[0]);
	}
};

export const Default: Story = {
	render: (props) => {
		const [show, setShow] = useState(false);
		const button = <Button onClick={() => setShow(true)}>Open modal</Button>;

		return show ? (
			<>
				{button}
				<Modal {...props} onCancel={() => setShow(!show)}>
					<ModalHeader title="Heading" description="A description" />
					<ModalBody>Body text</ModalBody>
					<ModalFooter
						primaryButton={
							<Button kind="primary" onClick={() => setShow(false)}>
								Okay
							</Button>
						}
						secondaryButton={<Button onClick={() => setShow(false)}>Cancel</Button>}
					/>
				</Modal>
			</>
		) : (
			button
		);
	},
	play,
	parameters: {
		docs: { disable: false },
		a11y: {
			options: {
				rules: {
					// @fixme
					'duplicate-id-aria': { enabled: false },
				},
			},
		},
	},
};

export const Destructive: Story = {
	render: () => {
		return (
			<Modal status="warning" size="small">
				<ModalHeader title="Unsaved changes" />
				<ModalBody>
					<p>If you leave this page, any unsaved changes will be lost.</p>
				</ModalBody>
				<ModalFooter
					primaryButton={<Button kind="destructive">Leave page</Button>}
					secondaryButton={<Button>Cancel</Button>}
				/>
			</Modal>
		);
	},
	parameters: {
		docs: { disable: true },
		a11y: {
			options: {
				rules: {
					// @fixme
					'duplicate-id-aria': { enabled: false },
				},
			},
		},
	},
};

export const Small: Story = {
	render: () => {
		return (
			<Modal size="small">
				<ModalHeader title="Heading" />
				<ModalBody>
					<p>Body text</p>
				</ModalBody>
				<ModalFooter
					primaryButton={<Button kind="primary">Okay</Button>}
					secondaryButton={<Button>Cancel</Button>}
				/>
			</Modal>
		);
	},
	parameters: {
		docs: { disable: true },
		a11y: {
			options: {
				rules: {
					// @fixme
					'duplicate-id-aria': { enabled: false },
				},
			},
		},
	},
};

export const Large: Story = {
	render: () => {
		return (
			<Modal size="large">
				<ModalHeader title="Heading" />
				<ModalBody>
					<p>
						The <code>large</code> modal is only appropriate when the contents of the modal
						necessitate the extra width.
					</p>
					<p>
						<strong>This size should be used sparingly.</strong>
					</p>
				</ModalBody>
				<ModalFooter
					primaryButton={<Button kind="primary">Okay</Button>}
					secondaryButton={<Button>Cancel</Button>}
				/>
			</Modal>
		);
	},
	parameters: {
		docs: { disable: true },
		a11y: {
			options: {
				rules: {
					// @fixme
					'duplicate-id-aria': { enabled: false },
				},
			},
		},
	},
};

export const KitchenSink: Story = {
	render: () => {
		return (
			<Modal status="warning" size="medium">
				<ModalHeader
					title={
						<>
							Heading <Icon name="click" size="small" />
						</>
					}
					description={
						<>
							This example shows how the modal responds to passing custom components that use HTML.
							This is useful for <i>doing</i> <strong>things like this</strong>.
						</>
					}
					hasRequiredField
				/>
				<ModalBody>
					<h3>More information</h3>
					<p>Lorem ipsum</p>
					<ul>
						<li>List item one</li>
						<li>List item two</li>
						<li>List item three</li>
					</ul>
				</ModalBody>
				<ModalFooter
					primaryButton={
						<Button icon={<Icon name="check" />} kind="primary">
							Okay
						</Button>
					}
					secondaryButton={<Button>Cancel</Button>}
				/>
			</Modal>
		);
	},
	parameters: {
		docs: { disable: true },
		chromatic: {
			modes: {
				mobile: allModes.mobile,
			},
		},
		a11y: {
			options: {
				rules: {
					// @fixme
					'duplicate-id-aria': { enabled: false },
				},
			},
		},
	},
};

export const TallBody: Story = {
	render: () => {
		const [showLess, setShowLess] = useState(false);
		return (
			<Modal>
				<ModalHeader
					title="Title"
					description="This example is meant to illustrate how the modal overflows when there is a lot of
							text. You can make your viewport smaller to get a better idea. Lorem ipsum dolor sit
							amet, consectetur adipiscing elit. Ut malesuada ultricies mauris, in gravida nibh
							vehicula vel."
				/>
				<ModalBody>
					<p>
						Phasellus vulputate varius orci, ut auctor mi pretium a. Duis vestibulum sagittis nulla
						sit amet varius. Donec suscipit mi dui, eu ultrices felis gravida non. Proin vitae enim
						velit. Nunc luctus suscipit quam, a bibendum metus malesuada in. Mauris eleifend turpis
						vitae posuere rutrum. Mauris sit amet tortor quam. Mauris ac lacinia nibh, in egestas
						ligula. Donec vel leo a metus egestas venenatis id feugiat augue. vel.
					</p>

					{!showLess && (
						<>
							<p>
								Ut vel orci urna. Quisque tempus sem non massa blandit, et maximus dolor blandit.
								Phasellus vulputate varius orci, ut auctor mi pretium a. Duis vestibulum sagittis
								nulla sit amet varius. Donec suscipit mi dui, eu ultrices felis gravida non. Proin
								vitae enim velit. Nunc luctus suscipit quam, a bibendum metus malesuada in. Mauris
								eleifend turpis vitae posuere rutrum. Mauris sit amet tortor quam. Mauris ac lacinia
								nibh, in egestas ligula. Donec vel leo a metus egestas venenatis id feugiat augue.
							</p>

							<p>
								Proin eu pretium justo. Phasellus ornare sem nec magna placerat ornare. Nam id nisl
								libero. Quisque felis lorem, tempor accumsan dapibus sagittis, fringilla non tortor.
								Sed at nisi nunc. Aliquam lectus elit, auctor sit amet tortor et, rutrum facilisis
								mauris. Ut quis pulvinar ipsum. Cras vitae malesuada massa. Sed ut metus ex. Sed
								turpis metus, porttitor sed nibh id, egestas finibus diam. Fusce iaculis rhoncus
								venenatis. Suspendisse potenti. Sed at felis vitae turpis elementum tristique. Ut
								sed pretium dolor, ut lobortis augue. Vivamus cursus malesuada scelerisque. Nunc non
								condimentum neque.
							</p>

							<p>
								Ut vel orci urna. Quisque tempus sem non massa blandit, et maximus dolor blandit.
								Phasellus vulputate varius orci, ut auctor mi pretium a. Duis vestibulum sagittis
								nulla sit amet varius. Donec suscipit mi dui, eu ultrices felis gravida non. Proin
								vitae enim velit. Nunc luctus suscipit quam, a bibendum metus malesuada in. Mauris
								eleifend turpis vitae posuere rutrum. Mauris sit amet tortor quam. Mauris ac lacinia
								nibh, in egestas ligula. Donec vel leo a metus egestas venenatis id feugiat augue.
							</p>

							<p>
								Proin eu pretium justo. Phasellus ornare sem nec magna placerat ornare. Nam id nisl
								libero. Quisque felis lorem, tempor accumsan dapibus sagittis, fringilla non tortor.
								Sed at nisi nunc. Aliquam lectus elit, auctor sit amet tortor et, rutrum facilisis
								mauris. Ut quis pulvinar ipsum. Cras vitae malesuada massa. Sed ut metus ex. Sed
								turpis metus, porttitor sed nibh id, egestas finibus diam. Fusce iaculis rhoncus
								venenatis. Suspendisse potenti. Sed at felis vitae turpis elementum tristique. Ut
								sed pretium dolor, ut lobortis augue. Vivamus cursus malesuada scelerisque. Nunc non
								condimentum neque.
							</p>
						</>
					)}
				</ModalBody>
				<ModalFooter
					primaryButton={
						<Button onClick={() => setShowLess(!showLess)}>
							Show {showLess ? 'more' : 'less'}
						</Button>
					}
				/>
			</Modal>
		);
	},
	parameters: {
		docs: { disable: true },
		a11y: {
			options: {
				rules: {
					// @fixme
					'duplicate-id-aria': { enabled: false },
				},
			},
		},
	},
};

export const ForcedDarkTheme: Story = {
	render: () => {
		return (
			<Modal size="small" theme="dark">
				<ModalHeader title="Inverted theme" />
				<ModalBody>
					<p>
						You can force set the theme using the <code>theme</code> prop.
					</p>
				</ModalBody>
				<ModalFooter
					primaryButton={<Button kind="destructive">Leave page</Button>}
					secondaryButton={<Button>Cancel</Button>}
				/>
			</Modal>
		);
	},
	parameters: {
		docs: { disable: true },
		a11y: {
			options: {
				rules: {
					// @fixme
					'color-contrast': { enabled: false },
					'duplicate-id-aria': { enabled: false },
				},
			},
		},
	},
};

export const WithForm: Story = {
	render: () => {
		const inputRef = useRef<HTMLInputElement>(null);

		return (
			<Modal>
				<ModalHeader
					title="Title"
					description="This example shows how the modal works when a form wraps the body and footer."
				/>
				<ModalBody>
					<p>Try out this form:</p>
					<form
						id="my-form"
						onSubmit={(event) => {
							if (inputRef.current) {
								alert(`A name was submitted: ${inputRef.current.value}`);
							}

							event.preventDefault();
						}}
					>
						<label htmlFor="name">
							Your Name
							<input type="text" name="name" id="name" ref={inputRef} />
						</label>
					</form>
				</ModalBody>
				<ModalFooter
					primaryButton={
						<Button type="submit" form="my-form">
							Submit
						</Button>
					}
				/>
			</Modal>
		);
	},
	parameters: {
		docs: { disable: true },
		a11y: {
			options: {
				rules: {
					// @fixme
					'duplicate-id-aria': { enabled: false },
					'duplicate-id': { enabled: false },
					'target-size': { enabled: false },
				},
			},
		},
	},
};

export const WithAbsolutelyPositionedFooter: Story = {
	render: () => {
		const inputRef = useRef<HTMLInputElement>(null);

		return (
			<Modal>
				<ModalHeader
					title="Title"
					description="In the case of forms, it&apos;s possible you need the modal body and footer contents
							to be wrapped in a form. In this case, you lose the default positioning with the
							normal implementation. In these cases, you can absolutely position the footer so it
							can be nested within the modal body."
				/>
				<ModalBody>
					<p>Try out this form:</p>
					<form
						onSubmit={(event) => {
							if (inputRef.current) {
								alert(`A name was submitted: ${inputRef.current.value}`);
							}

							event.preventDefault();
						}}
					>
						<label htmlFor="name">
							Your Name
							<input type="text" name="name" id="name" ref={inputRef} />
						</label>
						<AbsoluteModalFooter primaryButton={<Button type="submit">Submit</Button>} />
					</form>
				</ModalBody>
			</Modal>
		);
	},
	parameters: {
		docs: { disable: true },
		a11y: {
			options: {
				rules: {
					// @fixme
					'duplicate-id-aria': { enabled: false },
					'target-size': { enabled: false },
				},
			},
		},
	},
};

export const WithTooltip: Story = {
	render: (props) => {
		const [show, setShow] = useState(false);
		const button = <Button onClick={() => setShow(true)}>Open modal</Button>;

		return show ? (
			<>
				{button}
				<Modal {...props} onCancel={() => setShow(!show)}>
					<ModalHeader title="Heading" description="A description" />
					<ModalBody>
						<Tooltip content="If you hit the escape key hovering over this tooltip, it should dismiss the tooltip but not the drawer.">
							{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
							<button>Hover over me or focus on me!</button>
						</Tooltip>
					</ModalBody>
					<ModalFooter
						primaryButton={
							<Button kind="primary" onClick={() => setShow(false)}>
								Okay
							</Button>
						}
						secondaryButton={<Button onClick={() => setShow(false)}>Cancel</Button>}
					/>
				</Modal>
			</>
		) : (
			button
		);
	},
	play,
	parameters: {
		docs: { disable: false },
		a11y: {
			options: {
				rules: {
					// @fixme
					'duplicate-id-aria': { enabled: false },
					'target-size': { enabled: false },
				},
			},
		},
	},
};
