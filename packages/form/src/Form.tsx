import type { ComponentProps } from 'react';

import { addLaunchPadAttribution } from '@launchpad-ui/attribution';
import { cx } from 'classix';

import styles from './styles/Form.module.css';

type FormProps = ComponentProps<'form'> & {
	inline?: boolean;
	// Increases margin between form fields to make room for error messages.
	// This prevents the form from shifting when rendering a field error.
	// This may be desired when the form contains external links that will
	// shift while clicking if the form shifts from validation.
	hasIncreasedErrorMargin?: boolean;
	'data-test-id'?: string;
};

/**
 * @deprecated use `Form` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-forms-form--docs
 */
const Form = (props: FormProps) => {
	const {
		className,
		inline,
		children,
		hasIncreasedErrorMargin,
		'data-test-id': testId = 'form',
		...rest
	} = props;

	const classes = cx(
		styles.form,
		className,
		inline && styles.formInline,
		!!hasIncreasedErrorMargin && styles.formIncreasedErrorMargin,
	);

	return (
		<form {...addLaunchPadAttribution('Form')} {...rest} data-test-id={testId} className={classes}>
			{children}
		</form>
	);
};

export { Form };
export type { FormProps };
