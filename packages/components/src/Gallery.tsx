import type { Key } from 'react';
import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import { cx } from 'class-variance-authority';

import { Tab, TabList, TabPanel, Tabs } from './Tabs';
import { useMedia } from './utils';

import styles from './styles/Gallery.module.css';

export interface MediaItem {
	/** Image source shown in light mode (and in dark mode when `darkSrc` is omitted). */
	src: string;
	/** Accessible alt text for the image. */
	alt: string;
	/** Optional image source used in dark mode (`[data-theme='dark']`). */
	darkSrc?: string;
	/** Optional visible caption rendered beneath the image (per-slide in the carousel). */
	caption?: string;
}

const DEFAULT_AUTO_ADVANCE_MS = 7000;
const EXIT_ANIMATION_MS = 650;

interface CarouselState {
	activeIndex: number;
	exitingIndex: number | null;
}

type CarouselAction = { type: 'GO_TO'; index: number } | { type: 'CLEAR_EXITING' };

const carouselReducer = (state: CarouselState, action: CarouselAction): CarouselState => {
	switch (action.type) {
		case 'GO_TO':
			return state.activeIndex === action.index
				? state
				: { activeIndex: action.index, exitingIndex: state.activeIndex };
		case 'CLEAR_EXITING':
			return { ...state, exitingIndex: null };
		default:
			return state;
	}
};

/** Renders the light image plus an optional dark variant; CSS toggles them via `[data-theme='dark']`. */
const SlideImage = ({ item }: { item: MediaItem }) => (
	<>
		<img className={cx(styles.image, styles.imageLight)} src={item.src} alt={item.alt} />
		{item.darkSrc ? <img className={cx(styles.image, styles.imageDark)} src={item.darkSrc} alt={item.alt} /> : null}
	</>
);

export interface GalleryProps {
	media: MediaItem[];
}

/**
 * Internal media renderer for `OnboardingEmptyState`. Renders a single static image when `media`
 * has one item, or an auto-advancing (fixed 7s), keyboard-navigable carousel when it has more.
 *
 * The carousel is built on React Aria `Tabs` — the dot navigation is a `TabList`/`Tab`, so keyboard,
 * focus, roving tabindex, and ARIA come from RAC rather than being hand-rolled. Auto-advance pauses
 * on hover/focus and is disabled under `prefers-reduced-motion`.
 */
export const Gallery = ({ media }: GalleryProps) => {
	const prefersReducedMotion = useMedia('(prefers-reduced-motion: reduce)');
	const [state, dispatch] = useReducer(carouselReducer, { activeIndex: 0, exitingIndex: null });
	// Track hover and focus independently and pause when either is active. A single shared flag
	// let the two overwrite each other — leaving with the mouse could resume auto-advance while a
	// dot still had keyboard focus.
	const [isHovered, setIsHovered] = useState(false);
	const [isFocused, setIsFocused] = useState(false);
	const isPaused = isHovered || isFocused;
	const exitTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

	const isCarousel = media.length > 1;

	const goTo = useCallback((index: number) => dispatch({ type: 'GO_TO', index }), []);
	const advance = useCallback(() => {
		goTo((state.activeIndex + 1) % media.length);
	}, [goTo, state.activeIndex, media.length]);

	// Reset the "exiting" slide once its transition has finished.
	useEffect(() => {
		if (state.exitingIndex === null) {
			return;
		}
		clearTimeout(exitTimerRef.current);
		exitTimerRef.current = setTimeout(() => dispatch({ type: 'CLEAR_EXITING' }), EXIT_ANIMATION_MS);
		return () => clearTimeout(exitTimerRef.current);
	}, [state.exitingIndex]);

	// Auto-advance — paused on hover/focus, disabled for reduced motion or a single image.
	useEffect(() => {
		if (!isCarousel || prefersReducedMotion || isPaused) {
			return;
		}
		const timer = setInterval(advance, DEFAULT_AUTO_ADVANCE_MS);
		return () => clearInterval(timer);
	}, [isCarousel, prefersReducedMotion, isPaused, advance, state.activeIndex]);

	if (media.length === 0) {
		return null;
	}

	const hasCaptions = media.some((item) => Boolean(item.caption));

	if (!isCarousel) {
		const item = media[0];
		return (
			<div className={styles.gallery}>
				<div className={styles.imageContainer}>
					<SlideImage item={item} />
				</div>
				{item.caption ? <p className={styles.caption}>{item.caption}</p> : null}
			</div>
		);
	}

	const getSlideClassName = (index: number) => {
		if (index === state.activeIndex) {
			return cx(styles.slide, styles.slideActive);
		}
		if (index === state.exitingIndex) {
			return cx(styles.slide, styles.slideExiting);
		}
		return styles.slide;
	};

	return (
		<div
			className={styles.gallery}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onFocus={() => setIsFocused(true)}
			onBlur={(event) => {
				// Only resume once focus actually leaves the gallery — not when it moves between dots.
				const nextFocused = event.relatedTarget;
				if (!(nextFocused instanceof Node) || !event.currentTarget.contains(nextFocused)) {
					setIsFocused(false);
				}
			}}
		>
			<Tabs selectedKey={String(state.activeIndex)} onSelectionChange={(key: Key) => goTo(Number(key))}>
				<div className={styles.imageContainer}>
					{media.map((item, index) => (
						<TabPanel key={index} id={String(index)} shouldForceMount className={getSlideClassName(index)}>
							<SlideImage item={item} />
						</TabPanel>
					))}
				</div>
				{hasCaptions ? <p className={styles.caption}>{media[state.activeIndex]?.caption ?? ''}</p> : null}
				<TabList className={styles.dots} aria-label="Gallery navigation">
					{media.map((item, index) => (
						<Tab
							key={index}
							id={String(index)}
							className={styles.dot}
							aria-label={`Show image ${index + 1}: ${item.alt}`}
						/>
					))}
				</TabList>
			</Tabs>
		</div>
	);
};
