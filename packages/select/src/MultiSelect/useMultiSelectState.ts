import type { MultiSelectProps } from './MultiSelect';
import type { MultiSelectListState } from './useMultiSelectListState';
import type { SharedSelectState } from '../types';

import { useMenuTriggerState } from '@react-stately/menu';
import { useControlledState } from '@react-stately/utils';
import { useState } from 'react';

import { useFilteredCollection } from '../useFilter';

import { useMultiSelectListState } from './useMultiSelectListState';

type MultiSelectState<T extends object> = MultiSelectListState<T> & SharedSelectState;

const useMultiSelectState = <T extends object>(props: MultiSelectProps<T>): MultiSelectState<T> => {
  const [isFocused, setFocused] = useState(false);
  const [filterValue, setFilterValue] = useControlledState(
    props.filterValue as string,
    props.defaultFilterValue ?? '',
    props.onFilterChange as (value: string, ...args: any[]) => void
  );

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

  const filteredCollection = useFilteredCollection(
    { ...props, filterValue, onFilterChange: setFilterValue },
    listState
  );

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
    collection: filteredCollection,
    filterValue,
    setFilterValue,
  };
};

export { useMultiSelectState };
export type { MultiSelectState };
