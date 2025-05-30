import type { CSSProperties, Ref } from 'react';
import type {
	DatePickerProps as AriaDatePickerProps,
	DateRangePickerProps as AriaDateRangePickerProps,
	ContextValue,
	DateValue,
} from 'react-aria-components';

import { Icon } from '@launchpad-ui/icons';
import { useResizeObserver } from '@react-aria/utils';
import { cva, cx } from 'class-variance-authority';
import { createContext, useCallback, useContext, useRef, useState } from 'react';
import { useLocale } from 'react-aria';
import {
	DatePicker as AriaDatePicker,
	DateRangePicker as AriaDateRangePicker,
	composeRenderProps,
	DatePickerStateContext,
	DateRangePickerStateContext,
	FormContext,
	PopoverContext,
	Provider,
	Text,
	useSlottedContext,
} from 'react-aria-components';

import { ButtonContext } from './Button';
import baseStyles from './styles/base.module.css';
import styles from './styles/DatePicker.module.css';
import { useLPContextProps } from './utils';

const datePickerStyles = cva(styles.picker);

interface DatePickerProps<T extends DateValue> extends AriaDatePickerProps<T> {
	ref?: Ref<HTMLDivElement>;
}

interface DateRangePickerProps<T extends DateValue> extends AriaDateRangePickerProps<T> {
	ref?: Ref<HTMLDivElement>;
}

const DatePickerContext =
	createContext<ContextValue<DatePickerProps<DateValue>, HTMLDivElement>>(null);
const DateRangePickerContext =
	createContext<ContextValue<DateRangePickerProps<DateValue>, HTMLDivElement>>(null);

/**
 * A date picker combines a DateField and a Calendar popover to allow users to enter or select a date and time value.
 *
 * https://react-spectrum.adobe.com/react-aria/DatePicker.html
 */
const DatePicker = <T extends DateValue>({ ref, ...props }: DatePickerProps<T>) => {
	[props, ref] = useLPContextProps(props, ref, DatePickerContext);
	const formContext = useSlottedContext(FormContext);
	const buttonRef = useRef<HTMLButtonElement>(null);

	// https://github.com/adobe/react-spectrum/blob/main/packages/react-aria-components/src/DatePicker.tsx#L108-L118
	const [buttonWidth, setButtonWidth] = useState<string | null>(null);
	const onResize = useCallback(() => {
		if (buttonRef.current) {
			setButtonWidth(`${buttonRef.current.offsetWidth}px`);
		}
	}, []);

	useResizeObserver({
		ref: buttonRef,
		onResize: onResize,
	});

	return (
		<AriaDatePicker
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				datePickerStyles({ ...renderProps, className }),
			)}
		>
			{composeRenderProps(props.children, (children, { isDisabled, isInvalid }) =>
				formContext ? (
					children
				) : (
					<Provider
						values={[
							[
								ButtonContext,
								{
									ref: buttonRef,
									isDisabled,
									className: cx(isInvalid && baseStyles.invalid),
									variant: 'picker',
									size: null,
								},
							],
							[
								PopoverContext,
								{
									trigger: 'DatePicker',
									triggerRef: buttonRef,
									placement: 'bottom start',
									style: { '--trigger-width': buttonWidth } as CSSProperties,
								},
							],
						]}
					>
						{children}
					</Provider>
				),
			)}
		</AriaDatePicker>
	);
};

/**
 * A date range picker combines two DateFields and a RangeCalendar popover to allow users to enter or select a date and time range.
 *
 * https://react-spectrum.adobe.com/react-aria/DateRangePicker.html
 */
const DateRangePicker = <T extends DateValue>({ ref, ...props }: DateRangePickerProps<T>) => {
	[props, ref] = useLPContextProps(props, ref, DateRangePickerContext);
	const formContext = useSlottedContext(FormContext);
	const buttonRef = useRef<HTMLButtonElement>(null);

	// https://github.com/adobe/react-spectrum/blob/main/packages/react-aria-components/src/DatePicker.tsx#L212-L222
	const [buttonWidth, setButtonWidth] = useState<string | null>(null);
	const onResize = useCallback(() => {
		if (buttonRef.current) {
			setButtonWidth(`${buttonRef.current.offsetWidth}px`);
		}
	}, []);

	useResizeObserver({
		ref: buttonRef,
		onResize: onResize,
	});

	return (
		<AriaDateRangePicker
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				datePickerStyles({ ...renderProps, className }),
			)}
		>
			{composeRenderProps(props.children, (children, { isDisabled, isInvalid }) =>
				formContext ? (
					children
				) : (
					<Provider
						values={[
							[
								ButtonContext,
								{
									ref: buttonRef,
									isDisabled,
									className: cx(isInvalid && baseStyles.invalid),
									variant: 'picker',
									size: null,
								},
							],
							[
								PopoverContext,
								{
									trigger: 'DateRangePicker',
									triggerRef: buttonRef,
									placement: 'bottom start',
									style: { '--trigger-width': buttonWidth } as CSSProperties,
								},
							],
						]}
					>
						{children}
					</Provider>
				),
			)}
		</AriaDateRangePicker>
	);
};

const DatePickerValue = () => {
	const state = useContext(DatePickerStateContext);
	const { locale } = useLocale();
	const date = state?.formatValue(locale, { month: 'short' });

	return <Text className={styles.value}>{date}</Text>;
};

const DateRangePickerValue = () => {
	const state = useContext(DateRangePickerStateContext);
	const { locale } = useLocale();
	const date = state?.formatValue(locale, { month: 'short' });

	return date?.start === date?.end ? (
		<Text className={styles.value}>{date?.end}</Text>
	) : (
		<>
			<Text>{date?.start}</Text>
			<Icon name="arrow-right-thin" size="small" />
			<Text className={styles.value}>{date?.end}</Text>
		</>
	);
};

export {
	DatePicker,
	DatePickerContext,
	DateRangePicker,
	DatePickerValue,
	DateRangePickerContext,
	DateRangePickerValue,
	datePickerStyles,
};
export type { DatePickerProps, DateRangePickerProps };
