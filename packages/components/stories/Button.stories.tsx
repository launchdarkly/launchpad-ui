import type { Meta, ReactRenderer, StoryFn, StoryObj } from '@storybook/react';
import type { PlayFunction } from '@storybook/types';

import { Icon } from '@launchpad-ui/icons';
import { vars } from '@launchpad-ui/vars';
import { fireEvent, userEvent, within } from '@storybook/test';

import { Button } from '../src';

const meta: Meta<typeof Button> = {
	component: Button,
	title: 'Components/Buttons/Button',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
		},
	},
	decorators: [
		(Story: StoryFn) => (
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
		<>
			<span style={{ font: vars.body[1].semibold }}>Resting</span>
			<Button {...args} />
		</>
		<>
			<span style={{ font: vars.body[1].semibold }}>Hover</span>
			<Button {...args} />
		</>
		<>
			<span style={{ font: vars.body[1].semibold }}>Focus</span>
			<Button {...args} />
		</>
		<>
			<span style={{ font: vars.body[1].semibold }}>Active</span>
			<Button {...args} />
		</>
		<>
			<span style={{ font: vars.body[1].semibold }}>Disabled</span>
			<Button isDisabled {...args} />
		</>
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
};

export const PrimaryFlair: Story = {
	render: (args) => renderStates({ children: 'Primary flair', variant: 'primaryFlair', ...args }),
	play,
};

export const DefaultFlair: Story = {
	render: (args) => renderStates({ children: 'Default flair', variant: 'defaultFlair', ...args }),
	play,
};

export const MinimalFlair: Story = {
	render: (args) => renderStates({ children: 'Minimal flair', variant: 'minimalFlair', ...args }),
	play,
};

export const WithIcon: Story = {
	args: {
		children: (
			<>
				With icon <Icon name="add" size="small" />
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
