import type { FilterFn, SharedSelectProps } from './types';
import type { ListState } from '@react-stately/list';
import type { Collection, Node } from '@react-types/shared';

import { useFilter } from '@react-aria/i18n';
import { ListCollection } from '@react-stately/list';
import { useMemo } from 'react';

const useFilteredCollection = <T extends object>(
  props: SharedSelectProps<T>,
  state: ListState<T>
) => {
  const { hasFilter, defaultFilter, filterValue, items } = props;
  const { collection } = state;
  const { contains } = useFilter({ sensitivity: 'base' });

  return useMemo(() => {
    // No default filter if items are controlled.
    return !hasFilter || items != null
      ? collection
      : filterCollection(collection, filterValue, defaultFilter || contains);
  }, [collection, hasFilter, filterValue, defaultFilter, items, contains]);
};

const filterCollection = <T extends object>(
  collection: Collection<Node<T>>,
  inputValue = '',
  filter: FilterFn
): Collection<Node<T>> => {
  return new ListCollection(filterNodes(collection, inputValue, filter));
};

const filterNodes = <T>(
  nodes: Iterable<Node<T>>,
  inputValue: string,
  filter: FilterFn
): Iterable<Node<T>> => {
  const filteredNode = [];
  for (const node of nodes) {
    if (node.type === 'section' && node.hasChildNodes) {
      const filtered = filterNodes(node.childNodes, inputValue, filter);
      if ([...filtered].length > 0) {
        filteredNode.push({ ...node, childNodes: filtered });
      }
    } else if (node.type !== 'section' && filter(node.textValue, inputValue)) {
      filteredNode.push({ ...node });
    }
  }
  return filteredNode;
};

export { useFilteredCollection };
