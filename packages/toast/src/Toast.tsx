import type { ComponentProps, ReactNode } from 'react';

import { StatusIcon } from '@launchpad-ui/icons';
import { cx } from 'classix';
import { useEffect } from 'react';

import styles from './styles/Toast.module.css';

type ToastBaseProps = {
	kind: 'info' | 'success' | 'warning';
	onDismiss: () => void;
	content: ReactNode;
	'data-test-id'?: string;
};

type ToastProps = Omit<ComponentProps<'div'>, 'children' | 'content'> & ToastBaseProps;

/**
 * @deprecated use `ToastQueue` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-status-toast--docs
 */
const Toast = ({
	className,
	kind,
	onDismiss,
	content,
	'data-test-id': testId = 'toast',
	...rest
}: ToastProps) => {
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setTimeout(() => {
			onDismiss();
		}, 6000);
	}, []);

	return (
		<div
			{...rest}
			className={cx(styles.Toast, styles[`Toast--${kind}`], className)}
			data-test-id={testId}
			role="status"
		>
			{kind !== 'info' && <StatusIcon kind={kind} className={styles['Toast-icon']} />}
			<p className={styles['Toast-content']}>{content}</p>
		</div>
	);
};

export { Toast };
export type { ToastBaseProps, ToastProps };
