import type { Ref } from 'react';
import type {
	CalendarCellProps as AriaCalendarCellProps,
	CalendarGridProps as AriaCalendarGridProps,
	CalendarProps as AriaCalendarProps,
	RangeCalendarProps as AriaRangeCalendarProps,
	CalendarGridBodyProps,
	CalendarGridHeaderProps,
	CalendarHeaderCellProps,
	ContextValue,
	DateValue,
} from 'react-aria-components';

import { getLocalTimeZone, isToday } from '@internationalized/date';
import { cva, cx } from 'class-variance-authority';
import { createContext } from 'react';
import {
	Calendar as AriaCalendar,
	CalendarCell as AriaCalendarCell,
	CalendarContext as AriaCalendarContext,
	CalendarGrid as AriaCalendarGrid,
	RangeCalendar as AriaRangeCalendar,
	RangeCalendarContext as AriaRangeCalendarContext,
	CalendarGridBody,
	CalendarGridHeader,
	CalendarHeaderCell,
	composeRenderProps,
	useSlottedContext,
} from 'react-aria-components';

import { button } from './Button';
import styles from './styles/Calendar.module.css';
import { useLPContextProps } from './utils';

const calendar = cva(styles.calendar);
const cell = cva(styles.cell);
const grid = cva(styles.grid);
const range = cva(styles.range);

interface CalendarProps<T extends DateValue> extends AriaCalendarProps<T> {
	ref?: Ref<HTMLDivElement>;
}

interface CalendarCellProps extends AriaCalendarCellProps {
	ref?: Ref<HTMLTableCellElement>;
}

interface CalendarGridProps extends AriaCalendarGridProps {
	ref?: Ref<HTMLTableElement>;
}

interface RangeCalendarProps<T extends DateValue> extends AriaRangeCalendarProps<T> {
	ref?: Ref<HTMLDivElement>;
}

const CalendarContext = createContext<ContextValue<CalendarProps<DateValue>, HTMLDivElement>>(null);
const RangeCalendarContext =
	createContext<ContextValue<RangeCalendarProps<DateValue>, HTMLDivElement>>(null);

/**
 * A calendar displays one or more date grids and allows users to select a single date.
 *
 * https://react-spectrum.adobe.com/react-aria/Calendar.html
 */
const Calendar = <T extends DateValue>({ ref, ...props }: CalendarProps<T>) => {
	[props, ref] = useLPContextProps(props, ref, CalendarContext);
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
 * A calendar cell displays a date cell within a calendar grid which can be selected by the user.
 *
 * https://react-spectrum.adobe.com/react-aria/Calendar.html
 */
const CalendarCell = ({ ref, ...props }: CalendarCellProps) => {
	const context = useSlottedContext(AriaCalendarContext);
	const rangeContext = useSlottedContext(AriaRangeCalendarContext);

	return (
		<AriaCalendarCell
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				cx(
					button({
						variant:
							(context && renderProps.isSelected) ||
							(rangeContext && (renderProps.isSelectionStart || renderProps.isSelectionEnd))
								? 'primary'
								: 'minimal',
					}),
					cell({ ...renderProps, className }),
				),
			)}
		>
			{composeRenderProps(props.children, (children, { defaultChildren, isSelected }) => (
				<>
					{children ?? defaultChildren}
					{!isSelected && isToday(props.date, getLocalTimeZone()) && (
						<svg
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="4"
							height="4"
							viewBox="0 0 4 4"
							fill="none"
							className={styles.today}
						>
							<circle cx="2" cy="2" r="2" />
						</svg>
					)}
				</>
			))}
		</AriaCalendarCell>
	);
};

/**
 * A calendar grid displays a single grid of days within a calendar or range calendar which can be keyboard navigated and selected by the user.
 *
 * https://react-spectrum.adobe.com/react-aria/Calendar.html
 */
const CalendarGrid = ({ ref, className, weekdayStyle = 'short', ...props }: CalendarGridProps) => {
	return (
		<AriaCalendarGrid
			weekdayStyle={weekdayStyle}
			{...props}
			ref={ref}
			className={grid({ className })}
		/>
	);
};

/**
 * A range calendar displays one or more date grids and allows users to select a contiguous range of dates.
 *
 * https://react-spectrum.adobe.com/react-aria/RangeCalendar.html
 */
const RangeCalendar = <T extends DateValue>({ ref, ...props }: RangeCalendarProps<T>) => {
	[props, ref] = useLPContextProps(props, ref, RangeCalendarContext);
	const { pageBehavior = 'single' } = props;

	return (
		<AriaRangeCalendar
			pageBehavior={pageBehavior}
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				cx(calendar(), range({ ...renderProps, className })),
			)}
		/>
	);
};

export {
	Calendar,
	CalendarCell,
	CalendarContext,
	CalendarGrid,
	CalendarGridBody,
	CalendarGridHeader,
	CalendarHeaderCell,
	RangeCalendar,
	RangeCalendarContext,
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
