import type { StoryObj } from '@storybook/react';

import { Snackbar } from '../src';

export default {
	component: Snackbar,
	title: 'Legacy/Deprecated/Snackbar',
	description: 'An element that provides brief messages about app processes with a CTA.',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__SNACKBAR,
		},
		chromatic: { disableSnapshot: true },
	},
};

type Story = StoryObj<typeof Snackbar>;

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export const Error: Story = {
	args: {
		kind: 'error',
		description: 'This is a message.',
		cta: (
			<a href="/" target="_blank" rel="noreferrer">
				Link
			</a>
		),
	},
};

export const Info: Story = {
	args: {
		kind: 'info',
		description: 'This is a message.',
		cta: (
			<a href="/" target="_blank" rel="noreferrer">
				Link
			</a>
		),
	},
};

export const Warning: Story = {
	args: {
		kind: 'warning',
		description: 'This is a message.',
		cta: (
			<a href="/" target="_blank" rel="noreferrer">
				Link
			</a>
		),
	},
};

export const Success: Story = {
	args: {
		kind: 'success',
		description: 'This is a message.',
		cta: (
			<a href="/" target="_blank" rel="noreferrer">
				Link
			</a>
		),
	},
};

export const WithHeader: Story = {
	args: {
		kind: 'info',
		header: 'Snackbar header',
		description: 'This is a message.',
		cta: (
			<a href="/" target="_blank" rel="noreferrer">
				Link
			</a>
		),
	},
};
