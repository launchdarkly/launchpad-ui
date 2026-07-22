import type { RefObject } from 'react';

import { isScrollable, useLayoutEffect } from '@react-aria/utils';

interface PreventScrollParentOptions {
	/** Ref to the element that triggers the overlay. Its scrollable ancestors are locked. */
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
 * Collects the scrollable ancestors of `start` that should be locked while an overlay is open.
 *
 * Ancestors are matched by their `overflow` being scrollable, regardless of whether they currently
 * overflow — React Aria's own lock also fires unconditionally, and content can grow to overflow
 * while the overlay is open. Every scrollable ancestor is returned (not just the nearest) because
 * app shells often nest several scroll containers; locking all of them mirrors a document-level
 * lock. An element already locked by this hook is included even though its `overflow` is now
 * `hidden` (which `isScrollable` would otherwise reject), so nested overlays reference-count the
 * same containers. `document.body` and the document root are skipped, leaving those to React Aria.
 */
const findScrollParents = (start: Element): HTMLElement[] => {
	const root = document.scrollingElement ?? document.documentElement;
	const parents: HTMLElement[] = [];
	let node = start.parentElement;
	while (node && node !== document.body && node !== root) {
		if (locks.has(node) || isScrollable(node, false)) {
			parents.push(node);
		}
		node = node.parentElement;
	}
	return parents;
};

/**
 * Prevents scrolling of the trigger's scrollable ancestors while an overlay is open.
 *
 * React Aria's `usePreventScroll` only locks `document.documentElement`. When an app scrolls in a
 * nested container (e.g. an app shell with `overflow: auto` on a layout element) rather than on the
 * document, that lock is a no-op and the page keeps scrolling behind an open overlay. This hook
 * complements it by locking the actual scroll containers. It is a no-op when the document itself is
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

		const scrollParents = findScrollParents(triggerRef.current);
		if (scrollParents.length === 0) {
			return;
		}

		for (const parent of scrollParents) {
			lock(parent);
		}
		return () => {
			for (const parent of scrollParents) {
				unlock(parent);
			}
		};
	}, [triggerRef, isOpen, isDisabled]);
};

export { usePreventScrollParent };
export type { PreventScrollParentOptions };
