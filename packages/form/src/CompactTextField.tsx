import type { FocusEvent } from 'react';
import type { TextFieldProps } from './TextField';

import { cx } from 'classix';
import { forwardRef, useState } from 'react';

import { Label } from './Label';
import styles from './styles/Form.module.css';
import { TextField } from './TextField';

type CompactTextFieldProps = TextFieldProps & {
	label: string;
	needsErrorFeedback?: boolean;
};

/**
 * @deprecated use `TextField` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-forms-textfield--docs
 */
const CompactTextField = forwardRef<HTMLInputElement, CompactTextFieldProps>(
	(
		{
			className,
			id,
			label,
			needsErrorFeedback,
			value,
			onFocus,
			onBlur,
			'data-test-id': testId = 'compact-text-field',
			...rest
		},
		ref,
	) => {
		const [isActive, setIsActive] = useState(
			(typeof value === 'boolean' || value ? value.toString() : '').trim().length !== 0,
		);

		const isActiveState = isActive || needsErrorFeedback;

		const classes = cx(styles.compactTextField, className, isActiveState && styles.isActive);

		const placeholder = isActiveState ? '' : label;

		const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
			setIsActive(true);
			if (onFocus) {
				onFocus(event);
			}
		};

		const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
			const value = event.target.value || '';
			setIsActive(value.trim().length !== 0);
			if (onBlur) {
				onBlur(event);
			}
		};

		return (
			<div className={classes} data-test-id={testId}>
				<Label htmlFor={id}>{label}</Label>
				<TextField
					{...rest}
					id={id}
					placeholder={placeholder}
					value={value}
					ref={ref}
					onFocus={handleFocus}
					onBlur={handleBlur}
				/>
			</div>
		);
	},
);

CompactTextField.displayName = 'CompactTextField';

export { CompactTextField };
export type { CompactTextFieldProps };
