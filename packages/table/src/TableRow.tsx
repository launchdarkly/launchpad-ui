import type { HTMLProps } from 'react';

import { addLaunchPadAttribution } from '@launchpad-ui/attribution';
import { cx } from 'classix';

import styles from './styles/Table.module.css';

type TableRowProps = HTMLProps<HTMLTableRowElement> & {
	verticalAlign?: 'top' | 'middle' | 'bottom';
	'data-test-id'?: string;
};

/**
 * @deprecated use `Table` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-collections-table--docs
 */
const TableRow = ({
	className,
	children,
	verticalAlign,
	'data-test-id': testId = 'table-row',
	...rest
}: TableRowProps) => {
	const verticalAlignClass = verticalAlign ? styles[`Table-row--${verticalAlign}`] : '';
	const classes = cx(styles['Table-row'], verticalAlignClass, className);

	return (
		<tr
			{...addLaunchPadAttribution('TableRow')}
			{...rest}
			className={classes}
			data-test-id={testId}
		>
			{children}
		</tr>
	);
};

export { TableRow };
export type { TableRowProps };
