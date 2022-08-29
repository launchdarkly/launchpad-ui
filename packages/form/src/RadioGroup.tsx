import { VisuallyHidden } from '@react-aria/visually-hidden';
import { Children, cloneElement, isValidElement, useRef } from 'react';

import { Label } from './Label';
import { Radio } from './Radio';
import './styles/Form.css';

type RadioGroupProps = {
  /**
   * The legend that describes this groups of radio buttons. The legend
   * is important for screen reader users.
   */
  legend?: string;
  /**
   * The children passed into the RadioGroup.
   */
  children?: React.ReactNode;
  /**
   * Custom classname(s) passed to the fieldset inner div.
   */
  className?: string;
  /**
   * Set the underlying Radio to disabled if the Radio's disabled prop is undefined.
   */
  disabled?: boolean;
  /**
   * The RadioGroup's id.
   */
  id?: string;
  /**
   * Name to apply to the underlying Radio. The same name value is passed to each Radio when grouping in a RadioGroup for screen reader support.
   */
  name: string;
  /**
   * This function is passed into each Radio onChange synthetic event handler.
   */
  onChange?(e: React.ChangeEvent | React.FormEvent<HTMLInputElement>): void;
  /**
   * The value to compare against the Radio's value to determine if the Radio will be checked.
   */
  value: string;
};

const RadioGroup = (props: RadioGroupProps) => {
  const { name, value, onChange, children, disabled, legend, ...other } = props;
  const fieldsetRef = useRef<HTMLFieldSetElement>(null);

  function updateRadioElems(elem: React.ReactNode): React.ReactNode {
    if (!isValidElement(elem)) {
      return elem;
    }

    const item = elem as React.ReactElement;

    if (item?.type && item.type === Radio) {
      return cloneElement(item, {
        ...item.props,
        name,
        checked: item.props.value === value,
        onChange,
        disabled: typeof item.props?.disabled !== 'undefined' ? item.props.disabled : disabled,
      });
    }

    if (item?.type && item.type === Label) {
      return cloneElement(item, {
        ...item.props,
        onChange,
        disabled,
      });
    }

    const elemChildren = item?.props?.children;
    if (elemChildren) {
      if (Array.isArray(elemChildren)) {
        return cloneElement(item, {
          children: Children.map(elemChildren, (elemChild) => updateRadioElems(elemChild)),
        });
      }
      return cloneElement(item, {
        children: updateRadioElems(elemChildren),
      });
    }

    if (item?.type && item.type !== Radio && item.type !== Label) {
      return item;
    }

    return null;
  }

  const radios = Children.map(children, (child) => updateRadioElems(child));
  return (
    <fieldset ref={fieldsetRef}>
      {legend && (
        <legend>
          <VisuallyHidden>{legend}</VisuallyHidden>
        </legend>
      )}
      <div {...other}>{radios}</div>
    </fieldset>
  );
};

export { RadioGroup };
export type { RadioGroupProps };
