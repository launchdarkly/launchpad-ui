import type { ForwardedRef } from 'react';
import type {
	CalendarCellProps,
	CalendarGridBodyProps,
	CalendarGridHeaderProps,
	CalendarGridProps,
	CalendarHeaderCellProps,
	CalendarProps,
	DateValue,
	RangeCalendarProps,
} from 'react-aria-components';

import { cva, cx } from 'class-variance-authority';
import { forwardRef } from 'react';
import {
	Calendar as AriaCalendar,
	CalendarCell as AriaCalendarCell,
	RangeCalendar as AriaRangeCalendar,
	CalendarGrid,
	CalendarGridBody,
	CalendarGridHeader,
	CalendarHeaderCell,
	composeRenderProps,
} from 'react-aria-components';

import { button } from './Button';
import styles from './styles/Calendar.module.css';

const calendar = cva(styles.calendar);
const cell = cva(styles.cell);
const range = cva(styles.range);

const _Calendar = <T extends DateValue>(
	props: CalendarProps<T>,
	ref: ForwardedRef<HTMLDivElement>,
) => {
	return (
		<AriaCalendar
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				calendar({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A calendar displays one or more date grids and allows users to select a single date.
 *
 * https://react-spectrum.adobe.com/react-aria/Calendar.html
 */
const Calendar = forwardRef(_Calendar);

const _CalendarCell = (props: CalendarCellProps, ref: ForwardedRef<HTMLTableCellElement>) => {
	return (
		<AriaCalendarCell
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				cx(button({ variant: 'minimal' }), cell({ ...renderProps, className })),
			)}
		/>
	);
};

/**
 * A calendar cell displays a date cell within a calendar grid which can be selected by the user.
 *
 * https://react-spectrum.adobe.com/react-aria/Calendar.html
 */
const CalendarCell = forwardRef(_CalendarCell);

const _RangeCalendar = <T extends DateValue>(
	props: RangeCalendarProps<T>,
	ref: ForwardedRef<HTMLDivElement>,
) => {
	return (
		<AriaRangeCalendar
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				cx(calendar(), range({ ...renderProps, className })),
			)}
		/>
	);
};

/**
 * A range calendar displays one or more date grids and allows users to select a contiguous range of dates.
 *
 * https://react-spectrum.adobe.com/react-aria/RangeCalendar.html
 */
const RangeCalendar = forwardRef(_RangeCalendar);

export {
	Calendar,
	CalendarCell,
	CalendarGrid,
	CalendarGridBody,
	CalendarGridHeader,
	CalendarHeaderCell,
	RangeCalendar,
};
export type {
	CalendarProps,
	CalendarCellProps,
	CalendarGridProps,
	CalendarGridBodyProps,
	CalendarGridHeaderProps,
	CalendarHeaderCellProps,
	RangeCalendarProps,
};
