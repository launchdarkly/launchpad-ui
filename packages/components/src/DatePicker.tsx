import type { RefObject } from 'react';
import type {
	DatePickerProps as AriaDatePickerProps,
	DateRangePickerProps as AriaDateRangePickerProps,
	DateValue,
} from 'react-aria-components';

import { cva } from 'class-variance-authority';
import {
	DatePicker as AriaDatePicker,
	DateRangePicker as AriaDateRangePicker,
	composeRenderProps,
} from 'react-aria-components';

import styles from './styles/DatePicker.module.css';

const picker = cva(styles.picker);

interface DatePickerProps<T extends DateValue> extends AriaDatePickerProps<T> {
	ref?: RefObject<HTMLDivElement | null>;
}

interface DateRangePickerProps<T extends DateValue> extends AriaDateRangePickerProps<T> {
	ref?: RefObject<HTMLDivElement | null>;
}

/**
 * A date picker combines a DateField and a Calendar popover to allow users to enter or select a date and time value.
 *
 * https://react-spectrum.adobe.com/react-aria/DatePicker.html
 */
const DatePicker = <T extends DateValue>({ ref, ...props }: DatePickerProps<T>) => {
	return (
		<AriaDatePicker
			shouldForceLeadingZeros={true}
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				picker({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A date range picker combines two DateFields and a RangeCalendar popover to allow users to enter or select a date and time range.
 *
 * https://react-spectrum.adobe.com/react-aria/DateRangePicker.html
 */
const DateRangePicker = <T extends DateValue>({ ref, ...props }: DateRangePickerProps<T>) => {
	return (
		<AriaDateRangePicker
			shouldForceLeadingZeros={true}
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				picker({ ...renderProps, className }),
			)}
		/>
	);
};

export { DatePicker, DateRangePicker };
export type { DatePickerProps, DateRangePickerProps };
