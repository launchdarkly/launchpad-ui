import type { ComponentProps, ReactNode } from 'react';

import { cx } from 'classix';

import styles from './styles/Columns.module.css';

const ColumnSizes = {
	content: styles.content,
	'1/2': styles.half,
	'1/3': styles.third,
	'2/3': styles.twoThird,
};

type ColumnProps = ComponentProps<'div'> & {
	'data-test-id'?: string;
	size?: 'content' | '1/2' | '1/3' | '2/3';
	children: ReactNode;
};

/**
 * @deprecated use `Box` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/legacy-experimental-box--docs
 */
const Column = ({ children, className, 'data-test-id': testId = 'column', size }: ColumnProps) => {
	return (
		<div
			className={cx(
				styles.column,
				size !== 'content' && styles.fluid,
				!!size && ColumnSizes[size],
				className,
			)}
			data-test-id={testId}
		>
			{children}
		</div>
	);
};

export { Column };
export type { ColumnProps };
