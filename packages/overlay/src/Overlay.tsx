import type { KeyboardEvent } from 'react';

import { Portal } from '@launchpad-ui/modal';
import { isFunction, isNil } from 'lodash-es';
import { useCallback, useEffect, useRef, useState } from 'react';

type OverlayProps = {
  isOpen: boolean;
  isModal?: boolean;
  canEscapeKeyClose?: boolean;
  canOutsideClickClose?: boolean;
  enforceFocus?: boolean;
  lazy?: boolean;
  onClose: (event: React.MouseEvent | React.KeyboardEvent) => void;
  children?: React.ReactNode;
};

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
    (event: Event) => {
      const eventTarget = event.target as Element;
      const wasClickInOverlay =
        !isNil(containerElement.current) && containerElement.current.contains(eventTarget);
      // wasClickInBody accounts for clicks in portals within the popover, which are outside of the body and therefore not in the overlay
      const wasClickInBody = !!eventTarget.closest('body');

      if (isOpen && canOutsideClickClose && !wasClickInOverlay && wasClickInBody) {
        isFunction(onClose) && onClose(event as unknown as React.MouseEvent);
      }
    },
    [canOutsideClickClose, isOpen, onClose]
  );

  const focusContainer = useCallback(() => {
    requestAnimationFrame(() => {
      if (!isOpen || isNil(containerElement.current) || isNil(document.activeElement)) {
        return;
      }

      if (!containerElement.current.contains(document.activeElement)) {
        const autofocusElement = containerElement.current.querySelector(
          '[autofocus]'
        ) as HTMLDivElement;
        const tabbableElement = containerElement.current.querySelector(
          '[tabindex]'
        ) as HTMLDivElement;
        if (!isNil(autofocusElement)) {
          autofocusElement.focus();
        } else if (!isNil(tabbableElement)) {
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
        !isNil(containerElement.current) &&
        !containerElement.current.contains(eventTarget)
      ) {
        event.stopImmediatePropagation();
        focusContainer();
      }
    },
    [enforceFocus, focusContainer]
  );

  const handleOverlayOpen = useCallback(() => {
    if (canOutsideClickClose) {
      document.addEventListener('mousedown', handleDocumentClick);
    }

    if (enforceFocus) {
      document.addEventListener('focus', handleDocumentFocus, true);
    }

    if (isModal) {
      document.body.classList.add('has-modal');
    }
  }, [handleDocumentClick, handleDocumentFocus, canOutsideClickClose, enforceFocus, isModal]);

  const handleOverlayClose = useCallback(() => {
    document.removeEventListener('mousedown', handleDocumentClick);
    document.removeEventListener('focus', handleDocumentFocus, true);

    if (isModal) {
      document.body.classList.remove('has-modal');
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

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (canEscapeKeyClose && event.key === 'Escape') {
      isFunction(onClose) && onClose(event);
      event.preventDefault();
    }
  };

  if (lazy && !hasEverOpened) {
    return null;
  }

  return (
    <Portal onKeyDown={handleKeyDown} containerRef={containerElement}>
      {isOpen ? children : null}
    </Portal>
  );
};

export { Overlay };
export type { OverlayProps };
