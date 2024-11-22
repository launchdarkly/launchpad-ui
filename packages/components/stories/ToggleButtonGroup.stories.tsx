import type { Meta, StoryObj } from '@storybook/react';

import { ToggleButton, ToggleButtonGroup, ToggleIconButton } from '../src';

const meta: Meta<typeof ToggleButtonGroup> = {
	component: ToggleButtonGroup,
	// @ts-ignore
	subcomponents: { ToggleButton },
	title: 'Components/Buttons/ToggleButtonGroup',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
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
