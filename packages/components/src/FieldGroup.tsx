import type { ContextType, FieldsetHTMLAttributes, RefObject } from 'react';

import { cva } from 'class-variance-authority';
import { useId } from 'react';
import {
	ComboBoxContext,
	DateFieldContext,
	DatePickerContext,
	DateRangePickerContext,
	NumberFieldContext,
	Provider,
	SearchFieldContext,
	SelectContext,
	TextFieldContext,
	TimeFieldContext,
} from 'react-aria-components';

import errorStyles from './styles/FieldError.module.css';
import styles from './styles/FieldGroup.module.css';

interface FieldGroupProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
	title?: string;
	errorMessage?: string;
	isDisabled?: boolean;
	ref?: RefObject<HTMLFieldSetElement | null>;
}

const group = cva(styles.group);

/**
 * A field group represents a set of related form elements in a form.
 */
const FieldGroup = ({
	title,
	children,
	errorMessage,
	isDisabled,
	className,
	ref,
	...props
}: FieldGroupProps) => {
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
					[DateFieldContext, state],
					[DatePickerContext, state],
					[DateRangePickerContext, state],
					[NumberFieldContext, state],
					[SearchFieldContext, state],
					[SelectContext, state],
					[TextFieldContext, state],
					[TimeFieldContext, state],
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

export { FieldGroup };
export type { FieldGroupProps };
