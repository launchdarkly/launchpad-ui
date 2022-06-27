/* eslint-disable functional/no-class */
import type { KeyboardEvent } from 'react';

import { Portal } from '@launchpad-ui/modal';
import { isEqual, isFunction, isNil } from 'lodash-es';
import React, { Component } from 'react';

type OverlayProps = {
  isOpen: boolean;
  isModal: boolean;
  canEscapeKeyClose: boolean;
  canOutsideClickClose: boolean;
  enforceFocus: boolean;
  lazy: boolean;
  onClose: (event: React.MouseEvent | React.KeyboardEvent) => void;
  children?: React.ReactNode;
};

type OverlayStateType = {
  hasEverOpened: boolean;
};

class Overlay extends Component<OverlayProps> {
  static defaultProps = {
    lazy: true,
    enforceFocus: true,
    isModal: false,
    canOutsideClickClose: true,
    canEscapeKeyClose: true,
  };

  state: OverlayStateType = {
    hasEverOpened: this.props.isOpen,
  };

  containerElement!: HTMLDivElement;

  setContainerRef = (node: HTMLDivElement) => {
    this.containerElement = node;
  };

  handleOverlayOpen() {
    const { canOutsideClickClose, enforceFocus, isModal } = this.props;

    if (canOutsideClickClose) {
      document.addEventListener('mousedown', this.handleDocumentClick);
    }

    if (enforceFocus) {
      document.addEventListener('focus', this.handleDocumentFocus, true);
    }

    if (isModal) {
      document.body.classList.add('has-modal');
    }
  }

  handleOverlayClose() {
    const { isModal } = this.props;

    document.removeEventListener('mousedown', this.handleDocumentClick);
    document.removeEventListener('focus', this.handleDocumentFocus, true);

    if (isModal) {
      document.body.classList.remove('has-modal');
    }
  }

  handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const { canEscapeKeyClose, onClose } = this.props;
    if (canEscapeKeyClose && event.key === 'Escape') {
      isFunction(onClose) && onClose(event);
      event.preventDefault();
    }
  };

  handleDocumentClick = (event: Event) => {
    const { isOpen, onClose, canOutsideClickClose } = this.props;
    const eventTarget = event.target as Element;
    const wasClickInOverlay =
      !isNil(this.containerElement) && this.containerElement.contains(eventTarget);
    // wasClickInBody accounts for clicks in portals within the popover, which are outside of the body and therefore not in the overlay
    const wasClickInBody = !!eventTarget.closest('body');

    if (isOpen && canOutsideClickClose && !wasClickInOverlay && wasClickInBody) {
      isFunction(onClose) && onClose(event as unknown as React.MouseEvent);
    }
  };

  handleDocumentFocus = (event: Event) => {
    const { enforceFocus } = this.props;
    const eventTarget = event.target as Element;

    if (
      enforceFocus &&
      !isNil(this.containerElement) &&
      !this.containerElement.contains(eventTarget)
    ) {
      event.stopImmediatePropagation();
      this.focusContainer();
    }
  };

  focusContainer() {
    requestAnimationFrame(() => {
      if (!this.props.isOpen || isNil(this.containerElement) || isNil(document.activeElement)) {
        return;
      }

      if (!this.containerElement.contains(document.activeElement)) {
        const autofocusElement = this.containerElement.querySelector(
          '[autofocus]'
        ) as HTMLDivElement;
        const tabbableElement = this.containerElement.querySelector('[tabindex]') as HTMLDivElement;
        if (!isNil(autofocusElement)) {
          autofocusElement.focus();
        } else if (!isNil(tabbableElement)) {
          tabbableElement.focus();
        }
      }
    });
  }

  componentDidMount() {
    if (this.props.isOpen) {
      this.handleOverlayOpen();
    }
  }

  componentWillUnmount() {
    this.handleOverlayClose();
  }

  componentDidUpdate(prevProps: OverlayProps) {
    if (!isEqual(this.props, prevProps)) {
      this.setState((state: OverlayStateType) => ({
        hasEverOpened: state.hasEverOpened || this.props.isOpen,
      }));
    }

    if (prevProps.isOpen && !this.props.isOpen) {
      this.handleOverlayClose();
    } else if (!prevProps.isOpen && this.props.isOpen) {
      this.handleOverlayOpen();
    }
  }

  render() {
    const { lazy, isOpen, children } = this.props;
    const { hasEverOpened } = this.state;

    if (lazy && !hasEverOpened) {
      return null;
    }

    return (
      <Portal onKeyDown={this.handleKeyDown} containerRef={this.setContainerRef}>
        {isOpen ? children : null}
      </Portal>
    );
  }
}

export { Overlay };
export type { OverlayProps };
