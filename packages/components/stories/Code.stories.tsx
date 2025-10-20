import type { Meta, StoryObj } from '@storybook/react-vite';

import { Code } from '../src/Code';

const meta: Meta<typeof Code> = {
	title: 'Components/Content/Code',
	component: Code,
	parameters: {
		docs: {
			description: {
				component: `
A component for displaying inline code snippets. 

For body text, use [Text](/docs/components-content-text--docs ). For headings, use [Heading](/docs/components-content-heading--docs). For labels, use [Label](/docs/components-content-label--docs).
        `,
			},
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-29955&m=dev',
		},
	},
	argTypes: {
		children: {
			control: { type: 'text' },
			table: {
				type: { summary: 'React.ReactNode' },
			},
		},
		size: {
			control: { type: 'select' },
			options: ['small', 'medium'],
		},
		className: {
			control: { type: 'text' },
		},
		ref: {
			table: {
				disable: true,
			},
		},
	},
};

// eslint-disable-next-line import/no-default-export
export default meta;

type Story = StoryObj<typeof Code>;

export const Default: Story = {
	args: {
		children: 'const example = "code";',
	},
};

export const Size: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
			<Code size="small">const size = "small";</Code>
			<Code size="medium">const size = "medium";</Code>
		</div>
	),
};
