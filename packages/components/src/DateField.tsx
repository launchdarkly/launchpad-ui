import type { ForwardedRef } from 'react';
import type { DateFieldProps, DateInputProps, DateSegmentProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import {
	DateInput as AriaDateInput,
	DateSegment as AriaDateSegment,
	DateField,
} from 'react-aria-components';

import styles from './styles/DateField.module.css';

const input = cva(styles.input);
const segment = cva(styles.segment);

const _DateInput = ({ className, ...props }: DateInputProps, ref: ForwardedRef<HTMLDivElement>) => {
	return <AriaDateInput {...props} ref={ref} className={input({ className })} />;
};

/**
 * A calendar displays one or more date grids and allows users to select a single date.
 *
 * https://react-spectrum.adobe.com/react-aria/Calendar.html
 */
const DateInput = forwardRef(_DateInput);

const _DateSegment = (
	{ className, ...props }: DateSegmentProps,
	ref: ForwardedRef<HTMLDivElement>,
) => {
	return <AriaDateSegment {...props} ref={ref} className={segment({ className })} />;
};

/**
 * A calendar displays one or more date grids and allows users to select a single date.
 *
 * https://react-spectrum.adobe.com/react-aria/Calendar.html
 */
const DateSegment = forwardRef(_DateSegment);

export { DateField, DateInput, DateSegment };
export type { DateFieldProps, DateInputProps, DateSegmentProps };
