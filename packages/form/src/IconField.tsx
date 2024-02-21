import type { IconProps } from '@launchpad-ui/icons';
import type { ComponentProps, ReactElement } from 'react';

import { IconButton } from '@launchpad-ui/button';
import { Tooltip } from '@launchpad-ui/tooltip';
import { cx } from 'classix';
import { cloneElement } from 'react';

import styles from './styles/Form.module.css';

type IconFieldProps = ComponentProps<'div'> & {
	icon: ReactElement<IconProps>;
	children: JSX.Element | JSX.Element[];
	'data-test-id'?: string;
	tooltip?: string | JSX.Element;
	renderIconLast?: boolean;
	ariaLabel?: string;
};

const IconField = ({
	icon,
	children,
	className,
	'data-test-id': testId = 'icon-field',
	tooltip,
	renderIconLast = false,
	ariaLabel = 'More info',
	...rest
}: IconFieldProps) => {
	const iconElement = cloneElement(icon, {
		size: 'small',
		className: cx(styles.iconFieldIcon, styles.iconFieldIconFill),
	});

	const classes = cx(styles.iconField, renderIconLast ? 'IconAfter' : 'IconBefore', className);

	const renderIcon = tooltip ? (
		<Tooltip content={tooltip} targetClassName={styles.iconFieldButton}>
			<IconButton
				icon={cloneElement(icon, {
					className: styles.iconFieldIconFill,
				})}
				size='small'
				className={styles.iconFieldIcon}
				style={renderIconLast ? { right: '0.313rem' } : { left: '0.313rem' }}
				aria-label={ariaLabel}
			/>
		</Tooltip>
	) : (
		iconElement
	);

	return (
		<div className={classes} data-test-id={testId} {...rest}>
			{!renderIconLast && renderIcon}
			{children}
			{renderIconLast && renderIcon}
		</div>
	);
};

export { IconField };
export type { IconFieldProps };
