import type { ComponentProps } from 'react';

import { cx } from 'classix';

import styles from './styles/Button.module.css';

type ButtonGroupProps = ComponentProps<'div'> & {
	spacing?: 'compact' | 'normal' | 'large';
	'data-test-id'?: string;
};

/**
 * @deprecated use `ButtonGroup` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-buttons-buttongroup--docs
 */
const ButtonGroup = ({
	spacing = 'normal',
	className,
	children,
	'data-test-id': testId = 'button-group',
	...rest
}: ButtonGroupProps) => {
	const classes = cx(styles.ButtonGroup, styles[`ButtonGroup--${spacing}`], className);

	return (
		<div className={classes} data-test-id={testId} {...rest}>
			{children}
		</div>
	);
};

export { ButtonGroup };
export type { ButtonGroupProps };
