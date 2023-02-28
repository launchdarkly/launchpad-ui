import type { MultiSelectState, UseMultiSelectStateProps } from './useMultiSelectState';
import type { SelectAria, SharedUseSelectProps } from '../types';
import type { FocusEvent, RefObject } from 'react';

import { setInteractionModality } from '@react-aria/interactions';
import { useField } from '@react-aria/label';
import { useMenuTrigger } from '@react-aria/menu';
import { ListKeyboardDelegate, useTypeSelect } from '@react-aria/selection';
import { chain, filterDOMProps, mergeProps, useId } from '@react-aria/utils';
import { useMemo } from 'react';

type UseMultiSelectProps<T extends object> = SharedUseSelectProps<T> & {
  onSelectionChange?: UseMultiSelectStateProps<T>['onSelectionChange'];
};

/* c8 ignore start */

const useMultiSelect = <T extends object>(
  props: UseMultiSelectProps<T>,
  state: MultiSelectState<T>,
  ref: RefObject<HTMLElement>
): SelectAria<T> => {
  const { disallowEmptySelection, isDisabled } = props;

  const delegate = useMemo(
    () => new ListKeyboardDelegate(state.collection, state.disabledKeys, null as never),
    [state.collection, state.disabledKeys]
  );

  const { menuTriggerProps, menuProps } = useMenuTrigger<T>(
    {
      isDisabled,
      type: 'listbox',
    },
    state,
    ref
  );

  const triggerOnKeyDown = (e: KeyboardEvent) => {
    // Select items when trigger has focus - imitating default `<select>` behaviour.
    // In multi selection mode this does not make sense.
    if (state.selectionMode === 'single') {
      switch (e.key) {
        case 'ArrowLeft': {
          // prevent scrolling containers
          e.preventDefault();

          const key =
            state.selectedKeys.size > 0
              ? delegate.getKeyAbove(state.selectedKeys.values().next().value)
              : delegate.getFirstKey();

          if (key) {
            state.setSelectedKeys([key]);
          }
          break;
        }
        case 'ArrowRight': {
          // prevent scrolling containers
          e.preventDefault();

          const key =
            state.selectedKeys.size > 0
              ? delegate.getKeyBelow(state.selectedKeys.values().next().value)
              : delegate.getFirstKey();

          if (key) {
            state.setSelectedKeys([key]);
          }
          break;
        }
      }
    }
  };

  // Typeahead functionality - imitating default `<select>` behaviour.
  const { typeSelectProps } = useTypeSelect({
    keyboardDelegate: delegate,
    selectionManager: state.selectionManager,
    onTypeSelect(key) {
      state.setSelectedKeys([key]);
    },
  });

  const { labelProps, fieldProps } = useField({
    ...props,
    labelElementType: 'span',
  });

  typeSelectProps.onKeyDown = typeSelectProps.onKeyDownCapture;
  delete typeSelectProps.onKeyDownCapture;

  const domProps = filterDOMProps(props, { labelable: true });
  const triggerProps = mergeProps(typeSelectProps, menuTriggerProps, fieldProps);

  const valueId = useId();

  return {
    labelProps: {
      ...labelProps,
      onClick: () => {
        if (!props.isDisabled) {
          ref.current?.focus();

          // Show the focus ring so the user knows where focus went
          setInteractionModality('keyboard');
        }
      },
    },
    triggerProps: mergeProps(domProps, {
      ...triggerProps,
      onKeyDown: chain(triggerProps.onKeyDown, triggerOnKeyDown, props.onKeyDown),
      onKeyUp: props.onKeyUp,
      'aria-labelledby': [
        triggerProps['aria-labelledby'],
        triggerProps['aria-label'] && !triggerProps['aria-labelledby'] ? triggerProps.id : null,
        valueId,
      ]
        .filter(Boolean)
        .join(' '),
      onFocus(e: FocusEvent) {
        if (state.isFocused) {
          return;
        }

        if (props.onFocus) {
          props.onFocus(e);
        }

        state.setFocused(true);
      },
      onBlur(e: FocusEvent) {
        if (state.isOpen) {
          return;
        }

        if (props.onBlur) {
          props.onBlur(e);
        }

        state.setFocused(false);
      },
    }),
    valueProps: {
      id: valueId,
    },
    menuProps: {
      ...menuProps,
      disallowEmptySelection,
      autoFocus: state.focusStrategy || true,
      shouldSelectOnPressUp: true,
      shouldFocusOnHover: true,
      onBlur: (e) => {
        if (e.currentTarget.contains(e.relatedTarget as Node)) {
          return;
        }

        if (props.onBlur) {
          props.onBlur(e);
        }
        state.setFocused(false);
      },
      'aria-labelledby': [
        fieldProps['aria-labelledby'],
        triggerProps['aria-label'] && !fieldProps['aria-labelledby'] ? triggerProps.id : null,
      ]
        .filter(Boolean)
        .join(' '),
    },
  };
};

/* c8 ignore stop */

export { useMultiSelect };
export type { UseMultiSelectProps, SelectAria };
