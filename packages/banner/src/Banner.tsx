import type { ComponentProps, ReactNode } from 'react';

import { IconButton } from '@launchpad-ui/button';
import { Icon, StatusIcon } from '@launchpad-ui/icons';
import { cx } from 'classix';

import styles from './styles/Banner.module.css';

type BannerProps = ComponentProps<'div'> & {
	'data-test-id'?: string;
	kind: 'info' | 'warning' | 'error';
	onDismiss?(): void;
	header?: ReactNode;
};

/**
 * @deprecated use `Alert` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-status-alert--docs
 */
const Banner = ({
	kind,
	className,
	children,
	onDismiss,
	header,
	'data-test-id': testId = 'banner',
	...rest
}: BannerProps) => {
	const classes = cx(styles.Banner, styles[`Banner--${kind}`], className);

	return (
		<div className={classes} data-test-id={testId} {...rest}>
			<StatusIcon
				kind={kind}
				className={styles['Banner-icon']}
				data-test-id={`${testId}-status-icon`}
			/>
			<div className={styles['Banner-content']}>
				{header && <h4 className={styles['Banner-heading']}>{header}</h4>}
				<div>{children}</div>
			</div>
			{!!onDismiss && (
				<IconButton
					aria-label="Close banner"
					icon={<Icon name="cancel" size="small" />}
					size="small"
					onClick={onDismiss}
					kind="close"
					data-test-id={`${testId}-dismiss-button`}
				/>
			)}
		</div>
	);
};

export { Banner };
export type { BannerProps };
