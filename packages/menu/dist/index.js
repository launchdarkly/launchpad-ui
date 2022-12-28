require('./style.css');
"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const classix = require("classix");
const react = require("react");
const jsxRuntime = require("react/jsx-runtime");
const separator = require("@react-aria/separator");
const tooltip = require("@launchpad-ui/tooltip");
const reactSlot = require("@radix-ui/react-slot");
const focus = require("@react-aria/focus");
const reactRouterDom = require("react-router-dom");
const form = require("@launchpad-ui/form");
const reactVirtual = require("react-virtual");
const Menu$1 = "";
const MenuBase = react.forwardRef(({
  children,
  size,
  isVirtual,
  ...props
}, ref) => {
  const classes = classix.cx("Menu", isVirtual && "Menu--isVirtual", size && `MenuSize--${size}`);
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    ...props,
    role: "menu",
    className: classes,
    ref,
    children
  });
});
MenuBase.displayName = "MenuBase";
const MenuDivider = ({
  elementType = "div",
  orientation,
  innerRef,
  "data-test-id": testId = "menu-divider"
}) => {
  const {
    separatorProps
  } = separator.useSeparator({
    orientation,
    elementType
  });
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    ...separatorProps,
    "data-test-id": testId,
    ref: innerRef,
    className: "Menu-divider"
  });
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
    tooltip: tooltip$1,
    role = "menuitem",
    tooltipPlacement,
    onKeyDown,
    tooltipOptions,
    asChild,
    "data-test-id": testId = "menu-item",
    ...rest
  } = props;
  const Component = component || (asChild ? reactSlot.Slot : defaultElement);
  const renderedItem = /* @__PURE__ */ jsxRuntime.jsx(focus.FocusRing, {
    focusRingClass: "has-focus",
    children: /* @__PURE__ */ jsxRuntime.jsx(Component, {
      ...rest,
      disabled,
      "aria-disabled": disabled ? disabled : void 0,
      className: classix.cx("Menu-item", className, isHighlighted && "is-highlighted", nested && "Menu-item--nested", groupHeader && "Menu-item--header"),
      "data-test-id": testId,
      role,
      onKeyDown,
      children: asChild ? children : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [Icon && /* @__PURE__ */ jsxRuntime.jsx("span", {
          className: "Menu-item-icon",
          children: /* @__PURE__ */ jsxRuntime.jsx(Icon, {
            size: "small"
          })
        }), children]
      })
    })
  });
  if (tooltip$1) {
    return /* @__PURE__ */ jsxRuntime.jsx(tooltip.Tooltip, {
      content: tooltip$1,
      rootElementStyle: {
        display: "block"
      },
      allowBoundaryElementOverflow: true,
      placement: tooltipPlacement ? tooltipPlacement : "bottom",
      ...tooltipOptions || {},
      children: renderedItem
    });
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
    component: useHistory ? reactRouterDom.Link : "a",
    [useHistory ? "to" : "href"]: disabled ? "" : to,
    rel: newTab ? "noopener noreferrer" : void 0,
    target: newTab ? "_blank" : void 0
  };
  return /* @__PURE__ */ jsxRuntime.jsx(MenuItem, {
    ...finalProps,
    children
  });
};
const MenuItemList = react.forwardRef(({
  children,
  ...rest
}, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", {
  ...rest,
  ref,
  "data-test-id": "menu-item-list",
  className: "Menu-item-list",
  children
}));
MenuItemList.displayName = "MenuItemList";
const MenuSearch = react.forwardRef((props, ref) => {
  const {
    ariaLabel,
    placeholder,
    "data-test-id": testId = "menu-search",
    ...finalProps
  } = props;
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    className: "Menu-search",
    children: /* @__PURE__ */ jsxRuntime.jsx(form.TextField, {
      ...finalProps,
      ref,
      className: "Menu-search-input",
      tiny: true,
      type: "search",
      "data-test-id": testId,
      autoComplete: "off",
      placeholder,
      "aria-label": ariaLabel || "Search"
    })
  });
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
  const focusManager = focus.useFocusManager();
  const handleArrowDown = react.useCallback(() => {
    focusManager.focusNext({
      wrap: true
    });
  }, [focusManager]);
  const handleArrowUp = react.useCallback(() => {
    focusManager.focusPrevious({
      wrap: true
    });
  }, [focusManager]);
  const reduceItems = react.useMemo(() => {
    const childrenProps = react.Children.toArray(children);
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
      return {
        items: elements,
        searchElement: searchElem
      };
    }
    return childrenProps.reduce(({
      items,
      searchElement
    }, child) => {
      var _a;
      switch (child.type) {
        case MenuSearch:
          return {
            items,
            searchElement: react.cloneElement(child, {
              onKeyDown: (e) => handleKeyboardInteractions(e, {
                handleDown: handleArrowDown,
                handleUp: handleArrowUp
              })
            })
          };
        case MenuItem:
        case MenuItemLink:
          return {
            items: items.concat(child.props.disabled ? react.cloneElement(child, {
              onClick: () => void 0,
              onKeyDown: () => void 0,
              tabIndex: -1,
              disabled: true
            }) : react.cloneElement(child, {
              className: classix.cx(child.props.className, menuItemClassName),
              item: (_a = child.props.item) != null ? _a : items.length,
              onClick: chainEventHandlers(child.props.onClick, () => {
                var _a2;
                onSelect == null ? void 0 : onSelect((_a2 = child.props.item) != null ? _a2 : items.length);
              }),
              onKeyDown: (e) => handleKeyboardInteractions(e, {
                handleDown: handleArrowDown,
                handleUp: handleArrowUp
              })
            })),
            searchElement
          };
        case MenuDivider:
          return {
            items: items.concat(child),
            searchElement
          };
        default:
          return {
            items,
            searchElement
          };
      }
    }, {
      items: [],
      searchElement: null
    });
  }, [children, enableVirtualization, menuItemClassName, handleArrowDown, handleArrowUp, onSelect]);
  if (enableVirtualization) {
    return /* @__PURE__ */ jsxRuntime.jsx(MenuBase, {
      "data-test-id": testId,
      isVirtual: true,
      size,
      children: /* @__PURE__ */ jsxRuntime.jsx(ItemVirtualizer, {
        items: react.Children.toArray(reduceItems.items),
        searchElement: reduceItems.searchElement,
        overscan,
        menuItemClassName,
        onSelect,
        itemHeight,
        focusManager
      })
    });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(MenuBase, {
    "data-test-id": testId,
    size,
    children: [reduceItems.searchElement, /* @__PURE__ */ jsxRuntime.jsx(MenuItemList, {
      role: "presentation",
      children: reduceItems.items
    })]
  });
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
  const menuId = react.useRef(`menu-ctrl-${react.useId()}`);
  const focusedItemIndex = react.useRef(null);
  const parentRef = react.useRef(null);
  const searchRef = react.useRef();
  const [nextFocusValue, setNextFocusValue] = react.useState(null);
  const hasSearch = !!searchElement;
  const lastVirtualItemIndex = items ? items.length - 1 : 0;
  const rowVirtualizer = reactVirtual.useVirtual({
    size: items !== null ? items.length : 0,
    parentRef,
    estimateSize: react.useCallback(() => itemHeight, [itemHeight]),
    overscan
  });
  const focusSearchBar = react.useCallback(() => {
    var _a, _b;
    rowVirtualizer.scrollToIndex(0);
    (_b = (_a = searchRef.current) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
  }, [rowVirtualizer]);
  const focusMenuItem = react.useCallback((index) => {
    rowVirtualizer.scrollToIndex(index);
    setNextFocusValue(index);
  }, [rowVirtualizer]);
  const handleKeyboardFocusInteraction = react.useCallback((direction) => {
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
  }, [focusManager, focusMenuItem, focusSearchBar, hasSearch, lastVirtualItemIndex, rowVirtualizer]);
  const getItemProps = react.useCallback((itemElem, index) => {
    const childProps = itemElem.props;
    switch (itemElem.type) {
      case MenuItem:
      case MenuItemLink:
        return {
          className: classix.cx(childProps.className, menuItemClassName),
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
  }, [handleKeyboardFocusInteraction, menuItemClassName, onSelect]);
  react.useEffect(() => {
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
  const renderSearch = react.useMemo(() => searchElement ? react.cloneElement(searchElement, {
    onKeyDown: (e) => handleKeyboardFocusKeydown(e, {
      handleFocusBackward: () => focusMenuItem(lastVirtualItemIndex),
      handleFocusForward: () => focusMenuItem(0)
    }),
    ref: searchRef
  }) : null, [searchElement, lastVirtualItemIndex, focusMenuItem]);
  const renderItems = react.useMemo(() => rowVirtualizer.virtualItems.map((virtualRow) => {
    if (!items) {
      return null;
    }
    const elem = items[virtualRow.index];
    return /* @__PURE__ */ jsxRuntime.jsx("div", {
      ref: elem.type !== MenuItem || elem.type !== MenuItemLink ? virtualRow.measureRef : void 0,
      role: "presentation",
      className: classix.cx("VirtualMenu-item"),
      style: {
        transform: `translateY(${virtualRow.start}px)`
      },
      children: react.cloneElement(elem, getItemProps(elem, virtualRow.index))
    }, virtualRow.index);
  }), [rowVirtualizer.virtualItems, items, getItemProps]);
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [renderSearch, /* @__PURE__ */ jsxRuntime.jsx(MenuItemList, {
      ref: parentRef,
      role: "presentation",
      children: /* @__PURE__ */ jsxRuntime.jsx("div", {
        role: "presentation",
        className: "VirtualMenu-item-list",
        style: {
          height: `${rowVirtualizer.totalSize}px`
        },
        children: renderItems
      })
    })]
  });
};
exports.Menu = Menu;
exports.MenuBase = MenuBase;
exports.MenuDivider = MenuDivider;
exports.MenuItem = MenuItem;
exports.MenuItemLink = MenuItemLink;
exports.MenuItemList = MenuItemList;
exports.MenuSearch = MenuSearch;
//# sourceMappingURL=index.js.map
