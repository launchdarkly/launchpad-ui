import figma from '@figma/code-connect';

import { Alert } from '../src/Alert';

// Alert with header (when status and variant are undefined/default)
figma.connect(
	Alert,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=8003%3A631',
	{
		props: {
			isDismissable: figma.boolean('Dismissible'),
			headerText: figma.string('Header'),
			messageText: figma.string('Message'),
		},
		example: (props) => (
			<Alert isDismissable={props.isDismissable} onDismiss={() => {}}>
				<h3>{props.headerText}</h3>
				<p>{props.messageText}</p>
			</Alert>
		),
	},
);

// Alert without header (when variant is inline)
figma.connect(
	Alert,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=8003%3A631',
	{
		variant: { Variant: 'Inline' },
		props: {
			isDismissable: figma.boolean('Dismissible'),
			status: figma.enum('State', {
				Information: 'info',
			}),
			variant: figma.enum('Variant', {
				Inline: 'inline',
			}),
			messageText: figma.string('Message'),
		},
		example: (props) => (
			<Alert
				isDismissable={props.isDismissable}
				status={props.status}
				variant={props.variant}
				onDismiss={() => {}}
			>
				<p>{props.messageText}</p>
			</Alert>
		),
	},
);
