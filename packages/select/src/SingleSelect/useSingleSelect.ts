import type { SingleSelectProps } from './SingleSelect';
import type { SingleSelectState } from './useSingleSelectState';
import type { SelectAria, SharedUseSelectProps } from '../types';
import type { KeyboardEvent, RefObject } from 'react';

import { chain } from '@react-aria/utils';

import { useSelect } from '../useSelect';

type UseSingleSelectRefs = {
  triggerRef: RefObject<HTMLElement>;

  listBoxRef: RefObject<HTMLElement>;

  filterInputRef: RefObject<HTMLInputElement>;
};

/* c8 ignore start */

const useSingleSelect = <T extends object>(
  props: SingleSelectProps<T> & SharedUseSelectProps<T>,
  state: SingleSelectState<T>,
  refs: UseSingleSelectRefs
): SelectAria<T> => {
  const select = useSelect(props, state, refs);

  const triggerOnKeyDown = (e: KeyboardEvent) => {
    const { delegate } = select;
    // Select items when trigger has focus - imitating default `<select>` behaviour.
    switch (e.key) {
      case 'ArrowLeft': {
        // prevent scrolling containers
        e.preventDefault();

        const key = state.selectedKey
          ? delegate.getKeyAbove(state.selectedKey)
          : delegate.getFirstKey();

        if (key) {
          state.setSelectedKey(key);
        }
        break;
      }
      case 'ArrowRight': {
        // prevent scrolling containers
        e.preventDefault();

        const key = state.selectedKey
          ? delegate.getKeyBelow(state.selectedKey)
          : delegate.getFirstKey();

        if (key) {
          state.setSelectedKey(key);
        }
        break;
      }
    }
  };

  return {
    ...select,
    triggerProps: {
      ...select.triggerProps,
      onKeyDown: chain(select.triggerProps.onKeyDown, triggerOnKeyDown),
    },
  };
};

/* c8 ignore stop */

export { useSingleSelect };
export type { SelectAria };
