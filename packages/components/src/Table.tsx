import type { RefObject } from 'react';
import type {
	CellProps as AriaCellProps,
	ColumnProps as AriaColumnProps,
	ColumnResizerProps as AriaColumnResizerProps,
	ResizableTableContainerProps as AriaResizableTableContainerProps,
	RowProps as AriaRowProps,
	TableBodyProps as AriaTableBodyProps,
	TableHeaderProps as AriaTableHeaderProps,
	TableProps as AriaTableProps,
} from 'react-aria-components';

import { Icon } from '@launchpad-ui/icons';
import { cva } from 'class-variance-authority';
import { createContext, useContext } from 'react';
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

interface TableProps extends AriaTableProps {
	ref?: RefObject<HTMLTableElement | null>;
}

interface ColumnProps extends AriaColumnProps {
	ref?: RefObject<HTMLTableCellElement | null>;
}

interface TableHeaderProps<T extends object> extends AriaTableHeaderProps<T> {
	ref?: RefObject<HTMLTableSectionElement | null>;
}

interface TableBodyProps<T extends object> extends AriaTableBodyProps<T> {
	ref?: RefObject<HTMLTableSectionElement | null>;
}

interface RowProps<T extends object> extends AriaRowProps<T> {
	ref?: RefObject<HTMLTableRowElement | null>;
}

interface CellProps extends AriaCellProps {
	ref?: RefObject<HTMLTableCellElement | null>;
}

interface ColumnResizerProps extends AriaColumnResizerProps {
	ref?: RefObject<HTMLDivElement | null>;
}

interface ResizableTableContainerProps extends AriaResizableTableContainerProps {
	ref?: RefObject<HTMLDivElement | null>;
}

/**
 * A table displays data in rows and columns and enables a user to navigate its contents via directional navigation keys, and optionally supports row selection and sorting.
 *
 * https://react-spectrum.adobe.com/react-aria/Table.html
 */
const Table = ({ ref, ...props }: TableProps) => {
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
 * A column within a `<Table>`.
 *
 * https://react-spectrum.adobe.com/react-aria/Table.html
 */
const Column = ({ ref, ...props }: ColumnProps) => {
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
 * A header within a `<Table>`, containing the table columns.
 *
 * https://react-spectrum.adobe.com/react-aria/Table.html
 */
const TableHeader = <T extends object>({ className, ref, ...props }: TableHeaderProps<T>) => {
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
 * The body of a `<Table>`, containing the table rows.
 *
 * https://react-spectrum.adobe.com/react-aria/Table.html
 */
const TableBody = <T extends object>({ ref, ...props }: TableBodyProps<T>) => {
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
 * A row within a `<Table>`.
 *
 * https://react-spectrum.adobe.com/react-aria/Table.html
 */
const Row = <T extends object>({ columns, children, ref, ...props }: RowProps<T>) => {
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
 * A cell within a table row.
 *
 * https://react-spectrum.adobe.com/react-aria/Table.html
 */
const Cell = ({ ref, ...props }: CellProps) => {
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

const ColumnResizer = ({ ref, ...props }: ColumnResizerProps) => {
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

const ResizableTableContainer = ({ children, ref, ...props }: ResizableTableContainerProps) => {
	return (
		<AriaResizableTableContainer {...props} ref={ref}>
			<Provider values={[[ResizableTableContainerContext, { resizable: true }]]}>
				{children}
			</Provider>
		</AriaResizableTableContainer>
	);
};

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
