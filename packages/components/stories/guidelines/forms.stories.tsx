import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentPropsWithoutRef, Fragment } from 'react';

import { vars } from '@launchpad-ui/vars';

import { Button } from '../../src/Button';
import { Checkbox } from '../../src/Checkbox';
import { CheckboxGroup } from '../../src/CheckboxGroup';
import { FieldError } from '../../src/FieldError';
import { Form } from '../../src/Form';
import { Input } from '../../src/Input';
import { Label } from '../../src/Label';
import { Radio } from '../../src/Radio';
import { RadioGroup } from '../../src/RadioGroup';
import { Text } from '../../src/Text';
import { TextField } from '../../src/TextField';

/**
 * Examples for the `Guidelines/Forms` documentation page.
 *
 * These stories exist only to be embedded via `<Canvas of={...} />` in `Forms.mdx`,
 * so the meta is tagged `['!dev', '!autodocs']` to keep them out of the sidebar.
 * Writing them as real stories rather than fenced code blocks means the samples on
 * the docs page are type-checked and cannot drift from the component APIs.
 */
const Container = (props: ComponentPropsWithoutRef<typeof Fragment>) => <>{props.children}</>;

const meta: Meta<typeof Container> = {
	component: Container,
	decorators: [
		(Story) => (
			<div style={{ width: vars.size[320] }}>
				<Story />
			</div>
		),
	],
	argTypes: {
		children: {
			control: false,
		},
	},
	tags: ['!dev', '!autodocs'],
};

export default meta;

type Story = StoryObj<typeof Container>;

/**
 * Every part of a field is a composed child, not a prop. From top to bottom: the
 * `Label`, the `Input`, helper text via `Text slot="description"`, and `FieldError`
 * for validation messages.
 */
export const Anatomy: Story = {
	args: {
		children: (
			<TextField name="email" type="email" isRequired>
				<Label>Email</Label>
				<Input placeholder="Enter a value" />
				<Text slot="description">We'll only use this to send release notes.</Text>
				<FieldError />
			</TextField>
		),
	},
};

/**
 * `Form` owns the spacing between fields — `--lp-spacing-300` in the default
 * vertical orientation. Prefer it over a hand-rolled flex container so field
 * rhythm stays consistent.
 */
export const FieldSpacing: Story = {
	args: {
		children: (
			<Form>
				<TextField name="name" isRequired>
					<Label>Name</Label>
					<Input />
					<FieldError />
				</TextField>
				<TextField name="email" type="email" isRequired>
					<Label>Email</Label>
					<Input />
					<FieldError />
				</TextField>
				<Button type="submit">Submit</Button>
			</Form>
		),
	},
};

/**
 * `FieldError` takes no message prop. Leave it empty and it renders the browser's
 * native validation message; submit this form without filling it in to see that.
 * Pass children only when you need to override the message — for example when
 * wiring up react-hook-form, which also needs `validationBehavior="aria"`.
 */
export const Validation: Story = {
	args: {
		children: (
			<Form>
				<TextField name="email" type="email" isRequired>
					<Label>Email</Label>
					<Input />
					<FieldError />
				</TextField>
				<Button type="submit">Submit</Button>
			</Form>
		),
	},
};

/**
 * The same composition applies to grouped controls. `CheckboxGroup` and
 * `RadioGroup` own the `Label`, helper text and `FieldError`; the individual
 * `Checkbox` and `Radio` children carry only their own labels.
 */
export const GroupedControls: Story = {
	args: {
		children: (
			<Form>
				<CheckboxGroup name="environments">
					<Label>Environments</Label>
					<Text slot="description">Select every environment this applies to.</Text>
					<Checkbox value="development">Development</Checkbox>
					<Checkbox value="staging">Staging</Checkbox>
					<Checkbox value="production">Production</Checkbox>
					<FieldError />
				</CheckboxGroup>
				<RadioGroup name="rollout" isRequired>
					<Label>Rollout</Label>
					<Radio value="immediate">Immediate</Radio>
					<Radio value="gradual">Gradual</Radio>
					<FieldError />
				</RadioGroup>
			</Form>
		),
	},
};

/**
 * Fields expose `isDisabled`, `isReadOnly` and `isInvalid` as boolean props.
 * Note that `isRequired` produces no visible marker today — it only sets
 * `aria-required` and the native `required` attribute.
 */
export const States: Story = {
	args: {
		children: (
			<Form>
				<TextField name="required" isRequired>
					<Label>Required (no visible marker)</Label>
					<Input />
				</TextField>
				<TextField name="invalid" isInvalid>
					<Label>Invalid</Label>
					<Input />
					<FieldError>Enter a valid email address.</FieldError>
				</TextField>
				<TextField name="readonly" isReadOnly value="Read-only value">
					<Label>Read-only</Label>
					<Input />
				</TextField>
				<TextField name="disabled" isDisabled>
					<Label>Disabled</Label>
					<Input />
				</TextField>
			</Form>
		),
	},
};
