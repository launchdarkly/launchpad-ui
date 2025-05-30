import type { MutableRefObject } from 'react';

import { useEffect, useRef, useState } from 'react';

const useMediaQuery = (query: string, defaultValue = false) => {
	const [matches, setMatches] = useState(window ? window.matchMedia(query).matches : defaultValue);

	useEffect(() => {
		const media = window.matchMedia(query);
		if (media.matches !== matches) {
			setMatches(media.matches);
		}
		const handleMediaChange = () => {
			setMatches(media.matches);
		};
		media.addEventListener('change', handleMediaChange);
		return () => media.addEventListener('change', handleMediaChange);
	}, [matches, query]);

	return matches;
};

const useOverflowY = (ref: MutableRefObject<HTMLDivElement | null>) => {
	const observerRef = useRef(
		(target: HTMLElement | null) =>
			new ResizeObserver(() => {
				if (target) {
					target.style.overflowY = 'auto';

					const overflow = target.scrollHeight > target.clientHeight ? 'auto' : 'initial';

					target.style.overflowY = overflow;
				}
			}),
	);

	// biome-ignore lint/correctness/useExhaustiveDependencies: ignore
	useEffect(() => {
		const { current: element } = ref;
		const observer = observerRef.current(element);
		const modal = element ? element.closest('[role=dialog]') : null;

		if (element && modal) {
			observer.observe(modal);
		}

		return () => {
			if (element && modal) {
				observer.unobserve(modal);
			}
		};
	}, [ref, observerRef]);
};

const useAbsoluteFooter = (ref: MutableRefObject<HTMLDivElement | null>) => {
	const observer = useRef(
		new ResizeObserver((entries) => {
			const target = entries[0].target as HTMLDivElement;
			const modal = target.closest<HTMLDivElement>('[role=dialog]');
			if (modal) {
				modal.style.paddingBottom = `${target.clientHeight}px`;
			}
		}),
	);

	// biome-ignore lint/correctness/useExhaustiveDependencies: ignore
	useEffect(() => {
		const currentObserver = observer.current;
		const { current } = ref;

		if (current) {
			currentObserver.observe(current);
		}

		return () => {
			if (current) {
				currentObserver.unobserve(current);
			}
		};
	}, [ref, observer]);
};

export { useOverflowY, useMediaQuery, useAbsoluteFooter };
