import type { ComponentProps } from 'react';

import { addLaunchPadAttribution } from '@launchpad-ui/attribution';
import { cx } from 'classix';

import styles from './styles/Table.module.css';

type TableHeadProps = ComponentProps<'thead'> & {
	'data-test-id'?: string;
};

/**
 * @deprecated use `Table` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-collections-table--docs
 */
const TableHead = ({
	className,
	children,
	'data-test-id': testId = 'table-head',
	...rest
}: TableHeadProps) => {
	const classes = cx(styles['Table-header'], className);

	return (
		<thead
			{...addLaunchPadAttribution('TableHead')}
			{...rest}
			data-test-id={testId}
			className={classes}
		>
			{children}
		</thead>
	);
};

export { TableHead };
export type { TableHeadProps };
