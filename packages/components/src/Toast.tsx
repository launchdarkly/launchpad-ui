import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps, ReactNode, Ref } from 'react';
import type {
	ToastProps as AriaToastProps,
	ToastRegionProps as AriaToastRegionProps,
	ToastOptions,
} from 'react-aria-components';

import { StatusIcon } from '@launchpad-ui/icons';
import { PressResponder } from '@react-aria/interactions';
import { cva } from 'class-variance-authority';
import {
	UNSTABLE_Toast as AriaToast,
	UNSTABLE_ToastContent as AriaToastContent,
	UNSTABLE_ToastQueue as AriaToastQueue,
	UNSTABLE_ToastRegion as AriaToastRegion,
	Text,
	composeRenderProps,
} from 'react-aria-components';
import { flushSync } from 'react-dom';

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

interface ToastValue {
	title?: ReactNode;
	description?: ReactNode;
	action?: ReactNode;
}

interface LPToastContent extends ToastValue, IconVariants {}

interface ToastProps<LPToastContent> extends AriaToastProps<LPToastContent>, ToastVariants {
	ref?: Ref<HTMLDivElement>;
}

interface ToastRegionProps<LPToastContent>
	extends Partial<AriaToastRegionProps<LPToastContent>>,
		RegionVariants {}

const animate = (fn: () => void) => {
	if ('startViewTransition' in document) {
		document
			.startViewTransition(() => {
				flushSync(fn);
			})
			.ready.catch(() => {});
	} else {
		fn();
	}
};

const toastQueue = new AriaToastQueue<LPToastContent>({
	maxVisibleToasts: 5,
	// Wrap state updates in a CSS view transition.
	wrapUpdate: animate,
});

const snackbarQueue = new AriaToastQueue<LPToastContent>({
	maxVisibleToasts: 5,
	// Wrap state updates in a CSS view transition.
	wrapUpdate: animate,
});

const timeout = 6000;

const ToastQueue = {
	clear: () => {
		for (const toast of toastQueue.visibleToasts) {
			toastQueue.close(toast.key);
		}
	},
	error: (content: ToastValue, options?: ToastOptions) =>
		toastQueue.add({ ...content, status: 'error' }, { ...options, timeout }),
	info: (content: ToastValue, options?: ToastOptions) =>
		toastQueue.add({ ...content, status: 'info' }, { ...options, timeout }),
	success: (content: ToastValue, options?: ToastOptions) =>
		toastQueue.add({ ...content, status: 'success' }, { ...options, timeout }),
	visibleToasts: () => toastQueue.visibleToasts,
};

const SnackbarQueue = {
	clear: () => {
		for (const toast of snackbarQueue.visibleToasts) {
			snackbarQueue.close(toast.key);
		}
	},
	error: (content: ToastValue, options?: ToastOptions) => {
		const key = snackbarQueue.add({ ...content, status: 'error' }, { ...options });
		return () => snackbarQueue.close(key);
	},
	info: (content: ToastValue, options?: ToastOptions) => {
		const key = snackbarQueue.add({ ...content, status: 'info' }, { ...options });
		return () => snackbarQueue.close(key);
	},
	success: (content: ToastValue, options?: ToastOptions) => {
		const key = snackbarQueue.add({ ...content, status: 'success' }, { ...options });
		return () => snackbarQueue.close(key);
	},
	visibleToasts: () => snackbarQueue.visibleToasts,
};

/**
 * A Toast displays a brief, temporary notification of actions, errors, or other events in an application.
 *
 * https://react-spectrum.adobe.com/react-aria/Toast.html
 */
const Toast = ({ ref, variant, ...props }: ToastProps<LPToastContent>) => {
	return (
		<AriaToast
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				toast({ ...renderProps, className, variant }),
			)}
		>
			{composeRenderProps(props.children, (children, { toast }) => (
				<>
					<StatusIcon
						kind={toast.content.status || 'info'}
						className={icon({ status: toast.content.status })}
					/>
					<ToastContent data-theme="dark">
						<PressResponder
							onPress={() =>
								variant === 'default' ? toastQueue.close(toast.key) : snackbarQueue.close(toast.key)
							}
						>
							<Text slot="title">{toast.content.title}</Text>
							<Text slot="description">
								{toast.content.description} {toast.content.action}
							</Text>
							{children}
						</PressResponder>
					</ToastContent>
					{/* @ts-expect-error RAC adds label */}
					<IconButton size="small" variant="minimal" icon="cancel" slot="close" data-theme="dark" />
				</>
			))}
		</AriaToast>
	);
};

/**
 * ToastContent wraps the main content of a toast notification.
 *
 * https://react-spectrum.adobe.com/react-aria/Toast.html
 */
const ToastContent = (props: ComponentProps<typeof AriaToastContent>) => {
	return <AriaToastContent {...props} className={styles.content} />;
};

/**
 * A ToastRegion displays one or more toast notifications.
 *
 * https://react-spectrum.adobe.com/react-aria/Toast.html
 */
const ToastRegion = ({
	placement = 'bottom',
	queue = toastQueue,
	children,
	...props
}: ToastRegionProps<LPToastContent>) => {
	return (
		<AriaToastRegion
			queue={queue}
			className={composeRenderProps(props.className, (className, renderProps) =>
				region({ ...renderProps, className, placement }),
			)}
		>
			{({ toast }) => <Toast style={{ viewTransitionName: toast.key }} toast={toast} />}
		</AriaToastRegion>
	);
};

/**
 * A SnackbarRegion displays one or more snackbar notifications.
 *
 * https://react-spectrum.adobe.com/react-aria/Toast.html
 */
const SnackbarRegion = ({
	placement = 'right',
	queue = snackbarQueue,
	children,
	...props
}: ToastRegionProps<LPToastContent>) => {
	return (
		<AriaToastRegion
			queue={queue}
			className={composeRenderProps(props.className, (className, renderProps) =>
				region({ ...renderProps, className, placement }),
			)}
		>
			{({ toast }) => (
				<Toast style={{ viewTransitionName: toast.key }} toast={toast} variant="snackbar" />
			)}
		</AriaToastRegion>
	);
};

export { SnackbarQueue, ToastQueue, Toast, ToastContent, ToastRegion, SnackbarRegion };
export type { ToastOptions, ToastValue };
