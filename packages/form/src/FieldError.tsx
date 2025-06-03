import type { ComponentProps } from 'react';
import type { FieldPath } from './utils';

import { Icon } from '@launchpad-ui/icons';
import { cx } from 'classix';

import styles from './styles/Form.module.css';
import { createFieldErrorId } from './utils';

type FieldErrorProps = ComponentProps<'span'> & {
	name: FieldPath;
	errorMessage?: string;
	'data-test-id'?: string;
};

/**
 * @deprecated use `FieldError` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-forms-textfield--docs
 */
const FieldError = ({
	name,
	errorMessage,
	className,
	'data-test-id': testId = 'field-error',
	...rest
}: FieldErrorProps) => {
	if (!errorMessage) {
		return null;
	}

	return (
		// biome-ignore lint/a11y/useAriaPropsSupportedByRole: ignore
		<span
			{...rest}
			className={cx(styles.fieldError, className)}
			aria-live="polite"
			data-test-id={testId}
			aria-label="Error"
			id={createFieldErrorId(name)}
		>
			<Icon name="alert-rhombus" size="small" /> {errorMessage}
		</span>
	);
};

export { FieldError };
export type { FieldErrorProps };
