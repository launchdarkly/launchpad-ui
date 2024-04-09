import type { ComponentProps } from 'react';

import { cx } from 'classix';

import styles from './styles/Form.module.css';

type FieldSetProps = ComponentProps<'fieldset'> & {
	'data-test-id'?: string;
};

/**
 * @deprecated use `FieldGroup` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-forms-fieldgroup--docs
 */
const FieldSet = ({
	children,
	className,
	'data-test-id': testId = 'field-set',
	...rest
}: FieldSetProps) => {
	const classes = cx(styles.fieldSet, className);

	return (
		<fieldset data-test-id={testId} className={classes} {...rest}>
			{children}
		</fieldset>
	);
};

export { FieldSet };
export type { FieldSetProps };
