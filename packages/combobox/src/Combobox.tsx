import type { ComboBoxProps as ComboboxProps } from '@react-types/combobox';

import { ExpandMore } from '@launchpad-ui/icons';
import { useButton } from '@react-aria/button';
import { useComboBox } from '@react-aria/combobox';
import { useFilter } from '@react-aria/i18n';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { Item as CollectionItem, Section as CollectionSection } from '@react-stately/collections';
import { useComboBoxState } from '@react-stately/combobox';
import cx from 'classix';
import { useRef } from 'react';

import { ListBox } from './ListBox';
import { Popover } from './Popover';
import styles from './styles/Combobox.module.css';

const Combobox = <T extends object>(props: ComboboxProps<T>) => {
  const { contains } = useFilter({ sensitivity: 'base' });
  const state = useComboBoxState({
    ...props,
    defaultFilter: contains,
  });

  const buttonRef = useRef(null);
  const inputRef = useRef(null);
  const listBoxRef = useRef(null);
  const popoverRef = useRef(null);

  const {
    buttonProps: triggerProps,
    inputProps,
    listBoxProps,
    labelProps,
  } = useComboBox(
    {
      ...props,
      placeholder: 'hello',
      inputRef,
      buttonRef,
      listBoxRef,
      popoverRef,
    },
    state
  );

  const { buttonProps } = useButton(triggerProps, buttonRef);

  return (
    <div className="inline-flex flex-col relative w-52">
      <VisuallyHidden>
        <label {...labelProps} className="block text-sm font-medium text-gray-700 text-left">
          {props.label}
        </label>
      </VisuallyHidden>

      <div
        className={cx(styles.container, state.isOpen && styles.isOpen)}
        role="button"
        tabIndex={0}
        onClick={() => state.setOpen(true)}
        onKeyUp={() => state.setOpen(true)}
        ref={inputRef}
      >
        <input {...inputProps} className={styles.input} />
        <button
          {...buttonProps}
          ref={buttonRef}
          className={cx(
            styles.expandMoreButton,
            state.isFocused ? 'border-pink-500 text-pink-600' : 'border-gray-300 text-gray-500'
          )}
        >
          <ExpandMore className={styles.expandMore} aria-hidden="true" />
        </button>
      </div>
      {state.isOpen && (
        <Popover
          popoverRef={popoverRef}
          triggerRef={inputRef}
          state={state}
          isNonModal
          placement="bottom start"
        >
          <ListBox {...listBoxProps} listBoxRef={listBoxRef} state={state} />
        </Popover>
      )}
    </div>
  );
};

export { Combobox, CollectionItem, CollectionSection };
export type { ComboboxProps };
