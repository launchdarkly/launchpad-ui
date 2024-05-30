import type { ForwardedRef } from 'react';
import type { DateFieldProps, DateInputProps, DateSegmentProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { DateInput as AriaDateInput, DateField, DateSegment } from 'react-aria-components';

import styles from './styles/DateField.module.css';

const input = cva(styles.input);

const _DateInput = ({ className, ...props }: DateInputProps, ref: ForwardedRef<HTMLDivElement>) => {
	return <AriaDateInput {...props} ref={ref} className={input({ className })} />;
};

/**
 * A calendar displays one or more date grids and allows users to select a single date.
 *
 * https://react-spectrum.adobe.com/react-aria/Calendar.html
 */
const DateInput = forwardRef(_DateInput);

export { DateField, DateInput, DateSegment };
export type { DateFieldProps, DateInputProps, DateSegmentProps };
