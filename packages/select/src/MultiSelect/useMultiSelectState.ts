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
    props.onFilterChange as (value: string, ...args: unknown[]) => void
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

  const { selectionManager, selectedKeys } = listState;

  const filteredCollection = useFilteredCollection(
    { ...props, filterValue, onFilterChange: setFilterValue },
    listState
  );

  const commitCustomValue = () => {
    // TODO
    // lastSelectedKey.current = null;
    // setSelectedKey(null as unknown as Key);
    triggerState.close();
  };

  // Revert input value and close menu
  const revert = () => {
    if (props.allowsCustomValue && selectedKeys.size === 0) {
      commitCustomValue();
    } else {
      commitSelection();
    }
  };

  const commitSelection = () => {
    // If multiple things are controlled, call onSelectionChange
    if (props.selectedKeys !== undefined && props.filterValue !== undefined) {
      if (props.onSelectionChange) props.onSelectionChange(selectedKeys);

      // Stop menu from reopening from useEffect
      // const itemText = collection.getItem(selectedKey)?.textValue ?? '';
      // lastValue.current = itemText;
      triggerState.close();
    } else {
      // If only a single aspect of combobox is controlled, reset input value and close menu for the user
      setFilterValue('');
      triggerState.close();
    }
  };

  const commit = () => {
    // if (triggerState.isOpen && selectionManager.focusedKey != null) {
    selectionManager.toggleSelection(selectionManager.focusedKey);

    // TODO
    // else if (allowsCustomValue) {
    // commitCustomValue();
  };

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
    commit,
    revert,
  };
};

export { useMultiSelectState };
export type { MultiSelectState };
