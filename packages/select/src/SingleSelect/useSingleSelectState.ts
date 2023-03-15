import type { SingleSelectProps } from './SingleSelect';
import type { MenuTriggerAction, SharedSelectState } from '../types';
import type { SingleSelectListState } from '@react-stately/list';
import type { FocusStrategy } from '@react-types/shared';
import type { Key } from 'react';

import { useSingleSelectListState } from '@react-stately/list';
import { useMenuTriggerState } from '@react-stately/menu';
import { useControlledState } from '@react-stately/utils';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { useFilteredCollection } from '../useFilter';

type SingleSelectState<T extends object> = SingleSelectListState<T> & SharedSelectState;

/* c8 ignore start */

const useSingleSelectState = <T extends object>(
  props: SingleSelectProps<T>
): SingleSelectState<T> => {
  const {
    allowsCustomValue,
    allowsEmptyCollection = true,
    menuTrigger = 'input',
    shouldCloseOnBlur = true,
  } = props;

  const [showAllItems, setShowAllItems] = useState(false);
  const [isFocused, setFocusedState] = useState(false);
  const [filterValue, setFilterValue] = useControlledState(
    props.filterValue as string,
    props.defaultFilterValue ?? '',
    props.onFilterChange as (value: string, ...args: unknown[]) => void
  );

  const onSelectionChange = (key: Key) => {
    if (props.onSelectionChange) {
      props.onSelectionChange(key);
    }

    // If key is the same, reset the filterValue and close the menu
    // (scenario: user clicks on already selected option)
    if (key === selectedKey) {
      resetFilterValue();
      closeMenu();
    }
  };

  const { collection, selectionManager, selectedKey, setSelectedKey, selectedItem, disabledKeys } =
    useSingleSelectListState({
      ...props,
      items: props.items ?? props.defaultItems,
      onSelectionChange,
    });

  // Preserve original collection so we can show all items on demand
  const originalCollection = collection;
  const filteredCollection = useFilteredCollection(
    { ...props, filterValue, onFilterChange: setFilterValue },
    collection
  );

  const [lastCollection, setLastCollection] = useState(filteredCollection);

  // Track what action is attempting to open the menu
  const menuOpenTrigger = useRef<MenuTriggerAction | undefined>('focus');
  const onOpenChange = (open: boolean) => {
    if (props.onOpenChange) {
      props.onOpenChange(open, open ? menuOpenTrigger.current : undefined);
    }
  };

  const { trigger: _trigger, ...menuTriggerStateProps } = props;
  const triggerState = useMenuTriggerState({
    ...menuTriggerStateProps,
    onOpenChange,
    isOpen: undefined,
    defaultOpen: undefined,
  });

  const open = (focusStrategy?: FocusStrategy, trigger?: MenuTriggerAction) => {
    console.log('opening');
    const displayAllItems =
      trigger === 'manual' || (trigger === 'focus' && menuTrigger === 'focus');
    // Prevent open operations from triggering if there is nothing to display
    // Also prevent open operations from triggering if items are uncontrolled but defaultItems is empty, even if displayAllItems is true.
    // This is to prevent comboboxes with empty defaultItems from opening but allow controlled items comboboxes to open even if the inital list is empty (assumption is user will provide swap the empty list with a base list via onOpenChange returning `menuTrigger` manual)
    if (
      allowsEmptyCollection ||
      filteredCollection.size > 0 ||
      (displayAllItems && originalCollection.size > 0) ||
      props.items
    ) {
      if (displayAllItems && !triggerState.isOpen && props.items === undefined) {
        // Show all items if menu is manually opened. Only care about this if items are undefined
        setShowAllItems(true);
      }

      if (filteredCollection.size > 0) {
        console.log('setting focused key to ', filteredCollection.getFirstKey());
        selectionManager.setFocusedKey(filteredCollection.getFirstKey());
      }

      menuOpenTrigger.current = trigger;
      triggerState.open(focusStrategy);
    }
  };

  const toggle = (focusStrategy?: FocusStrategy, trigger?: MenuTriggerAction) => {
    const displayAllItems =
      trigger === 'manual' || (trigger === 'focus' && menuTrigger === 'focus');
    // If the menu is closed and there is nothing to display, early return so toggle isn't called to prevent extraneous onOpenChange
    if (
      !(
        allowsEmptyCollection ||
        filteredCollection.size > 0 ||
        (displayAllItems && originalCollection.size > 0) ||
        props.items
      ) &&
      !triggerState.isOpen
    ) {
      return;
    }

    if (displayAllItems && !triggerState.isOpen && props.items === undefined) {
      // Show all items if menu is toggled open. Only care about this if items are undefined
      setShowAllItems(true);
    }

    // Only update the menuOpenTrigger if menu is currently closed
    if (!triggerState.isOpen) {
      menuOpenTrigger.current = trigger;
    }

    toggleMenu(focusStrategy);
  };

  // If menu is going to close, save the current collection so we can freeze the displayed collection when the
  // user clicks outside the popover to close the menu. Prevents the menu contents from updating as the menu closes.
  const toggleMenu = useCallback(
    (focusStrategy?: FocusStrategy) => {
      if (triggerState.isOpen) {
        setLastCollection(filteredCollection);
      }

      triggerState.toggle(focusStrategy);
    },
    [triggerState, filteredCollection]
  );

  const closeMenu = useCallback(() => {
    if (triggerState.isOpen) {
      setLastCollection(filteredCollection);
      triggerState.close();
    }
  }, [triggerState, filteredCollection]);

  const lastFilterValue = useRef(filterValue);
  const resetFilterValue = () => {
    const itemText = collection.getItem(selectedKey)?.textValue ?? '';
    lastFilterValue.current = itemText;
    setFilterValue(itemText);
  };

  const isInitialRender = useRef(true);
  const lastSelectedKey = useRef(props.selectedKey ?? props.defaultSelectedKey ?? null);
  const lastSelectedKeyText = useRef(collection.getItem(selectedKey)?.textValue ?? '');
  // intentional omit dependency array, want this to happen on every render
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // Open and close menu automatically when the input value changes if the input is focused,
    // and there are items in the collection or allowEmptyCollection is true.
    if (
      isFocused &&
      (filteredCollection.size > 0 || allowsEmptyCollection) &&
      !triggerState.isOpen &&
      filterValue !== lastFilterValue.current &&
      menuTrigger !== 'manual'
    ) {
      open(undefined, 'input');
    }

    // Close the menu if the collection is empty. Don't close menu if filtered collection size is 0
    // but we are currently showing all items via button press
    if (
      !showAllItems &&
      !allowsEmptyCollection &&
      triggerState.isOpen &&
      filteredCollection.size === 0
    ) {
      closeMenu();
    }

    // Close when an item is selected.
    if (selectedKey != null && selectedKey !== lastSelectedKey.current) {
      closeMenu();
    }

    // Clear focused key when input value changes and display filtered collection again.
    if (filterValue !== lastFilterValue.current) {
      selectionManager.setFocusedKey(null);
      setShowAllItems(false);

      // Set selectedKey to null when the user clears the input.
      // If controlled, this is the application developer's responsibility.
      if (
        filterValue === '' &&
        (props.filterValue === undefined || props.selectedKey === undefined)
      ) {
        setSelectedKey(null as unknown as Key);
      }
    }

    // If it is the intial render and filterValue isn't controlled nor has an initial value, set input to match current selected key if any
    if (
      isInitialRender.current &&
      props.filterValue === undefined &&
      props.defaultFilterValue === undefined
    ) {
      resetFilterValue();
    }

    // If the selectedKey changed, update the input value.
    // Do nothing if both filterValue and selectedKey are controlled.
    // In this case, it's the user's responsibility to update filterValue in onSelectionChange.
    if (
      selectedKey !== lastSelectedKey.current &&
      (props.filterValue === undefined || props.selectedKey === undefined)
    ) {
      resetFilterValue();
    } else {
      lastFilterValue.current = filterValue;
    }

    // Update the filterValue if the selected item's text changes from its last tracked value.
    // This is to handle cases where a selectedKey is specified but the items aren't available (async loading) or the selected item's text value updates.
    // Only reset if the user isn't currently within the field so we don't erroneously modify user input.
    // If filterValue is controlled, it is the user's responsibility to update the filterValue when items change.
    const selectedItemText = collection.getItem(selectedKey)?.textValue ?? '';
    if (
      !isFocused &&
      selectedKey != null &&
      props.filterValue === undefined &&
      selectedKey === lastSelectedKey.current
    ) {
      if (lastSelectedKeyText.current !== selectedItemText) {
        lastFilterValue.current = selectedItemText;
        setFilterValue(selectedItemText);
      }
    }

    isInitialRender.current = false;
    lastSelectedKey.current = selectedKey;
    lastSelectedKeyText.current = selectedItemText;
  });

  useEffect(() => {
    // Reset focused key when the menu closes
    if (!triggerState.isOpen) {
      selectionManager.setFocusedKey(null);
    }
  }, [triggerState.isOpen, selectionManager]);

  // Revert input value and close menu
  const revert = () => {
    if (allowsCustomValue && selectedKey == null) {
      commitCustomValue();
    } else {
      commitSelection();
    }
  };

  const commitCustomValue = () => {
    console.log('communtting custom');
    lastSelectedKey.current = null;
    setSelectedKey(null as unknown as Key);
    closeMenu();
  };

  const commitSelection = () => {
    // If multiple things are controlled, call onSelectionChange
    if (props.selectedKey !== undefined && props.filterValue !== undefined) {
      if (props.onSelectionChange) props.onSelectionChange(selectedKey);

      // Stop menu from reopening from useEffect
      const itemText = collection.getItem(selectedKey)?.textValue ?? '';
      lastFilterValue.current = itemText;
      closeMenu();
    } else {
      // If only a single aspect of select is controlled, reset filter value and close menu for the user
      resetFilterValue();
      closeMenu();
    }
  };

  const commit = () => {
    if (triggerState.isOpen && selectionManager.focusedKey != null) {
      // Reset inputValue and close menu here if the selected key is already the focused key. Otherwise
      // fire onSelectionChange to allow the application to control the closing.
      if (selectedKey === selectionManager.focusedKey) {
        commitSelection();
      } else {
        setSelectedKey(selectionManager.focusedKey);
      }
    } else if (allowsCustomValue) {
      commitCustomValue();
    } else {
      // Reset inputValue and close menu if no item is focused but user triggers a commit
      commitSelection();
    }
  };

  const close = () => {
    const itemText = collection.getItem(selectedKey)?.textValue ?? '';
    if (allowsCustomValue && filterValue !== itemText) {
      commitCustomValue();
    } else {
      commitSelection();
    }
    closeMenu();
  };

  const setFocused = (isFocused: boolean) => {
    if (isFocused) {
      if (menuTrigger === 'focus') {
        open(undefined, 'focus');
      }
    } else if (shouldCloseOnBlur) {
      close();
    }

    setFocusedState(isFocused);
  };

  const displayedCollection = useMemo(() => {
    if (triggerState.isOpen) {
      if (showAllItems) {
        return originalCollection;
      } else {
        return filteredCollection;
      }
    } else {
      return lastCollection;
    }
  }, [triggerState.isOpen, originalCollection, filteredCollection, showAllItems, lastCollection]);

  return {
    ...triggerState,
    toggle,
    open,
    close,
    selectionManager,
    selectedKey,
    setSelectedKey,
    disabledKeys,
    isFocused,
    setFocused,
    selectedItem,
    collection: displayedCollection,
    filterValue,
    setFilterValue,
    commit,
    revert,
  };
};

/* c8 ignore end */

export { useSingleSelectState };
export type { SingleSelectState };
