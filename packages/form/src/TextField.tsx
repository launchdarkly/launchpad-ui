import type { InputHTMLAttributes } from 'react';

import { cx } from 'classix';
import { forwardRef } from 'react';

import './styles/FormInput.css';
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
      : cx('FormInput', `FormInput-${type}`, className, tiny && 'FormInput--tiny');

    if (suffix) {
      return (
        <div className="FormInput-suffixContainer">
          <input
            {...rest}
            type={type}
            data-test-id={testId}
            className={cx(classes, 'FormInput-suffix')}
            readOnly={readOnly}
            ref={ref}
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
