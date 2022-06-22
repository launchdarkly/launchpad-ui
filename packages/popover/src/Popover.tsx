/* eslint-disable functional/no-class */
import type { OffsetOptions } from '@floating-ui/core';
import type { ComputePositionConfig, Placement, Strategy } from '@floating-ui/dom';
import type { CSSProperties } from 'react';

import { arrow, computePosition, flip, offset as floatOffset, shift } from '@floating-ui/dom';
import { Overlay } from '@launchpad-ui/overlay';
import { FocusScope } from '@react-aria/focus';
import { animated, Spring } from '@react-spring/web';
import cx from 'clsx';
import { isFunction, isNil } from 'lodash-es';
import {
  Children,
  cloneElement,
  Component,
  createElement,
  isValidElement,
  ReactHTML,
  Ref,
} from 'react';
import { v4 } from 'uuid';

import './styles/Popover.css';
import { withTimeouts } from './withTimeouts';

type Offset = OffsetOptions;

type PopoverProps = {
  allowBoundaryElementOverflow?: boolean;
  autoFocus?: boolean;
  content?: string | JSX.Element | JSX.Element[];
  children: React.ReactNode;
  disabled?: boolean;
  destroyOnUpdate?: boolean;
  disablePlacementFlip?: boolean;
  enforceFocus?: boolean;
  hoverCloseDelay?: number;
  hoverOpenDelay?: number;
  interactionKind?: 'hover' | 'hover-target-only' | 'hover-or-focus' | 'click';
  isFixed?: boolean;
  isModal?: boolean;
  isOpen?: boolean;
  offset?: Offset;
  onClick?(): void;
  onClose?(event?: Event): void;
  onInteraction?(isOpen: boolean): void;
  placement?: Placement;
  popoverClassName?: string;
  popoverContentClassName?: string;
  restrictHeight?: boolean;
  restrictWidth?: boolean;
  rootElementStyle?: CSSProperties;
  rootElementTag?: keyof ReactHTML;
  target?: string | JSX.Element;
  targetElementRef?: Ref<Element>;
  targetClassName?: string;
  enableArrow?: boolean;
};

type PopoverState = {
  isOpen: boolean | null;
};

type PopoverTargetProps = {
  onMouseEnter?: (event: React.MouseEvent) => void;
  onMouseLeave?: (event: React.MouseEvent) => void;
  onFocus?: (event: React.FocusEvent) => void;
  onBlur?: (event: React.FocusEvent) => void;
  onClick?: (event: React.MouseEvent) => void;
  ref: (node: Element | null) => void;
  className?: string;
  isopen?: boolean;
  style?: CSSProperties;
};

type PopoverContentProps = {
  onMouseEnter?: (event: React.MouseEvent) => void;
  onMouseLeave?: (event: React.MouseEvent) => void;
  onClick?: (event: React.MouseEvent) => void;
};

const isOrContainsElement = (referenceElement: Element, element: Element) => {
  return referenceElement === element || (referenceElement && referenceElement.contains(element));
};

/**
 * Popover component driven by floating-ui.
 *
 * If you need more control over the popover's behavior,
 * you may specify the `isOpen` prop to use the component
 * in controlled mode.
 *
 */
class Popover extends withTimeouts<PopoverProps>(Component) {
  targetElement: Element | null = null;
  contentElement: HTMLElement | null = null;
  arrowElement: HTMLElement | null = null;
  cancelHoverTimeout?: () => void = undefined;
  options: Partial<ComputePositionConfig> | undefined;

  constructor(props: PopoverProps) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
  }

  static defaultProps = {
    rootElementTag: 'span' as const,
    placement: 'bottom' as const,
    restrictHeight: true,
    restrictWidth: true,
    isModal: false,
    isFixed: false,
    interactionKind: 'click' as const,
    hoverOpenDelay: 250,
    hoverCloseDelay: 250,
    disablePlacementFlip: false,
    allowBoundaryElementOverflow: false,
    destroyOnUpdate: false,
  };

  refHandlers = {
    target: (node: Element | null) => {
      this.targetElement = node;
    },
    content: async (node: HTMLElement | null) => {
      this.contentElement = node;
      await this.updatePopover();
    },
    arrow: (node: HTMLElement | null) => {
      this.arrowElement = node;
    },
  };

  state = {
    isOpen: !isNil(this.props.isOpen) ? this.props.isOpen : null,
  };

  id = `popover-${v4()}`;

  async componentDidUpdate(prevProps: PopoverProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.setState({ isOpen: this.props.isOpen });

      if (this.props.interactionKind === 'click') {
        // pause focus trap in modal/s since popover has its own
        document
          .querySelectorAll('.Modal')
          .forEach((modal) =>
            modal.dispatchEvent(
              new CustomEvent(`modal-trap-${this.props.isOpen ? 'pause' : 'start'}`)
            )
          );
      }
    }

    await this.updatePopover();
  }

  componentWillUnmount() {
    super.componentWillUnmount();
  }

  render() {
    const {
      rootElementTag = 'span',
      rootElementStyle,
      interactionKind,
      autoFocus,
      enforceFocus,
      targetClassName,
      isModal,
    } = this.props;
    const { isOpen } = this.state;
    const { target, content } = this.parseChildren();
    const hasEmptyContent = isNil(content);
    const isTargetDisabled = isValidElement(target) ? !!target?.props?.disabled : false;

    const targetProps: PopoverTargetProps = {
      ref: this.refHandlers.target,
      className: cx('Popover-target', targetClassName, {
        'Popover-target--active': isOpen,
        'Popover-target--disabled': isTargetDisabled,
      }),
      style: rootElementStyle,
    };

    if (
      interactionKind === 'hover' ||
      interactionKind === 'hover-target-only' ||
      interactionKind === 'hover-or-focus'
    ) {
      targetProps.onMouseEnter = this.handleMouseEnter;
      targetProps.onMouseLeave = this.handleMouseLeave;
      if (interactionKind === 'hover-or-focus') {
        targetProps.onFocus = this.handleFocus;
        targetProps.onBlur = this.handleBlur;
      }
    } else {
      targetProps.onClick = this.handleTargetClick;
    }

    return createElement(
      rootElementTag,
      targetProps,
      cloneElement(target as React.ReactElement, {
        ref: this.props.targetElementRef,
        ...(isOpen && { 'aria-describedby': this.id }),
      }),
      <Overlay
        isOpen={!!isOpen && !hasEmptyContent}
        canOutsideClickClose={interactionKind === 'click'}
        isModal={isModal}
        autoFocus={autoFocus}
        enforceFocus={enforceFocus}
        onClose={this.handleOverlayClose}
      >
        {this.renderPopover(content)}
      </Overlay>
    );
  }

  renderPopover(content: React.ReactNode) {
    const {
      interactionKind,
      popoverClassName,
      popoverContentClassName,
      restrictHeight,
      restrictWidth,
      enableArrow,
    } = this.props;
    const { isOpen } = this.state;
    const classes = cx('Popover', popoverClassName);

    let handlers: PopoverContentProps = {};

    if (interactionKind === 'hover') {
      handlers = {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
      };
    }

    if (interactionKind !== 'hover-target-only') {
      handlers.onClick = this.handlePopoverClick;
    }
    const popoverContent = (
      <div
        className={cx(
          'Popover-content',
          {
            'Popover-content--restrict-width': restrictWidth,
          },
          popoverContentClassName
        )}
      >
        {restrictHeight ? <div className="Popover-scroller">{content}</div> : content}
      </div>
    );

    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ duration: 150 }}>
        {(styles) => (
          <animated.div
            id={this.id}
            data-test-id="popover-with-spring"
            ref={this.refHandlers.content}
            style={styles}
            className={classes}
            role="tooltip"
            aria-hidden={!isOpen}
            {...handlers}
          >
            {enableArrow && <div id="arrow" ref={this.refHandlers.arrow}></div>}
            {interactionKind === 'click' ? (
              <FocusScope autoFocus contain>
                {popoverContent}
              </FocusScope>
            ) : (
              popoverContent
            )}
          </animated.div>
        )}
      </Spring>
    );
  }

  parseChildren(): {
    target: React.ReactNode;
    content: React.ReactNode;
  } {
    const { children, target: targetProp, content: contentProp } = this.props;
    const [targetChild, contentChild] = Children.toArray(children);

    return {
      target: isNil(targetChild) ? targetProp : targetChild,
      content: isNil(contentChild) ? contentProp : contentChild,
    };
  }

  handleTargetClick = (event: React.MouseEvent) => {
    const { disabled } = this.props;
    const eventTarget = event.target as Element;
    this.props.onClick?.();
    if (!disabled && this.targetElement && isOrContainsElement(this.targetElement, eventTarget)) {
      // always close the menu, and only open unless something prevented the default
      this.setOpenState((prevState: PopoverState) =>
        prevState.isOpen ? false : !event.defaultPrevented
      );
    }
  };

  handleMouseEnter = () => {
    const { disabled } = this.props;
    if (!disabled) {
      this.setOpenState(true, this.props.hoverOpenDelay);
      this.attachGlobalListener();
    }
  };

  handleMouseLeave = () => {
    const { hoverCloseDelay } = this.props;
    this.setOpenState(false, hoverCloseDelay);
    this.removeGlobalListener();
  };

  handleFocus = () => {
    const { disabled } = this.props;
    if (!disabled) {
      this.setOpenState(true);
      this.attachGlobalListener();
    }
  };

  handleBlur = () => {
    this.setOpenState(false);
    this.removeGlobalListener();
  };

  handlePopoverClick = (event: React.MouseEvent) => {
    const eventTarget = event.target as Element;
    if (eventTarget?.closest?.('.popover-dismiss')) {
      this.setOpenState(false);
    }
  };

  handleOverlayClose = (event: React.MouseEvent | React.KeyboardEvent) => {
    const eventTarget = event.target as Element;
    if (
      (this.targetElement && !isOrContainsElement(this.targetElement, eventTarget)) ||
      event.nativeEvent instanceof KeyboardEvent
    ) {
      this.setOpenState(false);
    }
  };

  setOpenState(isOpen: boolean | ((prevState: PopoverState) => boolean), timeout?: number) {
    const { onInteraction, onClose } = this.props;
    const nextIsOpen = isFunction(isOpen) ? isOpen(this.state) : isOpen;

    isFunction(this.cancelHoverTimeout) && this.cancelHoverTimeout();

    if (typeof timeout !== 'undefined' && timeout > 0) {
      this.cancelHoverTimeout = this.setTimeout(() => this.setOpenState(isOpen), timeout);
    } else {
      // controlled mode
      if (isNil(this.props.isOpen)) {
        this.setState({ isOpen: nextIsOpen });
      } else {
        isFunction(onInteraction) && onInteraction(nextIsOpen);
      }

      if (!nextIsOpen) {
        isFunction(onClose) && onClose();
      }
    }
  }

  async updatePopover() {
    if (this.state.isOpen && !isNil(this.contentElement)) {
      window.addEventListener('scroll', this.updatePosition, { passive: true });
      window.addEventListener('resize', this.updatePosition, { passive: true });
      await this.updatePosition();
    } else {
      window.removeEventListener('scroll', this.updatePosition);
      window.removeEventListener('resize', this.updatePosition);
    }
  }

  async updatePosition() {
    const {
      placement,
      disablePlacementFlip,
      allowBoundaryElementOverflow,
      isFixed,
      offset,
      enableArrow,
      isOpen,
    } = this.props;

    const middleware = [];

    if (isNil(this.contentElement)) {
      return;
    }

    if (!allowBoundaryElementOverflow) {
      middleware.push(shift({ padding: 5 }));
    }

    if (!disablePlacementFlip && !offset) {
      middleware.push(flip({ padding: 5 }));
    }

    if (offset) {
      middleware.push(floatOffset(offset));
    }

    if (enableArrow && this.arrowElement) {
      middleware.push(arrow({ element: this.arrowElement }));
    }

    const hasModal = this.targetElement?.closest('.has-modal');
    const inModal = this.targetElement?.closest('.Modal');
    const strategy: Strategy = isFixed || hasModal ? 'fixed' : 'absolute';

    // no-scroll on modals fires scroll callback so we want to ignore this update for popover menus that open a modal
    if (isOpen && hasModal && !inModal) {
      return;
    }

    this.options = {
      placement,
      middleware,
      strategy,
    };

    const parentNode = this.targetElement;
    if (!parentNode || !parentNode.childNodes) {
      return;
    }

    const target = parentNode.childNodes[0] as Element;
    const {
      x,
      y,
      placement: floatPlacement,
      middlewareData,
    } = await computePosition(target, this.contentElement, this.options);

    if (this.contentElement) {
      Object.assign(this.contentElement.style, {
        left: `${x}px`,
        top: `${y}px`,
      });

      this.contentElement.dataset.popoverPlacement = floatPlacement;
    }

    if (enableArrow && this.arrowElement && middlewareData.arrow) {
      const { x: arrowX, y: arrowY } = middlewareData.arrow;

      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right',
      }[floatPlacement.split('-')[0]];

      if (staticSide) {
        Object.assign(this.arrowElement?.style, {
          left: arrowX !== null ? `${arrowX}px` : '',
          top: arrowY !== null ? `${arrowY}px` : '',
          right: '',
          bottom: '',
          [staticSide]: '5px',
        });
      }
    }
  }

  attachGlobalListener() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  removeGlobalListener() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.setState({ isOpen: false });
      this.removeGlobalListener();
    }
  }
}

export { Popover };
export type { Offset, PopoverProps };
