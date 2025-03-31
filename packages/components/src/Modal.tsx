import type { VariantProps } from 'class-variance-authority';
import type { Ref } from 'react';
import type {
	ModalOverlayProps as AriaModalOverlayProps,
	ContextValue,
} from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import {
	Modal as AriaModal,
	ModalOverlay as AriaModalOverlay,
	composeRenderProps,
} from 'react-aria-components';

import styles from './styles/Modal.module.css';
import { useLPContextProps } from './utils';

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
	ref?: Ref<HTMLDivElement>;
}

interface ModalOverlayProps extends AriaModalOverlayProps, VariantProps<typeof modal> {
	ref?: Ref<HTMLDivElement>;
}

const ModalContext = createContext<ContextValue<ModalProps, HTMLDivElement>>(null);

/**
 * A modal is an overlay element which blocks interaction with elements outside it.
 *
 * https://react-spectrum.adobe.com/react-aria/Modal.html
 */
const Modal = ({ ref, ...props }: ModalProps) => {
	[props, ref] = useLPContextProps(props, ref, ModalContext);
	const { size = 'medium', variant = 'default' } = props;

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

export { Modal, ModalContext, ModalOverlay };
export type { ModalProps, ModalOverlayProps };
