import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps, HTMLAttributes, Ref } from 'react';

import { StatusIcon } from '@launchpad-ui/icons';
import { useControlledState } from '@react-stately/utils';
import { cva } from 'class-variance-authority';
import { HeadingContext, Provider } from 'react-aria-components';

import { ButtonGroupContext } from './ButtonGroup';
import { IconButton } from './IconButton';
import styles from './styles/Alert.module.css';

interface AlertTextProps extends ComponentProps<'div'> {
	ref?: Ref<HTMLDivElement>;
}

/**
 * AlertText wraps the title and description content within an Alert.
 * Use this to group Heading and Text elements when using actionsLayout="inline".
 */
const AlertText = ({ className, ref, ...props }: AlertTextProps) => {
	return <div ref={ref} className={`${styles.text} ${className ?? ''}`.trim()} {...props} />;
};

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
		actionsLayout: {
			stacked: styles.actionsStacked,
			inline: styles.actionsInline,
		},
	},
	defaultVariants: {
		status: 'info',
		variant: 'default',
	},
});

interface AlertVariants extends VariantProps<typeof alertStyles> {}

interface AlertProps extends HTMLAttributes<HTMLDivElement>, AlertVariants {
	/** Controls the layout of actions within the alert (block variant only). */
	actionsLayout?: 'stacked' | 'inline';
	/** Hides the status icon (block variant only). */
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
	status = 'info',
	variant = 'default',
	actionsLayout = 'stacked',
	isDismissable,
	isOpen,
	onDismiss,
	hideIcon,
	ref,
	...props
}: AlertProps) => {
	const [open, setOpen] = useControlledState(isOpen, true, (val) => !val && onDismiss?.());

	const showIcon = status !== 'neutral' && !(hideIcon && variant === 'default');
	const resolvedActionsLayout = variant === 'default' ? actionsLayout : undefined;

	return open ? (
		<div
			ref={ref}
			{...props}
			role="alert"
			className={alertStyles({
				status,
				variant,
				actionsLayout: resolvedActionsLayout,
				className,
			})}
		>
			{showIcon && <StatusIcon size="small" kind={status || 'info'} className={styles.icon} />}
			<div className={styles.content}>
				<Provider
					values={[
						[HeadingContext, { className: styles.heading }],
						[ButtonGroupContext, { className: styles.buttonGroup }],
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
					size="medium"
					className={styles.close}
					onPress={() => setOpen(false)}
				/>
			)}
		</div>
	) : null;
};

export { Alert, AlertText, alertStyles };
export type { AlertProps, AlertTextProps };
