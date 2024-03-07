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

const status = cva(styles.status, {
	variants: {
		variant: {
			error: styles.error,
			info: styles.info,
			success: styles.success,
			warning: styles.warning,
		},
	},
	defaultVariants: {
		variant: 'info',
	},
});

type StatusVariants = VariantProps<typeof status>;

type ToastValue = StatusVariants & {
	children?: ReactNode;
};

type ToastOptions = Omit<AriaToastOptions, 'timeout'>;

type ToastRegionProps<T> = AriaToastRegionProps & {
	state: ToastState<T>;
};

type ToastProps<T> = AriaToastProps<T> & {
	state: ToastState<T>;
};

const ToastRegion = <T extends ToastValue>({ state, ...props }: ToastRegionProps<T>) => {
	const ref = useRef(null);
	const { regionProps } = useToastRegion(props, state, ref);

	return (
		<div {...regionProps} ref={ref} className={styles.region}>
			{state.visibleToasts.map((toast) => (
				<Toast key={toast.key} toast={toast} state={state} />
			))}
		</div>
	);
};

const Toast = <T extends ToastValue>({ state, ...props }: ToastProps<T>) => {
	const ref = useRef(null);
	const { toastProps, titleProps, closeButtonProps } = useToast(props, state, ref);
	const { children, variant } = props.toast.content;

	return (
		<div
			{...toastProps}
			ref={ref}
			className={styles.toast}
			data-animation={props.toast.animation}
			onAnimationEnd={() => {
				if (props.toast.animation === 'exiting') {
					state.remove(props.toast.key);
				}
			}}
		>
			<StatusIcon kind={variant || 'info'} className={status({ variant })} />
			<div {...titleProps}>{children}</div>
			<IconButton
				data-theme="dark"
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

const timeout = 6000;

const ToastQueue = {
	info: (children: ReactNode, options?: ToastOptions) =>
		toastQueue.add({ children, variant: 'info' }, { ...options, timeout }),
	success: (children: ReactNode, options?: ToastOptions) =>
		toastQueue.add({ children, variant: 'success' }, { ...options, timeout }),
	warning: (children: ReactNode, options?: ToastOptions) =>
		toastQueue.add({ children, variant: 'warning' }, { ...options, timeout }),
};

/**
 * Toasts display brief, temporary notifications of actions, errors, or other events in an application.
 *
 * https://react-spectrum.adobe.com/react-aria/useToast.html
 */
const ToastContainer = (props: AriaToastRegionProps) => {
	const state = useToastQueue(toastQueue);

	return state.visibleToasts.length > 0
		? createPortal(<ToastRegion {...props} state={state} />, document.body)
		: null;
};

export { ToastContainer, ToastQueue };
export type { ToastOptions, ToastValue };
