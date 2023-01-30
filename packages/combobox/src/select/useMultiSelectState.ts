import type { MultiSelectListState } from './useMultiSelectListState';
import type { MenuTriggerState } from '@react-stately/menu';
import type { OverlayTriggerProps } from '@react-types/overlays';
import type {
  AsyncLoadable,
  CollectionBase,
  FocusableProps,
  InputBase,
  LabelableProps,
  MultipleSelection,
  Selection,
  TextInputBase,
  Validation,
} from '@react-types/shared';

import { useMenuTriggerState } from '@react-stately/menu';
import { useState } from 'react';

import { useMultiSelectListState } from './useMultiSelectListState';

type MultiSelectProps<T extends object> = CollectionBase<T> &
  AsyncLoadable &
  Omit<InputBase, 'isReadOnly'> &
  Validation &
  LabelableProps &
  TextInputBase &
  MultipleSelection &
  FocusableProps &
  OverlayTriggerProps & {
    shouldFlip?: boolean;
  };

type MultiSelectState<T extends object> = MultiSelectListState<T> &
  MenuTriggerState & {
    isFocused: boolean;
    setFocused(isFocused: boolean): void;
  };

const useMultiSelectState = <T extends object>(props: MultiSelectProps<T>): MultiSelectState<T> => {
  const [isFocused, setFocused] = useState(false);

  const triggerState = useMenuTriggerState(props);
  const listState = useMultiSelectListState({
    ...props,
    onSelectionChange: (keys: Selection) => {
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

export { useMultiSelectState };
export type { MultiSelectProps, MultiSelectState };
