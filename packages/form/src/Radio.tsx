import cx from 'clsx';

import { Label } from './Label';
import './styles/Form.css';

type RadioProps = {
  /**
   * Use an aria-label if you don't pass in children and don't have a visible label to associate with the input element.
   */
  'aria-label'?: string;
  /**
   * id attribute of the label text elsewhere in the app, used for screen reader support. Use this for cases where you have a visible label on the page that **is not close to** to the input. https://tink.uk/the-difference-between-aria-label-and-aria-labelledby/
   */
  'aria-labelledby'?: string;
  /**
   * Is the Radio checked?
   */
  checked?: boolean;
  /**
   * Label for the Checkbox
   */
  children?: React.ReactNode;
  /**
   * Custom classname(s) to add to the Radio.
   */
  className?: string;
  /**
   * Is the Radio disabled?
   */
  disabled?: boolean;
  /**
   * The id to pair the Radio input with the label for screen reader support.
   */
  id?: string;
  /**
   * The className to pass into the Radio's Label component
   */
  labelClassName?: string;
  /**
   * Name to apply to the underlying Radio. Pass in the same name value to each Radio when grouping in a RadioGroup for screen reader support.
   */
  name?: string;
  /**
   * The function to pass into the Radio onChange synthetic event handler.
   */
  onChange?(e: React.ChangeEvent): void;
  /**
   * Optional inline CSS styles to add to the Radio label.
   */
  labelStyle?: object;
  /**
   * The value passed into Radio.
   */
  value: number | string;
};

const Radio = ({
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  checked = false,
  children,
  className,
  disabled = false,
  id,
  labelClassName,
  name,
  onChange = () => undefined,
  labelStyle,
  value,
  ...props
}: RadioProps) => {
  const hasAriaLabel = ariaLabel !== undefined || ariaLabelledby !== undefined;

  if (!children && !hasAriaLabel) {
    console.warn(
      'If you do not provide children, you must specify an aria-label for accessibility'
    );
  }

  return (
    <>
      <input
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        className={cx('Form-radio', className)}
        checked={checked}
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange}
        type="radio"
        value={value}
        {...props}
      />
      <Label className={labelClassName} htmlFor={id} style={labelStyle}>
        {disabled ? <span className="Form-label--disabled">{children}</span> : children}
      </Label>
    </>
  );
};

export { Radio };
export type { RadioProps };
