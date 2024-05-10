import type { Collection, Node } from '@react-types/shared';
import type { FilterFn, SharedSelectProps } from './types';

import { ListCollection } from '@react-stately/list';
import { useCallback, useMemo } from 'react';
/* c8 ignore start */
const useFilteredCollection = <T extends object>(
	props: SharedSelectProps<T>,
	collection: Collection<Node<T>>,
): Collection<Node<T>> => {
	const { hasFilter, defaultFilter, filterValue, items } = props;

	const filter = useCallback(
		(string: string, substring: string) => string.toLowerCase().includes(substring.toLowerCase()),
		[],
	);

	return useMemo(() => {
		// No default filter if items are controlled.
		return !hasFilter || items != null
			? collection
			: filterCollection(collection, filterValue, defaultFilter || filter);
	}, [collection, hasFilter, filterValue, defaultFilter, items, filter]);
};

const filterCollection = <T extends object>(
	collection: Collection<Node<T>>,
	// biome-ignore lint/style/useDefaultParameterLast: <explanation>
	inputValue = '',
	filter: FilterFn,
): Collection<Node<T>> => {
	return new ListCollection(filterNodes(collection, inputValue, filter));
};

const filterNodes = <T>(
	nodes: Iterable<Node<T>>,
	inputValue: string,
	filter: FilterFn,
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
/* c8 ignore end */

export { useFilteredCollection };
