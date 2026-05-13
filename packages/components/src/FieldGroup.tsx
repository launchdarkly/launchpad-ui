import type { ContextType, FieldsetHTMLAttributes, Ref } from 'react';

import { cva } from 'class-variance-authority';
import { useId } from 'react';
import { ComboBoxContext } from 'react-aria-components/ComboBox';
import { DateFieldContext } from 'react-aria-components/DateField';
import { DatePickerContext } from 'react-aria-components/DatePicker';
import { DateRangePickerContext } from 'react-aria-components/DateRangePicker';
import { NumberFieldContext } from 'react-aria-components/NumberField';
import { SearchFieldContext } from 'react-aria-components/SearchField';
import { SelectContext } from 'react-aria-components/Select';
import { Provider } from 'react-aria-components/slots';
import { TextFieldContext } from 'react-aria-components/TextField';
import { TimeFieldContext } from 'react-aria-components/TimeField';

import errorStyles from './styles/FieldError.module.css';
import styles from './styles/FieldGroup.module.css';

interface FieldGroupProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
	title?: string;
	errorMessage?: string;
	isDisabled?: boolean;
	ref?: Ref<HTMLFieldSetElement>;
}

const fieldGroupStyles = cva(styles.group);

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
		<fieldset {...props} ref={ref} className={fieldGroupStyles({ className })}>
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

export { FieldGroup, fieldGroupStyles };
export type { FieldGroupProps };
