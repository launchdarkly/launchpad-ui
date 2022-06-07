import type { FocusTrap, Options as FocusTrapOptions } from 'focus-trap';

import { Button, ButtonSize, ButtonType } from '@launchpad-ui/button';
import { Close, IconSize } from '@launchpad-ui/icons';
import { FocusScope } from '@react-aria/focus';
import { animated } from '@react-spring/web';
import classNames from 'classnames';
import { createFocusTrap } from 'focus-trap';
import { defer } from 'lodash-es';
import noScroll from 'no-scroll';
import { Component, createRef } from 'react';

import { push as managerPush, remove as managerRemove } from './manager';

type ModalProps = {
  children?: React.ReactNode;
  className?: string;
  withCloseButton?: boolean;
  cancelWithOverlayClick?: boolean;
  returnFocus?: boolean;
  overlayStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  modalLabelID?: string;
  onReady?(): void;
  onCancel?(): void;
  shouldScroll?: boolean;
  resetScrollState?(reset: boolean): void;
};

class Modal extends Component<ModalProps> {
  static defaultProps = {
    withCloseButton: false,
    cancelWithOverlayClick: true,
    returnFocus: true,
    contentStyle: {},
    overlayStyle: {},
    onReady: () => undefined,
    onCancel: () => undefined,
    modalLabelID: 'Modal-title',
  };

  constructor(props: ModalProps) {
    super(props);
    this.clearFocus = this.clearFocus.bind(this);
    this.setupFocus = this.setupFocus.bind(this);
  }

  focusTrap: FocusTrap | undefined;

  rootRef = createRef<HTMLDivElement>();
  scrollRef = createRef<HTMLDivElement>();

  componentDidMount() {
    managerPush(this);
    defer(noScroll.on);
    this.rootRef?.current?.addEventListener('modal-trap-pause', this.clearFocus);
    this.rootRef?.current?.addEventListener('modal-trap-start', this.setupFocus);
  }

  componentDidUpdate() {
    const { onReady } = this.props;

    const options = {
      onActivate: onReady,
      clickOutsideDeactivates: true,
    };

    if (
      Object.prototype.hasOwnProperty.call(this.props, 'shouldScroll') &&
      this.scrollRef.current
    ) {
      this.focusTrap = createFocusTrap(this.scrollRef.current, options);
    }

    this.props.shouldScroll &&
      Object.prototype.hasOwnProperty.call(this.props, 'resetScrollState') &&
      this.handleScroll();
  }

  componentWillUnmount() {
    managerRemove(this);
    defer(noScroll.off);
    this.rootRef?.current?.removeEventListener('modal-trap-pause', this.clearFocus);
    this.rootRef?.current?.removeEventListener('modal-trap-start', this.setupFocus);
  }

  setupFocus() {
    const { onReady } = this.props;
    const node = Object.prototype.hasOwnProperty.call(this.props, 'shouldScroll')
      ? this.scrollRef.current
      : this.rootRef.current;
    const options: FocusTrapOptions = {
      onActivate: onReady,
      clickOutsideDeactivates: true,
      checkCanFocusTrap: () => new Promise((resolve) => setTimeout(resolve, 50)),
    };

    if (!node) {
      return;
    }

    if (document.activeElement && node?.contains(document.activeElement)) {
      options.initialFocus = document.activeElement as HTMLElement;
    }

    if (!this.focusTrap) {
      this.focusTrap = createFocusTrap(node, options);
    }
    this.focusTrap?.activate({});
  }

  clearFocus() {
    this.focusTrap?.deactivate({ returnFocus: this.props.returnFocus });
  }

  close() {
    this.props.onCancel && this.props.onCancel();
  }

  render() {
    const {
      className,
      withCloseButton,
      overlayStyle,
      contentStyle,
      onCancel,
      children,
      modalLabelID,
    } = this.props;
    const modalClasses = classNames('Modal', className);

    return (
      <div ref={this.rootRef} className={modalClasses}>
        <animated.div
          role="presentation"
          className="Modal-overlay"
          onMouseDown={this.handleOverlayClick}
          style={overlayStyle}
        >
          <FocusScope autoFocus restoreFocus>
            <animated.div
              role="dialog"
              aria-labelledby={modalLabelID}
              aria-modal
              className="Modal-content"
              style={contentStyle}
              ref={this.scrollRef}
            >
              {withCloseButton && (
                <Button
                  aria-label="close"
                  size={ButtonSize.SMALL}
                  type={ButtonType.ICON}
                  icon={<Close size={IconSize.MEDIUM} />}
                  className="Modal-close"
                  onClick={onCancel}
                  testId="Modal-close"
                />
              )}
              {children}
            </animated.div>
          </FocusScope>
        </animated.div>
      </div>
    );
  }

  handleScroll = () => {
    if (!this.scrollRef.current) {
      return;
    }

    this.scrollRef.current.scrollTo({ top: 0 });
    this.props.resetScrollState && this.props.resetScrollState(false);
  };

  handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (this.props.cancelWithOverlayClick && event.target === event.currentTarget) {
      this.props.onCancel && this.props.onCancel();
    }
  };
}

export { Modal };
export type { ModalProps };
