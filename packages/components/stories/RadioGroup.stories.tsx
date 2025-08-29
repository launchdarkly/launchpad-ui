import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';

import { userEvent, within } from 'storybook/test';

import { Button } from '../src/Button';
import { FieldError } from '../src/FieldError';
import { Form } from '../src/Form';
import { Label } from '../src/Label';
import { Radio } from '../src/Radio';
import { RadioGroup } from '../src/RadioGroup';
import { Text } from '../src/Text';

const meta: Meta<typeof RadioGroup> = {
	component: RadioGroup,
	subcomponents: { Radio } as Record<string, ComponentType<unknown>>,
	title: 'Components/Forms/RadioGroup',
	parameters: {
		figma: {
			design:
				'https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?node-id=1-33616&m=dev',
		},
	},
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Example: Story = {
	args: {
		children: (
			<>
				<Label>Group</Label>
				<Radio value="1">First</Radio>
				<Radio value="2">Second</Radio>
				<Radio value="3">Third</Radio>
				<Text slot="description">Description</Text>
			</>
		),
		defaultValue: '1',
	},
	play: async ({ canvasElement }) => {
		const body = canvasElement.ownerDocument.body;
		body.click();
		await userEvent.tab();
	},
};

export const States: Story = {
	args: {
		children: (
			<>
				<Label>Group</Label>
				<Radio value="1">Resting</Radio>
				<Radio value="2" isDisabled>
					Selected, Disabled
				</Radio>
				<Radio value="3" isDisabled>
					Disabled
				</Radio>
			</>
		),
		defaultValue: '2',
	},
};

export const Validation: Story = {
	render: (args) => {
		return (
			<Form>
				<RadioGroup {...args}>
					<Label>Pick one</Label>
					<Radio value="1">First</Radio>
					<Radio value="2">Second</Radio>
					<Radio value="3">Third</Radio>
					<FieldError />
				</RadioGroup>
				<Button type="submit">Submit</Button>
			</Form>
		);
	},
	args: { isRequired: true },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await userEvent.click(canvas.getByRole('button'));
	},
};
