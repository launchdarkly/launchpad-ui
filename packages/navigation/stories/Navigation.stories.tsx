import type { StoryObj } from '@storybook/react';
import type { NavigationItemProps } from '../src';

import { allModes } from '../../../.storybook/modes';
import { Navigation, NavigationItem } from '../src';

export default {
	component: Navigation,
	subcomponents: { NavigationItem },
	title: 'Legacy/Navigation',
	description: 'An element used to provide navigation links to help users move through an app.',
	parameters: {
		chromatic: { disableSnapshot: true },
	},
	argTypes: {
		kind: {
			table: {
				category: 'Presentation',
			},
		},
		children: {
			table: {
				category: 'Content',
			},
		},
	},
};

type Story = StoryObj<typeof Navigation<NavigationItemProps>>;

export const Primary: Story = {
	args: {
		title: 'Page menu',
		items: [
			{
				name: 'First',
				to: '/first',
			},
			{
				name: 'Second',
				to: '/second',
			},
			{
				name: 'Third',
				to: '/third',
				tooltip: true,
			},
			{
				name: 'Fourth',
				to: '/fourth',
				status: 'new',
			},
		],
		children: (item) => <NavigationItem key={item.to} {...item} />,
	},
	parameters: {
		chromatic: {
			modes: {
				mobile: allModes.mobile,
			},
		},
	},
};

export const Secondary: Story = {
	args: {
		kind: 'secondary',
		children: [
			<NavigationItem key={1} name="First" to="/first" />,
			<NavigationItem key={2} name="Second" to="/second" />,
			<NavigationItem key={3} name="Third" to="/third" />,
			<NavigationItem key={4} name="Fourth" to="/fourth" />,
		],
	},
};
