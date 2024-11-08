import type { forwardRefType } from '@react-types/shared';
import type { ForwardedRef } from 'react';
import type {
	CellProps,
	ColumnProps,
	ColumnResizerProps,
	ResizableTableContainerProps,
	RowProps,
	TableBodyProps,
	TableHeaderProps,
	TableProps,
} from 'react-aria-components';

import { Icon } from '@launchpad-ui/icons';
import { cva } from 'class-variance-authority';
import { createContext, forwardRef, useContext } from 'react';
import { VisuallyHidden } from 'react-aria';
import {
	Cell as AriaCell,
	Column as AriaColumn,
	ColumnResizer as AriaColumnResizer,
	ResizableTableContainer as AriaResizableTableContainer,
	Row as AriaRow,
	Table as AriaTable,
	TableBody as AriaTableBody,
	TableHeader as AriaTableHeader,
	Collection,
	Provider,
	composeRenderProps,
	useTableOptions,
} from 'react-aria-components';

import { Checkbox } from './Checkbox';
import { IconButton } from './IconButton';
import styles from './styles/Table.module.css';

const table = cva(styles.table);
const column = cva(styles.column);
const header = cva(styles.header);
const body = cva(styles.body);
const row = cva(styles.row);
const cell = cva(styles.cell);
const resizer = cva(styles.resizer);

const ResizableTableContainerContext = createContext<{ resizable: boolean } | null>({
	resizable: false,
});

const _Table = (props: TableProps, ref: ForwardedRef<HTMLTableElement>) => {
	return (
		<AriaTable
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				table({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A table displays data in rows and columns and enables a user to navigate its contents via directional navigation keys, and optionally supports row selection and sorting.
 *
 * https://react-spectrum.adobe.com/react-aria/Table.html
 */
const Table = forwardRef(_Table);

const _Column = (props: ColumnProps, ref: ForwardedRef<HTMLTableCellElement>) => {
	const ctx = useContext(ResizableTableContainerContext);
	return (
		<AriaColumn
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				column({ ...renderProps, className }),
			)}
		>
			{composeRenderProps(props.children, (children, { allowsSorting, sortDirection }) => (
				<div className={styles.flex}>
					<span className={styles.truncate}>{children}</span>
					{allowsSorting && sortDirection && (
						<Icon name={sortDirection === 'ascending' ? 'caret-up' : 'caret-down'} size="small" />
					)}
					{ctx?.resizable && <ColumnResizer />}
				</div>
			))}
		</AriaColumn>
	);
};

/**
 * A column within a `<Table>`.
 *
 * https://react-spectrum.adobe.com/react-aria/Table.html
 */
const Column = forwardRef(_Column);

const _TableHeader = <T extends object>(
	{ className, ...props }: TableHeaderProps<T>,
	ref: ForwardedRef<HTMLTableSectionElement>,
) => {
	const { selectionBehavior, selectionMode, allowsDragging } = useTableOptions();
	return (
		<AriaTableHeader {...props} ref={ref} className={header({ className })}>
			{allowsDragging && (
				<Column>
					<VisuallyHidden>Drag</VisuallyHidden>
				</Column>
			)}
			{selectionBehavior === 'toggle' && (
				<AriaColumn>{selectionMode === 'multiple' && <Checkbox slot="selection" />}</AriaColumn>
			)}
			<Collection items={props.columns}>{props.children}</Collection>
		</AriaTableHeader>
	);
};

/**
 * A header within a `<Table>`, containing the table columns.
 *
 * https://react-spectrum.adobe.com/react-aria/Table.html
 */
const TableHeader = (forwardRef as forwardRefType)(_TableHeader);

const _TableBody = <T extends object>(
	props: TableBodyProps<T>,
	ref: ForwardedRef<HTMLTableSectionElement>,
) => {
	return (
		<AriaTableBody
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				body({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * The body of a `<Table>`, containing the table rows.
 *
 * https://react-spectrum.adobe.com/react-aria/Table.html
 */
const TableBody = (forwardRef as forwardRefType)(_TableBody);

const _Row = <T extends object>(
	{ columns, children, ...props }: RowProps<T>,
	ref: ForwardedRef<HTMLTableRowElement>,
) => {
	const { selectionBehavior, allowsDragging } = useTableOptions();

	return (
		<AriaRow
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				row({ ...renderProps, className }),
			)}
		>
			{allowsDragging && (
				<Cell>
					{/* @ts-expect-error RAC adds label */}
					<IconButton slot="drag" icon="grip-horiz" variant="minimal" size="small" />
				</Cell>
			)}
			{selectionBehavior === 'toggle' && (
				<Cell>
					<Checkbox slot="selection" />
				</Cell>
			)}
			<Collection items={columns}>{children}</Collection>
		</AriaRow>
	);
};

/**
 * A row within a `<Table>`.
 *
 * https://react-spectrum.adobe.com/react-aria/Table.html
 */
const Row = (forwardRef as forwardRefType)(_Row);

const _Cell = (props: CellProps, ref: ForwardedRef<HTMLTableCellElement>) => {
	return (
		<AriaCell
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				cell({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A cell within a table row.
 *
 * https://react-spectrum.adobe.com/react-aria/Table.html
 */
const Cell = forwardRef(_Cell);

const _ColumnResizer = (props: ColumnResizerProps, ref: ForwardedRef<HTMLDivElement>) => {
	return (
		<AriaColumnResizer
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				resizer({ ...renderProps, className }),
			)}
		/>
	);
};

const ColumnResizer = forwardRef(_ColumnResizer);

const _ResizableTableContainer = (
	{ children, ...props }: ResizableTableContainerProps,
	ref: ForwardedRef<HTMLDivElement>,
) => {
	return (
		<AriaResizableTableContainer {...props} ref={ref}>
			<Provider values={[[ResizableTableContainerContext, { resizable: true }]]}>
				{children}
			</Provider>
		</AriaResizableTableContainer>
	);
};

const ResizableTableContainer = forwardRef(_ResizableTableContainer);

export { Cell, Column, ColumnResizer, ResizableTableContainer, Row, Table, TableBody, TableHeader };
export type {
	CellProps,
	ColumnProps,
	ColumnResizerProps,
	ResizableTableContainerProps,
	RowProps,
	TableProps,
	TableBodyProps,
	TableHeaderProps,
};
