import type { ForwardedRef } from 'react';
import type { DatePickerProps, DateRangePickerProps, DateValue } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import {
	DatePicker as AriaDatePicker,
	DateRangePicker as AriaDateRangePicker,
	composeRenderProps,
} from 'react-aria-components';

import styles from './styles/DatePicker.module.css';

const picker = cva(styles.picker);

const _DatePicker = <T extends DateValue>(
	props: DatePickerProps<T>,
	ref: ForwardedRef<HTMLDivElement>,
) => {
	return (
		<AriaDatePicker
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				picker({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A date picker combines a DateField and a Calendar popover to allow users to enter or select a date and time value.
 *
 * https://react-spectrum.adobe.com/react-aria/DatePicker.html
 */
const DatePicker = forwardRef(_DatePicker);

const _DateRangePicker = <T extends DateValue>(
	props: DateRangePickerProps<T>,
	ref: ForwardedRef<HTMLDivElement>,
) => {
	return (
		<AriaDateRangePicker
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
const DateRangePicker = forwardRef(_DateRangePicker);

export { DatePicker, DateRangePicker };
export type { DatePickerProps, DateRangePickerProps };
