import type { MenuItemProps } from './MenuItem';
import type { MenuSize } from './types';
import type { FocusManager } from '@react-aria/focus';
import type { KeyboardEvent, ReactElement } from 'react';

import { useFocusManager } from '@react-aria/focus';
import cx from 'clsx';
import { isNil, noop } from 'lodash-es';
import { Children, cloneElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useVirtual } from 'react-virtual';
import { v4 } from 'uuid';

import { MenuBase } from './MenuBase';
import { MenuDivider } from './MenuDivider';
import { MenuItem, MenuItemLink } from './MenuItem';
import { MenuItemList } from './MenuItemList';
import { MenuSearch } from './MenuSearch';
import {
  chainEventHandlers,
  createItemId,
  getNodeForIndex,
  handleKeyboardInteractions,
} from './utils';

type ControlledMenuProps<T> = {
  children: React.ReactNode;
  onSelect?: (item: T) => void;
  /**
   * Menus items are rendered using react-virtual for
   * additional rendering performance.
   */
  enableVirtualization?: boolean;
  /**
   * Class name to be applied to all MenuItem and MenuItemLink components
   * in the menu.
   */
  menuItemClassName?: string;
  /**
   * Sets the width of the menu. This is especially useful when using virtual items
   * since the width cannot be automatically set by the widest element.
   */
  size?: MenuSize;
  /**
   * Sets the number out of elements rendered outside of the view window
   * when using virtualization
   */
  overscan?: number;
  /**
   * Sets the height for each menu item when using virtualization.
   *
   */
  itemHeight?: number;
};

type MenuProps<T extends number | string> = ControlledMenuProps<T>;

const Menu = <T extends number | string>(props: MenuProps<T>) => {
  const {
    children,
    menuItemClassName,
    onSelect,
    enableVirtualization,
    itemHeight,
    size,
    overscan = 1,
  } = props;

  const focusManager = useFocusManager();

  const handleArrowDown = useCallback(() => {
    focusManager.focusNext({ wrap: true });
  }, [focusManager]);

  const handleArrowUp = useCallback(() => {
    focusManager.focusPrevious({ wrap: true });
  }, [focusManager]);

  const reduceItems = useMemo(() => {
    const childrenProps = Children.toArray(children);
    if (enableVirtualization) {
      // the virtualized menu has its own handlers and props
      let searchElem = null;
      let elements: ReactElement[] = [];
      (childrenProps as ReactElement[]).forEach((child: ReactElement) => {
        switch (child.type) {
          case MenuSearch:
            searchElem = child;
            break;
          case MenuItem:
          case MenuItemLink:
          case MenuDivider:
            elements = elements.concat(child);
            break;
          default:
            break;
        }
      });
      return { items: elements, searchElement: searchElem };
    }

    return (childrenProps as ReactElement[]).reduce(
      (
        { items, searchElement }: { items: ReactElement[]; searchElement: null | ReactElement },
        child
      ) => {
        switch (child.type) {
          case MenuSearch:
            return {
              items,
              searchElement: cloneElement(child, {
                onKeyDown: (e: KeyboardEvent) =>
                  handleKeyboardInteractions(e, {
                    handleDown: handleArrowDown,
                    handleUp: handleArrowUp,
                  }),
              }),
            };
          case MenuItem:
          case MenuItemLink:
            return {
              items: items.concat(
                child.props.disabled
                  ? cloneElement(child, {
                      onClick: noop,
                      onKeyDown: noop,
                      tabIndex: -1,
                      disabled: true,
                    })
                  : cloneElement(child, {
                      className: cx(child.props.className, menuItemClassName),
                      item: child.props.item ?? items.length,
                      // set focus on the first menu item if there is no search input, and set in the tab order
                      onClick: chainEventHandlers(child.props.onClick, () => {
                        onSelect?.(child.props.item ?? items.length);
                      }),
                      onKeyDown: (e: KeyboardEvent) =>
                        handleKeyboardInteractions(e, {
                          handleDown: handleArrowDown,
                          handleUp: handleArrowUp,
                        }),
                    })
              ),
              searchElement,
            };
          case MenuDivider:
            return { items: items.concat(child), searchElement };
          default:
            return { items, searchElement };
        }
      },
      { items: [], searchElement: null }
    );
  }, [children, enableVirtualization, menuItemClassName, handleArrowDown, handleArrowUp, onSelect]);

  if (enableVirtualization) {
    return (
      <MenuBase isVirtual size={size} role="menu">
        <ItemVirtualizer<T>
          items={Children.toArray(reduceItems.items) as ReactElement[]}
          searchElement={reduceItems.searchElement}
          overscan={overscan}
          menuItemClassName={menuItemClassName}
          onSelect={onSelect}
          itemHeight={itemHeight}
          focusManager={focusManager}
        />
      </MenuBase>
    );
  }

  return (
    <MenuBase size={size} role="menu">
      {reduceItems.searchElement}
      <MenuItemList role="presentation">{reduceItems.items}</MenuItemList>
    </MenuBase>
  );
};

type ItemVirtualizerProps<T> = Omit<ControlledMenuProps<T>, 'children'> & {
  items: ReactElement[] | null;
  searchElement?: React.ReactElement | null;
  focusManager: FocusManager;
};

const ItemVirtualizer = <T extends number | string>(props: ItemVirtualizerProps<T>) => {
  const {
    overscan,
    searchElement,
    itemHeight = 33,
    menuItemClassName,
    items: items,
    focusManager,
    onSelect,
  } = props;

  const menuId = useRef(`menu-ctrl-${v4()}`);

  const focusedItemIndex = useRef<number | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLInputElement>();

  const [nextFocusValue, setNextFocusValue] = useState<number | null>(null);

  const hasSearch = !!searchElement;

  const lastVirtualItemIndex = items ? items.length - 1 : 0;

  const rowVirtualizer = useVirtual({
    size: items !== null ? items.length : 0,
    parentRef,
    estimateSize: useCallback(() => itemHeight, [itemHeight]),
    overscan,
  });

  const focusSearchBar = useCallback(() => {
    rowVirtualizer.scrollToIndex(0);
    searchRef.current?.focus?.();
  }, [rowVirtualizer]);

  /**
   * Scrolls to the menu item with the index provided and
   * then manually focuses it using a side effect in useEffect
   */
  const focusMenuItem = useCallback(
    (index: number) => {
      rowVirtualizer.scrollToIndex(index);
      setNextFocusValue(index);
    },
    [rowVirtualizer]
  );

  const handleKeyboardFocusInteraction = useCallback(
    (direction: 'next' | 'previous') => {
      if (isNil(focusedItemIndex.current)) {
        return;
      }
      const nextIndex =
        direction === 'next' ? focusedItemIndex.current + 1 : focusedItemIndex.current - 1;
      const shouldWrap =
        (direction === 'next' && focusedItemIndex.current === lastVirtualItemIndex) ||
        (direction === 'previous' && focusedItemIndex.current === 0);
      if (shouldWrap) {
        // we are at the end of the list so we will
        // scroll back to the beginning of the list
        if (hasSearch) {
          focusSearchBar();
        } else {
          // if at end, wrap to beginning, else focus last item
          focusMenuItem(direction === 'next' ? 0 : lastVirtualItemIndex);
        }
        return;
      }
      switch (direction) {
        case 'next':
          rowVirtualizer.scrollToIndex(nextIndex);
          focusManager.focusNext();
          break;
        case 'previous':
          rowVirtualizer.scrollToIndex(nextIndex);
          focusManager.focusPrevious();
          break;
        default:
          break;
      }
    },
    [focusManager, focusMenuItem, focusSearchBar, hasSearch, lastVirtualItemIndex, rowVirtualizer]
  );

  const getItemProps = useCallback(
    (itemElem: ReactElement, index: number) => {
      const childProps = itemElem.props as MenuItemProps<T>;
      switch (itemElem.type) {
        case MenuItem:
        case MenuItemLink:
          return {
            className: cx(childProps.className, menuItemClassName),
            // set focus on the first menu item if there is no search input, and set in the tab order
            onKeyDown: childProps.disabled
              ? noop
              : (e: KeyboardEvent) =>
                  handleKeyboardFocusKeydown(e, {
                    handleFocusBackward: handleKeyboardFocusInteraction,
                    handleFocusForward: handleKeyboardFocusInteraction,
                  }),
            onFocus: chainEventHandlers(childProps.onFocus, () => {
              focusedItemIndex.current = index;
            }),
            id: createItemId(index, menuId.current),
            onBlur: chainEventHandlers(childProps.onBlur, () => {
              focusedItemIndex.current = null;
            }),
            onClick: childProps.disabled
              ? noop
              : chainEventHandlers(childProps.onClick, () => {
                  onSelect?.(childProps.item as T);
                }),
          } as MenuItemProps<T>;
        default:
          return {};
      }
    },
    [handleKeyboardFocusInteraction, menuItemClassName, onSelect]
  );

  useEffect(() => {
    if (nextFocusValue !== null) {
      requestAnimationFrame(() => {
        const element = getNodeForIndex(nextFocusValue, menuId.current);
        element?.focus();
      });
      setNextFocusValue(null);
    }
  }, [nextFocusValue]);

  /**
   * Calls handleFocusForward when the user is attempting to focus forward using
   * tab or arrow keys. Calls handleFocusBackward when the users wants to move backward.
   */
  const handleKeyboardFocusKeydown = (
    e: KeyboardEvent,
    callbacks: Record<
      'handleFocusForward' | 'handleFocusBackward',
      (direction: 'next' | 'previous') => void
    >
  ) => {
    const keyOps = ['Tab', 'ArrowUp', 'ArrowDown'];
    if (keyOps.includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      if ((e.key === 'Tab' && e.shiftKey) || e.key === 'ArrowUp') {
        callbacks.handleFocusBackward?.('previous');
      } else if (e.key === 'ArrowDown' || e.key === 'Tab') {
        callbacks.handleFocusForward?.('next');
      }
    }
  };

  const renderSearch = useMemo(
    () =>
      searchElement
        ? cloneElement(searchElement, {
            onKeyDown: (e: KeyboardEvent) =>
              handleKeyboardFocusKeydown(e, {
                handleFocusBackward: () => focusMenuItem(lastVirtualItemIndex),
                handleFocusForward: () => focusMenuItem(0),
              }),
            ref: searchRef,
          })
        : null,
    [searchElement, lastVirtualItemIndex, focusMenuItem]
  );

  const renderItems = useMemo(
    () =>
      rowVirtualizer.virtualItems.map((virtualRow) => {
        if (!items) {
          return null;
        }
        const elem = items[virtualRow.index];
        return (
          <div
            key={virtualRow.index}
            ref={
              elem.type !== MenuItem || elem.type !== MenuItemLink
                ? virtualRow.measureRef
                : undefined
            }
            role="presentation"
            className={cx('VirtualMenu-item')}
            style={{
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            {cloneElement(elem, getItemProps(elem, virtualRow.index))}
          </div>
        );
      }),
    [rowVirtualizer.virtualItems, items, getItemProps]
  );

  return (
    <>
      {renderSearch}
      <MenuItemList ref={parentRef} role="presentation">
        <div
          role="presentation"
          className="VirtualMenu-item-list"
          style={{
            height: `${rowVirtualizer.totalSize}px`,
          }}
        >
          {renderItems}
        </div>
      </MenuItemList>
    </>
  );
};

export { Menu, ItemVirtualizer };
export type { MenuProps, ItemVirtualizerProps };
