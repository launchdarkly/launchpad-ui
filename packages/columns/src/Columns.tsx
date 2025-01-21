import type { Space } from '@launchpad-ui/types';
import type { ComponentProps, ReactNode } from 'react';

import { cx } from 'classix';

import styles from './styles/Columns.module.css';

type ColumnsProps = ComponentProps<'div'> & {
	'data-test-id'?: string;
	gap?: Space;
	alignY?: 'top' | 'center' | 'bottom';
	children?: ReactNode;
};

/**
 * @deprecated use `Box` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/legacy-experimental-box--docs
 */
const Columns = ({
	children,
	className,
	'data-test-id': testId = 'columns',
	gap = '0',
	alignY = 'top',
}: ColumnsProps) => {
	return (
		<div
			className={cx(styles.columns, styles[`gap-${gap}`], styles[`alignY-${alignY}`], className)}
			data-test-id={testId}
		>
			{children}
		</div>
	);
};

export { Columns };
export type { ColumnsProps };
