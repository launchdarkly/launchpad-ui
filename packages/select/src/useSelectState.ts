import type { SelectListState } from './useSelectListState';
import type { MenuTriggerState } from '@react-stately/menu';
import type { OverlayTriggerProps } from '@react-types/overlays';
import type {
  AsyncLoadable,
  CollectionBase,
  FocusableProps,
  InputBase,
  LabelableProps,
  MultipleSelection,
  TextInputBase,
  Validation,
} from '@react-types/shared';

import { useMenuTriggerState } from '@react-stately/menu';
import { useState } from 'react';

import { useSelectListState } from './useSelectListState';

type UseSelectStateProps<T extends object> = CollectionBase<T> &
  AsyncLoadable &
  Omit<InputBase, 'isReadOnly'> &
  Validation &
  LabelableProps &
  TextInputBase &
  MultipleSelection &
  FocusableProps &
  OverlayTriggerProps & {
    shouldFlip?: boolean;
    defaultItems?: Iterable<T>;
  };

type SelectState<T extends object> = SelectListState<T> &
  MenuTriggerState & {
    isFocused: boolean;
    setFocused(isFocused: boolean): void;
  };

const useSelectState = <T extends object>(props: UseSelectStateProps<T>): SelectState<T> => {
  const [isFocused, setFocused] = useState(false);

  const triggerState = useMenuTriggerState(props);
  const listState = useSelectListState({
    ...props,
    items: props.items ?? props.defaultItems,
    onSelectionChange: (keys) => {
      if (props.onSelectionChange != null) {
        if (keys === 'all') {
          // This may change back to "all" once we will implement async loading of additional
          // items and differentiation between "select all" vs. "select visible".
          props.onSelectionChange(new Set(listState.collection.getKeys()));
        } else {
          props.onSelectionChange(keys);
        }
      }

      // Multi select stays open after item selection
      if (props.selectionMode === 'single') {
        triggerState.close();
      }
    },
  });

  return {
    ...listState,
    ...triggerState,
    close() {
      triggerState.close();
    },
    open() {
      // Don't open if the collection is empty.
      if (listState.collection.size !== 0) {
        triggerState.open();
      }
    },
    toggle(focusStrategy) {
      if (listState.collection.size !== 0) {
        triggerState.toggle(focusStrategy);
      }
    },
    isFocused,
    setFocused,
  };
};

export { useSelectState };
export type { UseSelectStateProps, SelectState };
