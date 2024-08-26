import type { ComponentProps, ReactNode } from 'react';

import { Button, ButtonGroup, type ButtonProps, IconButton } from '@launchpad-ui/button';
import { Icon, StatusIcon } from '@launchpad-ui/icons';
import { useControlledState } from '@react-stately/utils';
import { cx } from 'classix';

import styles from './styles/Alert.module.css';

type AlertProps = ComponentProps<'div'> & {
	'data-test-id'?: string;
	/**
	 * When true, shows the compact Alert variant,
	 * width of Alert fits content.
	 */
	compact?: boolean;
	/**
	 * When true, shows Alert without background/border colors.
	 */
	isInline?: boolean;
	/**
	 * Passing in one of `info`, `success`, `warning`, `error`
	 * displays the style and icon pair associated with the variant.
	 * The default is info.
	 */
	kind?: 'info' | 'success' | 'warning' | 'error' | 'notification';
	/**
	 * Passing in one of `default`, `strong`
	 * displays the style associated with the variant.
	 * The default is default.
	 */
	flairLevel?: 'default' | 'strong';
	/**
	 * Passing in one of `small`, `medium`
	 * displays either a small or medium Alert.
	 * The default is medium.
	 */
	size?: 'small' | 'medium';
	/**
	 * When true, shows the wide Alert variant, adds top margin,
	 * sets width to 86% (why?).
	 */
	wide?: boolean;

	/**
	 * When true, shows the close button. When button is clicked, the Alert
	 * is removed.
	 */
	dismissible?: boolean;

	/**
	 * Function fired on click of close button.
	 */
	onDismiss?(): void;

	/**
	 * Controlled dismissed handler
	 */
	dismissed?: boolean;

	/**
	 * When true no icon is rendered
	 */
	noIcon?: boolean;

	header?: ReactNode;

	/**
	 * Primary action button properties
	 */
	primaryButton?: ButtonProps;

	link?: {
		href: string;
		text: string;
		onClick?(): void;
	};
};

/**
 * @deprecated use `Alert` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-status-alert--docs
 */
const Alert = ({
	children,
	className,
	compact,
	isInline,
	kind = 'info',
	flairLevel = 'default',
	size = 'medium',
	wide,
	dismissible,
	onDismiss,
	noIcon,
	header,
	dismissed,
	'data-test-id': testId = 'alert',
	primaryButton,
	link,
	...rest
}: AlertProps) => {
	const [dismissedState, setDismissedState] = useControlledState(dismissed, false, (val) =>
		val && onDismiss ? onDismiss() : null,
	);

	const defaultClasses = `${styles.Alert} ${styles[`Alert--${kind}`]}`;
	const sizeClass = size === 'small' && styles[`Alert--${size}`];
	const flairLevelClass = kind === 'notification' && styles[`Alert--flair-${flairLevel}`];
	const classes = cx(
		defaultClasses,
		className,
		isInline ? styles['Alert--inline'] : styles['Alert--bordered'],
		sizeClass,
		compact && styles['Alert--compact'],
		wide && styles['Alert--wide'],
		flairLevelClass,
	);

	if (dismissedState) {
		return null;
	}

	return (
		<div
			{...rest}
			className={classes}
			data-test-id={testId}
			role={['info', 'success', 'notification'].includes(kind) ? 'status' : 'alert'}
		>
			{!noIcon && (
				<StatusIcon
					kind={kind}
					className={styles['Alert-icon']}
					size={size}
					data-test-id={`${testId}-status-icon`}
				/>
			)}
			<div className={styles['Alert-content']}>
				{header && (
					<h4 className={styles['Alert-heading']} data-test-id={`${testId}-header`}>
						{header}
					</h4>
				)}
				<div>
					<div>{children}</div>
					{(primaryButton || link) && (
						<ButtonGroup>
							{primaryButton && (
								<Button
									{...primaryButton}
									kind={
										primaryButton.kind ||
										(flairLevel === 'strong' || kind !== 'notification'
											? 'default'
											: 'defaultFlair')
									}
									className={cx(primaryButton.className, styles.PrimaryButton)}
								/>
							)}

							{link && (
								<Button
									kind="link"
									asChild
									onClick={link?.onClick}
									className={styles.LinkButton}
									icon={<Icon name="link-external" size="small" />}
								>
									<a href={link.href}>{link.text}</a>
								</Button>
							)}
						</ButtonGroup>
					)}
				</div>
			</div>
			{dismissible && (
				<IconButton
					aria-label="Close this alert."
					size="small"
					className={styles['Alert-close']}
					icon={<Icon name="cancel" size="small" />}
					kind="close"
					onClick={() => setDismissedState(true)}
					data-test-id={`${testId}-dismiss-button`}
				/>
			)}
		</div>
	);
};

export { Alert };
export type { AlertProps };
