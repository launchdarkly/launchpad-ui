import type { ComponentProps } from 'react';

import { cx } from 'classix';
import { forwardRef } from 'react';

import styles from './styles/Form.module.css';

type SelectFieldProps = ComponentProps<'select'> & {
	'data-test-id'?: string;
};

const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
	({ className, children, 'data-test-id': testId = 'select', ...rest }: SelectFieldProps, ref) => {
		const classes = cx(styles.formInput, className);

		return (
			<select {...rest} data-test-id={testId} className={classes} ref={ref}>
				{children}
			</select>
		);
	},
);

SelectField.displayName = 'SelectField';

export { SelectField };
export type { SelectFieldProps };
