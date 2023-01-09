import type { ComboBoxProps as ComboboxProps } from '@react-types/combobox';

import { PlusCircleFill } from '@launchpad-ui/icons';
import { AriaPopover } from '@launchpad-ui/popover';
import { useButton } from '@react-aria/button';
import { useComboBox } from '@react-aria/combobox';
import { useFilter } from '@react-aria/i18n';
import { Item as CollectionItem, Section as CollectionSection } from '@react-stately/collections';
import { useComboBoxState } from '@react-stately/combobox';
import { useRef } from 'react';

import { ListBox } from './ListBox';
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
      inputRef,
      buttonRef,
      listBoxRef,
      popoverRef,
    },
    state
  );

  console.log(styles.combobox);

  const { buttonProps } = useButton(triggerProps, buttonRef);

  return (
    <div className="inline-flex flex-col relative w-52">
      <label {...labelProps} className="block text-sm font-medium text-gray-700 text-left">
        {props.label}
      </label>
      <div
        className={`relative flex inline-flex flex-row rounded-md overflow-hidden shadow-sm border-2 ${
          state.isFocused ? 'border-pink-500' : 'border-gray-300'
        }`}
      >
        <input {...inputProps} ref={inputRef} className="outline-none px-3 py-1 w-full" />
        <button
          {...buttonProps}
          ref={buttonRef}
          className={`px-1 bg-gray-100 cursor-default border-l-2 ${
            state.isFocused ? 'border-pink-500 text-pink-600' : 'border-gray-300 text-gray-500'
          }`}
        >
          <PlusCircleFill aria-hidden="true" />
        </button>
      </div>
      {state.isOpen && (
        <AriaPopover
          popoverRef={popoverRef}
          triggerRef={inputRef}
          state={state}
          isNonModal
          placement="bottom start"
        >
          <ListBox {...listBoxProps} listBoxRef={listBoxRef} state={state} />
        </AriaPopover>
      )}
    </div>
  );
};

export { Combobox, CollectionItem, CollectionSection };
export type { ComboboxProps };
