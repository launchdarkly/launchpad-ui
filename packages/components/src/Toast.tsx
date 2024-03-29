import type { AriaToastProps, AriaToastRegionProps } from '@react-aria/toast';
import type { ToastOptions as AriaToastOptions, ToastState } from '@react-stately/toast';
import type { VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';

import { StatusIcon } from '@launchpad-ui/icons';
import { useToast, useToastRegion } from '@react-aria/toast';
import { ToastQueue as AriaToastQueue, useToastQueue } from '@react-stately/toast';
import { cva } from 'class-variance-authority';
import { useRef } from 'react';
import { createPortal } from 'react-dom';

import { IconButton } from './IconButton';
import styles from './styles/Toast.module.css';

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
	const { toastProps, titleProps, descriptionProps, closeButtonProps } = useToast(
		props,
		state,
		ref,
	);

	const content: IconVariants & Partial<SnackbarContent & ToastContent> = props.toast.content;
	const { children, status, title, description } = content;

	return (
		<div
			data-theme="dark"
			{...toastProps}
			ref={ref}
			className={toast({ variant })}
			data-animation={props.toast.animation}
			onAnimationEnd={() => {
				if (props.toast.animation === 'exiting') {
					state.remove(props.toast.key);
				}
			}}
		>
			<StatusIcon kind={status || 'info'} className={icon({ status })} />
			{variant === 'default' ? (
				<div {...titleProps}>{children}</div>
			) : (
				<div className={styles.content}>
					<div {...titleProps} className={styles.title}>
						{title}
					</div>
					<div {...descriptionProps} className={styles.description}>
						{description}
					</div>
				</div>
			)}
			<IconButton
				aria-label="Close"
				{...closeButtonProps}
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
	error: (content: SnackbarContent, options?: ToastOptions) =>
		snackbarQueue.add({ ...content, status: 'error' }, { ...options }),
	info: (content: SnackbarContent, options?: ToastOptions) =>
		snackbarQueue.add({ ...content, status: 'info' }, { ...options }),
	success: (content: SnackbarContent, options?: ToastOptions) =>
		snackbarQueue.add({ ...content, status: 'success' }, { ...options }),
	warning: (content: SnackbarContent, options?: ToastOptions) =>
		snackbarQueue.add({ ...content, status: 'warning' }, { ...options }),
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

const SnackbarContainer = (props: AriaToastRegionProps) => {
	const state = useToastQueue(snackbarQueue);

	return state.visibleToasts.length > 0
		? createPortal(<ToastRegion {...props} state={state} placement="right" />, document.body)
		: null;
};

export { SnackbarContainer, SnackbarQueue, ToastContainer, ToastQueue };
export type { SnackbarValue, ToastOptions, ToastValue };
