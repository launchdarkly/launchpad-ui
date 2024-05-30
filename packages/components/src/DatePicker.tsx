import type { ForwardedRef } from 'react';
import type { DatePickerProps, DateRangePickerProps, DateValue } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { DatePicker as AriaDatePicker, DateRangePicker } from 'react-aria-components';

import styles from './styles/DatePicker.module.css';

const picker = cva(styles.picker);

const _DatePicker = <T extends DateValue>(
	{ className, ...props }: DatePickerProps<T>,
	ref: ForwardedRef<HTMLDivElement>,
) => {
	return <AriaDatePicker {...props} ref={ref} className={picker({ className })} />;
};

/**
 * A date picker combines a DateField and a Calendar popover to allow users to enter or select a date and time value.
 *
 * https://react-spectrum.adobe.com/react-aria/DatePicker.html
 */
const DatePicker = forwardRef(_DatePicker);

export { DatePicker, DateRangePicker };
export type { DatePickerProps, DateRangePickerProps };
