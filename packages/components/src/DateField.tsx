import type { ForwardedRef } from 'react';
import type {
	DateFieldProps,
	DateInputProps,
	DateSegmentProps,
	DateValue,
	TimeFieldProps,
	TimeValue,
} from 'react-aria-components';

import { cva, cx } from 'class-variance-authority';
import { forwardRef } from 'react';
import {
	DateField as AriaDateField,
	DateInput as AriaDateInput,
	DateSegment as AriaDateSegment,
	TimeField as AriaTimeField,
	composeRenderProps,
} from 'react-aria-components';

import { input } from './Input';
import styles from './styles/DateField.module.css';

const field = cva(styles.field);
const dateInput = cva(styles.input);
const segment = cva(styles.segment);

const _DateField = <T extends DateValue>(
	props: DateFieldProps<T>,
	ref: ForwardedRef<HTMLDivElement>,
) => {
	return (
		<AriaDateField
			shouldForceLeadingZeros={true}
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				field({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A date field allows users to enter and edit date and time values using a keyboard. Each part of a date value is displayed in an individually editable segment.
 *
 * https://react-spectrum.adobe.com/react-aria/DateField.html
 */
const DateField = forwardRef(_DateField);

const _DateInput = (props: DateInputProps, ref: ForwardedRef<HTMLDivElement>) => {
	return (
		<AriaDateInput
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				cx(input(), dateInput({ ...renderProps, className })),
			)}
		/>
	);
};

/**
 * A date input groups the editable date segments within a date field.
 *
 * https://react-spectrum.adobe.com/react-aria/DateField.html
 */
const DateInput = forwardRef(_DateInput);

const _DateSegment = (props: DateSegmentProps, ref: ForwardedRef<HTMLDivElement>) => {
	return (
		<AriaDateSegment
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				segment({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A date segment displays an individual unit of a date and time, and allows users to edit the value by typing or using the arrow keys to increment and decrement.
 *
 * https://react-spectrum.adobe.com/react-aria/DateField.html
 */
const DateSegment = forwardRef(_DateSegment);

const _TimeField = <T extends TimeValue>(
	props: TimeFieldProps<T>,
	ref: ForwardedRef<HTMLDivElement>,
) => {
	return (
		<AriaTimeField
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				field({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A time field allows users to enter and edit time values using a keyboard. Each part of a time value is displayed in an individually editable segment.
 *
 * https://react-spectrum.adobe.com/react-aria/TimeField.html
 */
const TimeField = forwardRef(_TimeField);

export { DateField, DateInput, DateSegment, TimeField };
export type { DateFieldProps, DateInputProps, DateSegmentProps, TimeFieldProps };
