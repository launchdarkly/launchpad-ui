import type { VariantProps } from 'class-variance-authority';
import type { HTMLAttributes, ReactNode, Ref } from 'react';

import { StatusIcon } from '@launchpad-ui/icons';
import { useControlledState } from '@react-stately/utils';
import { cva } from 'class-variance-authority';
import { Children, Fragment, isValidElement } from 'react';
import { HeadingContext, Provider } from 'react-aria-components';

import { ButtonGroup, ButtonGroupContext } from './ButtonGroup';
import { IconButton } from './IconButton';
import styles from './styles/Alert.module.css';

const isButtonGroup = (child: ReactNode): boolean => {
	if (!isValidElement(child)) return false;
	const type = child.type as { displayName?: string; name?: string };
	return (
		child.type === ButtonGroup || type.displayName === 'ButtonGroup' || type.name === 'ButtonGroup'
	);
};

const flattenChildren = (children: ReactNode): ReactNode[] => {
	const result: ReactNode[] = [];

	Children.forEach(children, (child) => {
		if (isValidElement<{ children?: ReactNode }>(child) && child.type === Fragment) {
			result.push(...flattenChildren(child.props.children));
		} else {
			result.push(child);
		}
	});

	return result;
};

const separateChildren = (
	children: ReactNode,
): { textContent: ReactNode[]; actions: ReactNode } => {
	const textContent: ReactNode[] = [];
	let actions: ReactNode = null;

	const flatChildren = flattenChildren(children);

	for (const child of flatChildren) {
		if (isButtonGroup(child)) {
			actions = child;
		} else {
			textContent.push(child);
		}
	}

	return { textContent, actions };
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
		status: 'neutral',
		variant: 'default',
		actionsLayout: 'stacked',
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
	status = 'neutral',
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
	const { textContent, actions } = separateChildren(children);

	return open ? (
		<div ref={ref} className={styles.container}>
			<div
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
							[
								ButtonGroupContext,
								{
									className: styles.buttonGroup,
								},
							],
						]}
					>
						<div className={styles.text}>{textContent}</div>
						{actions}
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
		</div>
	) : null;
};

export { Alert, alertStyles };
export type { AlertProps };
