import type { InputHTMLAttributes } from 'react';

import { cx } from 'classix';
import { forwardRef } from 'react';

import styles from './styles/Form.module.css';
import { createFieldErrorId } from './utils';

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  suffix?: string;
  tiny?: boolean;
  overrideWidth?: string;
  'data-test-id'?: string;
};

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
      ...rest
    },
    ref
  ) => {
    const classes = overrideWidth
      ? className
      : cx(styles.formInput, tiny && styles.formInputTiny, className);

    if (suffix) {
      return (
        <div className={styles.suffixContainer}>
          <input
            {...rest}
            type={type}
            data-test-id={testId}
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
        {...rest}
        type={type}
        className={classes}
        readOnly={readOnly}
        tabIndex={tabIndex}
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
  }
);

TextField.displayName = 'TextField';

export { TextField };
export type { TextFieldProps };
