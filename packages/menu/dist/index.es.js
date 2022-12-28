import './style.css';
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { cx } from "classix";
import { forwardRef, useCallback, useMemo, Children, cloneElement, useRef, useId, useState, useEffect } from "react";
import { useSeparator } from "@react-aria/separator";
import { Tooltip } from "@launchpad-ui/tooltip";
import { Slot } from "@radix-ui/react-slot";
import { FocusRing, useFocusManager } from "@react-aria/focus";
import { Link } from "react-router-dom";
import { TextField } from "@launchpad-ui/form";
import { useVirtual } from "react-virtual";
const Menu$1 = "";
const MenuBase = forwardRef(
  ({ children, size, isVirtual, ...props }, ref) => {
    const classes = cx("Menu", isVirtual && "Menu--isVirtual", size && `MenuSize--${size}`);
    return /* @__PURE__ */ jsx("div", { ...props, role: "menu", className: classes, ref, children });
  }
);
MenuBase.displayName = "MenuBase";
const MenuDivider = ({
  elementType = "div",
  orientation,
  innerRef,
  "data-test-id": testId = "menu-divider"
}) => {
  const { separatorProps } = useSeparator({
    orientation,
    elementType
  });
  return /* @__PURE__ */ jsx("div", { ...separatorProps, "data-test-id": testId, ref: innerRef, className: "Menu-divider" });
};
const defaultElement = "button";
const MenuItem = ({
  ...props
}) => {
  const {
    component,
    children,
    isHighlighted,
    icon: Icon,
    nested,
    groupHeader,
    item,
    disabled,
    className,
    tooltip,
    role = "menuitem",
    tooltipPlacement,
    onKeyDown,
    tooltipOptions,
    asChild,
    "data-test-id": testId = "menu-item",
    ...rest
  } = props;
  const Component = component || (asChild ? Slot : defaultElement);
  const renderedItem = /* @__PURE__ */ jsx(FocusRing, { focusRingClass: "has-focus", children: /* @__PURE__ */ jsx(
    Component,
    {
      ...rest,
      disabled,
      "aria-disabled": disabled ? disabled : void 0,
      className: cx(
        "Menu-item",
        className,
        isHighlighted && "is-highlighted",
        nested && "Menu-item--nested",
        groupHeader && "Menu-item--header"
      ),
      "data-test-id": testId,
      role,
      onKeyDown,
      children: asChild ? children : /* @__PURE__ */ jsxs(Fragment, { children: [
        Icon && /* @__PURE__ */ jsx("span", { className: "Menu-item-icon", children: /* @__PURE__ */ jsx(Icon, { size: "small" }) }),
        children
      ] })
    }
  ) });
  if (tooltip) {
    return /* @__PURE__ */ jsx(
      Tooltip,
      {
        content: tooltip,
        rootElementStyle: { display: "block" },
        allowBoundaryElementOverflow: true,
        placement: tooltipPlacement ? tooltipPlacement : "bottom",
        ...tooltipOptions || {},
        children: renderedItem
      }
    );
  }
  return renderedItem;
};
const MenuItemLink = ({
  to,
  disabled = false,
  useHistory = true,
  newTab = false,
  children,
  ...props
}) => {
  const finalProps = {
    ...props,
    disabled,
    component: useHistory ? Link : "a",
    [useHistory ? "to" : "href"]: disabled ? "" : to,
    rel: newTab ? "noopener noreferrer" : void 0,
    target: newTab ? "_blank" : void 0
  };
  return /* @__PURE__ */ jsx(MenuItem, { ...finalProps, children });
};
const MenuItemList = forwardRef(({ children, ...rest }, ref) => /* @__PURE__ */ jsx("div", { ...rest, ref, "data-test-id": "menu-item-list", className: "Menu-item-list", children }));
MenuItemList.displayName = "MenuItemList";
const MenuSearch = forwardRef((props, ref) => {
  const { ariaLabel, placeholder, "data-test-id": testId = "menu-search", ...finalProps } = props;
  return /* @__PURE__ */ jsx("div", { className: "Menu-search", children: /* @__PURE__ */ jsx(
    TextField,
    {
      ...finalProps,
      ref,
      className: "Menu-search-input",
      tiny: true,
      type: "search",
      "data-test-id": testId,
      autoComplete: "off",
      placeholder,
      "aria-label": ariaLabel || "Search"
    }
  ) });
});
MenuSearch.displayName = "MenuSearch";
const createItemId = (index, id) => `${id}-item-${index}`;
const getNodeForIndex = (index, menuId) => index === null ? index : document.getElementById(createItemId(index, menuId));
const handleKeyboardInteractions = (event, keyHandlers) => {
  var _a;
  const ops = {
    ArrowUp: keyHandlers.handleUp,
    ArrowDown: keyHandlers.handleDown,
    Enter: keyHandlers.handleEnter
  };
  if (ops[event.key]) {
    event.preventDefault();
    (_a = ops[event.key]) == null ? void 0 : _a.call(globalThis, event);
  }
};
const chainEventHandlers = (...handlers) => (event) => {
  handlers.forEach((h) => typeof h === "function" && h(event));
};
const Menu = (props) => {
  const {
    children,
    menuItemClassName,
    onSelect,
    enableVirtualization,
    itemHeight,
    size,
    overscan = 1,
    "data-test-id": testId = "menu"
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
      let searchElem = null;
      let elements = [];
      childrenProps.forEach((child) => {
        switch (child.type) {
          case MenuSearch:
            searchElem = child;
            break;
          case MenuItem:
          case MenuItemLink:
          case MenuDivider:
            elements = elements.concat(child);
            break;
        }
      });
      return { items: elements, searchElement: searchElem };
    }
    return childrenProps.reduce(
      ({ items, searchElement }, child) => {
        switch (child.type) {
          case MenuSearch:
            return {
              items,
              searchElement: cloneElement(child, {
                onKeyDown: (e) => handleKeyboardInteractions(e, {
                  handleDown: handleArrowDown,
                  handleUp: handleArrowUp
                })
              })
            };
          case MenuItem:
          case MenuItemLink:
            return {
              items: items.concat(
                child.props.disabled ? cloneElement(child, {
                  onClick: () => void 0,
                  onKeyDown: () => void 0,
                  tabIndex: -1,
                  disabled: true
                }) : cloneElement(child, {
                  className: cx(child.props.className, menuItemClassName),
                  item: child.props.item ?? items.length,
                  onClick: chainEventHandlers(child.props.onClick, () => {
                    onSelect == null ? void 0 : onSelect(child.props.item ?? items.length);
                  }),
                  onKeyDown: (e) => handleKeyboardInteractions(e, {
                    handleDown: handleArrowDown,
                    handleUp: handleArrowUp
                  })
                })
              ),
              searchElement
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
    return /* @__PURE__ */ jsx(MenuBase, { "data-test-id": testId, isVirtual: true, size, children: /* @__PURE__ */ jsx(
      ItemVirtualizer,
      {
        items: Children.toArray(reduceItems.items),
        searchElement: reduceItems.searchElement,
        overscan,
        menuItemClassName,
        onSelect,
        itemHeight,
        focusManager
      }
    ) });
  }
  return /* @__PURE__ */ jsxs(MenuBase, { "data-test-id": testId, size, children: [
    reduceItems.searchElement,
    /* @__PURE__ */ jsx(MenuItemList, { role: "presentation", children: reduceItems.items })
  ] });
};
const ItemVirtualizer = (props) => {
  const {
    overscan,
    searchElement,
    itemHeight = 33,
    menuItemClassName,
    items,
    focusManager,
    onSelect
  } = props;
  const menuId = useRef(`menu-ctrl-${useId()}`);
  const focusedItemIndex = useRef(null);
  const parentRef = useRef(null);
  const searchRef = useRef();
  const [nextFocusValue, setNextFocusValue] = useState(null);
  const hasSearch = !!searchElement;
  const lastVirtualItemIndex = items ? items.length - 1 : 0;
  const rowVirtualizer = useVirtual({
    size: items !== null ? items.length : 0,
    parentRef,
    estimateSize: useCallback(() => itemHeight, [itemHeight]),
    overscan
  });
  const focusSearchBar = useCallback(() => {
    var _a, _b;
    rowVirtualizer.scrollToIndex(0);
    (_b = (_a = searchRef.current) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
  }, [rowVirtualizer]);
  const focusMenuItem = useCallback(
    (index) => {
      rowVirtualizer.scrollToIndex(index);
      setNextFocusValue(index);
    },
    [rowVirtualizer]
  );
  const handleKeyboardFocusInteraction = useCallback(
    (direction) => {
      if (focusedItemIndex.current === null || focusedItemIndex.current === void 0) {
        return;
      }
      const nextIndex = direction === "next" ? focusedItemIndex.current + 1 : focusedItemIndex.current - 1;
      const shouldWrap = direction === "next" && focusedItemIndex.current === lastVirtualItemIndex || direction === "previous" && focusedItemIndex.current === 0;
      if (shouldWrap) {
        if (hasSearch) {
          focusSearchBar();
        } else {
          focusMenuItem(direction === "next" ? 0 : lastVirtualItemIndex);
        }
        return;
      }
      switch (direction) {
        case "next":
          rowVirtualizer.scrollToIndex(nextIndex);
          focusManager.focusNext();
          break;
        case "previous":
          rowVirtualizer.scrollToIndex(nextIndex);
          focusManager.focusPrevious();
          break;
      }
    },
    [focusManager, focusMenuItem, focusSearchBar, hasSearch, lastVirtualItemIndex, rowVirtualizer]
  );
  const getItemProps = useCallback(
    (itemElem, index) => {
      const childProps = itemElem.props;
      switch (itemElem.type) {
        case MenuItem:
        case MenuItemLink:
          return {
            className: cx(childProps.className, menuItemClassName),
            onKeyDown: childProps.disabled ? () => void 0 : (e) => handleKeyboardFocusKeydown(e, {
              handleFocusBackward: handleKeyboardFocusInteraction,
              handleFocusForward: handleKeyboardFocusInteraction
            }),
            onFocus: chainEventHandlers(childProps.onFocus, () => {
              focusedItemIndex.current = index;
            }),
            id: createItemId(index, menuId.current),
            onBlur: chainEventHandlers(childProps.onBlur, () => {
              focusedItemIndex.current = null;
            }),
            onClick: childProps.disabled ? () => void 0 : chainEventHandlers(childProps.onClick, () => {
              onSelect == null ? void 0 : onSelect(childProps.item);
            })
          };
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
        element == null ? void 0 : element.focus();
      });
      setNextFocusValue(null);
    }
  }, [nextFocusValue]);
  const handleKeyboardFocusKeydown = (e, callbacks) => {
    var _a, _b;
    const keyOps = ["Tab", "ArrowUp", "ArrowDown"];
    if (keyOps.includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      if (e.key === "Tab" && e.shiftKey || e.key === "ArrowUp") {
        (_a = callbacks.handleFocusBackward) == null ? void 0 : _a.call(callbacks, "previous");
      } else if (e.key === "ArrowDown" || e.key === "Tab") {
        (_b = callbacks.handleFocusForward) == null ? void 0 : _b.call(callbacks, "next");
      }
    }
  };
  const renderSearch = useMemo(
    () => searchElement ? cloneElement(searchElement, {
      onKeyDown: (e) => handleKeyboardFocusKeydown(e, {
        handleFocusBackward: () => focusMenuItem(lastVirtualItemIndex),
        handleFocusForward: () => focusMenuItem(0)
      }),
      ref: searchRef
    }) : null,
    [searchElement, lastVirtualItemIndex, focusMenuItem]
  );
  const renderItems = useMemo(
    () => rowVirtualizer.virtualItems.map((virtualRow) => {
      if (!items) {
        return null;
      }
      const elem = items[virtualRow.index];
      return /* @__PURE__ */ jsx(
        "div",
        {
          ref: elem.type !== MenuItem || elem.type !== MenuItemLink ? virtualRow.measureRef : void 0,
          role: "presentation",
          className: cx("VirtualMenu-item"),
          style: {
            transform: `translateY(${virtualRow.start}px)`
          },
          children: cloneElement(elem, getItemProps(elem, virtualRow.index))
        },
        virtualRow.index
      );
    }),
    [rowVirtualizer.virtualItems, items, getItemProps]
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    renderSearch,
    /* @__PURE__ */ jsx(MenuItemList, { ref: parentRef, role: "presentation", children: /* @__PURE__ */ jsx(
      "div",
      {
        role: "presentation",
        className: "VirtualMenu-item-list",
        style: {
          height: `${rowVirtualizer.totalSize}px`
        },
        children: renderItems
      }
    ) })
  ] });
};
export {
  Menu,
  MenuBase,
  MenuDivider,
  MenuItem,
  MenuItemLink,
  MenuItemList,
  MenuSearch
};
//# sourceMappingURL=index.es.js.map
