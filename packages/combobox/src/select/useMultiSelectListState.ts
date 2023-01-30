import type { ListState } from '@react-stately/list';
import type { CollectionBase, MultipleSelection, Node } from '@react-types/shared';
import type { Key } from 'react';

import { useListState } from '@react-stately/list';

type MultiSelectListProps<T> = CollectionBase<T> & MultipleSelection;

type MultiSelectListState<T> = ListState<T> & {
  selectedKeys: Set<Key>;
  setSelectedKeys(keys: Iterable<Key>): void;
  selectedItems: Node<T>[] | null;
  selectionMode: MultipleSelection['selectionMode'];
};

const useMultiSelectListState = <T extends object>(
  props: MultiSelectListProps<T>
): MultiSelectListState<T> => {
  const {
    collection,
    disabledKeys,
    selectionManager,
    selectionManager: { setSelectedKeys, selectedKeys, selectionMode },
  } = useListState(props);

  const missingKeys: Key[] = [];

  const selectedItems =
    selectedKeys.size !== 0
      ? Array.from(selectedKeys)
          .map((key) => {
            const item = collection.getItem(key);

            if (!item) {
              missingKeys.push(key);
            }

            return item;
          })
          // Remove undefined values when some keys are not present in the collection
          .filter(Boolean)
      : null;

  if (missingKeys.length) {
    // eslint-disable-next-line no-console
    console.warn(
      `Select: Keys "${missingKeys.join(
        ', '
      )}" passed to "selectedKeys" are not present in the collection.`
    );
  }

  return {
    collection,
    disabledKeys,
    selectionManager,
    selectionMode,
    selectedKeys,
    setSelectedKeys: setSelectedKeys.bind(selectionManager),
    selectedItems,
  };
};

export { useMultiSelectListState };
export type { MultiSelectListState, MultiSelectListProps };
