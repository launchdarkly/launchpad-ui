import type { SingleSelectListState } from '@react-stately/list';
import type { SelectionMode } from '@react-types/shared';
import type { SharedSelectState } from '../types';
import type { SingleSelectProps } from './SingleSelect';

import { useSingleSelectListState } from '@react-stately/list';
import { useMenuTriggerState } from '@react-stately/menu';
import { useControlledState } from '@react-stately/utils';
import { useEffect, useState } from 'react';

import { useFilteredCollection } from '../useFilter';

type SingleSelectState<T extends object> = SingleSelectListState<T> &
	SharedSelectState & { selectionMode: SelectionMode };

/* c8 ignore start */

const useSingleSelectState = <T extends object>(
	props: SingleSelectProps<T>,
): SingleSelectState<T> => {
	const [isFocused, setFocused] = useState(false);

	const [filterValue, setFilterValue] = useControlledState(
		props.filterValue as string,
		props.defaultFilterValue ?? '',
		props.onFilterChange as (value: string, ...args: unknown[]) => void,
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
	const { selectionManager, selectedKey, setSelectedKey, collection } = listState;

	const filteredCollection = useFilteredCollection(
		{ ...props, filterValue, onFilterChange: setFilterValue },
		collection,
	);

	const commitCustomValue = () => {
		// lastSelectedKey.current = null;
		setSelectedKey(null);
		triggerState.close();
	};

	// Revert input value and close menu
	const revert = () => {
		if (props.allowsCustomValue && selectedKey == null) {
			commitCustomValue();
		} else {
			commitSelection();
		}
	};

	const commitSelection = () => {
		// If multiple things are controlled, call onSelectionChange
		if (props.selectedKey !== undefined && props.filterValue !== undefined) {
			if (props.onSelectionChange && selectedKey !== null) props.onSelectionChange(selectedKey);

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
		if (triggerState.isOpen && selectionManager.focusedKey != null) {
			// Reset filterValue and close menu here if the selected key is already the focused key. Otherwise
			// fire onSelectionChange to allow the application to control the closing.
			if (selectedKey === selectionManager.focusedKey) {
				commitSelection();
			} else {
				setSelectedKey(selectionManager.focusedKey);
			}
		} else {
			// Reset filterValue and close menu if no item is focused but user triggers a commit
			commitSelection();
		}

		// else if (allowsCustomValue) {
		// commitCustomValue();
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		// Reset focused key when the menu closes
		if (triggerState.isOpen && collection.size !== 0) {
			selectionManager.setFocusedKey(collection.getFirstKey());
		} else {
			selectionManager.setFocusedKey(null);
		}
	}, [triggerState.isOpen, collection]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (filteredCollection.size !== 0) {
			selectionManager.setFocusedKey(filteredCollection.getFirstKey());
		} else {
			selectionManager.setFocusedKey(null);
		}
	}, [filteredCollection]);

	return {
		...listState,
		...triggerState,
		selectionMode: 'single',
		close() {
			setFilterValue('');
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

/* c8 ignore end */

export { useSingleSelectState };
export type { SingleSelectState };
