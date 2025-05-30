import type { ComponentProps } from 'react';

import { cx } from 'classix';

import styles from './styles/Form.module.css';

type FormGroupProps = ComponentProps<'fieldset'> & {
	name?: string | string[];
	ignoreValidation?: boolean;
	isInvalid?: boolean;
	'data-test-id'?: string;
};

/**
 * @deprecated use `FieldGroup` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-forms-fieldgroup--docs
 */
const FormGroup = (props: FormGroupProps) => {
	const {
		className,
		// biome-ignore lint/correctness/noUnusedVariables: ignore
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
