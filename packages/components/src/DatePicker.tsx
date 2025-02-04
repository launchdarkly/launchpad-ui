import type { Ref } from 'react';
import type {
	DatePickerProps as AriaDatePickerProps,
	DateRangePickerProps as AriaDateRangePickerProps,
	DateValue,
	SlotProps,
} from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { useContext } from 'react';
import { useLocale } from 'react-aria';
import {
	DatePicker as AriaDatePicker,
	DateRangePicker as AriaDateRangePicker,
	DatePickerStateContext,
	DateRangePickerStateContext,
	Text,
	composeRenderProps,
} from 'react-aria-components';

import styles from './styles/DatePicker.module.css';

const picker = cva(styles.picker);

interface DatePickerProps<T extends DateValue> extends AriaDatePickerProps<T> {
	ref?: Ref<HTMLDivElement>;
}

interface DateRangePickerProps<T extends DateValue> extends AriaDateRangePickerProps<T> {
	ref?: Ref<HTMLDivElement>;
}

/**
 * A date picker combines a DateField and a Calendar popover to allow users to enter or select a date and time value.
 *
 * https://react-spectrum.adobe.com/react-aria/DatePicker.html
 */
const DatePicker = <T extends DateValue>({ ref, ...props }: DatePickerProps<T>) => {
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
 * A date range picker combines two DateFields and a RangeCalendar popover to allow users to enter or select a date and time range.
 *
 * https://react-spectrum.adobe.com/react-aria/DateRangePicker.html
 */
const DateRangePicker = <T extends DateValue>({ ref, ...props }: DateRangePickerProps<T>) => {
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

const DatePickerValue = () => {
	const state = useContext(DatePickerStateContext);
	const { locale } = useLocale();
	const date = state?.formatValue(locale, { month: 'short' });

	return (
		/* @ts-expect-error unset slot */
		<Text slot={null} className={styles.value}>
			{date}
		</Text>
	);
};

const DateRangePickerValue = ({ slot }: SlotProps) => {
	const state = useContext(DateRangePickerStateContext);
	const { locale } = useLocale();
	const date = state?.formatValue(locale, { month: 'short' });

	return (
		/* @ts-expect-error unset slot */
		<Text slot={null} className={slot === 'end' ? styles.value : undefined}>
			{date?.[slot as keyof typeof date]}
		</Text>
	);
};

export { DatePicker, DateRangePicker, DatePickerValue, DateRangePickerValue };
export type { DatePickerProps, DateRangePickerProps };
