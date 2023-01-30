import { MenuTriggerState, useMenuTriggerState } from '@react-stately/menu';
import { SelectProps } from '@react-types/select';
import { SingleSelectListState, useSingleSelectListState } from '@react-stately/list';
import { useState } from 'react';

type SelectState<T extends object> = SingleSelectListState<T> &
  MenuTriggerState & {
    /** Whether the select is currently focused. */
    readonly isFocused: boolean;

    /** Sets whether the select is focused. */
    setFocused(isFocused: boolean): void;
  };

/**
 * Provides state management for a select component. Handles building a collection
 * of items from props, handles the open state for the popup menu, and manages
 * multiple selection state.
 */
const useSelectState = <T extends object>(props: SelectProps<T>): SelectState<T> => {
  const triggerState = useMenuTriggerState(props);
  const listState = useSingleSelectListState({
    ...props,
    onSelectionChange: (key) => {
      if (props.onSelectionChange != null) {
        props.onSelectionChange(key);
      }

      triggerState.close();
    },
  });

  const [isFocused, setFocused] = useState(false);

  return {
    ...listState,
    ...triggerState,
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
