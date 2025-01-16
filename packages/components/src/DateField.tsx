import type { Ref } from 'react';
import type {
	DateFieldProps as AriaDateFieldProps,
	DateInputProps as AriaDateInputProps,
	DateSegmentProps as AriaDateSegmentProps,
	TimeFieldProps as AriaTimeFieldProps,
	DateValue,
	TimeValue,
} from 'react-aria-components';

import { cva, cx } from 'class-variance-authority';
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

interface DateFieldProps<T extends DateValue> extends AriaDateFieldProps<T> {
	ref?: Ref<HTMLDivElement>;
}

interface DateInputProps extends AriaDateInputProps {
	ref?: Ref<HTMLDivElement>;
}

interface DateSegmentProps extends AriaDateSegmentProps {
	ref?: Ref<HTMLDivElement>;
}

interface TimeFieldProps<T extends TimeValue> extends AriaTimeFieldProps<T> {
	ref?: Ref<HTMLDivElement>;
}

/**
 * A date field allows users to enter and edit date and time values using a keyboard. Each part of a date value is displayed in an individually editable segment.
 *
 * https://react-spectrum.adobe.com/react-aria/DateField.html
 */
const DateField = <T extends DateValue>({ ref, ...props }: DateFieldProps<T>) => {
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
 * A date input groups the editable date segments within a date field.
 *
 * https://react-spectrum.adobe.com/react-aria/DateField.html
 */
const DateInput = ({ ref, ...props }: DateInputProps) => {
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
 * A date segment displays an individual unit of a date and time, and allows users to edit the value by typing or using the arrow keys to increment and decrement.
 *
 * https://react-spectrum.adobe.com/react-aria/DateField.html
 */
const DateSegment = ({ ref, ...props }: DateSegmentProps) => {
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
 * A time field allows users to enter and edit time values using a keyboard. Each part of a time value is displayed in an individually editable segment.
 *
 * https://react-spectrum.adobe.com/react-aria/TimeField.html
 */
const TimeField = <T extends TimeValue>({ ref, ...props }: TimeFieldProps<T>) => {
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

export { DateField, DateInput, DateSegment, TimeField };
export type { DateFieldProps, DateInputProps, DateSegmentProps, TimeFieldProps };
