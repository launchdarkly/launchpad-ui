import type { KeyboardEvent, MouseEvent as ReactMouseEvent, ReactNode } from 'react';

import { addLaunchPadAttribution } from '@launchpad-ui/attribution';
import { Portal } from '@launchpad-ui/portal';
import { useCallback, useEffect, useRef, useState } from 'react';

type OverlayProps = {
	isOpen: boolean;
	isModal?: boolean;
	canEscapeKeyClose?: boolean;
	canOutsideClickClose?: boolean;
	enforceFocus?: boolean;
	lazy?: boolean;
	onClose: (event: ReactMouseEvent | KeyboardEvent) => void;
	children?: ReactNode;
};

/**
 * @deprecated not used for overlays in `@launchpad-ui/components`
 */
const Overlay = ({
	isOpen,
	lazy = true,
	enforceFocus = true,
	isModal = false,
	canOutsideClickClose = true,
	canEscapeKeyClose = true,
	onClose,
	children,
}: OverlayProps) => {
	const [hasEverOpened, setHasEverOpened] = useState(isOpen);
	const containerElement = useRef<HTMLDivElement>(null);

	const handleDocumentClick = useCallback(
		(event: MouseEvent) => {
			const eventTarget = event.target as Element;
			const wasClickInOverlay = containerElement.current?.contains(eventTarget);
			// wasClickInBody accounts for clicks in portals within the popover, which are outside of the body and therefore not in the overlay
			const wasClickInBody = !!eventTarget.closest('body');

			if (isOpen && canOutsideClickClose && !wasClickInOverlay && wasClickInBody) {
				typeof onClose === 'function' && onClose(event as unknown as ReactMouseEvent);
			}
		},
		[canOutsideClickClose, isOpen, onClose],
	);

	const focusContainer = useCallback(() => {
		requestAnimationFrame(() => {
			if (!isOpen || containerElement.current === null || document.activeElement === null) {
				return;
			}

			if (!containerElement.current.contains(document.activeElement)) {
				const autofocusElement = containerElement.current.querySelector(
					'[autofocus]',
				) as HTMLDivElement;
				const tabbableElement = containerElement.current.querySelector(
					'[tabindex]',
				) as HTMLDivElement;
				if (autofocusElement) {
					autofocusElement.focus();
				} else if (tabbableElement) {
					tabbableElement.focus();
				}
			}
		});
	}, [isOpen]);

	const handleDocumentFocus = useCallback(
		(event: Event) => {
			const eventTarget = event.target as Element;

			if (
				enforceFocus &&
				containerElement.current &&
				!containerElement.current.contains(eventTarget)
			) {
				event.stopImmediatePropagation();
				focusContainer();
			}
		},
		[enforceFocus, focusContainer],
	);

	const handleOverlayOpen = useCallback(() => {
		if (canOutsideClickClose) {
			document.addEventListener('mousedown', handleDocumentClick);
		}

		if (enforceFocus) {
			document.addEventListener('focus', handleDocumentFocus, true);
		}

		if (isModal) {
			document.body.classList.add('has-overlay');
		}
	}, [handleDocumentClick, handleDocumentFocus, canOutsideClickClose, enforceFocus, isModal]);

	const handleOverlayClose = useCallback(() => {
		document.removeEventListener('mousedown', handleDocumentClick);
		document.removeEventListener('focus', handleDocumentFocus, true);

		if (isModal) {
			document.body.classList.remove('has-overlay');
		}
	}, [handleDocumentClick, handleDocumentFocus, isModal]);

	useEffect(() => {
		if (isOpen) {
			handleOverlayOpen();
		} else {
			handleOverlayClose();
		}

		setHasEverOpened(hasEverOpened || isOpen);

		return () => {
			handleOverlayClose();
		};
	}, [isOpen, handleOverlayOpen, handleOverlayClose, hasEverOpened]);

	const handleKeyDown = (event: KeyboardEvent) => {
		if (canEscapeKeyClose && event.key === 'Escape') {
			typeof onClose === 'function' && onClose(event);
			event.preventDefault();
		}
	};

	if (lazy && !hasEverOpened) {
		return null;
	}

	return (
		<Portal
			{...addLaunchPadAttribution('Overlay')}
			onKeyDown={handleKeyDown}
			ref={containerElement}
		>
			{isOpen ? children : null}
		</Portal>
	);
};

export { Overlay };
export type { OverlayProps };
