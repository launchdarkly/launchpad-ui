import type { VariantProps } from 'class-variance-authority';
import type { HTMLAttributes, Ref } from 'react';

import { StatusIcon } from '@launchpad-ui/icons';
import { useControlledState } from '@react-stately/utils';
import { cva } from 'class-variance-authority';
import { HeadingContext, Provider } from 'react-aria-components';

import { ButtonGroupContext } from './ButtonGroup';
import { IconButton } from './IconButton';
import styles from './styles/Alert.module.css';

const alertStyles = cva(styles.base, {
	variants: {
		status: {
			neutral: styles.neutral,
			error: styles.error,
			info: styles.info,
			success: styles.success,
			warning: styles.warning,
		},
		variant: {
			default: styles.default,
			inline: styles.inline,
		},
	},
	defaultVariants: {
		status: 'neutral',
		variant: 'default',
	},
});

interface AlertVariants extends VariantProps<typeof alertStyles> {}

interface AlertProps extends HTMLAttributes<HTMLDivElement>, AlertVariants {
	/** Hides the status icon. */
	hideIcon?: boolean;
	/** Whether the alert can be dismissed. */
	isDismissable?: boolean;
	/** Whether the alert is open (controlled). */
	isOpen?: boolean;
	/** Handler called when the alert is dismissed. */
	onDismiss?: () => void;
	ref?: Ref<HTMLDivElement>;
}

const Alert = ({
	className,
	children,
	status = 'neutral',
	variant = 'default',
	isDismissable,
	isOpen,
	onDismiss,
	hideIcon,
	ref,
	...props
}: AlertProps) => {
	const [open, setOpen] = useControlledState(isOpen, true, (val) => !val && onDismiss?.());

	return open ? (
		<div ref={ref} {...props} role="alert" className={alertStyles({ status, variant, className })}>
			{!hideIcon && status !== 'neutral' && (
				<StatusIcon size="small" kind={status || 'info'} className={styles.icon} />
			)}
			<div className={styles.content}>
				<Provider
					values={[
						[HeadingContext, { className: styles.heading }],
						[
							ButtonGroupContext,
							{
								className: styles.buttonGroup,
							},
						],
					]}
				>
					{children}
				</Provider>
			</div>
			{isDismissable && (
				<IconButton
					aria-label="Close"
					icon="cancel"
					variant="minimal"
					size="small"
					className={styles.close}
					onPress={() => setOpen(false)}
				/>
			)}
		</div>
	) : null;
};

export { Alert, alertStyles };
export type { AlertProps };
