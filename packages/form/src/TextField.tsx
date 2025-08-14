import type { ComponentProps } from 'react';

import { addLaunchPadAttribution } from '@launchpad-ui/attribution';
import { cx } from 'classix';
import { forwardRef } from 'react';

import styles from './styles/Form.module.css';
import { createFieldErrorId } from './utils';

type TextFieldProps = ComponentProps<'input'> & {
	suffix?: string;
	tiny?: boolean;
	overrideWidth?: string;
	'data-test-id'?: string;
};

/**
 * @deprecated use `TextField` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-forms-textfield--docs
 */
const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
	(
		{
			className,
			type = 'text',
			tiny = false,
			readOnly,
			tabIndex = 0,
			suffix,
			overrideWidth,
			'data-test-id': testId = 'text-field',
			autoComplete,
			...rest
		},
		ref,
	) => {
		const classes = overrideWidth
			? className
			: cx(styles.formInput, tiny && styles.formInputTiny, className);

		const disablePasswordManagers = autoComplete === 'off';

		if (suffix) {
			return (
				<div className={styles.suffixContainer}>
					<input
						{...addLaunchPadAttribution('TextField')}
						{...rest}
						type={type}
						data-test-id={testId}
						autoComplete={autoComplete}
						className={classes}
						readOnly={readOnly}
						ref={ref}
						aria-describedby={rest['aria-describedby'] || createFieldErrorId(rest.id)}
					/>
					<label className={styles.suffix} htmlFor={rest.id}>
						{suffix}
					</label>
				</div>
			);
		}

		return (
			<input
				{...addLaunchPadAttribution('TextField')}
				{...rest}
				data-1p-ignore={disablePasswordManagers} // "data-1p-ignore" is added to prevent 1Password from injecting a password autofill icon
				type={type}
				className={classes}
				readOnly={readOnly}
				tabIndex={tabIndex}
				autoComplete={autoComplete}
				ref={ref}
				data-test-id={testId}
				style={
					overrideWidth
						? {
								width: overrideWidth,
							}
						: undefined
				}
				aria-describedby={rest['aria-describedby'] || createFieldErrorId(rest.id)}
			/>
		);
	},
);

TextField.displayName = 'TextField';

export { TextField };
export type { TextFieldProps };
