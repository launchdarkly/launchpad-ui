/* eslint-disable functional/no-class */
import type { FocusTrap, Options as FocusTrapOptions } from 'focus-trap';
import type { Variants } from 'framer-motion';

import { Button, ButtonSize, ButtonType } from '@launchpad-ui/button';
import { Close, IconSize } from '@launchpad-ui/icons';
import { FocusScope } from '@react-aria/focus';
import cx from 'clsx';
import { createFocusTrap } from 'focus-trap';
import { LazyMotion, m } from 'framer-motion';
import { defer } from 'lodash-es';
import noScroll from 'no-scroll';
import { Component, createRef } from 'react';

import { push as managerPush, remove as managerRemove } from './manager';

const overlay: Variants = {
  visible: { opacity: 1, transition: { duration: 0.15 } },
  hidden: { opacity: 0 },
};

const content: { [name: string]: Variants } = {
  pop: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', delay: 0.1, duration: 0.15 } },
  },
  slideRight: {
    hidden: { opacity: 0, x: '25%' },
    visible: {
      opacity: 1,
      x: '0%',
      transition: { type: 'spring', delay: 0.15, duration: 0.2, bounce: 0 },
    },
  },
};

const loadFeatures = () => import('./features').then((res) => res.default);

type ModalProps = {
  children?: React.ReactNode;
  className?: string;
  withCloseButton?: boolean;
  cancelWithOverlayClick?: boolean;
  returnFocus?: boolean;
  modalLabelID?: string;
  transition: 'pop' | 'slideRight';
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
    const { className, withCloseButton, onCancel, children, modalLabelID, transition } = this.props;
    const modalClasses = cx('Modal', className);

    return (
      <LazyMotion strict features={loadFeatures}>
        <div ref={this.rootRef} className={modalClasses}>
          <m.div
            initial="hidden"
            animate="visible"
            variants={overlay}
            transition={{ duration: 0.15 }}
            role="presentation"
            className="Modal-overlay"
            onMouseDown={this.handleOverlayClick}
          >
            <FocusScope autoFocus restoreFocus>
              <m.div
                initial="hidden"
                animate="visible"
                variants={content[transition]}
                role="dialog"
                aria-labelledby={modalLabelID}
                aria-modal
                className="Modal-content"
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
              </m.div>
            </FocusScope>
          </m.div>
        </div>
      </LazyMotion>
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
