import type { StoryObj } from '@storybook/react';

import { CopyToClipboard } from '@launchpad-ui/clipboard';
import { Form, FormField, IconField, TextArea, TextField } from '@launchpad-ui/form';
import { Icon } from '@launchpad-ui/icons';
import { userEvent, within } from '@storybook/test';
import { useState } from 'react';

import { InlineEdit } from '../src';

export default {
	component: InlineEdit,
	title: 'Legacy/InlineEdit',
	description: 'An element used to display and allow inline editing of a form element value.',
	parameters: {
		chromatic: { disableSnapshot: true },
	},
};

type Story = StoryObj<typeof InlineEdit>;

export const Example: Story = {
	render: (args) => {
		const [editValue, setEditValue] = useState('edit me');

		return (
			<>
				<InlineEdit
					defaultValue={editValue}
					aria-label="edit value"
					{...args}
					onConfirm={setEditValue}
				>
					<span>{editValue}</span>
				</InlineEdit>
			</>
		);
	},
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);

		const edit = canvas.getAllByRole('button');
		userEvent.click(edit[0]);
	},
};

export const EditTitle: Story = {
	render: (args) => {
		const [editValue, setEditValue] = useState('Unnamed title');

		return (
			<div style={{ width: '500px' }}>
				<InlineEdit
					defaultValue={editValue}
					aria-label="edit value"
					{...args}
					onConfirm={setEditValue}
					hideEdit
				>
					<h3>{editValue}</h3>
				</InlineEdit>
			</div>
		);
	},
};

export const EditCopy: Story = {
	render: (args) => {
		const [editValue, setEditValue] = useState('auto-generated-key');

		return (
			<div style={{ width: 'max-content' }}>
				<InlineEdit
					defaultValue={editValue}
					aria-label="edit value"
					{...args}
					onConfirm={setEditValue}
				>
					<CopyToClipboard text={editValue} kind="basic">
						{editValue}
					</CopyToClipboard>
				</InlineEdit>
			</div>
		);
	},
};

export const WithTextarea: Story = {
	render: (args) => {
		const [editValue, setEditValue] = useState('edit description');

		return (
			<InlineEdit
				defaultValue={editValue}
				aria-label="edit value"
				{...args}
				onConfirm={setEditValue}
				renderInput={<TextArea />}
			>
				<span>{editValue}</span>
			</InlineEdit>
		);
	},
};

export const InForm: Story = {
	render: (args) => {
		const [editValue, setEditValue] = useState('');

		return (
			<Form>
				<FormField
					name="Name"
					label="Name"
					htmlFor="inline-edit"
					isRequired
					errorMessage={editValue ? undefined : 'No value entered'}
				>
					<InlineEdit
						defaultValue={editValue}
						aria-label="edit value"
						{...args}
						onConfirm={setEditValue}
						renderInput={<TextField id="inline-edit" />}
					>
						<span>{editValue || 'Enter a value'}</span>
					</InlineEdit>
				</FormField>
			</Form>
		);
	},
	parameters: {
		a11y: {
			options: {
				rules: {
					// @fixme
					'duplicate-id': { enabled: false },
				},
			},
		},
	},
};

export const Controlled: Story = {
	render: () => {
		const [editValue, setEditValue] = useState('edit me');
		const [isEditing, setEditing] = useState(true);

		return (
			<InlineEdit
				defaultValue={editValue}
				isEditing={isEditing}
				aria-label="edit value"
				onCancel={() => setEditing(false)}
				onEdit={() => setEditing(true)}
				onConfirm={(value) => {
					setEditValue(value);
					setEditing(false);
				}}
			>
				<span>{editValue}</span>
			</InlineEdit>
		);
	},
};

export const Validation: Story = {
	render: () => {
		const [editValue, setEditValue] = useState('edit me');
		const [isEditing, setEditing] = useState(true);

		return (
			<InlineEdit
				defaultValue={editValue}
				isEditing={isEditing}
				aria-label="edit value"
				onCancel={() => setEditing(false)}
				onEdit={() => setEditing(true)}
				onConfirm={(value) => {
					setEditValue(value);
					setEditing(false);
				}}
				renderInput={
					<IconField
						icon={
							<Icon name="alert-rhombus" style={{ fill: 'var(--lp-color-text-feedback-error)' }} />
						}
						tooltip="Value is required"
						ariaLabel="Error"
						renderIconLast
					>
						<TextField id="inline-edit" />
					</IconField>
				}
			>
				<span>{editValue}</span>
			</InlineEdit>
		);
	},
	parameters: {
		a11y: {
			options: {
				rules: {
					// @fixme
					'duplicate-id-active': { enabled: false },
				},
			},
		},
	},
};
