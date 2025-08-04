import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';

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
			url: 'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-37543',
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
