import type { ComponentProps } from 'react';

import { addLaunchPadAttribution } from '@launchpad-ui/attribution';
import { forwardRef } from 'react';

import { Label } from './Label';
import styles from './styles/Form.module.css';

type CheckboxProps = ComponentProps<'input'> & {
	/**
	 * The className to pass into the Checkbox's Label component
	 */
	labelClassName?: string;
	'data-test-id'?: string;
};

/**
 * @deprecated use `Checkbox` or `CheckboxGroup` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-forms-checkbox--docs
 */
const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	(
		{
			'aria-label': ariaLabel,
			'aria-labelledby': ariaLabelledby,
			children,
			disabled,
			checked,
			labelClassName,
			'data-test-id': testId = 'checkbox',
			...rest
		},
		ref,
	) => {
		const hasAriaLabel = ariaLabel !== undefined || ariaLabelledby !== undefined;
		if (!children && !hasAriaLabel) {
			console.warn(
				'If you do not provide children, you must specify an aria-label for accessibility',
			);
		}

		return (
			<Label {...addLaunchPadAttribution('Checkbox')} className={labelClassName}>
				<input
					{...rest}
					ref={ref}
					checked={checked}
					aria-checked={checked ? 'true' : 'false'}
					aria-label={ariaLabel}
					aria-labelledby={ariaLabelledby}
					className={styles.checkbox}
					disabled={disabled}
					type="checkbox"
					data-test-id={testId}
				/>{' '}
				{disabled ? <span className={styles.labelDisabled}>{children}</span> : children}
			</Label>
		);
	},
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };
export type { CheckboxProps };
