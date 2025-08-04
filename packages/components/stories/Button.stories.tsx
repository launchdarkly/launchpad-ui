import type { Meta, ReactRenderer, StoryObj } from '@storybook/react-vite';
import type { PlayFunction } from 'storybook/internal/types';

import { Icon } from '@launchpad-ui/icons';
import { vars } from '@launchpad-ui/vars';
import { useEffect, useRef, useState } from 'react';
import { fireEvent, userEvent, within } from 'storybook/test';

import { Button } from '../src/Button';
import { Text } from '../src/Text';

const meta: Meta<typeof Button> = {
	component: Button,
	title: 'Components/Buttons/Button',
	parameters: {
		test: {
			dangerouslyIgnoreUnhandledErrors: true,
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/LaunchPad?node-id=1-27006',
		},
	},
	decorators: [
		(Story) => (
			<div
				style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}
			>
				<Story />
			</div>
		),
	],
	argTypes: {
		// Hide technical/internal props
		ref: { table: { disable: true } },
		children: { control: false },

		// Button specific props
		size: {
			control: { type: 'radio' },
			options: ['small', 'medium', 'large'],
		},
		variant: {
			control: { type: 'radio' },
			options: ['default', 'primary', 'destructive', 'minimal', 'picker'],
		},

		// Boolean props should be checkboxes
		isDisabled: { control: { type: 'boolean' } },
		isPending: { control: { type: 'boolean' } },
		isPressed: { control: { type: 'boolean' } },
		autoFocus: { control: { type: 'boolean' } },
		excludeFromTabOrder: { control: { type: 'boolean' } },

		// String props should be text inputs
		type: { control: { type: 'text' } },
		name: { control: { type: 'text' } },
		value: { control: { type: 'text' } },
		form: { control: { type: 'text' } },
		formAction: { control: { type: 'text' } },
		formEncType: { control: { type: 'text' } },
		formMethod: { control: { type: 'text' } },
		formTarget: { control: { type: 'text' } },
		'aria-label': { control: { type: 'text' } },
		'aria-labelledby': { control: { type: 'text' } },
		'aria-describedby': { control: { type: 'text' } },
		'aria-details': { control: { type: 'text' } },
		className: { control: { type: 'text' } },
		id: { control: { type: 'text' } },

		// Function props should be disabled
		onPress: { control: { disable: true } },
		onClick: { control: { disable: true } },
		onPressStart: { table: { disable: true } },
		onPressEnd: { table: { disable: true } },
		onPressChange: { table: { disable: true } },
		onPressUp: { table: { disable: true } },
		onFocus: { table: { disable: true } },
		onBlur: { table: { disable: true } },
		onFocusChange: { table: { disable: true } },
		onKeyDown: { table: { disable: true } },
		onKeyUp: { table: { disable: true } },
		onHoverStart: { table: { disable: true } },
		onHoverEnd: { table: { disable: true } },
		onHoverChange: { table: { disable: true } },
		'aria-controls': { table: { disable: true } },
		'aria-expanded': { table: { disable: true } },
		'aria-haspopup': { table: { disable: true } },
		'aria-pressed': { table: { disable: true } },
		'aria-required': { table: { disable: true } },
		'aria-roledescription': { table: { disable: true } },
		'aria-selected': { table: { disable: true } },

		// Complex props should be disabled
		style: { table: { disable: true } },
		UNSAFE_className: { table: { disable: true } },
		UNSAFE_style: { table: { disable: true } },
	},
};

export default meta;

type Story = StoryObj<typeof Button>;

const renderStates = (args: Story['args']) => (
	<div
		style={{
			display: 'grid',
			gridTemplateRows: '1fr',
			gridTemplateColumns: `${vars.size[128]} auto`,
			gap: vars.spacing[400],
			alignItems: 'center',
		}}
	>
		<span style={{ font: vars.text.body[1].semibold }}>Resting</span>
		<Button {...args} />

		<span style={{ font: vars.text.body[1].semibold }}>Hover</span>
		<Button {...args} />

		<span style={{ font: vars.text.body[1].semibold }}>Focus</span>
		<Button {...args} />

		<span style={{ font: vars.text.body[1].semibold }}>Active</span>
		<Button {...args} />

		<span style={{ font: vars.text.body[1].semibold }}>Disabled</span>
		<Button isDisabled {...args} />
	</div>
);

const play: PlayFunction<ReactRenderer> = async ({
	canvasElement,
}: {
	canvasElement: HTMLElement;
}) => {
	const canvas = within(canvasElement);

	const buttons = canvas.getAllByRole('button');
	await userEvent.hover(buttons[1]);
	await fireEvent.pointerDown(buttons[3], { pointerType: 'touch' });
	await userEvent.tab();
	await userEvent.tab();
	await userEvent.tab();
};

export const Default: Story = {
	render: (args) => renderStates({ children: <Text>Default</Text>, ...args }),
	play,
};

export const Primary: Story = {
	render: (args) => renderStates({ children: <Text>Primary</Text>, variant: 'primary', ...args }),
	play,
};

export const Minimal: Story = {
	render: (args) => renderStates({ children: <Text>Minimal</Text>, variant: 'minimal', ...args }),
	play,
};

export const Destructive: Story = {
	render: (args) =>
		renderStates({ children: <Text>Destructive</Text>, variant: 'destructive', ...args }),
	play,
	parameters: {
		a11y: {
			options: {
				rules: {
					'color-contrast': { enabled: false },
				},
			},
		},
	},
};

export const WithIcon: Story = {
	args: {
		children: (
			<>
				<Text>With icon </Text>
				<Icon name="add" size="small" />
			</>
		),
	},
};

export const Small: Story = {
	render: (args) => renderStates({ children: 'Default', size: 'small', ...args }),
	play,
};

export const Large: Story = {
	render: (args) => renderStates({ children: 'Default', size: 'large', ...args }),
	play,
};

export const Pending: Story = {
	render: (args) => {
		const [isPending, setPending] = useState(false);

		const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
		const handlePress = () => {
			setPending(true);
			timeout.current = setTimeout(() => {
				setPending(false);
				timeout.current = undefined;
			}, 2000);
		};

		useEffect(() => {
			return () => {
				clearTimeout(timeout.current);
			};
		}, []);

		return <Button isPending={isPending} onPress={handlePress} {...args} />;
	},
	args: {
		children: 'Pending',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await userEvent.click(canvas.getByRole('button'));
	},
};
