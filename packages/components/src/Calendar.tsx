import type { CalendarDate } from '@internationalized/date';
import type { RangeValue } from '@react-types/shared';
import type { HTMLAttributes, RefObject } from 'react';
import type {
	CalendarCellProps as AriaCalendarCellProps,
	CalendarProps as AriaCalendarProps,
	RangeCalendarProps as AriaRangeCalendarProps,
	CalendarGridBodyProps,
	CalendarGridHeaderProps,
	CalendarGridProps,
	CalendarHeaderCellProps,
	DateRange,
	DateValue,
} from 'react-aria-components';
import type { ButtonProps } from './Button';

import { cva, cx } from 'class-variance-authority';
import { useState } from 'react';
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

interface CalendarPickerProps extends HTMLAttributes<HTMLDivElement> {
	ref?: RefObject<HTMLDivElement | null>;
}

interface PresetProps extends Omit<ButtonProps, 'value'> {
	value: CalendarDate | RangeValue<CalendarDate>;
	ref?: RefObject<HTMLButtonElement | null>;
}

const calendar = cva(styles.calendar);
const cell = cva(styles.cell);
const range = cva(styles.range);

interface CalendarProps<T extends DateValue> extends AriaCalendarProps<T> {
	ref?: RefObject<HTMLDivElement | null>;
}

interface CalendarCellProps extends AriaCalendarCellProps {
	ref?: RefObject<HTMLTableCellElement | null>;
}

interface RangeCalendarProps<T extends DateValue> extends AriaRangeCalendarProps<T> {
	ref?: RefObject<HTMLDivElement | null>;
}

/**
 * A calendar displays one or more date grids and allows users to select a single date.
 *
 * https://react-spectrum.adobe.com/react-aria/Calendar.html
 */
const Calendar = <T extends DateValue>({ ref, ...props }: CalendarProps<T>) => {
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
 * A range calendar displays one or more date grids and allows users to select a contiguous range of dates.
 *
 * https://react-spectrum.adobe.com/react-aria/RangeCalendar.html
 */
const RangeCalendar = <T extends DateValue>({ ref, ...props }: RangeCalendarProps<T>) => {
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

const CalendarPicker = ({ children, className, ref, ...props }: CalendarPickerProps) => {
	const [value, onChange] = useState<DateValue>();
	const [range, onChangeRange] = useState<DateRange | null>();
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

const Preset = ({ value, ref, ...props }: PresetProps) => {
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
