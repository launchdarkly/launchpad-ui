import type { SingleSelectProps } from './SingleSelect';
import type { SharedSelectState } from '../types';
import type { SingleSelectListState } from '@react-stately/list';

import { useSingleSelectListState } from '@react-stately/list';
import { useMenuTriggerState } from '@react-stately/menu';
import { useControlledState } from '@react-stately/utils';
import { useState } from 'react';

import { useFilteredCollection } from '../useFilter';

type SingleSelectState<T extends object> = SingleSelectListState<T> & SharedSelectState;

const useSingleSelectState = <T extends object>(
  props: SingleSelectProps<T>
): SingleSelectState<T> => {
  const [isFocused, setFocused] = useState(false);

  const [filterValue, setFilterValue] = useControlledState(
    props.filterValue as string,
    props.defaultFilterValue ?? '',
    props.onFilterChange as (value: string, ...args: any[]) => void
  );

  const triggerState = useMenuTriggerState({ ...props, trigger: 'press' });
  const listState = useSingleSelectListState({
    ...props,
    items: props.items ?? props.defaultItems,
    onSelectionChange: (key) => {
      if (props.onSelectionChange) {
        props.onSelectionChange(key);
      }

      triggerState.close();
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

export { useSingleSelectState };
export type { SingleSelectState };
