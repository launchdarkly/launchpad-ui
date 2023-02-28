import type { SharedSelectState, SharedUseSelectStateProps } from '../types';
import type { SingleSelectListState } from '@react-stately/list';
import type { SingleSelection } from '@react-types/shared';

import { useSingleSelectListState } from '@react-stately/list';
import { useMenuTriggerState } from '@react-stately/menu';
import { useState } from 'react';

type UseSingleSelectStateProps<T extends object> = SharedUseSelectStateProps<T> & SingleSelection;

type SingleSelectState<T extends object> = SingleSelectListState<T> & SharedSelectState;

const useSingleSelectState = <T extends object>(
  props: UseSingleSelectStateProps<T>
): SingleSelectState<T> => {
  const [isFocused, setFocused] = useState(false);

  const triggerState = useMenuTriggerState(props);
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

export { useSingleSelectState };
export type { UseSingleSelectStateProps, SingleSelectState };
