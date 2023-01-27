import type { ComboBoxProps } from '@react-types/combobox';

import { Close, ExpandMore } from '@launchpad-ui/icons';
import { useButton } from '@react-aria/button';
import { useComboBox } from '@react-aria/combobox';
import { useFilter } from '@react-aria/i18n';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { Item as CollectionItem, Section as CollectionSection } from '@react-stately/collections';
import { ComboBoxState, useComboBoxState } from '@react-stately/combobox';
import cx from 'classix';
import { ReactNode, useRef } from 'react';

import { ListBox } from './ListBox';
import { Popover } from './Popover';
import styles from './styles/Combobox.module.css';

type ComboboxProps<T extends object> = ComboBoxProps<T> & {
  renderSelectedItem?: (state: ComboBoxState<T>) => ReactNode;
};

const Combobox = <T extends object>({ renderSelectedItem, ...props }: ComboboxProps<T>) => {
  const { contains } = useFilter({ sensitivity: 'base' });
  const state = useComboBoxState({
    ...props,
    allowsCustomValue: true,
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

  const renderSelected = () => {
    if (state.selectedItem) {
      if (renderSelectedItem) {
        return renderSelectedItem(state);
      }
      return state.selectedItem.rendered;
    }

    return 'Select an option';
  };

  return (
    <div>
      <VisuallyHidden>
        <label {...labelProps}>{props.label}</label>
      </VisuallyHidden>

      <button
        className={cx(styles.container, state.isOpen && styles.isOpen)}
        tabIndex={0}
        ref={buttonRef}
        {...buttonProps}
      >
        {/* <input {...inputProps} className={styles.input} />
        <button
          {...buttonProps}
          ref={buttonRef}
          className={cx(
            styles.expandMoreButton,
            state.isFocused ? 'border-pink-500 text-pink-600' : 'border-gray-300 text-gray-500'
          )}
        >
          <ExpandMore className={styles.expandMore} aria-hidden="true" />
        </button> */}

        <span className={styles.valueContainer}>
          <span className={styles.singleValue}>{renderSelected()}</span>
          <span className={styles.inputContainer}>
            <input {...inputProps} className={styles.input} ref={inputRef} />
          </span>
        </span>
        <span className={styles.indicatorsContainer}>
          <span className={styles.closeIndicatorContainer}>
            <Close />
          </span>
          <span className={styles.expandIndicatorContainer} aria-hidden="true">
            <ExpandMore />
          </span>
        </span>
      </button>
      {state.isOpen && (
        <Popover
          popoverRef={popoverRef}
          triggerRef={buttonRef}
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
