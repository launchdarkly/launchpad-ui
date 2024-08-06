import type { AriaCheckboxProps } from '@react-aria/checkbox';
import type { AriaTableColumnResizeProps, AriaTableProps } from '@react-aria/table';
import type {
	TableColumnResizeState,
	TableColumnResizeStateProps,
	TableState,
	TableStateProps,
} from '@react-stately/table';
import type { GridNode } from '@react-types/grid';
import type { ComponentProps, ForwardedRef, ReactNode } from 'react';

import { useCheckbox } from '@react-aria/checkbox';
import { useFocusRing } from '@react-aria/focus';
import {
	useTable,
	useTableCell,
	useTableColumnHeader,
	useTableColumnResize,
	useTableHeaderRow,
	useTableRow,
	useTableRowGroup,
	useTableSelectAllCheckbox,
	useTableSelectionCheckbox,
} from '@react-aria/table';
import {
	filterDOMProps,
	mergeProps,
	useLayoutEffect,
	useObjectRef,
	useResizeObserver,
} from '@react-aria/utils';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useTableColumnResizeState, useTableState } from '@react-stately/table';
import { useToggleState } from '@react-stately/toggle';
import { cx } from 'classix';
import { forwardRef, useCallback, useMemo, useRef, useState } from 'react';

import {
	header,
	headerCell,
	resizer,
	row,
	selectCell,
	table,
	cell as tableCell,
} from './styles/DataTable.css';

type DataTableProps<T extends object> = TableStateProps<T> &
	AriaTableProps &
	Pick<AriaTableColumnResizeProps<T>, 'onResizeStart' | 'onResize' | 'onResizeEnd'> &
	Partial<TableColumnResizeStateProps<T>> &
	ComponentProps<'div'> & {
		'data-test-id'?: string;
	};

const DataTable = forwardRef(
	<T extends object>(
		{ className, 'data-test-id': testId = 'data-table', ...props }: DataTableProps<T>,
		ref: ForwardedRef<HTMLTableElement>,
	) => {
		const {
			selectionMode,
			selectionBehavior,
			getDefaultWidth: getDefaultWidthProp,
			getDefaultMinWidth: getDefaultMinWidthProp,
			tableWidth: tableWidthProp,
		} = props;
		const tableRef = useObjectRef(ref);
		const scrollRef = useRef<HTMLTableSectionElement>(null);
		const state = useTableState({
			...props,
			showSelectionCheckboxes: selectionMode === 'multiple' && selectionBehavior !== 'replace',
		});
		const { gridProps } = useTable({ ...props, scrollRef }, state, tableRef);
		const { collection } = state;

		const [tableWidth, setTableWidth] = useState(0);
		const getDefaultWidth = useCallback(() => undefined, []);
		const getDefaultMinWidth = useCallback(() => 75, []);
		const layoutState = useTableColumnResizeState(
			{
				getDefaultWidth: getDefaultWidthProp ?? getDefaultMinWidth,
				getDefaultMinWidth: getDefaultMinWidthProp ?? getDefaultWidth,
				tableWidth: tableWidthProp ?? tableWidth,
			},
			state,
		);
		const layout = useMemo(() => ({ ...layoutState, tableState: state }), [layoutState, state]);

		useLayoutEffect(() => {
			if (scrollRef?.current) {
				setTableWidth(scrollRef.current.clientWidth);
			}
		}, []);

		useResizeObserver({
			ref: tableRef,
			onResize: () => scrollRef.current && setTableWidth(scrollRef.current.clientWidth),
		});

		return (
			<table
				{...filterDOMProps(props)}
				{...gridProps}
				ref={tableRef}
				className={cx(table, className)}
				data-test-id={testId}
			>
				<TableRowGroup type="thead">
					{collection.headerRows.map((headerRow) => (
						<TableHeaderRow key={headerRow.key} item={headerRow} state={state}>
							{/* biome-ignore lint/style/noNonNullAssertion: <explanation> */}
							{[...collection.getChildren!(headerRow.key)].map((column) =>
								column.props.isSelectionCell ? (
									<TableSelectAllCell
										key={column.key}
										column={column}
										state={state}
										layout={layout}
									/>
								) : (
									<TableColumnHeader
										key={column.key}
										column={column}
										state={state}
										layout={layout}
										onResizeStart={props.onResizeStart}
										onResize={props.onResize}
										onResizeEnd={props.onResizeEnd}
									/>
								),
							)}
						</TableHeaderRow>
					))}
				</TableRowGroup>
				<TableRowGroup type="tbody" ref={scrollRef}>
					{[...collection].map((row) => (
						<TableRow key={row.key} item={row} state={state}>
							{/* biome-ignore lint/style/noNonNullAssertion: <explanation> */}
							{[...collection.getChildren!(row.key)].map((cell) =>
								cell.props.isSelectionCell ? (
									<TableCheckboxCell key={cell.key} cell={cell} state={state} layout={layout} />
								) : (
									<TableCell key={cell.key} cell={cell} state={state} layout={layout} />
								),
							)}
						</TableRow>
					))}
				</TableRowGroup>
			</table>
		);
	},
);

DataTable.displayName = 'DataTable';

type TableRowGroupProps = {
	type: 'thead' | 'tbody';
	children?: ReactNode;
};

const TableRowGroup = forwardRef<HTMLTableSectionElement, TableRowGroupProps>(
	({ type: Element, children }, ref) => {
		const { rowGroupProps } = useTableRowGroup();
		return (
			<Element {...rowGroupProps} ref={ref} className={Element === 'thead' ? header : undefined}>
				{children}
			</Element>
		);
	},
);

TableRowGroup.displayName = 'TableRowGroup';

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

type TableColumnHeaderProps<T extends object> = Pick<
	AriaTableColumnResizeProps<T>,
	'onResizeStart' | 'onResize' | 'onResizeEnd'
> & {
	column: GridNode<T>;
	state: TableState<T>;
	layout: TableColumnResizeState<T>;
};

const TableColumnHeader = <T extends object>({
	column,
	state,
	layout,
	onResizeStart,
	onResize,
	onResizeEnd,
}: TableColumnHeaderProps<T>) => {
	const ref = useRef<HTMLTableCellElement>(null);
	const { columnHeaderProps } = useTableColumnHeader({ node: column }, state, ref);
	const { focusProps } = useFocusRing();
	const arrowIcon = state.sortDescriptor?.direction === 'ascending' ? '▲' : '▼';
	const { allowsSorting, allowsResizing } = column.props;

	return (
		<th
			{...mergeProps(columnHeaderProps, focusProps)}
			colSpan={column.colspan}
			className={headerCell}
			style={{
				width: allowsResizing && layout.getColumnWidth(column.key),
				textAlign: (column.colspan ?? 0) > 1 ? 'center' : 'left',
			}}
			ref={ref}
		>
			<div style={{ display: 'flex', position: 'relative' }}>
				<div style={{ flex: '1 1 auto' }}>
					{column.rendered}
					{allowsSorting && (
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
				</div>
				{allowsResizing && (
					<Resizer
						column={column}
						layout={layout}
						onResizeStart={onResizeStart}
						onResize={onResize}
						onResizeEnd={onResizeEnd}
						aria-label="Resizer"
					/>
				)}
			</div>
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
		ref,
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
	layout: TableColumnResizeState<T>;
};

const TableCell = <T extends object>({ cell, state, layout }: TableCellProps<T>) => {
	const ref = useRef<HTMLTableCellElement>(null);
	const { gridCellProps } = useTableCell({ node: cell }, state, ref);
	const { focusProps } = useFocusRing();
	const { allowsResizing } = cell.column?.props ?? {};

	return (
		<td
			{...mergeProps(gridCellProps, focusProps)}
			className={tableCell}
			style={{
				width: allowsResizing && cell.column && layout.getColumnWidth(cell.column.key),
			}}
			ref={ref}
		>
			{cell.rendered}
		</td>
	);
};

type TableCheckboxCellProps<T extends object> = {
	cell: GridNode<T>;
	state: TableState<T>;
	layout: TableColumnResizeState<T>;
};

const TableCheckboxCell = <T extends object>({
	cell,
	state,
	layout,
}: TableCheckboxCellProps<T>) => {
	const ref = useRef<HTMLTableCellElement>(null);
	const { gridCellProps } = useTableCell({ node: cell }, state, ref);
	// biome-ignore lint/style/noNonNullAssertion: <explanation>
	const { checkboxProps } = useTableSelectionCheckbox({ key: cell.parentKey! }, state);
	const { allowsResizing } = cell.column?.props ?? {};

	return (
		<td
			{...gridCellProps}
			style={{
				width: allowsResizing && cell.column && layout.getColumnWidth(cell.column.key),
			}}
			className={selectCell}
			ref={ref}
		>
			<Checkbox {...checkboxProps} />
		</td>
	);
};

type TableSelectAllCellProps<T extends object> = {
	column: GridNode<T>;
	state: TableState<T>;
	layout: TableColumnResizeState<T>;
};

const TableSelectAllCell = <T extends object>({
	column,
	state,
	layout,
}: TableSelectAllCellProps<T>) => {
	const ref = useRef<HTMLTableCellElement>(null);
	const { columnHeaderProps } = useTableColumnHeader({ node: column }, state, ref);
	const { checkboxProps } = useTableSelectAllCheckbox(state);
	const { allowsResizing } = column.props;

	return (
		<th
			{...columnHeaderProps}
			style={{
				width: allowsResizing && layout.getColumnWidth(column.key),
			}}
			className={selectCell}
			ref={ref}
		>
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

type ResizerProps<T extends object> = AriaTableColumnResizeProps<T> & {
	layout: TableColumnResizeState<T>;
};

const Resizer = <T extends object>({
	column,
	layout,
	onResizeStart,
	onResize,
	onResizeEnd,
	'aria-label': ariaLabel,
}: ResizerProps<T>) => {
	const ref = useRef(null);
	const { resizerProps, inputProps } = useTableColumnResize(
		{
			column,
			'aria-label': ariaLabel,
			onResizeStart,
			onResize,
			onResizeEnd,
		},
		layout,
		ref,
	);
	const { isFocusVisible, focusProps } = useFocusRing();

	return (
		<div
			role="presentation"
			className={resizer({ focus: isFocusVisible, active: layout.resizingColumn === column.key })}
			{...resizerProps}
		>
			<VisuallyHidden>
				<input ref={ref} {...mergeProps(inputProps, focusProps)} />
			</VisuallyHidden>
		</div>
	);
};

export { DataTable };
export type { DataTableProps };
