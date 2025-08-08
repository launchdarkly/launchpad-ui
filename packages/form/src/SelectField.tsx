import type { ComponentProps } from 'react';

import { addLaunchPadAttribution } from '@launchpad-ui/attribution';
import { cx } from 'classix';
import { forwardRef } from 'react';

import styles from './styles/Form.module.css';

type SelectFieldProps = ComponentProps<'select'> & {
	'data-test-id'?: string;
};

/**
 * @deprecated use `Select` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-pickers-select--docs
 */
const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
	({ className, children, 'data-test-id': testId = 'select', ...rest }: SelectFieldProps, ref) => {
		const classes = cx(styles.formInput, className);

		return (
			<select
				{...addLaunchPadAttribution('SelectField')}
				{...rest}
				data-test-id={testId}
				className={classes}
				ref={ref}
			>
				{children}
			</select>
		);
	},
);

SelectField.displayName = 'SelectField';

export { SelectField };
export type { SelectFieldProps };
