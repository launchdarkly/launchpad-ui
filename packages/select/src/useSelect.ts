import type { UseSelectStateProps, SelectState } from './useSelectState';
import type { AriaListBoxOptions } from '@react-aria/listbox';
import type { AriaButtonProps } from '@react-types/button';
import type { AriaSelectProps } from '@react-types/select';
import type { FocusEvent, HTMLAttributes, RefObject } from 'react';

import { setInteractionModality } from '@react-aria/interactions';
import { useField } from '@react-aria/label';
import { useMenuTrigger } from '@react-aria/menu';
import { ListKeyboardDelegate, useTypeSelect } from '@react-aria/selection';
import { chain, filterDOMProps, mergeProps, useId } from '@react-aria/utils';
import { useMemo } from 'react';

type UseSelectProps<T extends object> = Omit<AriaSelectProps<T>, 'onSelectionChange'> & {
  disallowEmptySelection?: boolean;

  onSelectionChange?: UseSelectStateProps<T>['onSelectionChange'];
};

type SelectAria<T extends object> = {
  /** Props for the label element. */
  labelProps: HTMLAttributes<HTMLElement>;

  /** Props for the popup trigger element. */
  triggerProps: AriaButtonProps;

  /** Props for the element representing the selected value. */
  valueProps: HTMLAttributes<HTMLElement>;

  /** Props for the popup. */
  menuProps: AriaListBoxOptions<T>;
};

const useSelect = <T extends object>(
  props: UseSelectProps<T>,
  state: SelectState<T>,
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

export { useSelect };
export type { UseSelectProps, SelectAria };
