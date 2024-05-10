import type { VariantProps } from 'class-variance-authority';
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

const modal = cva(styles.base, {
	variants: {
		size: {
			small: styles.small,
			medium: styles.medium,
			large: styles.large,
		},
		variant: {
			default: styles.default,
			drawer: styles.drawer,
		},
	},
	defaultVariants: {
		size: 'medium',
		variant: 'default',
	},
});
const overlay = cva(styles.overlay);

interface ModalProps extends ModalOverlayProps, VariantProps<typeof modal> {}

const _Modal = (
	{ size = 'medium', variant = 'default', ...props }: ModalProps,
	ref: ForwardedRef<HTMLDivElement>,
) => {
	return (
		<AriaModal
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				modal({ ...renderProps, size, variant, className }),
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

const _ModalOverlay = (
	{ isDismissable = true, ...props }: ModalOverlayProps,
	ref: ForwardedRef<HTMLDivElement>,
) => {
	return (
		<AriaModalOverlay
			isDismissable={isDismissable}
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				overlay({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A ModalOverlay is a wrapper for a Modal which allows customizing the backdrop element.
 */
const ModalOverlay = forwardRef(_ModalOverlay);

export { Modal, ModalOverlay };
export type { ModalProps, ModalOverlayProps };
