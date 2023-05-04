import type { AriaButtonProps } from '@react-aria/button';
import type { AriaNumberFieldProps } from '@react-aria/numberfield';
import type { InputHTMLAttributes } from 'react';

import { ExpandLess, ExpandMore } from '@launchpad-ui/icons';
import { useButton } from '@react-aria/button';
import { useLocale } from '@react-aria/i18n';
import { useNumberField } from '@react-aria/numberfield';
import { mergeRefs } from '@react-aria/utils';
import { useNumberFieldState } from '@react-stately/numberfield';
import { cx } from 'classix';
import { useMemo, useRef, forwardRef } from 'react';

import { Label } from './Label';
import styles from './styles/Form.module.css';

type NumberFieldProps = InputHTMLAttributes<HTMLInputElement> &
  AriaNumberFieldProps & {
    className?: string;
    label: string;
    labelClassName?: string;
    labelTestId?: string;
    inputClassName?: string;
    inputTestId?: string;
  };

const defaultFormatOptions: Intl.NumberFormatOptions = {
  maximumFractionDigits: 6,
};

const NumberField = forwardRef<HTMLInputElement, NumberFieldProps>(
  (props: NumberFieldProps, forwardedRef) => {
    const {
      className: rootClassName,
      label,
      labelClassName,
      labelTestId,
      inputClassName,
      inputTestId = 'input',
      ...otherProps
    } = props;

    // React Aria's hooks have a state-updating effect somewhere that depends on "formatOptions", so we need to memoize it.
    const formatOptions = useObjectMemo({
      ...defaultFormatOptions,
      ...props.formatOptions,
    });

    const { locale } = useLocale();
    const reactAriaProps = { ...otherProps, locale, formatOptions };

    const state = useNumberFieldState(reactAriaProps);
    const inputRef = useRef<HTMLInputElement>(null);
    const { labelProps, groupProps, inputProps, incrementButtonProps, decrementButtonProps } =
      useNumberField(reactAriaProps, state, inputRef);

    return (
      <div className={cx(styles.numberField, rootClassName)}>
        <Label
          {...labelProps}
          htmlFor={inputProps.id}
          className={labelClassName}
          data-test-id={labelTestId}
        >
          {label}
        </Label>
        <div {...groupProps} className={styles.group}>
          <input
            {...inputProps}
            className={cx(styles.formInput, styles.numberInput, inputClassName)}
            data-test-id={inputTestId}
            ref={mergeRefs(inputRef, forwardedRef)}
          />
          <div className={styles.stepperContainer}>
            <Stepper {...incrementButtonProps}>
              <ExpandLess />
            </Stepper>
            <Stepper {...decrementButtonProps}>
              <ExpandMore />
            </Stepper>
          </div>
        </div>
      </div>
    );
  }
);

const Stepper = (props: AriaButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, buttonRef);

  return (
    <button {...buttonProps} className={styles.stepper} ref={buttonRef}>
      {props.children}
    </button>
  );
};

function hasChanged<T extends object>(obj1: T, obj2: T): boolean {
  return (
    Object.keys(obj1).length !== Object.keys(obj2).length ||
    Object.keys(obj1).some((k) => {
      const key = k as keyof T;
      return typeof obj1[key] === 'object' && typeof obj2[key] === 'object'
        ? hasChanged(obj1[key] as T, obj2[key] as T)
        : obj1[key] !== obj2[key];
    })
  );
}

function useObjectMemo<T extends object>(obj: T) {
  const objRef = useRef(obj);

  return useMemo(() => {
    if (hasChanged(obj, objRef.current)) {
      objRef.current = obj;
    }

    return objRef.current;
  }, [obj]);
}

NumberField.displayName = 'NumberField';

export { NumberField };
export type { NumberFieldProps };
