import type { ButtonProps } from '@launchpad-ui/button';
import type { ComponentProps } from 'react';

import { cx } from 'classix';

import { SplitButtonContext } from './context';
import styles from './styles/SplitButton.module.css';

type SplitButtonProps = ComponentProps<'div'> & {
	kind?: Extract<ButtonProps['kind'], 'primary' | 'default'>;
	size?: ButtonProps['size'];
	disabled?: boolean;
	'data-test-id'?: string;
};

/**
 * @deprecated use `ButtonGroup` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-buttons-buttongroup--split-button
 */
const SplitButton = ({
	disabled,
	kind,
	size,
	children,
	className,
	'data-test-id': testId = 'split-button',
	...rest
}: SplitButtonProps) => {
	return (
		<SplitButtonContext.Provider value={{ disabled: !!disabled, kind, size }}>
			<div {...rest} className={cx(styles.SplitButton, className)} data-test-id={testId}>
				{children}
			</div>
		</SplitButtonContext.Provider>
	);
};

SplitButton.displayName = 'SplitButton';

export { SplitButton };
export type { SplitButtonProps };
