import type { TagSelectProps } from './TagSelect';
import type { TagSelectState } from './useTagSelectState';
import type { SelectAria, SharedUseSelectProps } from '../types';
import type { KeyboardEvent, RefObject } from 'react';

import { chain } from '@react-aria/utils';

import { useSelect } from '../useSelect';

type UseTagSelectRefs = {
  triggerRef: RefObject<HTMLElement>;

  listBoxRef: RefObject<HTMLElement>;

  filterInputRef: RefObject<HTMLInputElement>;
};

/* c8 ignore start */

const useTagSelect = <T extends object>(
  props: TagSelectProps<T> & SharedUseSelectProps<T>,
  state: TagSelectState<T>,
  refs: UseTagSelectRefs
): SelectAria<T> => {
  const select = useSelect(props, state, refs);

  const filterOnKeyDown = (e: KeyboardEvent) => {
    // Select items when trigger has focus - imitating default `<select>` behaviour.
    console.log(e.key);
    switch (e.key) {
      case 'Backspace': {
        // when filter is empty and there are selected keys,
        // allow user to remove a key by backspacing
        if (
          state.filterValue === '' &&
          state.selectedKeys.size > 0 &&
          state.selectionManager.lastSelectedKey
        ) {
          const keyArr = Array.from(state.selectedKeys);
          const lastKey = keyArr[keyArr.length - 1];
          state.selectionManager.toggleSelection(lastKey);
        }

        break;
      }
      case 'ArrowRight': {
        break;
      }
    }
  };

  // const filterOnChange = () => {
  //   const filterRef = refs.filterInputRef.current;
  //   if (filterRef) {
  //     filterRef.style.width = `${(state.filterValue || '').length + 2}ch`;
  //   }
  // };

  return {
    ...select,
    filterInputProps: {
      ...select.filterInputProps,
      style: {
        width: `${(state.filterValue || '').length + 2}ch`,
      },
      onKeyDown: chain(select.filterInputProps.onKeyDown, filterOnKeyDown),
      // onChange: chain(select.filterInputProps.onChange, filterOnChange),
    },
  };
};

/* c8 ignore stop */

export { useTagSelect };
export type { SelectAria };
