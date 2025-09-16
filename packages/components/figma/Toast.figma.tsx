import figma from '@figma/code-connect';

import { Button } from '../src/Button';
import { ButtonGroup } from '../src/ButtonGroup';
import { Toast, ToastRegion, toastQueue } from '../src/Toast';

figma.connect(
	Toast,
	'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-45160',
	{
		props: {
			// For now sample is used instead of actual toasts.
			// variant: figma.enum('Variant', {
			// 	Default: 'default',
			// 	Snackbar: 'snackbar',
			// }),
			// "message": figma.string('Message'),
			// "hasLink": figma.boolean('Has link'),
			// "link": figma.string('Link'),
			// "heading": figma.string('Heading'),
			// "dismissible": figma.boolean('Dismissible'),
			// "hasHeading": figma.boolean('Has heading'),
			// "state": figma.enum('State', {
			//   "Error": "error",
			//   "Info": "info",
			//   "Negative": "negative",
			//   "Neutral": "neutral",
			//   "Positive": "positive",
			//   "Success": "success"
			// })
		},
		example: (props) => (
			<div>
				<ToastRegion {...props} />
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
			</div>
		),
	},
);
