import type { AriaToastProps, AriaToastRegionProps } from '@react-aria/toast';
import type { ToastOptions as AriaToastOptions, ToastState } from '@react-stately/toast';
import type { VariantProps } from 'class-variance-authority';
import type { ReactElement, ReactNode } from 'react';

import { StatusIcon } from '@launchpad-ui/icons';
import { useToast, useToastRegion } from '@react-aria/toast';
import { mergeProps } from '@react-aria/utils';
import { ToastQueue as AriaToastQueue, useToastQueue } from '@react-stately/toast';
import { cva } from 'class-variance-authority';
import { cloneElement, useEffect, useRef } from 'react';
import { useFocusRing } from 'react-aria';
import { createPortal } from 'react-dom';

import { IconButton } from './IconButton';
import styles from './styles/Toast.module.css';
import { useMedia } from './utils';

const region = cva(styles.region, {
	variants: {
		placement: {
			bottom: styles.bottom,
			right: styles.right,
		},
	},
	defaultVariants: {
		placement: 'bottom',
	},
});

const icon = cva(styles.icon, {
	variants: {
		status: {
			error: styles.error,
			info: styles.info,
			success: styles.success,
			warning: styles.warning,
		},
	},
	defaultVariants: {
		status: 'info',
	},
});

const toast = cva(styles.toast, {
	variants: {
		variant: {
			default: styles.default,
			snackbar: styles.snackbar,
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});

interface RegionVariants extends VariantProps<typeof region> {}
interface IconVariants extends VariantProps<typeof icon> {}
interface ToastVariants extends VariantProps<typeof toast> {}

interface ToastContent {
	children: ReactNode;
}

interface ToastValue extends IconVariants, ToastContent {}

interface SnackbarContent {
	title?: ReactNode;
	description: ReactNode;
	action?: ReactElement;
}

interface SnackbarValue extends IconVariants, SnackbarContent {}

interface ToastOptions extends Omit<AriaToastOptions, 'timeout'> {}

interface ToastRegionProps<T> extends AriaToastRegionProps, RegionVariants {
	state: ToastState<T>;
}

interface ToastProps<T> extends AriaToastProps<T>, ToastVariants {
	state: ToastState<T>;
}

const ToastRegion = <T extends ToastValue | SnackbarValue>({
	state,
	placement = 'bottom',
	...props
}: ToastRegionProps<T>) => {
	const ref = useRef(null);
	const { regionProps } = useToastRegion(props, state, ref);

	return (
		<div {...regionProps} ref={ref} className={region({ placement })}>
			{state.visibleToasts.map((toast) => (
				<Toast
					key={toast.key}
					toast={toast}
					state={state}
					variant={placement === 'bottom' ? 'default' : 'snackbar'}
				/>
			))}
		</div>
	);
};

const Toast = <T extends ToastValue | SnackbarValue>({
	state,
	variant = 'default',
	...props
}: ToastProps<T>) => {
	const ref = useRef(null);
	const { toastProps, contentProps, titleProps, descriptionProps, closeButtonProps } = useToast(
		props,
		state,
		ref,
	);
	const useMotion = useMedia('(prefers-reduced-motion: no-preference)');
	const { isFocusVisible, focusProps } = useFocusRing();

	const content: IconVariants & Partial<SnackbarContent & ToastContent> = props.toast.content;
	const { children, status, title, description, action } = content;
	const cta =
		action &&
		cloneElement(action, mergeProps(action.props, { onPress: () => state.close(props.toast.key) }));

	useEffect(() => {
		// Ensure toast is removed with reduced motion after close is clicked or when timeout expires
		if (useMotion === false && props.toast.animation === 'exiting') {
			state.remove(props.toast.key);
		}
	}, [useMotion, props.toast, state]);

	return (
		<div
			data-theme="dark"
			{...mergeProps(toastProps, focusProps)}
			ref={ref}
			className={toast({ variant })}
			data-animation={props.toast.animation}
			data-focus-visible={isFocusVisible || undefined}
			onAnimationEnd={() => {
				if (props.toast.animation === 'exiting') {
					state.remove(props.toast.key);
				}
			}}
		>
			<StatusIcon kind={status || 'info'} className={icon({ status })} />
			<div {...contentProps} className={styles.content}>
				{variant === 'default' ? (
					<div {...titleProps}>{children}</div>
				) : (
					<>
						<div {...titleProps} className={styles.title}>
							{title}
						</div>
						<div {...descriptionProps} className={styles.description}>
							{description}
							{cta && ' '}
							{cta}
						</div>
					</>
				)}
			</div>
			<IconButton
				aria-label="Close"
				{...closeButtonProps}
				/* biome-ignore lint/correctness/noChildrenProp: <explanation> */
				children={undefined}
				icon="cancel"
				variant="minimal"
				size="small"
			/>
		</div>
	);
};

const toastQueue = new AriaToastQueue<ToastValue>({
	maxVisibleToasts: 5,
	hasExitAnimation: true,
});

const snackbarQueue = new AriaToastQueue<SnackbarValue>({
	maxVisibleToasts: 5,
	hasExitAnimation: true,
});

const timeout = 6000;

const ToastQueue = {
	info: (children: ToastContent['children'], options?: ToastOptions) =>
		toastQueue.add({ children, status: 'info' }, { ...options, timeout }),
	success: (children: ToastContent['children'], options?: ToastOptions) =>
		toastQueue.add({ children, status: 'success' }, { ...options, timeout }),
	warning: (children: ToastContent['children'], options?: ToastOptions) =>
		toastQueue.add({ children, status: 'warning' }, { ...options, timeout }),
};

const SnackbarQueue = {
	error: (content: SnackbarContent, options?: ToastOptions) => {
		const key = snackbarQueue.add({ ...content, status: 'error' }, { ...options });
		return () => snackbarQueue.close(key);
	},
	info: (content: SnackbarContent, options?: ToastOptions) => {
		const key = snackbarQueue.add({ ...content, status: 'info' }, { ...options });
		return () => snackbarQueue.close(key);
	},
	success: (content: SnackbarContent, options?: ToastOptions) => {
		const key = snackbarQueue.add({ ...content, status: 'success' }, { ...options });
		return () => snackbarQueue.close(key);
	},
	warning: (content: SnackbarContent, options?: ToastOptions) => {
		const key = snackbarQueue.add({ ...content, status: 'warning' }, { ...options });
		return () => snackbarQueue.close(key);
	},
};

/**
 * Toasts display brief, temporary notifications of actions, errors, or other events in an application.
 *
 * https://react-spectrum.adobe.com/react-aria/useToast.html
 */
const ToastContainer = (props: AriaToastRegionProps) => {
	const state = useToastQueue(toastQueue);

	return state.visibleToasts.length > 0
		? createPortal(<ToastRegion {...props} state={state} placement="bottom" />, document.body)
		: null;
};

/**
 * Toasts display brief, temporary notifications of actions, errors, or other events in an application.
 *
 * https://react-spectrum.adobe.com/react-aria/useToast.html
 */
const SnackbarContainer = (props: AriaToastRegionProps) => {
	const state = useToastQueue(snackbarQueue);

	return state.visibleToasts.length > 0
		? createPortal(<ToastRegion {...props} state={state} placement="right" />, document.body)
		: null;
};

export { SnackbarContainer, SnackbarQueue, ToastContainer, ToastQueue };
export type { SnackbarValue, ToastOptions, ToastValue };
