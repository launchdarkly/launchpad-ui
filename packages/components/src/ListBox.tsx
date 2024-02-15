import type { ForwardedRef } from 'react';
import type { ListBoxProps, ListBoxItemProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import {
  ListBox as AriaListBox,
  ListBoxItem as AriaListBoxItem,
  composeRenderProps,
} from 'react-aria-components';

import styles from './styles/ListBox.module.css';

const box = cva(styles.box);
const item = cva(styles.item);

const _ListBox = <T extends object>(props: ListBoxProps<T>, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <AriaListBox
      {...props}
      ref={ref}
      className={composeRenderProps(props.className, (className, renderProps) =>
        box({ ...renderProps, className })
      )}
    />
  );
};

/**
 * A listbox displays a list of options and allows a user to select one or more of them.
 *
 * https://react-spectrum.adobe.com/react-aria/ListBox.html
 */
const ListBox = forwardRef(_ListBox);

const _ListBoxItem = <T extends object>(
  props: ListBoxItemProps<T>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <AriaListBoxItem
      {...props}
      ref={ref}
      className={composeRenderProps(props.className, (className, renderProps) =>
        item({ ...renderProps, className })
      )}
    />
  );
};

/**
 * A ListBoxItem represents an individual option in a ListBox.
 *
 * https://react-spectrum.adobe.com/react-aria/ListBox.html
 */
const ListBoxItem = forwardRef(_ListBoxItem);

export { ListBox, ListBoxItem };
export type { ListBoxProps, ListBoxItemProps };
