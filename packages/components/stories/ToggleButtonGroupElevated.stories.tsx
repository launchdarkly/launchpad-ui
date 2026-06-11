import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';

import { ToggleButtonElevated, ToggleButtonGroupElevated } from '../src/ToggleButtonGroupElevated';

const meta: Meta<typeof ToggleButtonGroupElevated> = {
	component: ToggleButtonGroupElevated,
	subcomponents: { ToggleButtonElevated } as Record<string, ComponentType<unknown>>,
	title: 'Components/Buttons/ToggleButton/ToggleButtonGroupElevated',
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ToggleButtonGroupElevated>;

export const Example: Story = {
	args: {
		children: (
			<>
				<ToggleButtonElevated id="first">First</ToggleButtonElevated>
				<ToggleButtonElevated id="second">Second</ToggleButtonElevated>
				<ToggleButtonElevated id="third">Third</ToggleButtonElevated>
			</>
		),
		defaultSelectedKeys: ['first'],
	},
};

export const MultipleSelection: Story = {
	args: {
		children: (
			<>
				<ToggleButtonElevated id="first">First</ToggleButtonElevated>
				<ToggleButtonElevated id="second">Second</ToggleButtonElevated>
				<ToggleButtonElevated id="third">Third</ToggleButtonElevated>
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
				<ToggleButtonElevated id="first">First</ToggleButtonElevated>
				<ToggleButtonElevated id="second">Second</ToggleButtonElevated>
				<ToggleButtonElevated id="third">Third</ToggleButtonElevated>
			</>
		),
		orientation: 'vertical',
	},
};

export const Disabled: Story = {
	args: {
		children: (
			<>
				<ToggleButtonElevated id="first">First</ToggleButtonElevated>
				<ToggleButtonElevated id="second">Second</ToggleButtonElevated>
				<ToggleButtonElevated id="third">Third</ToggleButtonElevated>
			</>
		),
		isDisabled: true,
		defaultSelectedKeys: ['first'],
	},
};
