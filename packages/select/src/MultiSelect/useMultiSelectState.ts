import type { MultiSelectProps } from './MultiSelect';
import type { MultiSelectListState } from './useMultiSelectListState';
import type { SharedSelectState } from '../types';

import { useMenuTriggerState } from '@react-stately/menu';
import { useState } from 'react';

import { useMultiSelectListState } from './useMultiSelectListState';

type MultiSelectState<T extends object> = MultiSelectListState<T> & SharedSelectState;

const useMultiSelectState = <T extends object>(props: MultiSelectProps<T>): MultiSelectState<T> => {
  const [isFocused, setFocused] = useState(false);

  const triggerState = useMenuTriggerState({ ...props, trigger: 'press' });
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
export type { MultiSelectState };
