import type { StoryObj } from '@storybook/react';

import { Collapsible } from '../src';

export default {
	component: Collapsible,
	title: 'Legacy/Collapsible',
	description:
		'A progressive disclosure component that allows the user to to click a trigger to show more content',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COLLAPSIBLE,
		},
	},
};

type Story = StoryObj<typeof Collapsible>;

const ExampleChildren = (
	<div>
		<h3>Panel contents</h3>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas enim non eleifend
			fermentum. Phasellus posuere turpis vitae ligula malesuada, at viverra enim blandit. Donec non
			interdum dui. Etiam a commodo metus, laoreet imperdiet enim. Nullam sagittis, dolor vitae
			interdum accumsan, purus sapien eleifend erat, et lobortis tortor dolor congue ante. Phasellus
			ut pharetra nulla. Ut id mattis nibh, at sodales nisi. Etiam quis euismod elit. Vestibulum
			suscipit euismod dui.
		</p>
	</div>
);

export const Example: Story = {
	args: { label: 'More details', children: ExampleChildren },
};

export const WithCustomTrigger: Story = {
	args: {
		label: (isOpen) => `${isOpen ? 'Less' : 'More'} details`,
		trigger: ({ toggleOpen, label, triggerProps }) => (
			<button type="button" onClick={toggleOpen} {...triggerProps}>
				{label}
			</button>
		),
		children: ExampleChildren,
	},
};

export const WithDefaultOpen: Story = {
	args: {
		label: 'More details',
		defaultOpen: true,
		children: ExampleChildren,
	},
};
