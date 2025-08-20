import figma from '@figma/code-connect';

import { Button } from '../src/Button';
import { Dialog, DialogTrigger } from '../src/Dialog';
import { Heading } from '../src/Heading';
import { Modal, ModalOverlay } from '../src/Modal';

figma.connect(
	Modal,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1%3A35555',
	{
		variant: { 'Footer?': 'false' },
		props: {
			size: figma.enum('Size', {
				Small: 'small',
				Medium: 'medium',
				Large: 'large',
			}),
			variant: figma.enum('Type', {
				Default: 'default',
				Drawer: 'drawer',
			}),
			heading: figma.string('Heading'),
		},
		example: ({ size, variant, heading }) => (
			<DialogTrigger>
				<Button>Sample trigger button</Button>
				<ModalOverlay>
					<Modal size={size} variant={variant}>
						<Dialog>
							<Heading>{heading}</Heading>
							Content goes here
						</Dialog>
					</Modal>
				</ModalOverlay>
			</DialogTrigger>
		),
	},
);

figma.connect(
	Modal,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1%3A35555',
	{
		variant: { 'Footer?': 'true' },
		props: {
			size: figma.enum('Size', {
				Small: 'small',
				Medium: 'medium',
				Large: 'large',
			}),
			heading: figma.string('Heading'),
			variant: figma.enum('Type', {
				Default: 'default',
				Drawer: 'drawer',
			}),
			footer: figma.boolean('Footer?', {
				true: figma.children(['ButtonGroup', 'Button']),
				false: undefined,
			}),
		},
		example: ({ size, variant, footer, heading }) => (
			<DialogTrigger>
				<ModalOverlay>
					<Button>Sample trigger button</Button>
					<Modal size={size} variant={variant}>
						<Dialog>
							<Heading>{heading}</Heading>
							Content goes here
							{footer}
						</Dialog>
					</Modal>
				</ModalOverlay>
			</DialogTrigger>
		),
	},
);
