import type { VariantProps } from 'class-variance-authority';
import type { ForwardedRef, HTMLAttributes } from 'react';

import { StatusIcon } from '@launchpad-ui/icons';
import { useControlledState } from '@react-stately/utils';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { HeadingContext, Provider } from 'react-aria-components';

import { IconButton } from './IconButton';

import styles from './styles/Alert.module.css';

const alert = cva(styles.base, {
	variants: {
		status: {
			error: styles.error,
			info: styles.info,
			success: styles.success,
		},
		variant: {
			default: styles.default,
			subtle: styles.subtle,
		},
	},
	defaultVariants: {
		status: 'info',
		variant: 'default',
	},
});

interface AlertVariants extends VariantProps<typeof alert> {}

interface AlertProps extends HTMLAttributes<HTMLDivElement>, AlertVariants {
	isDismissable?: boolean;
	isOpen?: boolean;
	onDismiss?: () => void;
}

const _Alert = (
	{
		className,
		children,
		status = 'info',
		variant = 'default',
		isDismissable,
		isOpen,
		onDismiss,
		...props
	}: AlertProps,
	ref: ForwardedRef<HTMLDivElement>,
) => {
	const [open, setOpen] = useControlledState(isOpen, true, (val) => !val && onDismiss?.());

	return open ? (
		<div ref={ref} {...props} role="alert" className={alert({ status, variant, className })}>
			<StatusIcon kind={status || 'info'} className={styles.icon} />
			<div className={styles.content}>
				<Provider values={[[HeadingContext, { className: styles.heading }]]}>{children}</Provider>
			</div>
			{isDismissable && (
				<IconButton
					aria-label="Close"
					icon="cancel"
					variant="minimal"
					size="small"
					onPress={() => setOpen(false)}
				/>
			)}
		</div>
	) : null;
};

const Alert = forwardRef(_Alert);

export { Alert };
export type { AlertProps };
