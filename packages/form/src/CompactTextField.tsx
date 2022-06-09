import cx from 'clsx';
import { isBoolean } from 'lodash-es';
import { Component, FocusEvent } from 'react';

import { Label } from './Label';
import { TextField, TextFieldProps } from './TextField';
import './styles/CompactTextField.css';

type CompactTextFieldProps = TextFieldProps & {
  label: string;
  needsErrorFeedback?: boolean;
};

class CompactTextField extends Component<CompactTextFieldProps, { isActive: boolean }> {
  textField?: TextField | null;

  constructor(props: CompactTextFieldProps) {
    super(props);
    const value = props.value;

    this.state = {
      isActive: (isBoolean(value) || value ? value.toString() : '').trim().length !== 0,
    };
  }

  render() {
    const { className, id, name, label, type, needsErrorFeedback, ...rest } = this.props;
    const isActive = this.state.isActive || needsErrorFeedback;

    const classes = cx('CompactTextField', className, {
      'is-active': isActive,
    });

    const placeholder = isActive ? '' : label;

    return (
      <div className={classes}>
        <Label htmlFor={id}>{label}</Label>
        <TextField
          {...rest}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          ref={(textField) => {
            this.textField = textField;
          }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </div>
    );
  }

  handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    this.setState({ isActive: true });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    const value = event.target.value || '';
    this.setState({ isActive: value.trim().length !== 0 });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  value = () => (this.textField ? this.textField.value() : '');

  focus = () => {
    if (this.textField) {
      this.textField.focus();
    }
  };
}

export { CompactTextField };
export type { CompactTextFieldProps };
