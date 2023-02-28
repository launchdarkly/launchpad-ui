import type { MultiSelectListState } from './useMultiSelectListState';
import type { SharedSelectState, SharedUseSelectStateProps } from '../types';
import type { MultipleSelection } from '@react-types/shared';

import { useMenuTriggerState } from '@react-stately/menu';
import { useState } from 'react';

import { useMultiSelectListState } from './useMultiSelectListState';

type UseMultiSelectStateProps<T extends object> = SharedUseSelectStateProps<T> & MultipleSelection;

type MultiSelectState<T extends object> = MultiSelectListState<T> & SharedSelectState;

const useMultiSelectState = <T extends object>(
  props: UseMultiSelectStateProps<T>
): MultiSelectState<T> => {
  const [isFocused, setFocused] = useState(false);

  const triggerState = useMenuTriggerState(props);
  const listState = useMultiSelectListState({
    ...props,
    items: props.items ?? props.defaultItems,
    onSelectionChange: (keys) => {
      if (props.onSelectionChange != null) {
        if (keys === 'all') {
          props.onSelectionChange(new Set(listState.collection.getKeys()));
        } else {
          props.onSelectionChange(keys);
        }
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
export type { UseMultiSelectStateProps, MultiSelectState };
