import type { ReactNode } from 'react';

import { useSwitch } from 'react-aria';
import { VisuallyHidden } from 'react-aria';
import { useToggleState } from 'react-stately';
import { cx } from 'classix';
import { useRef } from 'react';

import styles from './styles/Toggle.module.css';

type ToggleProps = {
  /**
   * Use an aria-label if you don't pass in children and don't have a visible label to associate with the input element.
   */
  'aria-label'?: string;
  /**
   * id attribute of the label text elsewhere in the app, used for screen reader support. Use this for cases where you have a visible label on the page that **is not close to** to the input. https://tink.uk/the-difference-between-aria-label-and-aria-labelledby/
   */
  'aria-labelledby'?: string;
  /**
   * Is the Toggle checked?
   */
  checked?: boolean;
  /**
   * The text to pass into the Toggle label.
   */
  children?: ReactNode;
  /**
   * Custom classname(s) to add to the Toggle.
   */
  className?: string;
  /**
   * Is the Toggle disabled?
   */
  disabled?: boolean;
  /**
   * The id to pair the Toggle input with the label for screen reader support.
   */
  id?: string;
  /**
   * The function to pass into the Toggle onChange synthetic event handler
   */
  onChange?(): void;
  /**
   * Text to display when Toggle is offdefault text is 'Off'.
   */
  toggleOffText?: string;
  /**
   * Text to display when Toggle is on, default text is 'On'.
   */
  toggleOnText?: string;
  'data-test-id'?: string;
};

/**
 * The react-aria library requires us to leverage useToggleState and useRef
 * to pass into the useSwitch hook. The props are deconstructed in the body of the
 * function rather than in the parameters.
 * The VisuallyHidden component from the react-aria library adds some extra
 * goodness (the useFocus hook is leveraged).
 */

const Toggle = (props: ToggleProps) => {
  const {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    checked,
    children,
    className,
    disabled,
    id = 'id',
    onChange,
    toggleOffText = 'Off',
    toggleOnText = 'On',
    'data-test-id': testId = 'toggle',
  } = props;
  const state = useToggleState(props);
  const inputRef = useRef<HTMLInputElement>(null);
  const { inputProps } = useSwitch(props, state, inputRef);
  const classes = cx(
    styles.Toggle,
    className,
    checked && styles['Toggle--on'],
    disabled && styles['Toggle--disabled']
  );

  const handleChange = () => {
    if (disabled || !onChange) {
      return;
    }

    onChange();
  };

  return (
    <div className={classes}>
      <input
        {...inputProps}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        checked={checked}
        className={styles['Toggle-input']}
        disabled={disabled}
        id={id}
        data-test-id={testId}
        type="checkbox"
        onChange={handleChange}
        ref={inputRef}
      />
      <label className={styles['Toggle-wrapper']} htmlFor={id}>
        <VisuallyHidden>
          <div>{children}</div>
        </VisuallyHidden>
        <div className={styles['Toggle-labels']} aria-hidden>
          <div className={cx(styles['Toggle-label'], styles['Toggle-on'])}>{toggleOnText}</div>
          <div className={cx(styles['Toggle-label'], styles['Toggle-off'])}>{toggleOffText}</div>
        </div>
        <div className={styles['Toggle-pin']} />
      </label>
    </div>
  );
};

export { Toggle };
export type { ToggleProps };
