import type { ComponentProps } from 'react';

import { cx } from 'classix';

import styles from './styles/Form.module.css';

type FormGroupProps = ComponentProps<'fieldset'> & {
	name?: string | string[];
	ignoreValidation?: boolean;
	isInvalid?: boolean;
	'data-test-id'?: string;
};

const FormGroup = (props: FormGroupProps) => {
	const {
		className,
		name,
		ignoreValidation,
		isInvalid,
		children,
		'data-test-id': testId = 'form-group',
		...rest
	} = props;

	const classes = cx(
		styles.formGroup,
		className,
		!ignoreValidation && isInvalid && styles.isInvalid,
	);

	return (
		<fieldset className={classes} data-test-id={testId} {...rest}>
			{children}
		</fieldset>
	);
};

export { FormGroup };
export type { FormGroupProps };
