import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import type { PlayFunction } from 'storybook/internal/types';

import { Icon } from '@launchpad-ui/icons';
import { vars } from '@launchpad-ui/vars';
import { useEffect, useRef, useState } from 'react';
import { fireEvent, userEvent, within } from 'storybook/test';

import { Button } from '../src/Button';

const meta: Meta<typeof Button> = {
	component: Button,
	title: 'Components/Buttons/Button',
	parameters: {
		test: {
			dangerouslyIgnoreUnhandledErrors: true,
		},
	},
	decorators: [
		(Story) => (
			<div
				style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}
			>
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof Button>;

const renderStates = (args: Story['args']) => (
	<div
		style={{
			display: 'grid',
			gridTemplateRows: '1fr',
			gridTemplateColumns: `${vars.size[128]} auto`,
			gap: vars.spacing[400],
			alignItems: 'center',
		}}
	>
		<span style={{ font: vars.text.body[1].semibold }}>Resting</span>
		<Button {...args} />

		<span style={{ font: vars.text.body[1].semibold }}>Hover</span>
		<Button {...args} />

		<span style={{ font: vars.text.body[1].semibold }}>Focus</span>
		<Button {...args} />

		<span style={{ font: vars.text.body[1].semibold }}>Active</span>
		<Button {...args} />

		<span style={{ font: vars.text.body[1].semibold }}>Disabled</span>
		<Button isDisabled {...args} />
	</div>
);

const play: PlayFunction<ReactRenderer> = async ({
	canvasElement,
}: {
	canvasElement: HTMLElement;
}) => {
	const canvas = within(canvasElement);

	const buttons = canvas.getAllByRole('button');
	await userEvent.hover(buttons[1]);
	await fireEvent.pointerDown(buttons[3], { pointerType: 'touch' });
	await userEvent.tab();
	await userEvent.tab();
	await userEvent.tab();
};

export const Default: Story = {
	render: (args) => renderStates({ children: 'Default', ...args }),
	play,
};

export const Primary: Story = {
	render: (args) => renderStates({ children: 'Primary', variant: 'primary', ...args }),
	play,
};

export const Minimal: Story = {
	render: (args) => renderStates({ children: 'Minimal', variant: 'minimal', ...args }),
	play,
};

export const Destructive: Story = {
	render: (args) => renderStates({ children: 'Destructive', variant: 'destructive', ...args }),
	play,
	parameters: {
		a11y: {
			options: {
				rules: {
					'color-contrast': { enabled: false },
				},
			},
		},
	},
};

export const WithIcon: Story = {
	args: {
		children: (
			<>
				With icon
				<Icon name="add" size="small" />
			</>
		),
	},
};

export const Small: Story = {
	render: (args) => renderStates({ children: 'Default', size: 'small', ...args }),
	play,
};

export const Large: Story = {
	render: (args) => renderStates({ children: 'Default', size: 'large', ...args }),
	play,
};

export const Pending: Story = {
	render: (args) => {
		const [isPending, setPending] = useState(false);

		const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
		const handlePress = () => {
			setPending(true);
			timeout.current = setTimeout(() => {
				setPending(false);
				timeout.current = undefined;
			}, 2000);
		};

		useEffect(() => {
			return () => {
				clearTimeout(timeout.current);
			};
		}, []);

		return <Button isPending={isPending} onPress={handlePress} {...args} />;
	},
	args: {
		children: 'Pending',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('button'));
	},
};
