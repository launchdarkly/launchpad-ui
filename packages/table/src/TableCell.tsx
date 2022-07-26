import cx from 'clsx';

import './styles/Table.css';
import { TableAlignType } from './types';

type CommonTableCellProps = {
  className?: string;
  children: React.ReactNode;
  align?: TableAlignType;
  colSpan?: number;
  rowSpan?: number;
};

// Ensure that the headers are properly associated with table content.
type TableCellWithHeadersProps = {
  headers: string;
} & CommonTableCellProps;

// When a cell acts as a header for all cells below it -- a scope of col needs to be used unless a colgroup is present.
type TableCellWithDirectScopeProps = {
  scope: 'row' | 'col';
} & CommonTableCellProps;

// hasScope indicates that no identifying header info will be added to the dom element.
// instead, it is assumed that the head element in the table has its scope property defined
type TableCellWithScopedProps = {
  hasScope: boolean;
} & CommonTableCellProps;

type TableCellWithScopeProps = TableCellWithDirectScopeProps | TableCellWithScopedProps;

// Enforce one or the other - headers or scope - or both.
type TableCellProps =
  | TableCellWithHeadersProps
  | TableCellWithScopeProps
  | (TableCellWithHeadersProps & TableCellWithScopeProps);

const TableCell = ({
  align = TableAlignType.LEFT,
  className,
  children,
  ...props
}: TableCellProps) => {
  const classes = cx('Table-cell', `Table-cell--${align}`, className);

  // remove hasScope from rest props so we don't pollute the dom element
  const restProps: Partial<TableCellProps> = props;
  if ('hasScope' in restProps) {
    delete restProps.hasScope;
  }

  return (
    <td {...restProps} className={classes}>
      {children}
    </td>
  );
};

export { TableCell };
export type { TableCellProps };
