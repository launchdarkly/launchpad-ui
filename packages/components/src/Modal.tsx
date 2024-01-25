import type { ForwardedRef } from 'react';
import type { ModalOverlayProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import {
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
  composeRenderProps,
} from 'react-aria-components';

import styles from './styles/Modal.module.css';

const modal = cva(styles.modal);
const overlay = cva(styles.overlay);

const _Modal = (props: ModalOverlayProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <AriaModal
      {...props}
      ref={ref}
      className={composeRenderProps(props.className, (className, renderProps) =>
        modal({ ...renderProps, className })
      )}
    />
  );
};

/**
 * A modal is an overlay element which blocks interaction with elements outside it.
 *
 * https://react-spectrum.adobe.com/react-aria/Modal.html
 */
const Modal = forwardRef(_Modal);

const _ModalOverlay = (props: ModalOverlayProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <AriaModalOverlay
      {...props}
      ref={ref}
      className={composeRenderProps(props.className, (className, renderProps) =>
        overlay({ ...renderProps, className })
      )}
    />
  );
};

const ModalOverlay = forwardRef(_ModalOverlay);

export { Modal, ModalOverlay };
export type { ModalOverlayProps };
