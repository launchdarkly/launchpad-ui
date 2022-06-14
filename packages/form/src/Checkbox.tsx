/* eslint-disable functional/no-class */
import { Component, createRef, InputHTMLAttributes, RefObject } from 'react';

import { Label } from './Label';
import './styles/Form.css';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  /**
   * Use an aria-label if you don't pass in children and don't have a visible label to associate with the input element.
   */
  'aria-label'?: string;
  /**
   * id attribute of the label text elsewhere in the app, used for screen reader support
   * Use this for cases where you have a visible label on the page that is not close to
   * the input. https://tink.uk/the-difference-between-aria-label-and-aria-labelledby/
   */
  'aria-labelledby'?: string;
  /**
   * Label for the Checkbox
   */
  children?: React.ReactNode;
  /**
   * The className to pass into the Checkbox's Label component
   */
  labelClassName?: string;
  /**
   * The test id for the data-test-id attribute for React Testing Library support
   */
  testId?: string;
};

class Checkbox extends Component<CheckboxProps> {
  inputRef: RefObject<HTMLInputElement>;

  constructor(props: CheckboxProps) {
    super(props);
    this.inputRef = createRef();
  }

  value() {
    return this.inputRef.current?.value;
  }

  checked() {
    return this.inputRef.current?.checked;
  }

  render() {
    const {
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      children,
      disabled,
      testId,
      checked,
      labelClassName,
      ...other
    } = this.props;

    const hasAriaLabel = ariaLabel !== undefined || ariaLabelledby !== undefined;
    if (!children && !hasAriaLabel) {
      console.warn(
        'If you do not provide children, you must specify an aria-label for accessibility'
      );
    }

    return (
      <Label className={labelClassName}>
        <input
          {...other}
          ref={this.inputRef}
          checked={checked}
          aria-checked={checked ? 'true' : 'false'}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
          className="Form-checkbox"
          disabled={disabled}
          data-test-id={testId}
          type="checkbox"
        />{' '}
        {disabled ? <span className="Form-label--disabled">{children}</span> : children}
      </Label>
    );
  }
}

export { Checkbox };
export type { CheckboxProps };
