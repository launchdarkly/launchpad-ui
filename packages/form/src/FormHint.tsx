import type { ComponentProps } from 'react';

import { cx } from 'classix';

import styles from './styles/Form.module.css';

type FormHintProps = ComponentProps<'div'> & {
	'data-test-id'?: string;
};

/**
 * @deprecated use `Text` with `[slot='description']` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-forms-textfield--docs
 */
const FormHint = ({
	className,
	children,
	'data-test-id': testId = 'form-hint',
	...rest
}: FormHintProps) => {
	const classes = cx(styles.hint, className);

	return (
		<div {...rest} data-test-id={testId} className={classes}>
			{children}
		</div>
	);
};

export { FormHint };
export type { FormHintProps };
