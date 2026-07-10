import type { ColumnDef, RowData, SortingState, VisibilityState } from '@tanstack/react-table';
import type { Ref } from 'react';
import type { Selection as AriaSelection, Key, SortDescriptor } from 'react-aria-components';

import { Icon } from '@launchpad-ui/icons';
import {
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';

import { Group } from './Group';
import { IconButton } from './IconButton';
import { Input } from './Input';
import { Menu, MenuItem, MenuTrigger } from './Menu';
import { Popover } from './Popover';
import { SearchField } from './SearchField';
import styles from './styles/DataTable.module.css';
import { Cell, Column, ResizableTableContainer, Row, Table, TableBody, TableHeader } from './Table';

// Augment TanStack column meta with the extra hints DataTable needs. `label` gives
// the column-visibility menu a human string when `header` is a render function;
// `isRowHeader` marks which column RAC should treat as the row's header cell.
declare module '@tanstack/react-table' {
	// biome-ignore lint/correctness/noUnusedVariables: augmentation must match TanStack's generic signature
	interface ColumnMeta<TData extends RowData, TValue> {
		label?: string;
		isRowHeader?: boolean;
		/** Horizontal alignment; `end` right-aligns header + cells (numeric/currency/delta). */
		align?: 'start' | 'end';
		/** Set false to pin a column (excluded from drag-reorder, e.g. a row-actions column). */
		enableReorder?: boolean;
	}
}

interface DataTableProps<TData> {
	/** Accessible name for the table. */
	'aria-label': string;
	/** Row data. */
	data: TData[];
	/** TanStack column definitions (accessorKey/accessorFn, header, cell, enableSorting, enableHiding, meta). */
	columns: ColumnDef<TData, unknown>[];
	/** Stable row id — used as the RAC row key and for selection. Defaults to the row index. */
	getRowId?: (row: TData, index: number) => string;
	/** Initial sort (uncontrolled), e.g. `[{ id: 'status', desc: true }]`. */
	defaultSorting?: SortingState;
	/** Row density, matching the Figma table system. Default `default`. */
	density?: 'default' | 'compact' | 'tight';
	/** RAC selection mode. Selection is delegated to RAC (checkbox column injected automatically). */
	selectionMode?: 'none' | 'single' | 'multiple';
	/**
	 * `toggle` (default) shows a checkbox column; `replace` selects the whole row on click with
	 * a highlight and no checkbox — the list/detail pattern (click a trace row to open it).
	 */
	selectionBehavior?: 'toggle' | 'replace';
	selectedKeys?: AriaSelection;
	onSelectionChange?: (keys: AriaSelection) => void;
	/**
	 * Called when a row is activated (click or Enter) — the click-row-to-open-detail pattern
	 * (e.g. a traces list opening a trace). Receives the row id. RAC suppresses this when the
	 * press lands on an interactive cell (checkbox, actions menu).
	 */
	onRowAction?: (id: string) => void;
	/** Show the freeform search field in the toolbar (TanStack global filter). Default true. */
	enableGlobalFilter?: boolean;
	/** Show the column-visibility menu in the toolbar (TanStack column visibility). Default true. */
	enableColumnVisibility?: boolean;
	/** Wrap in a RAC ResizableTableContainer so columns can be resized. Default false. */
	enableColumnResize?: boolean;
	/**
	 * Allow reordering columns by dragging a grip handle in the header (TanStack `columnOrder`).
	 * RAC has no native column DnD, so this uses lightweight HTML5 drag — mouse-based; keyboard
	 * reorder is a follow-up. Pin a column with `meta.enableReorder: false`.
	 */
	enableColumnReorder?: boolean;
	ref?: Ref<HTMLTableElement>;
}

function columnLabel<TData>(columnDef: ColumnDef<TData, unknown>, id: string): string {
	if (columnDef.meta?.label) {
		return columnDef.meta.label;
	}
	if (typeof columnDef.header === 'string') {
		return columnDef.header;
	}
	return id;
}

/**
 * A data table takes declarative `columns` + `data` and layers the data-heavy interactions
 * product surfaces expect — freeform search, sorting, row selection, column visibility, and
 * resize — on top of the LaunchPad RAC `Table`.
 *
 * Division of labor: RAC owns markup, keyboard nav, a11y, selection, sort UI, DnD, and resize;
 * TanStack Table v8 is the headless model for filtering, sorting, and column visibility.
 */
const DataTable = <TData,>({
	data,
	columns,
	getRowId,
	defaultSorting,
	density = 'default',
	selectionMode = 'none',
	selectionBehavior,
	selectedKeys,
	onSelectionChange,
	onRowAction,
	enableGlobalFilter = true,
	enableColumnVisibility = true,
	enableColumnResize = false,
	enableColumnReorder = false,
	ref,
	...props
}: DataTableProps<TData>) => {
	const [sorting, setSorting] = useState<SortingState>(defaultSorting ?? []);
	const [globalFilter, setGlobalFilter] = useState('');
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
	const [columnOrder, setColumnOrder] = useState<string[]>([]);
	// Column drag-reorder (HTML5 DnD): the column being dragged and the current drop target.
	const [dragColumnId, setDragColumnId] = useState<string | null>(null);
	const [dropColumnId, setDropColumnId] = useState<string | null>(null);

	const table = useReactTable({
		data,
		columns,
		state: { sorting, globalFilter, columnVisibility, columnOrder },
		getRowId,
		onSortingChange: setSorting,
		onGlobalFilterChange: setGlobalFilter,
		onColumnVisibilityChange: setColumnVisibility,
		onColumnOrderChange: setColumnOrder,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		enableSortingRemoval: false,
	});

	// Move `fromId` to `toId`'s slot in the full leaf-column order and commit it to TanStack,
	// which re-derives both header and cell order (RAC then re-renders in lockstep).
	const reorderColumn = (fromId: string, toId: string) => {
		const order = table.getAllLeafColumns().map((column) => column.id);
		const from = order.indexOf(fromId);
		const to = order.indexOf(toId);
		if (from === -1 || to === -1 || from === to) {
			return;
		}
		order.splice(from, 1);
		order.splice(to, 0, fromId);
		setColumnOrder(order);
	};

	// Bridge: derive RAC's single-column SortDescriptor from TanStack sorting state, and
	// translate RAC sort changes back into TanStack state so the sort UI is RAC's but the
	// actual ordering is computed by TanStack's row model.
	const sort = sorting[0];
	const sortDescriptor: SortDescriptor | undefined = sort
		? { column: sort.id, direction: sort.desc ? 'descending' : 'ascending' }
		: undefined;
	const onSortChange = (descriptor: SortDescriptor) => {
		setSorting([{ id: String(descriptor.column), desc: descriptor.direction === 'descending' }]);
	};

	const headers = table.getHeaderGroups()[0]?.headers ?? [];
	const rows = table.getRowModel().rows;
	// RAC memoizes dynamic-collection rows by their stable id, so toggling column
	// visibility/order updates the (statically-mapped) header but leaves cached cells
	// behind — tripping RAC's "cell count must match column count" invariant. Feeding
	// a `dependencies` value that changes with the visible columns invalidates that
	// cache in lockstep. It must be a single, constant-size entry: RAC spreads
	// `dependencies` into a useMemo deps array, and React requires a stable size.
	const visibleColumnsKey = table
		.getVisibleLeafColumns()
		.map((column) => column.id)
		.join('|');
	const hideableColumns = table.getAllLeafColumns().filter((column) => column.getCanHide());
	const visibleColumnKeys = new Set<Key>(
		hideableColumns.filter((column) => column.getIsVisible()).map((column) => column.id),
	);

	const onColumnSelectionChange = (keys: AriaSelection) => {
		const next: VisibilityState = {};
		for (const column of hideableColumns) {
			next[column.id] = keys === 'all' || keys.has(column.id);
		}
		setColumnVisibility(next);
	};

	const tableElement = (
		<Table
			aria-label={props['aria-label']}
			ref={ref}
			selectionMode={selectionMode === 'none' ? undefined : selectionMode}
			selectionBehavior={selectionBehavior}
			selectedKeys={selectedKeys}
			onSelectionChange={onSelectionChange}
			onRowAction={onRowAction ? (key) => onRowAction(String(key)) : undefined}
			sortDescriptor={sortDescriptor}
			onSortChange={onSortChange}
		>
			<TableHeader>
				{headers.map((header, index) => {
					const { columnDef } = header.column;
					const columnId = header.column.id;
					const isRowHeader = columnDef.meta?.isRowHeader ?? index === 0;
					const reorderable = enableColumnReorder && columnDef.meta?.enableReorder !== false;
					const content = flexRender(columnDef.header, header.getContext());
					return (
						<Column
							key={header.id}
							id={columnId}
							isRowHeader={isRowHeader}
							allowsSorting={header.column.getCanSort()}
							className={columnDef.meta?.align === 'end' ? styles.alignEnd : undefined}
						>
							{reorderable ? (
								// biome-ignore lint/a11y/noStaticElementInteractions: HTML5 drop target for column reorder; keyboard reorder is a documented follow-up
								<span
									className={
										dropColumnId === columnId
											? `${styles.reorderHeader} ${styles.dropTarget}`
											: styles.reorderHeader
									}
									onDragOver={(e) => {
										if (dragColumnId && dragColumnId !== columnId) {
											e.preventDefault();
											setDropColumnId(columnId);
										}
									}}
									onDragLeave={() =>
										setDropColumnId((current) => (current === columnId ? null : current))
									}
									onDrop={(e) => {
										e.preventDefault();
										if (dragColumnId) {
											reorderColumn(dragColumnId, columnId);
										}
										setDragColumnId(null);
										setDropColumnId(null);
									}}
								>
									{/* Grip is the drag origin; stop pointer/click from reaching RAC's sort press. */}
									<span
										className={styles.grip}
										role="button"
										tabIndex={-1}
										draggable
										aria-label="Drag to reorder column"
										onPointerDown={(e) => e.stopPropagation()}
										onDragStart={(e) => {
											setDragColumnId(columnId);
											e.dataTransfer.effectAllowed = 'move';
											e.dataTransfer.setData('text/plain', columnId);
										}}
										onDragEnd={() => {
											setDragColumnId(null);
											setDropColumnId(null);
										}}
									>
										<Icon name="grip-horiz" size="small" />
									</span>
									{content}
								</span>
							) : (
								content
							)}
						</Column>
					);
				})}
			</TableHeader>
			<TableBody
				items={rows}
				dependencies={[visibleColumnsKey]}
				renderEmptyState={() => 'No results found'}
			>
				{(row) => (
					<Row id={row.id}>
						{row.getVisibleCells().map((cell) => (
							<Cell
								key={cell.id}
								className={
									cell.column.columnDef.meta?.align === 'end' ? styles.alignEnd : undefined
								}
							>
								{flexRender(cell.column.columnDef.cell, cell.getContext())}
							</Cell>
						))}
					</Row>
				)}
			</TableBody>
		</Table>
	);

	const showToolbar = enableGlobalFilter || enableColumnVisibility;

	return (
		<div className={styles.root} data-density={density}>
			{showToolbar && (
				<div className={styles.toolbar}>
					{enableGlobalFilter && (
						<SearchField
							aria-label="Search"
							value={globalFilter}
							onChange={setGlobalFilter}
							className={styles.search}
						>
							<Group>
								<Icon name="search" size="small" />
								<Input placeholder="Search" />
								<IconButton
									icon="cancel-circle-outline"
									aria-label="Clear search"
									size="small"
									variant="minimal"
								/>
							</Group>
						</SearchField>
					)}
					{enableColumnVisibility && hideableColumns.length > 0 && (
						<span className={styles.columnMenu}>
							<MenuTrigger>
								<IconButton
									icon="more-horiz"
									aria-label="Column settings"
									variant="minimal"
									size="small"
								/>
								<Popover>
									<Menu
										selectionMode="multiple"
										selectedKeys={visibleColumnKeys}
										onSelectionChange={onColumnSelectionChange}
									>
										{hideableColumns.map((column) => (
											<MenuItem key={column.id} id={column.id}>
												{columnLabel(column.columnDef, column.id)}
											</MenuItem>
										))}
									</Menu>
								</Popover>
							</MenuTrigger>
						</span>
					)}
				</div>
			)}
			{enableColumnResize ? (
				<ResizableTableContainer>{tableElement}</ResizableTableContainer>
			) : (
				tableElement
			)}
		</div>
	);
};

export { DataTable };
export type { DataTableProps };
