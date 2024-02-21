import type { ComponentProps } from 'react';

import { cx } from 'classix';

import styles from './styles/Table.module.css';

type TableBodyProps = ComponentProps<'tbody'> & {
	'data-test-id'?: string;
};

const TableBody = ({
	className,
	children,
	'data-test-id': testId = 'table-body',
	...rest
}: TableBodyProps) => {
	const classes = cx(styles['Table-body'], className);

	return (
		<tbody {...rest} data-test-id={testId} className={classes}>
			{children}
		</tbody>
	);
};

export { TableBody };
export type { TableBodyProps };
