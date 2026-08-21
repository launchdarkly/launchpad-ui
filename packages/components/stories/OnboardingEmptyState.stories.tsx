import type { Meta, StoryObj } from '@storybook/react-vite';

import { ButtonGroup } from '../src/ButtonGroup';
import { Heading } from '../src/Heading';
import { LinkButton } from '../src/LinkButton';
import type { MediaItem } from '../src/OnboardingEmptyState';
import { OnboardingEmptyState } from '../src/OnboardingEmptyState';
import { Text } from '../src/Text';

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
	title: 'Components/OnboardingEmptyState',
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
A first-time onboarding empty state: a 50/50 editorial layout with heading, body copy, and calls to
action on one side and a media gallery (single image or auto-advancing carousel) on the other.

Content is composed with slots (following the \`EmptyState\` pattern): pass \`Heading\`, \`Text\`, and a
\`ButtonGroup\` of \`LinkButton\`s as children. The gallery is supplied through the \`media\` prop.
				`,
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof OnboardingEmptyState>;

export const SingleImage: Story = {
	render: () => (
		<OnboardingEmptyState media={singleMedia}>
			<Heading size="large">Release code safely in production</Heading>
			<Text>Feature management gives you control over how and when changes reach your users.</Text>
			<ButtonGroup>
				<LinkButton variant="primary" href="https://example.com/start">
					Get started
				</LinkButton>
				<LinkButton href="https://example.com/docs">See an example</LinkButton>
			</ButtonGroup>
		</OnboardingEmptyState>
	),
};

export const Carousel: Story = {
	render: () => (
		<OnboardingEmptyState media={carouselMedia}>
			<Heading size="large">Get started in three steps</Heading>
			<Text>Configure, release, and evaluate — all from one place.</Text>
			<ButtonGroup>
				<LinkButton variant="primary" href="https://example.com/start">
					Get started
				</LinkButton>
			</ButtonGroup>
		</OnboardingEmptyState>
	),
};
