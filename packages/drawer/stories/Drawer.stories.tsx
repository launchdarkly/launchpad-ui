import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@launchpad-ui/button';
import { Tooltip } from '@launchpad-ui/tooltip';
import { useState } from 'react';

import { Drawer, DrawerHeader } from '../src';

export default {
	component: Drawer,
	subcomponents: { DrawerHeader },
	title: 'Legacy/Drawer',
	description: 'A partial overlay that appears from the right side of the screen.',
	parameters: {
		docs: {
			page: null,
		},
		chromatic: { disableSnapshot: true },
	},
	decorators: [
		(Story) => (
			<div
				style={{
					height: '100vh',
				}}
			>
				<Story />
			</div>
		),
	],
} as Meta<typeof Drawer>;

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
	render: () => {
		const [show, setShow] = useState(true);
		const button = <Button onClick={() => setShow(true)}>Open drawer</Button>;
		return show ? (
			<>
				{button}
				<Drawer onCancel={() => setShow(!show)}>
					<section>
						<DrawerHeader>Example drawer title</DrawerHeader>
					</section>
					<section>
						<p>This is example drawer content.</p>
					</section>
				</Drawer>
			</>
		) : (
			button
		);
	},
};
Default.parameters = {
	docs: { disable: true },
	a11y: {
		options: {
			rules: {
				// @fixme
				'duplicate-id-aria': { enabled: false },
			},
		},
	},
};

export const ForcedDarkTheme: Story = {
	render: () => {
		const [show, setShow] = useState(true);
		const button = <Button onClick={() => setShow(true)}>Open drawer</Button>;

		return show ? (
			<>
				{button}
				<Drawer theme="dark" onCancel={() => setShow(!show)}>
					<section>
						<DrawerHeader>Example drawer title</DrawerHeader>
					</section>
					<section>
						<p>This is example drawer content.</p>
					</section>
				</Drawer>
			</>
		) : (
			button
		);
	},
	parameters: {
		docs: { disable: true },
		a11y: {
			options: {
				rules: {
					// @fixme
					'duplicate-id-aria': { enabled: false },
				},
			},
		},
	},
};

export const WithTooltip: Story = {
	render: () => {
		const [show, setShow] = useState(true);
		const button = <Button onClick={() => setShow(true)}>Open drawer</Button>;
		return show ? (
			<>
				{button}
				<Drawer onCancel={() => setShow(!show)}>
					<section>
						<DrawerHeader>Example drawer title</DrawerHeader>
					</section>
					<section>
						<Tooltip content="If you hit the escape key hovering over this tooltip, it should dismiss the tooltip but not the drawer.">
							<button type="button">Hover over me or focus on me!</button>
						</Tooltip>
					</section>
				</Drawer>
			</>
		) : (
			button
		);
	},
	parameters: {
		docs: { disable: true },
		a11y: {
			options: {
				rules: {
					// @fixme
					'duplicate-id-aria': { enabled: false },
					'target-size': { enabled: false },
				},
			},
		},
	},
};
