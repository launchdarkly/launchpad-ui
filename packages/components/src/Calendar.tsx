import type { CalendarDate } from '@internationalized/date';
import type { RangeValue } from '@react-types/shared';
import type { ForwardedRef, HTMLAttributes } from 'react';
import type {
	CalendarCellProps,
	CalendarGridBodyProps,
	CalendarGridHeaderProps,
	CalendarGridProps,
	CalendarHeaderCellProps,
	CalendarProps,
	DateRange,
	DateValue,
	RangeCalendarProps,
} from 'react-aria-components';
import type { ButtonProps } from './Button';

import { cva, cx } from 'class-variance-authority';
import { forwardRef, useState } from 'react';
import {
	Calendar as AriaCalendar,
	CalendarCell as AriaCalendarCell,
	RangeCalendar as AriaRangeCalendar,
	ButtonContext,
	CalendarContext,
	CalendarGrid,
	CalendarGridBody,
	CalendarGridHeader,
	CalendarHeaderCell,
	Provider,
	RangeCalendarContext,
	composeRenderProps,
	useSlottedContext,
} from 'react-aria-components';

import { Button, button } from './Button';
import styles from './styles/Calendar.module.css';

interface CalendarPickerProps extends HTMLAttributes<HTMLDivElement> {}

interface PresetProps extends Omit<ButtonProps, 'value'> {
	value: CalendarDate | RangeValue<CalendarDate>;
}

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

const _CalendarPicker = (
	{ children, className, ...props }: CalendarPickerProps,
	ref: ForwardedRef<HTMLDivElement>,
) => {
	const [value, onChange] = useState<DateValue>();
	const [range, onChangeRange] = useState<DateRange>();
	const [focusedValue, onFocusChange] = useState<DateValue>();
	return (
		<Provider
			values={[
				[CalendarContext, { value, onChange, focusedValue, onFocusChange }],
				[
					RangeCalendarContext,
					{ value: range, onChange: onChangeRange, focusedValue, onFocusChange },
				],
				[ButtonContext, {}],
			]}
		>
			<div {...props} ref={ref} className={cx(styles.picker, className)}>
				{children}
			</div>
		</Provider>
	);
};

const CalendarPicker = forwardRef(_CalendarPicker);

const _Preset = ({ value, ...props }: PresetProps, ref: ForwardedRef<HTMLButtonElement>) => {
	const context = useSlottedContext(CalendarContext);
	const rangeContext = useSlottedContext(RangeCalendarContext);
	const onPress = () => {
		if ('start' in value) {
			rangeContext?.onFocusChange?.(value.start);
			rangeContext?.onChange?.(value);
		} else {
			context?.onFocusChange?.(value);
			context?.onChange?.(value);
		}
	};
	return <Button ref={ref} size="small" variant="minimal" {...props} onPress={onPress} />;
};

const Preset = forwardRef(_Preset);

export {
	Calendar,
	CalendarCell,
	CalendarGrid,
	CalendarGridBody,
	CalendarGridHeader,
	CalendarHeaderCell,
	CalendarPicker,
	Preset,
	RangeCalendar,
};
export type {
	CalendarProps,
	CalendarCellProps,
	CalendarGridProps,
	CalendarGridBodyProps,
	CalendarGridHeaderProps,
	CalendarHeaderCellProps,
	CalendarPickerProps,
	PresetProps,
	RangeCalendarProps,
};
