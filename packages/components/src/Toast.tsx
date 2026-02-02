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
	composeRenderProps,
	Text,
} from 'react-aria-components';
import { flushSync } from 'react-dom';

import { IconButton } from './IconButton';
import styles from './styles/Toast.module.css';

const toastRegionStyles = cva(styles.region, {
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

const iconStyles = cva(styles.icon, {
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

const toastStyles = cva(styles.toast, {
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

interface RegionVariants extends VariantProps<typeof toastRegionStyles> {}
interface IconVariants extends VariantProps<typeof iconStyles> {}
interface ToastVariants extends VariantProps<typeof toastStyles> {}

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

class LPToastQueue<T> extends AriaToastQueue<T> {
	add(content: T, options?: ToastOptions): string {
		return super.add(content, { ...options, timeout: 6000 });
	}
}

const toastQueue = new LPToastQueue<LPToastContent>({
	maxVisibleToasts: 5,
	// Wrap state updates in a CSS view transition.
	wrapUpdate: animate,
});

const snackbarQueue = new AriaToastQueue<LPToastContent>({
	maxVisibleToasts: 5,
	// Wrap state updates in a CSS view transition.
	wrapUpdate: animate,
});

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
				toastStyles({ ...renderProps, className, variant }),
			)}
			data-theme="dark"
		>
			{composeRenderProps(props.children, (children, { toast }) => (
				<>
					<StatusIcon
						kind={toast.content.status || 'info'}
						className={iconStyles({ status: toast.content.status })}
					/>
					<ToastContent>
						<Text slot="title">{toast.content.title}</Text>
						<Text slot="description">
							{toast.content.description}
							{toast.content.action && (
								<PressResponder
									onPress={() =>
										variant === 'default'
											? toastQueue.close(toast.key)
											: snackbarQueue.close(toast.key)
									}
								>
									{' '}
									{toast.content.action}
								</PressResponder>
							)}
						</Text>
						{children}
					</ToastContent>
					{/* @ts-expect-error RAC adds label */}
					<IconButton size="huge" icon="animal-turtle" slot="close" />
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
				toastRegionStyles({ ...renderProps, className, placement }),
			)}
			{...props}
		>
			{children ??
				(({ toast }) => <Toast style={{ viewTransitionName: toast.key }} toast={toast} />)}
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
				toastRegionStyles({ ...renderProps, className, placement }),
			)}
			{...props}
		>
			{children ??
				(({ toast }) => (
					<Toast style={{ viewTransitionName: toast.key }} toast={toast} variant="snackbar" />
				))}
		</AriaToastRegion>
	);
};

export {
	snackbarQueue,
	toastQueue,
	Toast,
	ToastContent,
	ToastRegion,
	SnackbarRegion,
	toastStyles,
	toastRegionStyles,
};
export type { ToastOptions, ToastValue };
