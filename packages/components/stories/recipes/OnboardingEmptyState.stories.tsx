import type { Meta, StoryObj } from '@storybook/react-vite';

import type { MediaItem } from '../../src/OnboardingEmptyState';
import { OnboardingEmptyState } from '../../src/OnboardingEmptyState';

const swatch = (label: string, bg: string) =>
	`data:image/svg+xml,${encodeURIComponent(
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"><rect width="320" height="180" fill="${bg}"/><text x="160" y="96" font-family="sans-serif" font-size="18" fill="#ffffff" text-anchor="middle">${label}</text></svg>`,
	)}`;

const singleMedia: MediaItem[] = [
	{ src: swatch('Targeting', '#405bff'), darkSrc: swatch('Targeting', '#1b2a80'), alt: 'Targeting rules' },
];

const carouselMedia: MediaItem[] = [
	{ src: swatch('Configure', '#405bff'), alt: 'Configure', caption: 'Configure your setup' },
	{ src: swatch('Release', '#00c58e'), alt: 'Release', caption: 'Release with confidence' },
	{ src: swatch('Evaluate', '#a34fde'), alt: 'Evaluate', caption: 'Evaluate the results' },
];

const meta: Meta<typeof OnboardingEmptyState> = {
	component: OnboardingEmptyState,
	title: 'Recipes/OnboardingEmptyState',
	argTypes: {
		heading: {
			control: 'text',
			description: 'Plain-text onboarding title, rendered as an `h1` with fixed editorial styling.',
			table: { type: { summary: 'string' }, category: 'Content' },
		},
		description: {
			control: false,
			description: 'Optional body copy beneath the heading. May contain an inline link.',
			table: { type: { summary: 'ReactNode' }, category: 'Content' },
		},
		media: {
			control: 'object',
			description:
				'Media rendered in the gallery panel. A single item shows a static image; more than one renders an auto-advancing, keyboard-navigable carousel. Each `MediaItem` has `src`, `alt`, an optional `darkSrc` (used under `[data-theme="dark"]`), and an optional `caption`.',
			table: { type: { summary: 'MediaItem[]' }, category: 'Content' },
		},
		primaryAction: {
			control: 'object',
			description:
				'Required primary call to action, always rendered with the primary variant. Provide `href` for a link (`LinkButton`) or `onPress` for an action (`Button`).',
			table: { type: { summary: 'OnboardingAction' }, category: 'Content' },
		},
		secondaryActions: {
			control: 'object',
			description: 'Up to two secondary calls to action, each rendered with the default variant. Omit for none.',
			table: { type: { summary: '[OnboardingAction] | [OnboardingAction, OnboardingAction]' }, category: 'Content' },
		},
	},
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: 'A first-time onboarding empty state for product list pages that have no content yet.',
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof OnboardingEmptyState>;

export const SingleImage: Story = {
	args: {
		heading: 'Release code safely in production',
		description: 'Feature management gives you control over how and when changes reach your users.',
		media: singleMedia,
		primaryAction: { label: 'Get started', href: 'https://example.com/start' },
		secondaryActions: [{ label: 'See an example', href: 'https://example.com/docs' }],
	},
};

export const Carousel: Story = {
	args: {
		heading: 'Get started in three steps',
		description: 'Configure, release, and evaluate — all from one place.',
		media: carouselMedia,
		primaryAction: { label: 'Get started', href: 'https://example.com/start' },
	},
};

export const WithAction: Story = {
	args: {
		heading: 'Release code safely in production',
		description: 'Feature management gives you control over how and when changes reach your users.',
		media: singleMedia,
		primaryAction: { label: 'Create project', onPress: () => {} },
		secondaryActions: [{ label: 'See an example', href: 'https://example.com/docs' }],
	},
};
