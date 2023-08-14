import type { AriaCheckboxProps } from '@react-aria/checkbox';
import type { AriaTableProps } from '@react-aria/table';
import type { TableState, TableStateProps } from '@react-stately/table';
import type { GridNode } from '@react-types/grid';
import type { ComponentProps, ForwardedRef, ReactNode } from 'react';

import { useCheckbox } from '@react-aria/checkbox';
import { useFocusRing } from '@react-aria/focus';
import {
  useTable,
  useTableCell,
  useTableColumnHeader,
  useTableHeaderRow,
  useTableRow,
  useTableRowGroup,
  useTableSelectAllCheckbox,
  useTableSelectionCheckbox,
} from '@react-aria/table';
import { mergeProps, useObjectRef } from '@react-aria/utils';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useTableState } from '@react-stately/table';
import { useToggleState } from '@react-stately/toggle';
import { cx } from 'classix';
import { forwardRef, useRef } from 'react';

import { table, cell as tableCell, headerCell, header, row } from './styles/DataTable.css';

type DataTableProps<T extends object> = TableStateProps<T> &
  AriaTableProps<T> &
  ComponentProps<'div'> & {
    'data-test-id'?: string;
  };

const DataTable = forwardRef(
  <T extends object>(
    { className, 'data-test-id': testId = 'data-table', ...props }: DataTableProps<T>,
    ref: ForwardedRef<HTMLTableElement>
  ) => {
    const { selectionMode, selectionBehavior } = props;
    const tableRef = useObjectRef(ref);
    const state = useTableState({
      ...props,
      showSelectionCheckboxes: selectionMode === 'multiple' && selectionBehavior !== 'replace',
    });
    const { gridProps } = useTable(props, state, tableRef);
    const { collection } = state;

    return (
      <table {...gridProps} ref={tableRef} className={cx(table, className)} data-test-id={testId}>
        <TableRowGroup type="thead">
          {collection.headerRows.map((headerRow) => (
            <TableHeaderRow key={headerRow.key} item={headerRow} state={state}>
              {[...collection.getChildren!(headerRow.key)].map((column) =>
                column.props.isSelectionCell ? (
                  <TableSelectAllCell key={column.key} column={column} state={state} />
                ) : (
                  <TableColumnHeader key={column.key} column={column} state={state} />
                )
              )}
            </TableHeaderRow>
          ))}
        </TableRowGroup>
        <TableRowGroup type="tbody">
          {[...collection].map((row) => (
            <TableRow key={row.key} item={row} state={state}>
              {[...collection.getChildren!(row.key)].map((cell) =>
                cell.props.isSelectionCell ? (
                  <TableCheckboxCell key={cell.key} cell={cell} state={state} />
                ) : (
                  <TableCell key={cell.key} cell={cell} state={state} />
                )
              )}
            </TableRow>
          ))}
        </TableRowGroup>
      </table>
    );
  }
);

DataTable.displayName = 'DataTable';

type TableRowGroupProps = {
  type: 'thead' | 'tbody';
  children?: ReactNode;
};

const TableRowGroup = ({ type: Element, children }: TableRowGroupProps) => {
  const { rowGroupProps } = useTableRowGroup();
  return (
    <Element {...rowGroupProps} className={Element === 'thead' ? header : undefined}>
      {children}
    </Element>
  );
};

type TableHeaderRowProps<T extends object> = {
  item: GridNode<T>;
  state: TableState<T>;
  children?: ReactNode;
};

const TableHeaderRow = <T extends object>({ item, state, children }: TableHeaderRowProps<T>) => {
  const ref = useRef<HTMLTableRowElement>(null);
  const { rowProps } = useTableHeaderRow({ node: item }, state, ref);

  return (
    <tr {...rowProps} ref={ref}>
      {children}
    </tr>
  );
};

type TableColumnHeaderProps<T extends object> = {
  column: GridNode<T>;
  state: TableState<T>;
};

const TableColumnHeader = <T extends object>({ column, state }: TableColumnHeaderProps<T>) => {
  const ref = useRef<HTMLTableCellElement>(null);
  const { columnHeaderProps } = useTableColumnHeader({ node: column }, state, ref);
  const { focusProps } = useFocusRing();
  const arrowIcon = state.sortDescriptor?.direction === 'ascending' ? '▲' : '▼';

  return (
    <th
      {...mergeProps(columnHeaderProps, focusProps)}
      colSpan={column.colspan}
      className={headerCell}
      style={{
        textAlign: (column.colspan || 0) > 1 ? 'center' : 'left',
      }}
      ref={ref}
    >
      {column.rendered}
      {column.props.allowsSorting && (
        <span
          aria-hidden="true"
          style={{
            padding: '0 2px',
            visibility: state.sortDescriptor?.column === column.key ? 'visible' : 'hidden',
          }}
        >
          {arrowIcon}
        </span>
      )}
    </th>
  );
};

type TableRowProps<T extends object> = {
  item: GridNode<T>;
  state: TableState<T>;
  children?: ReactNode;
};

const TableRow = <T extends object>({ item, children, state }: TableRowProps<T>) => {
  const ref = useRef<HTMLTableRowElement>(null);
  const isSelected = state.selectionManager.isSelected(item.key);
  const { rowProps, isPressed } = useTableRow(
    {
      node: item,
    },
    state,
    ref
  );
  const { focusProps } = useFocusRing();
  const isActive = isSelected || isPressed;

  return (
    <tr className={row({ active: isActive })} {...mergeProps(rowProps, focusProps)} ref={ref}>
      {children}
    </tr>
  );
};

type TableCellProps<T extends object> = {
  cell: GridNode<T>;
  state: TableState<T>;
};

const TableCell = <T extends object>({ cell, state }: TableCellProps<T>) => {
  const ref = useRef<HTMLTableCellElement>(null);
  const { gridCellProps } = useTableCell({ node: cell }, state, ref);
  const { focusProps } = useFocusRing();

  return (
    <td {...mergeProps(gridCellProps, focusProps)} className={tableCell} ref={ref}>
      {cell.rendered}
    </td>
  );
};

type TableCheckboxCellProps<T extends object> = {
  cell: GridNode<T>;
  state: TableState<T>;
};

const TableCheckboxCell = <T extends object>({ cell, state }: TableCheckboxCellProps<T>) => {
  const ref = useRef<HTMLTableCellElement>(null);
  const { gridCellProps } = useTableCell({ node: cell }, state, ref);
  const { checkboxProps } = useTableSelectionCheckbox({ key: cell.parentKey! }, state);

  return (
    <td {...gridCellProps} ref={ref}>
      <Checkbox {...checkboxProps} />
    </td>
  );
};

type TableSelectAllCellProps<T extends object> = {
  column: GridNode<T>;
  state: TableState<T>;
};

const TableSelectAllCell = <T extends object>({ column, state }: TableSelectAllCellProps<T>) => {
  const ref = useRef<HTMLTableCellElement>(null);
  const { columnHeaderProps } = useTableColumnHeader({ node: column }, state, ref);
  const { checkboxProps } = useTableSelectAllCheckbox(state);

  return (
    <th {...columnHeaderProps} ref={ref}>
      {state.selectionManager.selectionMode === 'single' ? (
        <VisuallyHidden>{checkboxProps['aria-label']}</VisuallyHidden>
      ) : (
        <Checkbox {...checkboxProps} />
      )}
    </th>
  );
};

const Checkbox = (props: AriaCheckboxProps) => {
  const state = useToggleState(props);
  const ref = useRef<HTMLInputElement>(null);
  const { inputProps } = useCheckbox(props, state, ref);

  return <input {...inputProps} ref={ref} />;
};

export { DataTable };
export type { DataTableProps };
