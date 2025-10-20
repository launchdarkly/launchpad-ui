import type { Meta, StoryObj } from '@storybook/react-vite';

import { vars } from '@launchpad-ui/vars';
import { fireEvent, userEvent, within } from 'storybook/test';

import { Link } from '../src/Link';

const meta: Meta<typeof Link> = {
	component: Link,
	title: 'Components/Navigation/Link',
	parameters: {
		figma: {
			design:
				'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=8079-92170&m=dev',
		},
	},
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Example: Story = {
	args: {
		children: 'Link',
		href: '/test',
	},
};

export const Subtle: Story = {
	args: {
		children: 'Link',
		href: '/test',
		variant: 'subtle',
	},
};

export const States: Story = {
	render: (args) => {
		const styles = { width: 'fit-content' };
		return (
			<div
				style={{
					display: 'inline-flex',
					flexDirection: 'column',
					gap: vars.spacing[400],
				}}
			>
				<Link style={styles} {...args}>
					Hover
				</Link>
				<Link style={styles} {...args}>
					Focus Visible
				</Link>
				<Link style={styles} isDisabled {...args}>
					Disabled
				</Link>
				<Link style={styles} {...args}>
					Active
				</Link>
			</div>
		);
	},
	parameters: {
		test: {
			dangerouslyIgnoreUnhandledErrors: true,
		},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const links = canvas.getAllByRole('link');
		await userEvent.hover(links[0]);
		await fireEvent.pointerDown(links[3], { pointerType: 'touch' });
		await userEvent.tab();
		await userEvent.tab();
	},
	args: {
		href: '/test',
	},
};
