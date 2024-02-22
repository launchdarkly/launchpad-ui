import type { ForwardedRef } from 'react';
import type { ComboBoxProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { ComboBox as AriaComboBox, composeRenderProps } from 'react-aria-components';

import styles from './styles/ComboBox.module.css';

const box = cva(styles.box);

const _ComboBox = <T extends object>(
  props: ComboBoxProps<T>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <AriaComboBox
      {...props}
      ref={ref}
      className={composeRenderProps(props.className, (className, renderProps) =>
        box({ ...renderProps, className })
      )}
    />
  );
};

/**
 * A combo box combines a text input with a listbox, allowing users to filter a list of options to items matching a query.
 *
 * https://react-spectrum.adobe.com/react-aria/ComboBox.html
 */
const ComboBox = forwardRef(_ComboBox);

export { ComboBox };
export type { ComboBoxProps };
