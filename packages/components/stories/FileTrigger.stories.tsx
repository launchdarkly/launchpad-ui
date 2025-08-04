import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../src/Button';
import { FileTrigger } from '../src/FileTrigger';

const meta: Meta<typeof FileTrigger> = {
	component: FileTrigger,
	title: 'Components/Buttons/FileTrigger',
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=14350-114160&m=dev',
		},
	},
};

export default meta;

type Story = StoryObj<typeof FileTrigger>;

export const Example: Story = {
	args: {
		children: <Button>Select a file</Button>,
	},
};
