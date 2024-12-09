import type { Meta, StoryObj } from '@storybook/react';
import type { CopyToClipboardHandleRef } from '../src/CopyToClipboard';

import { userEvent, within } from '@storybook/test';
import { useRef } from 'react';

import { CopyToClipboard } from '../src';

export default {
	component: CopyToClipboard,
	title: 'Legacy/Deprecated/CopyToClipboard',
	description: 'Clipboards copy text to the clipboard.',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__CLIPBOARD,
		},
		chromatic: { disableSnapshot: true },
	},
	argTypes: {
		children: {
			table: {
				category: 'Content',
			},
		},
		onClick: {
			table: {
				category: 'Functions',
			},
		},
	},
	decorators: [
		(Story) => (
			<div
				style={{
					height: '100vh',
					display: 'grid',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Story />
			</div>
		),
	],
} as Meta<typeof CopyToClipboard>;

type Story = StoryObj<typeof CopyToClipboard>;

export const Default: Story = {
	args: { text: 'Code content', children: 'Copy content' },
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);

		userEvent.hover(canvas.getByRole('button'));
	},
};

export const Basic: Story = {
	args: { text: 'Code content', children: 'Copy content', kind: 'basic' },
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);

		userEvent.click(canvas.getByRole('button'));
	},
};

export const Minimal: Story = {
	args: { text: 'Code content', children: 'Copy content', kind: 'minimal' },
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);

		userEvent.hover(canvas.getByRole('button'));
	},
};

export const ExampleWithSlottedCodeChild: Story = {
	args: {
		text: 'Code content',
		asChild: true,
		children: <code>Code content</code>,
	},
};

const WithImperativeHandleWrapper = () => {
	const ref = useRef<CopyToClipboardHandleRef>(null);

	const handleClick = () => {
		ref.current?.handleCopy();
	};

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			onClick={handleClick}
			style={{ border: '3px solid #efefef', padding: '1.25rem', maxWidth: '500px' }}
		>
			<h2>Triggering copy imperatively</h2>
			<p>
				This whole container is clickable, even though only the button is wrapped in the{' '}
				<code>CopyToClipboard</code> component. This is useful when you need to handle the copy
				event in a customized way from the parent.
			</p>
			<CopyToClipboard text="Content" ref={ref}>
				Copy content
			</CopyToClipboard>
		</div>
	);
};

export const ImperativeHandleWrapper: Story = {
	render: () => {
		return <WithImperativeHandleWrapper />;
	},
};
