import type { ContextType, FieldsetHTMLAttributes, ForwardedRef } from 'react';

import { cva } from 'class-variance-authority';
import { forwardRef, useId } from 'react';
import {
	ComboBoxContext,
	NumberFieldContext,
	Provider,
	SearchFieldContext,
	SelectContext,
	TextFieldContext,
} from 'react-aria-components';

import errorStyles from './styles/FieldError.module.css';
import styles from './styles/FieldGroup.module.css';

interface FieldGroupProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
	title?: string;
	errorMessage?: string;
	isDisabled?: boolean;
}

const group = cva(styles.group);

const _FieldGroup = (
	{ title, children, errorMessage, isDisabled, className, ...props }: FieldGroupProps,
	ref: ForwardedRef<HTMLFieldSetElement>,
) => {
	const errorId = useId();
	const state = {
		isInvalid: !!errorMessage,
		'aria-describedby': errorMessage ? errorId : undefined,
		isDisabled,
	} satisfies ContextType<typeof TextFieldContext>;
	return (
		<fieldset {...props} ref={ref} className={group({ className })}>
			<legend className={styles.legend}>{title}</legend>
			<Provider
				values={[
					[ComboBoxContext, state],
					[NumberFieldContext, state],
					[SearchFieldContext, state],
					[SelectContext, state],
					[TextFieldContext, state],
				]}
			>
				{children}
			</Provider>
			{errorMessage && (
				<span id={errorId} className={errorStyles.error}>
					{errorMessage}
				</span>
			)}
		</fieldset>
	);
};

/**
 * A field group represents a set of related form elements in a form.
 */
const FieldGroup = forwardRef(_FieldGroup);

export { FieldGroup };
export type { FieldGroupProps };
