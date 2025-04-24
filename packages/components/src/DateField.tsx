import type { Ref } from 'react';
import type {
	DateFieldProps as AriaDateFieldProps,
	DateInputProps as AriaDateInputProps,
	DateSegmentProps as AriaDateSegmentProps,
	TimeFieldProps as AriaTimeFieldProps,
	ContextValue,
	DateValue,
	TimeValue,
} from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import {
	DateField as AriaDateField,
	DateInput as AriaDateInput,
	DateSegment as AriaDateSegment,
	TimeField as AriaTimeField,
	composeRenderProps,
} from 'react-aria-components';

import styles from './styles/DateField.module.css';
import { useLPContextProps } from './utils';

const dateFieldStyles = cva(styles.field);
const dateInputStyles = cva(styles.input);
const dateSegmentStyles = cva(styles.segment);

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

const DateFieldContext =
	createContext<ContextValue<DateFieldProps<DateValue>, HTMLDivElement>>(null);
const TimeFieldContext =
	createContext<ContextValue<TimeFieldProps<TimeValue>, HTMLDivElement>>(null);

/**
 * A date field allows users to enter and edit date and time values using a keyboard. Each part of a date value is displayed in an individually editable segment.
 *
 * https://react-spectrum.adobe.com/react-aria/DateField.html
 */
const DateField = <T extends DateValue>({ ref, ...props }: DateFieldProps<T>) => {
	[props, ref] = useLPContextProps(props, ref, DateFieldContext);
	return (
		<AriaDateField
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				dateFieldStyles({ ...renderProps, className }),
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
				dateInputStyles({ ...renderProps, className }),
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
				dateSegmentStyles({ ...renderProps, className }),
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
	[props, ref] = useLPContextProps(props, ref, TimeFieldContext);
	return (
		<AriaTimeField
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				dateFieldStyles({ ...renderProps, className }),
			)}
		/>
	);
};

export {
	DateField,
	DateFieldContext,
	DateInput,
	DateSegment,
	TimeField,
	TimeFieldContext,
	dateFieldStyles,
	dateInputStyles,
	dateSegmentStyles,
};
export type { DateFieldProps, DateInputProps, DateSegmentProps, TimeFieldProps };
