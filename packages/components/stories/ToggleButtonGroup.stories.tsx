import type { ComponentType } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { userEvent, within } from 'storybook/test';

import { ToggleButton } from '../src/ToggleButton';
import { ToggleButtonGroup } from '../src/ToggleButtonGroup';
import { ToggleIconButton } from '../src/ToggleIconButton';

const meta: Meta<typeof ToggleButtonGroup> = {
	component: ToggleButtonGroup,
	subcomponents: { ToggleButton } as Record<string, ComponentType<unknown>>,
	title: 'Components/Buttons/ToggleButton/ToggleButtonGroup',
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-29275&m=dev',
		},
	},
};

export default meta;

type Story = StoryObj<typeof ToggleButtonGroup>;

export const Example: Story = {
	args: {
		children: (
			<>
				<ToggleButton id="first">First</ToggleButton>
				<ToggleButton id="second">Second</ToggleButton>
				<ToggleButton id="third">Third</ToggleButton>
			</>
		),
		defaultSelectedKeys: ['first'],
	},
};

export const MultipleSelection: Story = {
	args: {
		children: (
			<>
				<ToggleButton id="first">First</ToggleButton>
				<ToggleButton id="second">Second</ToggleButton>
				<ToggleButton id="third">Third</ToggleButton>
			</>
		),
		selectionMode: 'multiple',
		defaultSelectedKeys: ['first', 'second'],
	},
};

export const Orientation: Story = {
	args: {
		children: (
			<>
				<ToggleButton id="first">First</ToggleButton>
				<ToggleButton id="second">Second</ToggleButton>
				<ToggleButton id="third">Third</ToggleButton>
			</>
		),
		orientation: 'vertical',
	},
};

export const Icons: Story = {
	args: {
		children: (
			<>
				<ToggleIconButton id="first" icon="flask" aria-label="flask" />
				<ToggleIconButton id="second" icon="flag" aria-label="flag" />
				<ToggleIconButton id="third" icon="toggle-on" aria-label="toggle" />
			</>
		),
		orientation: 'vertical',
	},
};

export const SelectedIconSwap: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'A selected button shows `check-circle`. When a button also has a leading `icon`, selecting it swaps that icon for the selected one instead of showing both. Click through the options to see the swap.',
			},
		},
	},
	args: {
		children: (
			<>
				<ToggleButton id="first" icon="flask">
					First
				</ToggleButton>
				<ToggleButton id="second" icon="flag">
					Second
				</ToggleButton>
				<ToggleButton id="third" icon="toggle-on">
					Third
				</ToggleButton>
			</>
		),
		defaultSelectedKeys: ['first'],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('radio', { name: 'Second' }));
	},
};

export const WithoutSelectedIcon: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Pass `selectedIcon={null}` to keep a selected button icon-free.',
			},
		},
	},
	args: {
		children: (
			<>
				<ToggleButton id="first" selectedIcon={null}>
					First
				</ToggleButton>
				<ToggleButton id="second" selectedIcon={null}>
					Second
				</ToggleButton>
				<ToggleButton id="third" selectedIcon={null}>
					Third
				</ToggleButton>
			</>
		),
		defaultSelectedKeys: ['first'],
	},
};
