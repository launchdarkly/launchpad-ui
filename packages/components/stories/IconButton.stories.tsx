import type { Meta, StoryObj } from '@storybook/react-vite';

import { IconButton } from '../src/IconButton';

const meta: Meta<typeof IconButton> = {
	component: IconButton,
	title: 'Components/Buttons/IconButton',
	tags: ['autodocs'],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-28834&m=dev',
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
			<IconButton icon="add" variant="destructive" aria-label="create" />
			<IconButton icon="add" variant="primary" aria-label="create" />
			<IconButton icon="add" variant="minimal" aria-label="create" />
			<IconButton icon="add" variant="default" aria-label="create" />
		</div>
	),
	args: { 'aria-label': 'create' },
};

export const Size: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
			<IconButton icon="add" size="small" aria-label="create" />
			<IconButton icon="add" size="medium" aria-label="create" />
		</div>
	),
	args: { 'aria-label': 'create' },
};
