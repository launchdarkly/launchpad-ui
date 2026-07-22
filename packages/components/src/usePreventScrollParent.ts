import type { RefObject } from 'react';

import { isScrollable, useLayoutEffect } from '@react-aria/utils';

interface PreventScrollParentOptions {
	/** Ref to the element that triggers the overlay. Its nearest scrollable ancestor is locked. */
	triggerRef?: RefObject<Element | null> | null;
	/** Whether the overlay is currently open. */
	isOpen: boolean;
	/** Disables the lock (e.g. for non-modal overlays, matching React Aria's `usePreventScroll`). */
	isDisabled?: boolean;
}

interface Lock {
	count: number;
	restore: () => void;
}

const locks = new Map<HTMLElement, Lock>();

const lock = (element: HTMLElement) => {
	const existing = locks.get(element);
	if (existing) {
		existing.count++;
		return;
	}

	const { overflow, scrollbarGutter, paddingRight } = element.style;
	const scrollbarWidth = element.offsetWidth - element.clientWidth;

	if (scrollbarWidth > 0) {
		if (
			typeof CSS !== 'undefined' &&
			typeof CSS.supports === 'function' &&
			CSS.supports('scrollbar-gutter', 'stable')
		) {
			element.style.scrollbarGutter = 'stable';
		} else {
			const currentPadding =
				Number.parseInt(window.getComputedStyle(element).paddingRight, 10) || 0;
			element.style.paddingRight = `${currentPadding + scrollbarWidth}px`;
		}
	}
	element.style.overflow = 'hidden';

	locks.set(element, {
		count: 1,
		restore: () => {
			element.style.overflow = overflow;
			element.style.scrollbarGutter = scrollbarGutter;
			element.style.paddingRight = paddingRight;
		},
	});
};

const unlock = (element: HTMLElement) => {
	const existing = locks.get(element);
	if (!existing) {
		return;
	}
	existing.count--;
	if (existing.count === 0) {
		existing.restore();
		locks.delete(element);
	}
};

/**
 * Finds the nearest ancestor of `start` to lock. An element already locked by this hook is a valid
 * target even though its `overflow` is now `hidden` (which `isScrollable` would otherwise reject),
 * so nested overlays sharing a scroll container reference-count the same element. Returns `null`
 * when the document itself is the scroller, leaving those apps to React Aria's own lock.
 */
const findScrollParent = (start: Element): HTMLElement | null => {
	const root = document.scrollingElement ?? document.documentElement;
	let node = start.parentElement;
	while (node && node !== document.body && node !== root) {
		if (locks.has(node) || isScrollable(node, true)) {
			return node;
		}
		node = node.parentElement;
	}
	return null;
};

/**
 * Prevents scrolling of the trigger's nearest scrollable ancestor while an overlay is open.
 *
 * React Aria's `usePreventScroll` only locks `document.documentElement`. When an app scrolls in a
 * nested container (e.g. an app shell with `overflow: auto` on a layout element) rather than on the
 * document, that lock is a no-op and the page keeps scrolling behind an open overlay. This hook
 * complements it by locking the actual scroll container. It is a no-op when the document itself is
 * the scroller, so apps already handled by React Aria are unaffected.
 */
const usePreventScrollParent = ({
	triggerRef,
	isOpen,
	isDisabled = false,
}: PreventScrollParentOptions) => {
	useLayoutEffect(() => {
		if (isDisabled || !isOpen || !triggerRef?.current) {
			return;
		}

		const scrollParent = findScrollParent(triggerRef.current);
		if (!scrollParent) {
			return;
		}

		lock(scrollParent);
		return () => unlock(scrollParent);
	}, [triggerRef, isOpen, isDisabled]);
};

export { usePreventScrollParent };
export type { PreventScrollParentOptions };
