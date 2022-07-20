import type { TextFieldProps } from './TextField';
import type { FocusEvent } from 'react';

import cx from 'clsx';
import { isBoolean } from 'lodash-es';
import { forwardRef, useState } from 'react';

import { Label } from './Label';
import { TextField } from './TextField';
import './styles/CompactTextField.css';
import './styles/FormInput.css';

type CompactTextFieldProps = TextFieldProps & {
  label: string;
  needsErrorFeedback?: boolean;
};

const CompactTextField = forwardRef<HTMLInputElement, CompactTextFieldProps>(
  (
    { className, id, name, label, type, needsErrorFeedback, value, onFocus, onBlur, ...rest },
    ref
  ) => {
    const [isActive, setIsActive] = useState(
      (isBoolean(value) || value ? value.toString() : '').trim().length !== 0
    );

    const isActiveState = isActive || needsErrorFeedback;

    const classes = cx('CompactTextField', className, {
      'is-active': isActiveState,
    });

    const placeholder = isActiveState ? '' : label;

    const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
      setIsActive(true);
      if (onFocus) {
        onFocus(event);
      }
    };

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
      const value = event.target.value || '';
      setIsActive(value.trim().length !== 0);
      if (onBlur) {
        onBlur(event);
      }
    };

    return (
      <div className={classes}>
        <Label htmlFor={id}>{label}</Label>
        <TextField
          {...rest}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    );
  }
);

CompactTextField.displayName = 'CompactTextField';

export { CompactTextField };
export type { CompactTextFieldProps };
