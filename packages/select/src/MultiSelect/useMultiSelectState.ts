import type { MultiSelectProps } from './MultiSelect';
import type { MultiSelectListState } from './useMultiSelectListState';
import type { SharedSelectState } from '../types';

import { useMenuTriggerState } from '@react-stately/menu';
import { useControlledState } from '@react-stately/utils';
import { useEffect, useState } from 'react';

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

  const { selectionManager, selectedKeys, collection } = listState;

  const filteredCollection = useFilteredCollection(
    { ...props, filterValue, onFilterChange: setFilterValue },
    collection
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
      setFilterValue('');
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

  useEffect(() => {
    // Reset focused key when the menu closes
    if (triggerState.isOpen && collection.size !== 0) {
      selectionManager.setFocusedKey(collection.getFirstKey());
    } else {
      selectionManager.setFocusedKey(null);
    }
  }, [triggerState.isOpen, collection]);

  useEffect(() => {
    if (filteredCollection.size !== 0) {
      selectionManager.setFocusedKey(filteredCollection.getFirstKey());
    }
  }, [filteredCollection]);

  return {
    ...listState,
    ...triggerState,
    close() {
      triggerState.close();
    },
    open() {
      // Don't open if the collection is empty.
      if (collection.size !== 0) {
        triggerState.open();
      }
    },
    toggle(focusStrategy) {
      if (collection.size !== 0) {
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
