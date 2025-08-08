import type { ComponentProps } from 'react';

import { addLaunchPadAttribution } from '@launchpad-ui/attribution';
import { cx } from 'classix';

import styles from './styles/Table.module.css';

type TableProps = ComponentProps<'table'> & {
	auto?: boolean;
	compact?: boolean;
	isResourceTable?: boolean;
	summary?: string;
	'data-test-id'?: string;
};

/**
 * @deprecated use `Table` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-collections-table--docs
 */
const Table = ({
	auto,
	compact,
	className,
	children,
	isResourceTable,
	'data-test-id': testId = 'table',
	...rest
}: TableProps) => {
	const classes = cx(
		styles.Table,
		auto && styles['Table--auto'],
		compact && styles['Table--compact'],
		isResourceTable && styles['Table--resourceTable'],
		className,
	);

	return (
		<table
			{...addLaunchPadAttribution('Table')}
			{...rest}
			data-test-id={testId}
			className={classes}
		>
			{children}
		</table>
	);
};

export { Table };
export type { TableProps };
