import type { ComponentProps } from 'react';

import { cx } from 'classix';

import styles from './styles/Table.module.css';

type TableHeadProps = ComponentProps<'thead'> & {
	'data-test-id'?: string;
};

const TableHead = ({
	className,
	children,
	'data-test-id': testId = 'table-head',
	...rest
}: TableHeadProps) => {
	const classes = cx(styles['Table-header'], className);

	return (
		<thead {...rest} data-test-id={testId} className={classes}>
			{children}
		</thead>
	);
};

export { TableHead };
export type { TableHeadProps };
