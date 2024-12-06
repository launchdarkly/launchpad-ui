import type { AriaButtonProps } from '@react-aria/button';
import type { AriaNumberFieldProps } from '@react-aria/numberfield';
import type { JSX } from 'react';

import { Icon } from '@launchpad-ui/icons';
import { useButton } from '@react-aria/button';
import { useLocale } from '@react-aria/i18n';
import { useNumberField as useReactAriaNumberField } from '@react-aria/numberfield';
import { useNumberFieldState } from '@react-stately/numberfield';
import { cx } from 'classix';
import { useRef } from 'react';

import styles from './styles/Form.module.css';
import { useObjectMemo } from './utils';

type UseNumberFieldProps = AriaNumberFieldProps & {
	className?: string;
	'data-test-id'?: string;
	id?: string;
	name?: string;
};

const defaultFormatOptions: Intl.NumberFormatOptions = {
	maximumFractionDigits: 6,
};

/**
 * @deprecated use `NumberField` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-forms-numberfield--docs
 */
const useNumberField = ({
	className,
	'data-test-id': testId = 'input',
	id,
	name,
	...otherProps
}: UseNumberFieldProps = {}): {
	fieldErrorProps: ReturnType<typeof useReactAriaNumberField>['errorMessageProps'];
	formHintProps: ReturnType<typeof useReactAriaNumberField>['descriptionProps'];
	labelProps: ReturnType<typeof useReactAriaNumberField>['labelProps'];
	renderNumberField: () => JSX.Element;
} => {
	// @react-aria's hooks have a state-updating effect somewhere that depends on "formatOptions",
	// so we need to memoize it to prevent an infinite render loop.
	const formatOptions = useObjectMemo({
		...defaultFormatOptions,
		...otherProps.formatOptions,
	});
	const { locale } = useLocale();
	const numberFieldState = useNumberFieldState({ ...otherProps, locale, formatOptions });
	const inputRef = useRef<HTMLInputElement>(null);
	const {
		descriptionProps: formHintProps,
		errorMessageProps: fieldErrorProps,
		labelProps,
		groupProps,
		inputProps,
		incrementButtonProps,
		decrementButtonProps,
	} = useReactAriaNumberField({ ...otherProps, formatOptions, id }, numberFieldState, inputRef);

	return {
		fieldErrorProps,
		formHintProps,
		labelProps,
		renderNumberField: () => (
			<div {...groupProps} className={styles.numberField}>
				<input
					{...inputProps}
					className={cx(styles.formInput, styles['numberField-input'])}
					data-test-id={testId}
					name={name}
					ref={inputRef}
				/>
				<div className={styles['numberField-stepperContainer']}>
					<Stepper {...incrementButtonProps}>
						<Icon name="chevron-up" />
					</Stepper>
					<Stepper {...decrementButtonProps}>
						<Icon name="chevron-down" />
					</Stepper>
				</div>
			</div>
		),
	};
};

const Stepper = (props: AriaButtonProps) => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const { buttonProps } = useButton(props, buttonRef);

	return (
		<button
			type="button"
			{...buttonProps}
			className={styles['numberField-stepper']}
			ref={buttonRef}
		>
			{props.children}
		</button>
	);
};

export { useNumberField };
export type { UseNumberFieldProps };
