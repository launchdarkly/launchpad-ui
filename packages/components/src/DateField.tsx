import type { ForwardedRef } from 'react';
import type {
	DateFieldProps,
	DateInputProps,
	DateSegmentProps,
	DateValue,
} from 'react-aria-components';

import { cva, cx } from 'class-variance-authority';
import { forwardRef } from 'react';
import {
	DateField as AriaDateField,
	DateInput as AriaDateInput,
	DateSegment as AriaDateSegment,
} from 'react-aria-components';

import { input } from './Input';
import styles from './styles/DateField.module.css';

const field = cva(styles.field);
const dateInput = cva(styles.input);
const segment = cva(styles.segment);

const _DateField = <T extends DateValue>(
	{ className, ...props }: DateFieldProps<T>,
	ref: ForwardedRef<HTMLDivElement>,
) => {
	return <AriaDateField {...props} ref={ref} className={field({ className })} />;
};

/**
 * A date field allows users to enter and edit date and time values using a keyboard. Each part of a date value is displayed in an individually editable segment.
 *
 * https://react-spectrum.adobe.com/react-aria/DateField.html
 */
const DateField = forwardRef(_DateField);

const _DateInput = ({ className, ...props }: DateInputProps, ref: ForwardedRef<HTMLDivElement>) => {
	return <AriaDateInput {...props} ref={ref} className={cx(input(), dateInput({ className }))} />;
};

/**
 * A date input groups the editable date segments within a date field.
 *
 * https://react-spectrum.adobe.com/react-aria/DateField.html
 */
const DateInput = forwardRef(_DateInput);

const _DateSegment = (
	{ className, ...props }: DateSegmentProps,
	ref: ForwardedRef<HTMLDivElement>,
) => {
	return <AriaDateSegment {...props} ref={ref} className={segment({ className })} />;
};

/**
 * A date segment displays an individual unit of a date and time, and allows users to edit the value by typing or using the arrow keys to increment and decrement.
 *
 * https://react-spectrum.adobe.com/react-aria/DateField.html
 */
const DateSegment = forwardRef(_DateSegment);

export { DateField, DateInput, DateSegment };
export type { DateFieldProps, DateInputProps, DateSegmentProps };
