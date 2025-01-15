import type { VariantProps } from 'class-variance-authority';
import type { RefObject } from 'react';
import type { ModalOverlayProps as AriaModalOverlayProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
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

interface ModalProps extends AriaModalOverlayProps, VariantProps<typeof modal> {
	ref?: RefObject<HTMLDivElement | null>;
}

interface ModalOverlayProps extends AriaModalOverlayProps, VariantProps<typeof modal> {
	ref?: RefObject<HTMLDivElement | null>;
}

/**
 * A modal is an overlay element which blocks interaction with elements outside it.
 *
 * https://react-spectrum.adobe.com/react-aria/Modal.html
 */
const Modal = ({ size = 'medium', variant = 'default', ref, ...props }: ModalProps) => {
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
 * A ModalOverlay is a wrapper for a Modal which allows customizing the backdrop element.
 */
const ModalOverlay = ({ isDismissable = true, ref, ...props }: ModalOverlayProps) => {
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

export { Modal, ModalOverlay };
export type { ModalProps, ModalOverlayProps };
