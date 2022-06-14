/* eslint-disable react-prefer-function-component/react-prefer-function-component */
import cx from 'clsx';
import { Component, createRef, InputHTMLAttributes, RefObject } from 'react';

import './styles/FormInput.css';
import { createFieldErrorId } from './utils';

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  suffix?: string;
  testId?: string;
  tiny?: boolean;
  overrideWidth?: string;
};

class TextField extends Component<TextFieldProps> {
  inputRef: RefObject<HTMLInputElement>;
  constructor(props: TextFieldProps) {
    super(props);
    this.inputRef = createRef();
  }

  render() {
    const {
      className,
      type = 'text',
      tiny = false,
      readOnly,
      tabIndex = 0,
      testId,
      suffix,
      overrideWidth,
      ...rest
    } = this.props;
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
            ref={this.inputRef}
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
        ref={this.inputRef}
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

  getElement() {
    return this.inputRef.current;
  }

  value() {
    return this.inputRef.current?.value;
  }

  focus() {
    this.inputRef.current?.focus();
  }

  blur() {
    this.inputRef.current?.blur();
  }

  select() {
    this.inputRef.current?.focus();
  }
}

export type { TextFieldProps };
export { TextField };
