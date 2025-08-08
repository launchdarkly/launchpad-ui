import type { ComponentProps } from 'react';

import { addLaunchPadAttribution } from '@launchpad-ui/attribution';
import { cx } from 'classix';

import styles from './styles/Table.module.css';

// Ensure that the headers are properly associated with table content.
type TableCellWithHeadersProps = {
	headers: string;
} & ComponentProps<'td'>;

// When a cell acts as a header for all cells below it -- a scope of col needs to be used unless a colgroup is present.
type TableCellWithDirectScopeProps = {
	scope: 'row' | 'col';
} & ComponentProps<'td'>;

// hasScope indicates that no identifying header info will be added to the dom element.
// instead, it is assumed that the head element in the table has its scope property defined
type TableCellWithScopedProps = {
	hasScope: boolean;
} & ComponentProps<'td'>;

type TableCellWithScopeProps = TableCellWithDirectScopeProps | TableCellWithScopedProps;

// Enforce one or the other - headers or scope - or both.
type TableCellProps =
	| TableCellWithHeadersProps
	| TableCellWithScopeProps
	| (TableCellWithHeadersProps & TableCellWithScopeProps);

/**
 * @deprecated use `Table` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-collections-table--docs
 */
const TableCell = ({ align = 'left', className, children, ...rest }: TableCellProps) => {
	const classes = cx(styles['Table-cell'], styles[`Table-cell--${align}`], className);

	// remove hasScope from rest props so we don't pollute the dom element
	const restProps: Partial<TableCellProps> = rest;
	if ('hasScope' in restProps) {
		delete restProps.hasScope;
	}

	return (
		<td {...addLaunchPadAttribution('TableCell')} {...restProps} className={classes}>
			{children}
		</td>
	);
};

export { TableCell };
export type { TableCellProps };
