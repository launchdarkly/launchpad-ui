import type { InputHTMLAttributes } from 'react';

import { cx } from 'classix';
import { forwardRef } from 'react';

import './styles/FormInput.css';
import { createFieldErrorId } from './utils';

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  suffix?: string;
  testId?: string;
  tiny?: boolean;
  overrideWidth?: string;
};

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      type = 'text',
      tiny = false,
      readOnly,
      tabIndex = 0,
      testId,
      suffix,
      overrideWidth,
      ...rest
    },
    ref
  ) => {
    const classes = overrideWidth
      ? className
      : cx('FormInput', `FormInput-${type}`, className, {
          'FormInput--tiny': tiny,
        });
    if (suffix) {
      return (
        <div className="FormInput-suffixContainer">
          <input
            {...rest}
            type={type}
            className={cx(classes, 'FormInput-suffix')}
            readOnly={readOnly}
            ref={ref}
            data-test-id={testId}
            aria-describedby={rest['aria-describedby'] || createFieldErrorId(rest.id)}
          />
          <label className="FormInput-suffix" htmlFor={rest.id}>
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
