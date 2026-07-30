import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from '../src/Input';

const meta: Meta<typeof Input> = {
	title: 'Components/Forms/Input',
	component: Input,
	parameters: {
		figma: {
			design:
				'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-34456&m=dev',
		},
		docs: {
			description: {
				component: `
An input allows a user to input text.

Usually composed within a [TextField](/docs/components-forms-textfield--docs) alongside a [Label](/docs/components-content-label--docs) for an accessible field.
				`,
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		'aria-label': 'Example',
		defaultValue: 'Value',
	},
};

/**
 * Use the `size` prop to match the height of adjacent controls such as [Button](/docs/components-buttons-button--docs).
 */
export const Sizes: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
			<Input aria-label="Small" size="small" defaultValue="Small" />
			<Input aria-label="Medium" size="medium" defaultValue="Medium" />
		</div>
	),
};

/**
 * The `minimal` variant removes the resting border for use in denser or inline layouts.
 */
export const Variants: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
			<Input aria-label="Default" variant="default" defaultValue="Default" />
			<Input aria-label="Minimal" variant="minimal" defaultValue="Minimal" />
		</div>
	),
};
