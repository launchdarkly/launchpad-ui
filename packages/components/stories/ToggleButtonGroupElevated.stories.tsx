import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';

import { Icon } from '@launchpad-ui/icons';

import { ToggleButton } from '../src/ToggleButton';
import { ToggleButtonGroup } from '../src/ToggleButtonGroup';

const meta: Meta<typeof ToggleButtonGroup> = {
	component: ToggleButtonGroup,
	subcomponents: { ToggleButton } as Record<string, ComponentType<unknown>>,
	title: 'Components/Buttons/ToggleButton/ToggleButtonGroupElevated',
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ToggleButtonGroup>;

export const Example: Story = {
	args: {
		appearance: 'elevated',
		children: (
			<>
				<ToggleButton appearance="elevated" id="first">
					<Icon name="flask" size="small" /> First
				</ToggleButton>
				<ToggleButton appearance="elevated" id="second">
					<Icon name="flag" size="small" /> Second
				</ToggleButton>
				<ToggleButton appearance="elevated" id="third">
					<Icon name="toggle-on" size="small" /> Third
				</ToggleButton>
			</>
		),
		defaultSelectedKeys: ['first'],
		style: { width: '300px' },
	},
};

export const MultipleSelection: Story = {
	args: {
		appearance: 'elevated',
		children: (
			<>
				<ToggleButton appearance="elevated" id="first">
					<Icon name="flask" size="small" /> First
				</ToggleButton>
				<ToggleButton appearance="elevated" id="second">
					<Icon name="flag" size="small" /> Second
				</ToggleButton>
				<ToggleButton appearance="elevated" id="third">
					<Icon name="toggle-on" size="small" /> Third
				</ToggleButton>
			</>
		),
		selectionMode: 'multiple',
		defaultSelectedKeys: ['first', 'second'],
		style: { width: '300px' },
	},
};

export const Orientation: Story = {
	args: {
		appearance: 'elevated',
		children: (
			<>
				<ToggleButton appearance="elevated" id="first">
					<Icon name="flask" size="small" /> First
				</ToggleButton>
				<ToggleButton appearance="elevated" id="second">
					<Icon name="flag" size="small" /> Second
				</ToggleButton>
				<ToggleButton appearance="elevated" id="third">
					<Icon name="toggle-on" size="small" /> Third
				</ToggleButton>
			</>
		),
		orientation: 'vertical',
		style: { width: '300px' },
	},
};

export const Disabled: Story = {
	args: {
		appearance: 'elevated',
		children: (
			<>
				<ToggleButton appearance="elevated" id="first">
					<Icon name="flask" size="small" /> First
				</ToggleButton>
				<ToggleButton appearance="elevated" id="second">
					<Icon name="flag" size="small" /> Second
				</ToggleButton>
				<ToggleButton appearance="elevated" id="third">
					<Icon name="toggle-on" size="small" /> Third
				</ToggleButton>
			</>
		),
		isDisabled: true,
		defaultSelectedKeys: ['first'],
		style: { width: '300px' },
	},
};
