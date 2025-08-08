import type { Meta, StoryObj } from '@storybook/react-vite';

import { IconButton } from '../src/IconButton';

const meta: Meta<typeof IconButton> = {
	component: IconButton,
	title: 'Components/Buttons/IconButton',
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=14355-114625&m=dev',
		},
	},
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
	args: { icon: 'add', 'aria-label': 'create' },
};

export const Variant: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: '10px' }}>
			<IconButton icon="add" variant="destructive" />
			<IconButton icon="add" variant="primary" />
			<IconButton icon="add" variant="minimal" />
			<IconButton icon="add" variant="default" />
		</div>
	),
	args: { 'aria-label': 'create' },
};

export const Size: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
			<IconButton icon="add" size="small" />
			<IconButton icon="add" size="medium" />
		</div>
	),
	args: { 'aria-label': 'create' },
};
