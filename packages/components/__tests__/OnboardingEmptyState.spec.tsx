import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { act, fireEvent, render, screen, userEvent } from '@launchpad-ui/test-utils';

import type { MediaItem } from '../src';
import { ButtonGroup, Heading, LinkButton, OnboardingEmptyState, Text } from '../src';

const stubMatchMedia = (matches: boolean) => {
	globalThis.matchMedia = vi.fn().mockReturnValue({
		matches,
		media: '',
		onchange: null,
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
		addListener: vi.fn(),
		removeListener: vi.fn(),
		dispatchEvent: vi.fn(),
	});
};

const singleMedia: MediaItem[] = [{ src: 'light.png', darkSrc: 'dark.png', alt: 'Feature targeting' }];

const carouselMedia: MediaItem[] = [
	{ src: 'a.png', alt: 'Configure', caption: 'Configure' },
	{ src: 'b.png', alt: 'Release', caption: 'Release' },
	{ src: 'c.png', alt: 'Evaluate', caption: 'Evaluate' },
];

const Content = () => (
	<>
		<Heading size="large">Release code safely</Heading>
		<Text>Control how and when changes reach users.</Text>
		<ButtonGroup>
			<LinkButton variant="primary" href="https://example.com/start">
				Get started
			</LinkButton>
			<LinkButton href="https://example.com/docs">See an example</LinkButton>
		</ButtonGroup>
	</>
);

const selectedTabIndex = () =>
	screen.getAllByRole('tab').findIndex((tab) => tab.getAttribute('aria-selected') === 'true');

describe('OnboardingEmptyState', () => {
	beforeEach(() => {
		stubMatchMedia(false);
	});

	afterEach(() => {
		vi.useRealTimers();
		vi.restoreAllMocks();
	});

	it('renders slotted heading (h1), body, and CTAs', () => {
		render(
			<OnboardingEmptyState media={singleMedia}>
				<Content />
			</OnboardingEmptyState>,
		);
		expect(screen.getByRole('heading', { level: 1, name: 'Release code safely' })).toBeVisible();
		expect(screen.getByText('Control how and when changes reach users.')).toBeVisible();
		expect(screen.getByRole('link', { name: 'Get started' })).toBeVisible();
		expect(screen.getByRole('link', { name: 'See an example' })).toBeVisible();
	});

	it('renders a single static image with no carousel controls when media has one item', () => {
		render(
			<OnboardingEmptyState media={singleMedia}>
				<Content />
			</OnboardingEmptyState>,
		);
		expect(screen.queryByRole('tablist')).not.toBeInTheDocument();
		expect(screen.getAllByAltText('Feature targeting').length).toBeGreaterThan(0);
	});

	it('renders nothing in the gallery when media is empty', () => {
		render(
			<OnboardingEmptyState media={[]}>
				<Content />
			</OnboardingEmptyState>,
		);
		expect(screen.queryByRole('tablist')).not.toBeInTheDocument();
		expect(screen.queryByRole('img')).not.toBeInTheDocument();
	});

	it('renders a carousel with one tab per slide, first selected', () => {
		render(
			<OnboardingEmptyState media={carouselMedia}>
				<Content />
			</OnboardingEmptyState>,
		);
		expect(screen.getByRole('tablist', { name: 'Gallery navigation' })).toBeVisible();
		const tabs = screen.getAllByRole('tab');
		expect(tabs).toHaveLength(3);
		expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
		expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
		// Each dot controls its slide panel (RAC wires aria-controls to the tabpanel).
		expect(tabs[0]).toHaveAttribute('aria-controls');
	});

	it('selects a slide when its dot is clicked', async () => {
		const user = userEvent.setup();
		render(
			<OnboardingEmptyState media={carouselMedia}>
				<Content />
			</OnboardingEmptyState>,
		);
		await user.click(screen.getAllByRole('tab')[2]);
		expect(selectedTabIndex()).toBe(2);
	});

	it('moves selection with the arrow keys', async () => {
		const user = userEvent.setup();
		render(
			<OnboardingEmptyState media={carouselMedia}>
				<Content />
			</OnboardingEmptyState>,
		);
		await user.click(screen.getAllByRole('tab')[0]);
		await user.keyboard('{ArrowRight}');
		expect(selectedTabIndex()).toBe(1);
	});

	it('auto-advances after the interval', () => {
		vi.useFakeTimers();
		render(
			<OnboardingEmptyState media={carouselMedia}>
				<Content />
			</OnboardingEmptyState>,
		);
		expect(selectedTabIndex()).toBe(0);
		act(() => {
			vi.advanceTimersByTime(7000);
		});
		expect(selectedTabIndex()).toBe(1);
	});

	it('pauses auto-advance while hovered and resumes on unhover', () => {
		vi.useFakeTimers();
		render(
			<OnboardingEmptyState media={carouselMedia}>
				<Content />
			</OnboardingEmptyState>,
		);
		const gallery = screen.getByRole('tablist').parentElement?.parentElement as HTMLElement;
		act(() => {
			fireEvent.mouseEnter(gallery);
		});
		act(() => {
			vi.advanceTimersByTime(7000);
		});
		expect(selectedTabIndex()).toBe(0);

		act(() => {
			fireEvent.mouseLeave(gallery);
		});
		act(() => {
			vi.advanceTimersByTime(7000);
		});
		expect(selectedTabIndex()).toBe(1);
	});

	it('does not auto-advance under reduced motion', () => {
		stubMatchMedia(true);
		vi.useFakeTimers();
		render(
			<OnboardingEmptyState media={carouselMedia}>
				<Content />
			</OnboardingEmptyState>,
		);
		act(() => {
			vi.advanceTimersByTime(7000);
		});
		expect(selectedTabIndex()).toBe(0);
	});
});
