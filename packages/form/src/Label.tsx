import type { ComponentProps } from 'react';

import { cx } from 'classix';

import { RequiredAsterisk } from './RequiredAsterisk';
import styles from './styles/Form.module.css';

type LabelProps = ComponentProps<'label'> & {
	required?: boolean;
	optional?: boolean;
	disabled?: boolean;
	'data-test-id'?: string;
};

/**
 * @deprecated use `Label` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-forms-textfield--docs
 */
const Label = ({
	disabled,
	className,
	children,
	required = false,
	optional = false,
	'data-test-id': testId = 'label',
	...rest
}: LabelProps) => {
	const classes = cx(styles.label, className, disabled && styles.labelDisabled);

	return (
		<label {...rest} data-test-id={testId} className={classes}>
			{children}
			{optional && !required && <small className={styles.labelOptional}>(optional)</small>}
			{required && !optional && <RequiredAsterisk />}
		</label>
	);
};

export { Label };
export type { LabelProps };
