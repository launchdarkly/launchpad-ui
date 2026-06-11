import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';

import { Icon } from '@launchpad-ui/icons';

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
				<ToggleButtonElevated id="first">
					<Icon name="flask" size="small" /> First
				</ToggleButtonElevated>
				<ToggleButtonElevated id="second">
					<Icon name="flag" size="small" /> Second
				</ToggleButtonElevated>
				<ToggleButtonElevated id="third">
					<Icon name="toggle-on" size="small" /> Third
				</ToggleButtonElevated>
			</>
		),
		defaultSelectedKeys: ['first'],
		style: { width: '220px' },
	},
};

export const MultipleSelection: Story = {
	args: {
		children: (
			<>
				<ToggleButtonElevated id="first">
					<Icon name="flask" size="small" /> First
				</ToggleButtonElevated>
				<ToggleButtonElevated id="second">
					<Icon name="flag" size="small" /> Second
				</ToggleButtonElevated>
				<ToggleButtonElevated id="third">
					<Icon name="toggle-on" size="small" /> Third
				</ToggleButtonElevated>
			</>
		),
		selectionMode: 'multiple',
		defaultSelectedKeys: ['first', 'second'],
		style: { width: '220px' },
	},
};

export const Orientation: Story = {
	args: {
		children: (
			<>
				<ToggleButtonElevated id="first">
					<Icon name="flask" size="small" /> First
				</ToggleButtonElevated>
				<ToggleButtonElevated id="second">
					<Icon name="flag" size="small" /> Second
				</ToggleButtonElevated>
				<ToggleButtonElevated id="third">
					<Icon name="toggle-on" size="small" /> Third
				</ToggleButtonElevated>
			</>
		),
		orientation: 'vertical',
		style: { width: '220px' },
	},
};

export const Disabled: Story = {
	args: {
		children: (
			<>
				<ToggleButtonElevated id="first">
					<Icon name="flask" size="small" /> First
				</ToggleButtonElevated>
				<ToggleButtonElevated id="second">
					<Icon name="flag" size="small" /> Second
				</ToggleButtonElevated>
				<ToggleButtonElevated id="third">
					<Icon name="toggle-on" size="small" /> Third
				</ToggleButtonElevated>
			</>
		),
		isDisabled: true,
		defaultSelectedKeys: ['first'],
		style: { width: '220px' },
	},
};
